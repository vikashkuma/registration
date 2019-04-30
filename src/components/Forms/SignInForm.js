import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import validationHelper from 'src/utils/validationHelper';
import commonField from './CommonField';
class SignInForm extends Component {
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="username" type="email" component={commonField.renderField} label="USERNAME" />
        <Field
          name="password"
          type="password"
          component={commonField.renderField}
          label="PASSWORD"
        />
        <div className="d-flex justify-content-center py-3">
          <button type="submit" className="btn btn-bg-color w-100 border-0" disabled={submitting}>LOGIN</button>
        </div>
        <div className="remember">Remember Me</div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  validate: validationHelper.signInValidate,
  warn: validationHelper.warn
})(SignInForm);
