import React from 'react';

export default function Footer() {
  return (
    <footer className="footer footer-bg hide-when-print">
      <div className="container-fluid">
        <div className="row">

          <div className="col-sm-auto">
            <div className="footer-year">2019 &copy; <i className="far fa-copyright"></i>
              <div className="footer-brand"></div>
            </div>
          </div>
          <div className="col-sm-center">
            <div className="footer-link">
              <a href="https://help.dev.accureanalytics.com/">FAQ</a>
              <a href="https://help.dev.accureanalytics.com/">Privacy Policy</a>
              <a href="https://help.dev.accureanalytics.com/">Terms &amp; Conditions</a>
              <a href="https://help.dev.accureanalytics.com/">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
}
