import React, { Component } from 'react';
import styles from './NotFound.module.scss';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import FontAwesome from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-pro-light/faUser';
import faInfoCircle from '@fortawesome/fontawesome-pro-light/faInfoCircle';
import faListAlt from '@fortawesome/fontawesome-pro-light/faListAlt';
import faThLarge from '@fortawesome/fontawesome-pro-light/faThLarge';
import { updateNotFound } from 'src/store/actions/auth-actions';

class NotFound extends Component {
  componentWillUnmount() {
    updateNotFound(false);
  }

  render() {
    return (
      <div className={styles['not-found-container']}>
        <p className="not-found-text-large">
          Oh no! We can&apos;t seem to analyze this page.
        </p>
        <p className="not-found-text-small">
          ERROR 404 <br />
          THIS PAGE DOES NOT EXIST
        </p>
        <div className="not-found-menu">
          Here are some helpful links:
          <ul>
            <li>
              <NavLink to="/dashboard">
                <FontAwesome icon={faThLarge} />Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/reports">
                <FontAwesome icon={faListAlt} />Report List
              </NavLink>
            </li>
            <li>
              <NavLink to="/account">
                <FontAwesome icon={faUser} />Account
              </NavLink>
            </li>
            <li>
              <Nav.Link href="https://help.dev.accureanalytics.com/">
                <FontAwesome icon={faInfoCircle} />Help
              </Nav.Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NotFound;
