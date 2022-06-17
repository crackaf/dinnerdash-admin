import axios from 'axios';
import { SIGNIN_API } from 'apis';
import { AuthProvider } from 'ra-core';

const authProvider: AuthProvider = {
  // called when the user attempts to log in
  login: async ({ username, password }: { username: string; password: string }) => {
    // sending request to the sigin api
    const request = {
      url: SIGNIN_API,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        username,
        password,
      }),
    };
    try {
      const response = await axios.request(request);
      if (response.status === 200) {
        // add return data to the local storage
        const jsondata = response.data;
        for (const key in jsondata) {
          if (Object.prototype.hasOwnProperty.call(jsondata, key)) {
            localStorage.setItem(key, JSON.stringify(jsondata[key]));
          }
        }
        localStorage.setItem('token', JSON.stringify(jsondata['accessToken']));
        return Promise.resolve('ok');
      }
    } catch (error: any) {
      console.error('FailedAuth', error);
      return Promise.reject(new Error(error));
    }
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.clear();
    return Promise.resolve('/login');
  },
  // called when the API returns an error
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.clear();
      return Promise.reject(new Error('You do not have access to this resource'));
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('accessToken') ? Promise.resolve() : Promise.reject(new Error('not authenticated'));
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => {
    const role = localStorage.getItem('permissions');
    return role ? Promise.resolve(role) : Promise.resolve('guest'); // default 'guest'
  },
};

export default authProvider;
