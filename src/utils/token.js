import type { UUIDType } from 'src/types';

const TOKEN_NAME = 'jwtToken';

export function getToken() {
  return localStorage.getItem(TOKEN_NAME);
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_NAME, 'Bearer ' + token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_NAME);
}

export function getUUID(params: UUIDType) {
  return JSON.stringify(params);
}

export function storeDeviceId(deviceId: string) {
  localStorage.setItem('deviceId', deviceId);
}

export function setCurrentOrganization(organizationId: string) {
  localStorage.setItem('currentOrganizaton', organizationId);
}

export function getCurrentOrganization() {
  return localStorage.getItem('currentOrganizaton');
}
