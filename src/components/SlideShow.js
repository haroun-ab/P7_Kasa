import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/SlideShow.css';
import data from '../back/data';

function Carousel(props) {
  let index = props.translateValue;

  // const [slideNumber, setSlideNumber] = useState(0);
  // const slideWidth = 500;
  // const slideHeight = 150;
  // let sliderTotalWidth = slideNumber * slideWidth;
  // useEffect(() => {
  //   setSlideNumber(document.querySelectorAll('.images-list img').length);
  // }, []);
  // console.log(sliderTotalWidth);
  console.log(index);

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
      //   .querySelector('.images-list')
      //   .insertBefore(
      //     document.querySelector('.images-list').children[
      //       slideArray.length - 1
      //     ],
      //     document.querySelector('.images-list').children[0]
      //   );
    }

    console.log(index);
    //   // Désactivation de la flèche gauche quand on arrive au premier slide
    //   if (index === 0) {
    //     // récupere la photo 4
    //     document.querySelector('.left-arrow').style.opacity = '0%';
    //     document.querySelector('.left-arrow').style.cursor = 'default';
    //   }
    //   // Réapparition de la flèche droite quand on reviens sur l'avant dernier slide
    //   if (index > (slideArray.length - 1) * -100) {
    //     document.querySelector('.right-arrow').style.opacity = 'initial';
    //     document.querySelector('.right-arrow').style.cursor = 'pointer';
    //   }
  }

  // droite
  function slideRight() {
    const slideArray = document.querySelectorAll('.slideshow-container img');
    console.log(slideArray.length);

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

      console.log('fin');
      // document
      //   .querySelector('.images-list')
      //   .insertAdjacentElement(
      //     'beforeend',
      //     document.querySelector('.images-list').children[0]
      //   );
    }
    console.log(index);
    // // Désactivation de la flèche droite quand on arrive au dernier slide
    // if (index === (slideArray.length - 1) * -100) {
    //   document.querySelector('.right-arrow').style.opacity = '0';
    //   document.querySelector('.right-arrow').style.cursor = 'default';
    // }
    // // Réapparition de la flèche gauche quand on reviens sur le 2e slide
    // if (index < 0) {
    //   document.querySelector('.left-arrow').style.opacity = 'initial';
    //   document.querySelector('.left-arrow').style.cursor = 'pointer';
    // }
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
                      // style={
                      //   apartment.pictures.length > 1
                      //     ? {
                      //         transform: 'translateX(-100%)',
                      //       }
                      //     : { transform: 'translateX(0)' }
                      // }
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

// onClick={() => {
//   const slideArray = document.querySelectorAll(
//     '.slideshow-container img'
//   );
//   if (x < 0) {
//     let translateValue = x + 100;
//     carouselDisplay(slideArray, translateValue);
//     x = translateValue;
//   }

//   // Désactivation de la flèche gauche quand on arrive au premier slide
//   if (x === 0) {
//     document.querySelector('.left-arrow').style.opacity = '0%';
//     document.querySelector('.left-arrow').style.cursor =
//       'default';
//   }
//   // Réapparition de la flèche droite quand on reviens sur l'avant dernier slide
//   if (x > (slideArray.length - 1) * -100) {
//     document.querySelector('.right-arrow').style.opacity =
//       'initial';
//     document.querySelector('.right-arrow').style.cursor =
//       'pointer';
//   }
// }}
