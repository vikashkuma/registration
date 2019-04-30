import React from 'react';
import {  withRouter } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="hide-when-print">
      </header>
    );
  }
}

export default withRouter(Header);
