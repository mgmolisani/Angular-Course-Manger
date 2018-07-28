import {Component, OnInit} from '@angular/core';
import {CourseService} from '../services/service.course';
import {Course} from '../models/model.course';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {
  courses: Course[] = [];

  constructor(private service: CourseService) {
  }

  ngOnInit() {
    this.service.findAllCourses(courses => this.courses = courses);
  }

}
