import { AuthProvider } from 'ra-core';

const authProvider: AuthProvider = {
  // called when the user attempts to log in
  login: ({ username }: { username: string }) => {
    localStorage.setItem('username', username);
    // accept all username/password combinations
    return Promise.resolve('ok');
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('username');
    return Promise.resolve('/login');
  },
  // called when the API returns an error
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject(new Error('You do not have access to this resource'));
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('username') ? Promise.resolve() : Promise.reject(new Error('not authenticated'));
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve('You can read and write'),
};

export default authProvider;
