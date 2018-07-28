import {errorCallback} from './service.errorcallback';

export class CourseService {
  private static COURSE_API_URL = 'https://mmolisani-course-manager.herokuapp.com/api/course';

  public findAllCourses(callback) {
    return fetch(CourseService.COURSE_API_URL)
      .then(function (response) {
        const responseJson = response.json();
        if (response.ok) {
          return responseJson.then(callback);
        }
        return responseJson.then(errorCallback);
      });
  }

  findCourseById(courseID, callback) {
    return fetch(CourseService.COURSE_API_URL + '/' + courseID)
      .then(function (response) {
        const responseJson = response.json();
        if (response.ok) {
          return responseJson.then(callback);
        }
        return responseJson.then(errorCallback);
      });
  }
}
