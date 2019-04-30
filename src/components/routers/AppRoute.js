import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { saveHistory } from 'src/utils/route';
import { restoreSession } from 'src/store/actions/auth-actions';
import NotFound from 'src/components/Common/NotFound';
import RouteWithTitle from './RouteWithTitle';

class AppRoute extends React.Component {
  componentDidMount() {
    restoreSession();
  }

  render() {
    const { auth, authRequired, history, component: Component, layout: Layout, ...rest } = this.props;
    const hasSession = !_.isEmpty(auth.user);
    const { notFoundError = false } = auth;
    const redirect = auth.sessionRestored && authRequired && !hasSession;

    saveHistory(history);

    return (
      <RouteWithTitle
        {...rest}
        render={props => {
          return redirect ? (
            <Redirect to="/sign-in" />
          ) : (
            <Layout {...props}>
              {notFoundError ? (
                <NotFound {...props} />
              ) : (
                <Component {...props} />
              )}
            </Layout>
          );
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default withRouter(connect(mapStateToProps)(AppRoute));
