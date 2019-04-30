import jwt from 'jsonwebtoken';
import React from 'react';
import _ from 'lodash';
import { getKeepAlive } from 'src/services/user';
import BaseModal from 'src/components/Common/BaseModal';
import FontAwesome from '@fortawesome/react-fontawesome';
import { faAlarmClock } from '@fortawesome/fontawesome-pro-light';
import { logout } from 'src/store/actions/auth-actions';
import { getToken } from './token';

export function getTokenJson() {
  const jwtToken = getToken();
  if (jwtToken) {
    const credentials = jwt.decode(jwtToken.replace(/^Bearer\s+/, ''));
    if (credentials) {
      return credentials;
    }
  }
  return null;
}

function proxyKeepAlive() {
  getKeepAlive();
}

let timeoutId;

function doTokenExpire() {
  const message = `You have been logged out due to inactivity for the last 15 minutes.
If you wish to continue, please log back in.`;

  BaseModal.info({
    className: 'modal-logout',
    title: <FontAwesome className="clock" icon={faAlarmClock} />,
    content: (<h4>{message}</h4>)
  });
  logout();
}

function checkTokenValidity() {
  const token = getTokenJson();
  if (!token) {
    return;
  }
  const tokenExpiryTime = new Date(token.exp * 1000) - new Date();
  clearTimeout(timeoutId);
  if (tokenExpiryTime <= 0) {
    doTokenExpire();
    return;
  }
  timeoutId = setTimeout(checkTokenValidity, tokenExpiryTime);
}

const sendInterval = 30 * 1000;

export const keepAlive = {
  doKeepAlive: _.throttle(proxyKeepAlive, sendInterval),
  startKeepAlive() {
    this.keepAliveInterval = setInterval(proxyKeepAlive, sendInterval);
  },
  cancelKeepAlive() {
    clearInterval(this.keepAliveInterval);
  },
  start() {
    this.stop();
    checkTokenValidity();
    document.body.addEventListener('mousemove', this.doKeepAlive);
  },
  stop() {
    this.doKeepAlive.cancel();
    clearTimeout(timeoutId);
    document.body.removeEventListener('mousemove', this.doKeepAlive);
  }
};
