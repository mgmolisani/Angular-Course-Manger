import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../models/model.widget';

@Component({
  selector: 'app-list-widget',
  templateUrl: './list-widget.component.html',
  styleUrls: ['./list-widget.component.css']
})
export class ListWidgetComponent implements OnInit {
  @Input() widget: Widget = new Widget;

  constructor() { }

  ngOnInit() {
  }

}
