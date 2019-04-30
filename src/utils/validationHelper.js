import commonValidation from './commonValidation';

const signInValidate = values => {
  const errors = {};
  errors.email = commonValidation.emailValidation(values.email);
  errors.password = commonValidation.requiredValidation(values.password);
  return errors;
};

const warn = () => {
  const warnings = {};
  return warnings;
};

export default {
  signInValidate,
  warn
};
