import {Component, OnInit} from '@angular/core';
import {Lesson} from '../models/model.lesson';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../services/service.lesson';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  loaded = false;
  courseId: number;
  moduleId: number;
  lessonId: number;
  lessons: Lesson[] = [];

  constructor(private service: LessonService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    if (this.moduleId) {
      this.loadLessons(this.courseId, this.moduleId);
    } else {
      this.loaded = true;
    }
  }

  loadLessons(courseId, moduleId) {
    this.service.findLessonsForModule(courseId, moduleId,
      lessons => {
        this.lessons = lessons;
        this.loaded = true;
      });
  }

  ngOnInit() {
  }

}
