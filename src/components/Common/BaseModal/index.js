import BaseModal from './BaseModal';
import { ModalFuncProps } from 'src/types';
import confirm from './confirm';
const DELAY = 2000;

BaseModal.info = function(props: ModalFuncProps) {
  const config = {
    type: 'info',
    okCancel: false,
    ...props,
  };
  return confirm(config);
};

BaseModal.success = function(props: ModalFuncProps | string) {
  const config = {
    type: 'success',
    okCancel: false,
    content: props,
    delay: DELAY,
    ...props
  };
  return confirm(config);
};

BaseModal.error = function(props: ModalFuncProps | string) {
  const config = {
    type: 'error',
    okCancel: false,
    content: props,
    delay: DELAY,
    ...props
  };
  return confirm(config);
};

BaseModal.warning = function(props: ModalFuncProps) {
  const config = {
    type: 'warning',
    okCancel: false,
    ...props,
  };
  return confirm(config);
};

BaseModal.confirm = function(props: ModalFuncProps) {
  const config = {
    type: 'confirm',
    okCancel: true,
    ...props,
  };
  return confirm(config);
};

export default BaseModal;
