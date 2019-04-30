import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignInForm from 'src/components/Forms/SignInForm';
import { showMessage } from 'src/utils/toastrHelper';
import { changePasswordDone, login, doSendAuthOTP, doCheckAuthMFA } from 'src/store/actions/auth-actions';
import { getTokenJson } from 'src/utils/user';
// import classnames from 'classnames';
import './signin-module.scss';

class SignInPage extends Component {
  state = {
    showMFASubmitForm: false,
    showMFAEmailForm: false,
    showLoginForm: true,
    checked: true,
    userEmail: '',
    userFirstName: ''
  }

  componentDidMount() {
    const { user } = this.props;
    if (user && user.email) {
      this.props.history.push('/dashboard');
    }
    if (this.props.isChangePwd) {
      showMessage('Alright! Password successfully updated.');
      changePasswordDone();
    }
  }

  onConfirmEmail = async () => {
    const resp = await doSendAuthOTP();
    if (resp === 204) {
      this.setState({
        showMFASubmitForm: true,
        showMFAEmailForm: false
      });
    }
  };

  onMFASubmit = async values => {
    const resp = await doCheckAuthMFA(values);
    if (resp && resp.payload && resp.payload.email) {
      this.props.history.push('/dashboard');
    } else {
      showMessage('Invalid One Time Password', 'error');
      this.setState({
        showMFASubmitForm: false,
        showLoginForm: true
      });
    }
  };

  submitLoginForm = async values => {
    const resp = await login(values);
    if (resp.payload && resp.type === 'LOGIN_SUCCESS') {
      this.props.history.push('/dashboard');
    }
  };

  render() {
    return (
      <div className='sign-in-main'>
        <div className="sign-in-wrap">
        <Row>
          <Col className="col-sm">
            <div className="card">
              <div className="card-body">
                <a className="text-center"></a> Appiness
                <h2 className="card-title pb-4">Login</h2>
                <SignInForm
                  onSubmit={this.submitLoginForm}
                />
              </div>
            </div>
            <div className="landing-forgot">
              <Link to="/forgot-pwd">Forgot password? </Link>
              Don&lsquo;t worry, we can help!
              </div>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}

export default SignInPage;
