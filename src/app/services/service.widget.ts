import {errorCallback} from './service.errorcallback';

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
}
