import {errorCallback} from './service.errorcallback';

export class ModuleService {
  private static MODULE_API_URL = 'https://mmolisani-course-manager.herokuapp.com/api/course/CID/module';

  findModulesForCourse(courseId, callback) {
    return fetch(ModuleService.MODULE_API_URL
      .replace('CID', courseId))
      .then(function (response) {
        const responseJson = response.json();
        if (response.ok) {
          return responseJson.then(callback);
        }
        return responseJson.then(errorCallback);
      });
  }
}
