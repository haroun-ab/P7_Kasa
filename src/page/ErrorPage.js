import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <React.Fragment>
      <div className="center-content">
        <Banner />
        <main className="error-page">
          <h1>404</h1>
          <p>
            Oups!&#160;La&#160;page&#160;que
            vous&#160;demandez&#160;n'existe&#160;pas.
          </p>
          <Link to={'/'}>Retourner sur la page d'accueil</Link>
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default ErrorPage;
