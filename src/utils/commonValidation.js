const emailValidation = email => {
  let eMessage = '';
  if (!email) {
    eMessage = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    eMessage = 'Invalid email address';
  }
  return eMessage;
};
const pwdValidation = password => {
  let eMessage = '';
  if (!password) {
    eMessage = 'Required';
  } else if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
    eMessage = 'Password rule did not match.';
  }
  return eMessage;
};
const cpwdValidation = (newPassword, cfPassword) => {
  let eMessage = '';
  if (!cfPassword) {
    eMessage = 'Required';
  } else if (newPassword && cfPassword && (cfPassword !== newPassword)) {
    eMessage = 'Must be same password';
  }
  return eMessage;
};
const requiredValidation = value => {
  return value ? '' : 'Required';
};

export default {
  emailValidation,
  pwdValidation,
  cpwdValidation,
  requiredValidation
};
