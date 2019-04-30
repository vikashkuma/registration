import { connect } from 'react-redux';
import SignInPage from './SignInPage';

const mapStateToProps = state => {
  return state.auth;
};

export default connect(
  mapStateToProps
)(SignInPage);
