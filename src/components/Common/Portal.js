import React from 'react';
import { createPortal } from 'react-dom';

export default class Portal extends React.Component {
  constructor(...args) {
    super(...args);
    const { className } = this.props;
    this.el = document.createElement('div');
    if (className) {
      this.el.setAttribute('class', className);
    }
  }

  componentDidMount() {
    this.getRoot().appendChild(this.el);
  }

  componentWillUnmount() {
    this.getRoot().removeChild(this.el);
  }

  getRoot() {
    if (this.props.getRoot) {
      return this.props.getRoot();
    }
    return document.body;
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}
