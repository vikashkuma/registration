import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FontAwesome from '@fortawesome/react-fontawesome';
import faInfoCircle from '@fortawesome/fontawesome-pro-light/faInfoCircle';
import styles from './ConfirmModal.module.scss';

export default class ConfirmModal extends React.Component {
  state = {
    visible: false
  };

  handleCancel = () => {
    const { onCancel } = this.props;
    onCancel();
  };

  handleYes = () => {
    const { onYes, value } = this.props;
    onYes(value);
  }


  render() {
    const { text } = this.props;
    return (
      <div className={styles.confirm}>
        <div className="content">
          <div className="notice">
            <FontAwesome icon={faInfoCircle} />
          </div>
          <div className="text">
            {text}
          </div>
        </div>
        <Row gutter={13} className="btns">
          <Col span={12} >
            <div className="btn btn-cancel" onClick={this.handleCancel}>Cancel</div>
          </Col>
          <Col span={12} >
            <div className="btn btn-yes" onClick={this.handleYes}>Yes</div>
          </Col>
        </Row>
      </div>
    );
  }
}
