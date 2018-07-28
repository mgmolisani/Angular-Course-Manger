import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../models/model.widget';

@Component({
  selector: 'app-image-widget',
  templateUrl: './image-widget.component.html',
  styleUrls: ['./image-widget.component.css']
})
export class ImageWidgetComponent implements OnInit {
  @Input() widget: Widget = new Widget;

  constructor() { }

  ngOnInit() {
  }

}
