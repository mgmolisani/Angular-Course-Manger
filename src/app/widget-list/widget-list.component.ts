import { Component, OnInit } from '@angular/core';
import {Module} from '../models/model.module';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../services/service.module';
import {Widget} from '../models/model.widget';
import {WidgetService} from '../services/service.widget';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  loaded = false;
  lessonId: number;
  widgets: Widget[] = [];

  constructor(private service: WidgetService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.lessonId = params['lessonId'];
    this.loadWidgets(this.lessonId);
  }

  loadWidgets(lessonId) {
    this.service.findWidgetsForLesson(lessonId,
      widgets => {
        this.widgets = widgets;
        this.loaded = true;
      });
  }

  ngOnInit() {
  }

}
