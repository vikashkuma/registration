import React, { Fragment } from 'react';
import HeaderConatiner from 'src/components/Layout/Header/HeaderConatiner';
import Footer from 'src/components/Layout/Footer/Footer';

import { getReportDetailBasicAndPatient } from 'src/store/actions/mixin-actions';
class BgBlackLayout extends React.Component {
  componentDidMount() {
    const reportId = this.props.match.params.id;
    getReportDetailBasicAndPatient({ reportId });
  }

  render() {
    const { props } = this;
    return (
      <Fragment>
        <HeaderConatiner />
        <main className="page-content" aria-label="Content">
          <div className="bg-light-dark pb-4">
            {props.children}
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default BgBlackLayout;
