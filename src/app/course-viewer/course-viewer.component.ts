import { Component, OnInit } from '@angular/core';
import {Course} from '../models/model.course';
import {CourseService} from '../services/service.course';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {
  course: Course = new Course();

  constructor(private service: CourseService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.loadCourse(params['courseId']));
  }

  loadCourse(courseId) {
    this.service.findCourseById(courseId, course => this.course = course);
  }

  ngOnInit() {
  }

}
