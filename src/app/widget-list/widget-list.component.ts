import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
    if (this.lessonId) {
      this.loadWidgets(this.lessonId);
    } else {
      this.loaded = true;
    }
  }

  loadWidgets(lessonId) {
    this.service.findWidgetsForLesson(lessonId,
      widgets => {
        widgets.sort((a, b) => {
          return a.position - b.position;
        });
        this.widgets = widgets;
        this.loaded = true;
      });
  }

  ngOnInit() {
  }

}
