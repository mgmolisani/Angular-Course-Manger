import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../models/model.widget';

@Component({
  selector: 'app-heading-widget',
  templateUrl: './heading-widget.component.html',
  styleUrls: ['./heading-widget.component.css']
})
export class HeadingWidgetComponent implements OnInit {
  @Input() widget: Widget = new Widget;

  constructor() { }

  ngOnInit() {
  }

}
