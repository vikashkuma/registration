import axios from 'axios';
import { API_BASE_URL, API_VERSION } from 'src/config';
import { getToken, setToken, setCurrentOrganization } from 'src/utils/token';
import { logout, updateNotFound } from 'src/store/actions/auth-actions';
import { showMessage } from 'src/utils/toastrHelper';

// Proxy default "send" method to add "withCredentials" to all requests
let loggedOut = false;
const originalXHRSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function(...args) {
  this.withCredentials = true;
  return originalXHRSend.apply(this, args);
};

const http = axios.create({
  baseURL: API_BASE_URL + API_VERSION,
  responseType: 'json',
  withCredentials: true
});

http.interceptors.request.use(
  config => {
    config.headers['X-Request-By'] = 'axios';
    const url = config.url;
    if (/\/(auth)$/.test(url)) {
      delete config.headers.Authorization;
    }
    else {
      const jwtToken = getToken();
      if (jwtToken) {
        config.headers.Authorization = jwtToken;
      }
      if (url.indexOf('/content/full-text') > -1) {
        config.responseType = 'text/html';
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => {
    const url = response.config.url;
    if (/\/(users|auth|select|auth-mfa)$/.test(url)) {
      const data = response.data;
      if (data.token) {
        setToken(data.token);
        loggedOut = false;
      }
    } else if (response.headers['refresh-token']) {
      setToken(response.headers['refresh-token']);
      const data = response.data;
      data.organization && setCurrentOrganization(data.organization.id);
    }
    return response;
  },
  error => {
    if (error.response && error.response.data && error.response.status !== 401) {
      if (error.config.errorMessage) {
        error.message = error.config.errorMessage;
      } else {
        error.message = error.response.data.message || error.message;
      }
      showMessage(error.message, 'error');
    }
    if (error.response && error.response.status === 401) {
      if (!loggedOut) {
        logout();
        loggedOut = true;
      }
      if (/\/(auth)$/.test(error.response.config.url)) {
        error.message = error.response.data.message || error.message;
        showMessage(error.message, 'error');
      }
    }
    if (error.response && error.response.status === 404) {
      updateNotFound(true);
    }
    return Promise.reject(error);
  }
);

export default http;
