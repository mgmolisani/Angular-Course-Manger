import {errorCallback} from './service.errorcallback';
import {Section} from '../models/model.section';

export class SectionService {
  private static SECTION_BY_COURSE_API_URL = 'https://mmolisani-node-course-manager.herokuapp.com/api/course/CID/section';
  private static SECTION_API_URL = 'https://mmolisani-node-course-manager.herokuapp.com/api/section';
  private static ENROLL_API_URL = 'https://mmolisani-node-course-manager.herokuapp.com/api/section/SID/enroll';

  createSection(section: Section, callback) {
    return fetch(SectionService.SECTION_BY_COURSE_API_URL
      .replace('CID', section.courseId.toString()), {
      method: 'POST',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      const responseJson = response.json();
      if (response.ok) {
        return responseJson.then(callback);
      }
      return responseJson.then(errorCallback);
    });
  }

  findSectionsForCourse(courseId, callback) {
    return fetch(SectionService.SECTION_BY_COURSE_API_URL
      .replace('CID', courseId), {
      credentials: 'include'
    })
      .then(function (response) {
        const responseJson = response.json();
        if (response.ok) {
          return responseJson.then(callback);
        }
        return responseJson.then(errorCallback);
      });
  }

  findSectionById(sectionId, callback) {
    return fetch(SectionService.SECTION_API_URL + '/' + sectionId, {
      credentials: 'include'
    }).then(function (response) {
      const responseJson = response.json();
      if (response.ok) {
        return responseJson.then(callback);
      }
      return responseJson.then(errorCallback);
    });
  }

  updateSection(sectionId, section: Section, callback) {
    return fetch(SectionService.SECTION_API_URL + '/' + sectionId, {
      method: 'PUT',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      const responseJson = response.json();
      if (response.ok) {
        return responseJson.then(callback);
      }
      return responseJson.then(errorCallback);
    });
  }

  deleteSection(sectionId, callback) {
    return fetch(SectionService.SECTION_API_URL + '/' + sectionId, {
      method: 'DELETE',
      credentials: 'include'
    }).then(function (response) {
      const responseJson = response.json();
      if (response.ok) {
        return responseJson.then(callback);
      }
      return responseJson.then(errorCallback);
    });
  }

  createEnrollment(sectionId, callback) {
    return fetch(SectionService.ENROLL_API_URL
      .replace('SID', sectionId), {
      method: 'POST',
      credentials: 'include'
    }).then(function (response) {
      const responseJson = response.json();
      if (response.ok) {
        return responseJson.then(callback);
      }
      return responseJson.then(errorCallback);
    });
  }

  deleteEnrollment(sectionId, callback) {
    return fetch(SectionService.ENROLL_API_URL
      .replace('SID', sectionId), {
      method: 'DELETE',
      credentials: 'include'
    }).then(function (response) {
      const responseJson = response.json();
      if (response.ok) {
        return responseJson.then(callback);
      }
      return responseJson.then(errorCallback);
    });
  }

  findSectionsForStudent(callback) {
    return fetch(SectionService.SECTION_API_URL, {
      credentials: 'include'
    }).then(function (response) {
      const responseJson = response.json();
      if (response.ok) {
        return responseJson.then(callback);
      }
      return responseJson.then(errorCallback);
    });
  }
}
