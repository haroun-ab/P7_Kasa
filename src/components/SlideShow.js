import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/SlideShow.css';
import data from '../back/data';

function Carousel(props) {
  let index = props.translateValue;

  // gauche
  function slideLeft() {
    const slideArray = document.querySelectorAll(
      '.slideshow-container .images-list img'
    );
    console.log(slideArray.length);

    if (index <= 0) {
      let translateValue = index + 100;
      carouselMove(slideArray, translateValue);
      index = translateValue;
    }
    if (index > 0) {
      for (let i = 0; i < slideArray.length; i++) {
        slideArray[i].style.transform = `translateX(${(slideArray.length - 1) *
          -100}%)`;
      }
      index = (slideArray.length - 1) * -100;
    }
  }

  // droite
  function slideRight() {
    const slideArray = document.querySelectorAll('.slideshow-container img');

    if (index > slideArray.length * -100) {
      let translateValue = index - 100;
      carouselMove(slideArray, translateValue);
      index = translateValue;
    }
    if (index <= slideArray.length * -100) {
      for (let i = 0; i < slideArray.length; i++) {
        slideArray[i].style.transform = `translateX(0%)`;
      }
      index = 0;
    }
  }

  return (
    <React.Fragment>
      {data.map((apartment) => (
        <React.Fragment key={apartment.id}>
          {apartment.id === props.paramsId ? (
            <div className="slideshow-container">
              <svg
                className="left-arrow"
                style={
                  apartment.pictures.length !== 1
                    ? { opacity: '100%' }
                    : { opacity: '0', cursor: 'default' }
                }
                onClick={slideLeft}
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1280 1024"
              >
                <g transform="rotate(-90 512 512)">
                  <path
                    fill="white"
                    d="M1011 928q0 13-10 23l-50 50q-10 10-23 10t-23-10L512 608l-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"
                  />
                </g>
              </svg>

              <svg
                className="right-arrow"
                style={
                  apartment.pictures.length > 2
                    ? { opacity: '100%' }
                    : { opacity: '0', cursor: 'default' }
                }
                onClick={slideRight}
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1280 1024"
              >
                <g transform="rotate(90 640 640)">
                  <path
                    fill="white"
                    d="M1011 928q0 13-10 23l-50 50q-10 10-23 10t-23-10L512 608l-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"
                  />
                </g>
              </svg>
              <div className="images-list">
                {apartment.pictures.map((picture) => {
                  const imgName = picture.split('kasa-project/')[1];

                  return (
                    <img
                      src={picture}
                      alt="Diapositive de appartement"
                      key={imgName}
                    ></img>
                  );
                })}
              </div>
            </div>
          ) : (
            ''
          )}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

function carouselMove(slideArray, translateValue) {
  for (let i = 0; i < slideArray.length; i++) {
    slideArray[i].style.transform = `translateX(${translateValue}%)`;
  }
}

export default Carousel;
