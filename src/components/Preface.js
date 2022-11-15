import React from 'react';
import data from '../back/data';
import '../styles/Preface.css';
function Preface(props) {
  return data.map((apartment) =>
    apartment.id === props.paramsId ? (
      <section className="preface" key={apartment.id}>
        <section className="header-and-tags">
          <div className="title">
            <h1>{apartment.title}</h1>
            <p>{apartment.location}</p>
          </div>
          <div className="tags">
            {apartment.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        </section>

        <section className="host-and-rating">
          <div className="host">
            <p>{apartment.host.name}</p>
            <img
              src={apartment.host.picture}
              alt={'photo de profile de ' + apartment.host.name}
            ></img>
          </div>

          {displayRating(apartment.rating)}
        </section>
      </section>
    ) : (
      ''
    )
  );
}
function displayRating(ratingData) {
  console.log(ratingData);
  let ratingStars = '';
  const filledStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"
        fill="#ff6060"
      />
    </svg>
  );
  const emptyStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"
        fill="#e6e6e6"
      />
    </svg>
  );

  if (Number(ratingData) === 5) {
    ratingStars = (
      <React.Fragment>
        {filledStar}
        {filledStar}
        {filledStar}
        {filledStar}
        {filledStar}
      </React.Fragment>
    );
  }
  if (Number(ratingData) === 4) {
    ratingStars = (
      <React.Fragment>
        {filledStar}
        {filledStar}
        {filledStar}
        {filledStar}
        {emptyStar}
      </React.Fragment>
    );
  }
  if (Number(ratingData) === 3) {
    ratingStars = (
      <React.Fragment>
        {filledStar}
        {filledStar}
        {filledStar}
        {emptyStar}
        {emptyStar}
      </React.Fragment>
    );
  }
  if (Number(ratingData) === 2) {
    ratingStars = (
      <React.Fragment>
        {filledStar}
        {filledStar}
        {emptyStar}
        {emptyStar}
        {emptyStar}
      </React.Fragment>
    );
  }
  if (Number(ratingData) === 1) {
    ratingStars = (
      <React.Fragment>
        {filledStar}
        {emptyStar}
        {emptyStar}
        {emptyStar}
        {emptyStar}
      </React.Fragment>
    );
  }
  return <div className="rating">{ratingStars}</div>;
}
export default Preface;
