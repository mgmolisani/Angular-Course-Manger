import {Component, OnInit} from '@angular/core';
import {SectionService} from '../services/service.section';
import {ActivatedRoute, Router} from '@angular/router';
import {Section} from '../models/model.section';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {
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

  enroll(section) {
    this.service
      .createEnrollment(section._id, () => {
        this.router.navigate(['profile']);
      });
  }

  ngOnInit() {
  }

}
