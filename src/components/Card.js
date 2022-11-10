import React from 'react';
import '../styles/Card.css';
import data from '../back/data';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <section className="appartment-list">
      {data.map((apartment) => (
        <article className="appartment-card" key={`${apartment.id}`}>
          <Link to={`/article?id=${apartment.id}`}>
            <div className="card-shadow"></div>
            <h2>{apartment.title}</h2>
            <img src={apartment.cover} alt={apartment.title} />
          </Link>
        </article>
      ))}
    </section>
  );
}

export default Card;
