import React from 'react';
import { ModalFunc } from 'src/types';
import { Modal, Button } from 'react-bootstrap';
import classnames from 'classnames';
import FontAwesome from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-pro-regular';
import { faCheckCircle } from '@fortawesome/fontawesome-pro-light';
import styles from './BaseModal.module.scss';

export default class BaseModal extends React.Component {
  static info: ModalFunc;
  static success: ModalFunc;
  static error: ModalFunc;
  static warn: ModalFunc;
  static warning: ModalFunc;
  static confirm: ModalFunc;

  onHide = () => {
    return false;
  }

  render() {
    const {
      visible = true, className = 'base-modal', title = '',
      content, cancelText = 'Cancel', okText = 'OK', onOk,
      onCancel, okCancel, onExited, type, onHide, onClose, delay, close
    } = this.props;
    const hideHeader = type === 'success' || type === 'error';

    if (delay) {
      setTimeout(close, delay);
    }

    return (
      <Modal
        show={visible}
        className={classnames(styles['modal'], className, `modal-type-${type}`)}
        onExited={onExited}
        onHide={onHide || this.onHide}
      >
        {!hideHeader && <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          <div className="close" onClick={() => onClose && onClose()}><FontAwesome icon={faTimes} /></div>
        </Modal.Header>}
        <Modal.Body>
          {type === 'success' && <FontAwesome icon={faCheckCircle} />}
          {content}</Modal.Body>
        {okCancel && (
          <Modal.Footer>
            <Button variant="secondary" onClick={onCancel}>
              {cancelText}
            </Button>
            <Button variant={type} onClick={onOk}>
              {okText}
            </Button>
          </Modal.Footer>
        )}
        {type === 'info' && (
          <Modal.Footer>
            <Button variant="secondary" onClick={onCancel}>
              {okText}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    );
  }
}
