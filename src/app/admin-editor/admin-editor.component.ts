import { Component, OnInit } from '@angular/core';
import {Section} from '../models/model.section';
import {SectionService} from '../services/service.section';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-editor',
  templateUrl: './admin-editor.component.html',
  styleUrls: ['./admin-editor.component.css']
})
export class AdminEditorComponent implements OnInit {
  sectionName = '';
  seats = '';
  courseId = '';
  sections: Section[] = [];

  constructor(private service: SectionService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.courseId = params['courseId'];
    this.loadSections(this.courseId);
  }

  loadSections(courseId) {
    this.courseId = courseId;
    this.service
      .findSectionsForCourse(courseId, sections => this.sections = sections);
  }

  createSection() {
    const section = {
      name: this.sectionName,
      seats: parseInt(this.seats, 10),
      courseId: parseInt(this.courseId, 10)
    };
    this.service
      .createSection(section, () => {
        this.loadSections(this.courseId);
      });
  }

  ngOnInit() {
  }

}
