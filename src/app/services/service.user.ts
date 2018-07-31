import {errorCallback} from './service.errorcallback';
import {User} from '../models/model.user';
import {repeatWhen} from 'rxjs/operators';

export class UserService {
  private static REGISTER_API_URL = 'https://mmolisani-node-course-manager.herokuapp.com/api/register';
  private static LOGIN_API_URL = 'https://mmolisani-node-course-manager.herokuapp.com/api/login';
  private static LOGOUT_API_URL = 'https://mmolisani-node-course-manager.herokuapp.com/api/logout';
  private static PROFILE_API_URL = 'https://mmolisani-node-course-manager.herokuapp.com/api/profile';


  register(user: User, callback) {
    return fetch(UserService.REGISTER_API_URL, {
      method: 'POST',
      body: JSON.stringify(user),
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

  login(credentials, callback) {
    return fetch(UserService.LOGIN_API_URL, {
      method: 'POST',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(function (response) {
        const responseJson = response.json();
        if (response.ok) {
          return responseJson.then(callback);
        }
        return responseJson.then(errorCallback);
      });
  }

  logout(callback) {
    return fetch(UserService.LOGOUT_API_URL, {
      method: 'POST',
      credentials: 'include'
    }).then(callback);
  }

  getProfile(callback) {
    return fetch(UserService.PROFILE_API_URL, {
      credentials: 'include'
    }).then(function (response) {
      const responseJson = response.json();
      if (response.ok) {
        return responseJson.then(callback);
      }
      return responseJson.then(errorCallback);
    });
  }

  updateUser(user: User, callback) {
    return fetch(UserService.PROFILE_API_URL, {
      method: 'PUT',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(function (response) {
        const responseJson = response.json();
        if (response.ok) {
          return responseJson.then(callback);
        }
        return responseJson.then(errorCallback);
      });
  }

  deleteUser(callback) {
    return fetch(UserService.PROFILE_API_URL, {
      method: 'DELETE'
    }).then(callback);
  }
}
