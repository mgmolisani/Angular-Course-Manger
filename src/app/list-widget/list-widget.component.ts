import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../models/model.widget';
import {ListType} from '../enumerations/enum.list-type';

@Component({
  selector: 'app-list-widget',
  templateUrl: './list-widget.component.html',
  styleUrls: ['./list-widget.component.css']
})
export class ListWidgetComponent implements OnInit {
  @Input() widget: Widget = new Widget;
  ListType = ListType;
  listItems: String[] = [];

  constructor() { }

  ngOnInit() {
    this.listItems = this.widget.text.split('\n');
  }

}
