import React from 'react';
import ReactDOM from 'react-dom';
import BaseModal from './BaseModal';
import { ModalFuncProps } from 'src/types';

const ConfirmModal = props => {
  const { close } = props;
  return (
    <BaseModal
      {...props}
      onCancel={close.bind(this)}
    />
  );
};

export default function confirm(config: ModalFuncProps) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  let currentConfig = { ...config, close, visible: true };
  function close(...args) {
    currentConfig = {
      ...currentConfig,
      visible: false,
      onExited: destroy.bind(this, ...args)
    };
    render(currentConfig);
  }
  function update(newConfig: ModalFuncProps) {
    currentConfig = {
      ...currentConfig,
      ...newConfig,
    };
    render(currentConfig);
  }
  function destroy() {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }
  function render(props) {
    ReactDOM.render(<ConfirmModal {...props} />, div);
  }
  render(currentConfig);
  return {
    destroy: close,
    update,
  };
}
