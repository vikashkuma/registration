import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

const defaultTitle = 'Appiness';

class RouteWithTitle extends React.Component {
  componentDidMount() {
    this.setTitle();
  }

  componentDidUpdate(prevProps) {
    const { title, displayId } = this.props;
    if (title !== prevProps.title || displayId !== prevProps.displayId) {
      this.setTitle();
    }
  }

  setTitle() {
    const { title, name, displayId } = this.props;
    let documentTitle = title || defaultTitle;
    if (name === 'report') {
      documentTitle = documentTitle.replace('{reportId}', displayId);
    }
    document.title = documentTitle;
  }

  render() {
    return (
      <Route {...this.props} />
    );
  }
}

function mapStateToProps({ reportDetail = {} }, props) {
  const reportId = props.computedMatch.params.id;
  const { displayId = '' } = reportDetail[reportId] || {};
  return { displayId, ...props };
}

export default connect(mapStateToProps)(RouteWithTitle);
