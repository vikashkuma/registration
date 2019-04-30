import React, { Component } from 'react';
import { Badge, Row, Col } from 'react-bootstrap';
import { fetchStatics } from 'src/store/actions/home-actions';

class Statics extends Component {
  componentDidMount() {
    fetchStatics();
  }

  render() {
    const statics = this.props.statics;
    return (
      <Row className="show-grid pb-4">

        <div className="col-sm-12">
          <div className="card bg-light text-dark">
            <div className="card-body">
              <div className="row">
                <Col sm={6} md={3} className="text-center border-right border-info header-respond">
                  <h2 className="card-title text-align">
                    <Badge>{statics.caseThisWeek}</Badge>
                  </h2>
                  <h6 className="mb-0">Cases this Week</h6>
                </Col>
                <Col sm={6} md={3} className="text-center border-right border-info header-respond">
                  <h2 className="card-title">
                    <Badge>{statics.newReports}</Badge>
                  </h2>
                  <h6 className="mb-0">New Reports</h6>
                </Col>
                <Col sm={6} md={3} className="text-center border-right border-info header-respond" >
                  <h2 className="card-title">
                    <Badge>{statics.pendingReports}</Badge>
                  </h2>
                  <h6 className="mb-0">Pending Reports</h6>
                </Col>
                <Col sm={6} md={3} className="text-center header-respond">
                  <h2 className="card-title ">
                    <Badge>{statics.newPatients}</Badge>
                  </h2>
                  <h6 className="mb-0">New Patients</h6>
                </Col>
              </div></div></div></div>
      </Row>
    );
  }
}

export default Statics;
