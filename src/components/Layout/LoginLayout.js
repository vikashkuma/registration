import React from 'react';
import LoginHeader from 'src/components/Layout/Header/LoginHeader';
import LoginFooter from 'src/components/Layout/Footer/LoginFooter';
const LoginLayout = props => (
  <main className="page-content" aria-label="Content">
    <div className="wrapper">
      <div className="landing-bg h-100vh">
        <LoginHeader />
        {props.children}
        <LoginFooter />
      </div>
    </div>
  </main>
);
export default LoginLayout;
