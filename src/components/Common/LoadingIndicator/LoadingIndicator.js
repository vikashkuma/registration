import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const LoadingIndicator = props => (
  <Fragment>
    {props.busy && (
      <div
        style={{
          top: '50%',
          left: '50%',
          textAlign: 'center',
          color: 'dodgerblue',
          position: 'absolute',
          transform: 'translate(-50%, 0)'
        }}
      >
        <i className="fa fa-spinner fa-spin fa-4x fa-fw" />
      </div>
    )}
  </Fragment>
);

LoadingIndicator.propTypes = {
  busy: PropTypes.bool
};

export { LoadingIndicator };
