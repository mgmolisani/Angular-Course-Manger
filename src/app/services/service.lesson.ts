import {errorCallback} from './service.errorcallback';

export class LessonService {
  private static LESSON_API_URL = 'https://mmolisani-course-manager.herokuapp.com/api/course/CID/module/MID/lesson';

  findLessonsForModule(courseId, moduleId, callback) {
    return fetch(LessonService.LESSON_API_URL
      .replace('CID', courseId)
      .replace('MID', moduleId))
      .then(function (response) {
        const responseJson = response.json();
        if (response.ok) {
          return responseJson.then(callback);
        }
        return responseJson.then(errorCallback);
      });
  }
}
