import http from 'src/utils/http';

export function loadUserList() {
  return http.get('/userList');
}
