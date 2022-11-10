import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import ErrorCode from '../components/Error';

function ErrorPage() {
  return (
    <React.Fragment>
      <div className="center-content">
        <Banner />
        <ErrorCode />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default ErrorPage;
