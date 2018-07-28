import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../models/model.widget';

@Component({
  selector: 'app-image-widget',
  templateUrl: './image-widget.component.html',
  styleUrls: ['./image-widget.component.css']
})
export class ImageWidgetComponent implements OnInit {
  @Input() widget: Widget = new Widget;
  adjustedStyles: object = {};

  constructor() { }

  ngOnInit() {
    this.adjustedStyles = {
      width: this.widget.width,
      height: this.widget.height,
      ...this.widget.style
    };
    console.log(this.adjustedStyles);
  }

}
