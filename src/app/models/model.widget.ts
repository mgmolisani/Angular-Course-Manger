import {ListType} from '../enumerations/enum.list-type';

export class Widget {
  id: number;
  name: string;
  text: string;
  position: number;
  widgetType: string;
  size: number;
  className: string[];
  style: object;
  link: string;
  image: string;
  width: string;
  height: string;
  listType: ListType;
}
