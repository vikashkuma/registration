import React, { Fragment } from 'react';
import HeaderConatiner from 'src/components/Layout/Header/HeaderConatiner';
import Footer from 'src/components/Layout/Footer/Footer';

const MainLayout = props => (
  <Fragment>
    <HeaderConatiner />
    <main className="page-content" aria-label="Content">
      <div className="pt-4">
        {props.children}
      </div>
    </main>
    <Footer />
  </Fragment>
);
export default MainLayout;
