import http from 'src/utils/http';

export function doLogin(payload) {
  return http.post('/auth', payload);
}
