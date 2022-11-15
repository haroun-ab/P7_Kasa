import React from 'react';
import '../styles/Error.css';
import { Link } from 'react-router-dom';

function ErrorCode() {
  return (
    <main className="error-page">
      <h1>404</h1>
      <p>
        Oups!&#160;La&#160;page&#160;que
        vous&#160;demandez&#160;n'existe&#160;pas.
      </p>
      <Link to={'/'}>Retourner sur la page d'accueil</Link>
    </main>
  );
}

export default ErrorCode;
