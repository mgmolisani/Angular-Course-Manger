import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../models/model.widget';

@Component({
  selector: 'app-link-widget',
  templateUrl: './link-widget.component.html',
  styleUrls: ['./link-widget.component.css']
})
export class LinkWidgetComponent implements OnInit {
  @Input() widget: Widget = new Widget;
  adjustedStyle: object = {};

  constructor() { }

  ngOnInit() {
    this.adjustedStyle = {
      textDecoration: 'none',
      ...this.widget.style
    };
  }

}
