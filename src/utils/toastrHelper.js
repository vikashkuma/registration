import React from 'react';
import { toastr } from 'react-redux-toastr';
import { Button } from 'react-bootstrap';


const toastrOptions = {
  position: 'top-center',
  timeOut: 0,
  removeOnHover: false,
  showCloseButton: false,
  component: (
    <Button className="notification-close-btn">
        OK
    </Button>
  ),
  closeOnToastrClick: true
};

export function showMessage(message, type = 'success') {
  toastr[type](message, toastrOptions);
}

export function showMessageWithPosition(message, position, type = 'success') {
  const newToastrOptions = { ...toastrOptions, position };
  toastr[type](message, newToastrOptions);
}

export function showMessageWithOptions(message, options, type = 'success') {
  toastr[type](message, options);
}
