import React from 'react';
import '../styles/Error.css';
import { Link } from 'react-router-dom';

function ErrorCode() {
  return (
    <main className="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to={'/'}>Retourner sur la page d'accueil</Link>
    </main>
  );
}

export default ErrorCode;
