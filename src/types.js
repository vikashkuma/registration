import React from 'react';

export type ModalFuncProps = {
  visible?: boolean;
  className?: string;
  title?: React.ReactNode | string;
  content?: React.ReactNode;
  cancelText?: string;
  okText?: string;
  onOk?: Function;
  onCancel?: Function;
}

export type ModalFunc = (
  props: ModalFuncProps,
) => {
  destroy: () => void;
  update: (newConfig: ModalFuncProps) => void;
};
