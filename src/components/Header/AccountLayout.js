import React from 'react';
import classnames from 'classnames';
import styles from './accountLayout.module.scss';
import { Row, Col } from 'react-bootstrap';
import FontAwesome from '@fortawesome/react-fontawesome';
import { faHospital } from '@fortawesome/fontawesome-pro-solid';

export default class AccountLayout extends React.Component {
  render() {
    const { title, children, bodyClassName, header, showCurrentOrganization, currentOrganization = {} } = this.props;
    return (
      <div className={'container-fluid'}>
        <div className={classnames(styles['hpd-account-wrap'])}>
          <Row>
            <Col md={6}>
              {header || <h2 className={'smoke-color'}>{title}</h2>}
            </Col>
            <Col md={6}>
              {showCurrentOrganization && <Row>
                <Col sm={6} className="ml-auto">
                  <div className={classnames(styles['organization-name'])}>
                    <span className="semi-gray-color text-ellipsis pr-2 font-size-14">
                      <FontAwesome icon={faHospital} className="semi-gray-color mr-2" />
                      Curently Viewing:
                    </span>
                    <span className="pr-1 pointer">
                      {currentOrganization.name}
                    </span>
                  </div>
                </Col>
              </Row>}
            </Col>
          </Row>
          <div className={bodyClassName}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}
