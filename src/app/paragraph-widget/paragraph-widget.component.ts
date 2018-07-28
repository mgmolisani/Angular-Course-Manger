import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../models/model.widget';

@Component({
  selector: 'app-paragraph-widget',
  templateUrl: './paragraph-widget.component.html',
  styleUrls: ['./paragraph-widget.component.css']
})
export class ParagraphWidgetComponent implements OnInit {
  @Input() widget: Widget = new Widget;

  constructor() { }

  ngOnInit() {
  }

}
