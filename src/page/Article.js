import React from 'react';

import Banner from '../components/Banner';
import Footer from '../components/Footer';
import SlideShow from '../components/SlideShow';
import Preface from '../components/Preface';
import Collapsible from '../components/Collapse';

import data from '../back/data';

function Article() {
  const paramsId = new URL(document.location.href).searchParams.get('id');

  return (
    <React.Fragment>
      <div className="center-content">
        <Banner />
        <main className="apartment-page">
          <SlideShow paramsId={paramsId} translateX={-100} />
          <Preface paramsId={paramsId} />
          <div className="collapse-list row-center">
            <Collapsible label="Description">
              {data.map((apartment) =>
                apartment.id === paramsId ? <p>{apartment.description}</p> : ''
              )}
            </Collapsible>
            <Collapsible label="Equipements">
              <p>
                {data.map((apartment) =>
                  apartment.id === paramsId
                    ? apartment.equipments.map((equipment) => (
                        <React.Fragment>
                          <span>{equipment}</span>
                          <br />
                        </React.Fragment>
                      ))
                    : ''
                )}
              </p>
            </Collapsible>
          </div>
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Article;
