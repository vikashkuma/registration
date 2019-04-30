import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import FontAwesome from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-pro-light';
import {
  NavDropdown,
} from 'react-bootstrap';

class SecondNav extends React.Component {
  moreClick = eventKey => {
    const { reportId } = this.props;
    switch (eventKey) {
      case 'dicom':
        this.props.history.push(`/reports/${reportId}/dicom-images`);
        break;
    }
  }

  render() {
    const { reportId } = this.props;
    return (
      <div className="hpd-second-nav hide-when-print">
        <div className="container-fluid">
          <nav className="nav nav-tabs d-flex flex-nowrap text-center">
            <NavLink
              to={`/reports/${reportId}/center-piece`}
              className="nav-link cp-nav"
              activeClassName="active cp-nav"
            >Centerpiece</NavLink>
            <NavLink
              to={`/reports/${reportId}/stenosis`}
              className="nav-link steno-nav"
              activeClassName="active steno-nav"
            >Stenosis</NavLink>
            <NavLink
              to={`/reports/${reportId}/atherosclerosis`}
              className="nav-link athero-nav"
              activeClassName="active athero-nav"
            >Atherosclerosis</NavLink>
            <NavLink
              to={`/reports/${reportId}/cad-rads`}
              className="nav-link cad-nav"
              activeClassName="active cad-nav"
            >CAD-RADS</NavLink>
            <NavLink
              to={`/reports/${reportId}/quantitative`}
              className="nav-link quanti-nav"
              activeClassName="active quanti-nav"
            >Quantitative
            </NavLink>
            <NavLink
              to={`/reports/${reportId}/full-text-report`}
              className="nav-link fullText-nav"
              activeClassName="active fullText-nav"
            >Full Text Report</NavLink>
            <NavDropdown title="More" className="nav-link" id="basic-nav-dropdown" onSelect={this.moreClick}>
              <NavDropdown.Item eventKey="dicom">
                <div className="d-flex justify-content-around">
                  <div>&nbsp;</div>
                  <div className="w-75 small">
                    DICOM Images
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey={3.2}>
                <div className="d-flex justify-content-around">
                  <FontAwesome icon={faEnvelope} size="1x" className="slate-grey-color" />
                  <div className="w-75 small">Share this report</div>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
          </nav>
        </div>
      </div>
    );
  }
}

export default withRouter(SecondNav);
