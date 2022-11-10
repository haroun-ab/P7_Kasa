import React from 'react';
import '../styles/SlideShow.css';
import data from '../back/data';

function Carousel(props) {
  let x = props.translateX;

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
                onClick={() => {
                  const slideArray = document.querySelectorAll(
                    '.slideshow-container img'
                  );
                  if (x < 0) {
                    let translateValue = x + 100;
                    carouselDisplay(slideArray, translateValue);
                    x = translateValue;
                  }

                  // Désactivation de la flèche gauche quand on arrive au premier slide
                  if (x === 0) {
                    document.querySelector('.left-arrow').style.opacity = '0%';
                    document.querySelector('.left-arrow').style.cursor =
                      'default';
                  }
                  // Réapparition de la flèche droite quand on reviens sur l'avant dernier slide
                  if (x > (slideArray.length - 1) * -100) {
                    document.querySelector('.right-arrow').style.opacity =
                      'initial';
                    document.querySelector('.right-arrow').style.cursor =
                      'pointer';
                  }
                }}
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
                onClick={() => {
                  const slideArray = document.querySelectorAll(
                    '.slideshow-container img'
                  );
                  console.log(slideArray.length);
                  if (x > (slideArray.length - 1) * -100) {
                    let translateValue = x - 100;
                    console.log(x);
                    carouselDisplay(slideArray, translateValue);
                    x = translateValue;
                  }
                  // Désactivation de la flèche droite quand on arrive au dernier slide
                  if (x === (slideArray.length - 1) * -100) {
                    document.querySelector('.right-arrow').style.opacity = '0';
                    document.querySelector('.right-arrow').style.cursor =
                      'default';
                  }
                  // Réapparition de la flèche gauche quand on reviens sur le 2e slide
                  if (x < 0) {
                    document.querySelector('.left-arrow').style.opacity =
                      'initial';
                    document.querySelector('.left-arrow').style.cursor =
                      'pointer';
                  }

                  console.log(x);
                }}
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
                      style={
                        apartment.pictures.length > 1
                          ? {
                              transform: 'translateX(-100%)',
                            }
                          : { transform: 'translateX(0)' }
                      }
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

function carouselDisplay(slideArray, translateValue) {
  for (let i = 0; i < slideArray.length; i++) {
    slideArray[i].style.transform = `translateX(${translateValue}%)`;
  }
}

export default Carousel;
