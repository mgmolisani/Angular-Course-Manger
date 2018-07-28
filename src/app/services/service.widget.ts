import {errorCallback} from './service.errorcallback';
import {Widget} from '../models/model.widget';

export class WidgetService {
  private static WIDGET_API_URL = 'https://mmolisani-course-manager.herokuapp.com/api/lesson/LID/widget';

  findWidgetsForLesson(lessonId, callback) {
    return fetch(WidgetService.WIDGET_API_URL
      .replace('LID', lessonId))
      .then(function (response) {
        const responseJson = response.json();
        if (response.ok) {
          return responseJson.then(callback);
        }
        return responseJson.then(errorCallback);
      });
  }

/*  getStyles(widget: Widget) {
    return Object.entries(widget.style).join()
  }*/

}
