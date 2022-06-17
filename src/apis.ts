const SERVER_URL = process.env.REACT_APP_SERVER_URL ?? 'http://127.0.0.1:8080';
const SIGNUP_API = SERVER_URL + '/api/auth/restaurantSignup';
const SIGNIN_API = SERVER_URL + '/api/auth/signin';

export { SERVER_URL, SIGNUP_API, SIGNIN_API };
