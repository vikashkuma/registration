import { connect } from 'react-redux';
import Header from './Header';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  const { auth = {}, account = {}, homePage = {} } = state;
  const { user } = auth;
  const { notifyDetails } = homePage;
  const { organizations = [] } = account;
  const headerState = { user, organizations, notifyDetails };
  return headerState;
};

export default withRouter(connect(
  mapStateToProps
)(Header));
