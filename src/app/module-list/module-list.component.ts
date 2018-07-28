import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Module} from '../models/model.module';
import {ModuleService} from '../services/service.module';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  loaded = false;
  courseId: number;
  moduleId: number;
  modules: Module[] = [];

  constructor(private service: ModuleService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.loadModules(this.courseId);
  }

  loadModules(courseId) {
    this.service.findModulesForCourse(courseId,
      modules => {
        this.modules = modules;
        this.loaded = true;
      });
  }

  ngOnInit() {
  }

}
