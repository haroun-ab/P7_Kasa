import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Banner from '../components/Banner';
import Footer from '../components/Footer';
import SlideShow from '../components/SlideShow';
import Preface from '../components/Preface';
import Collapsible from '../components/Collapse';
import data from '../back/data';

function Article() {
  const paramsId = new URL(document.location.href).searchParams.get('id');
  const navigate = useNavigate();
  return (
    <React.Fragment>
      {Redirect(navigate)}
      <div className="center-content">
        <Banner />
        <main className="apartment-page">
          <SlideShow paramsId={paramsId} translateValue={0} />
          <Preface paramsId={paramsId} />
          <div className="collapse-list row-center">
            <Collapsible label="Description">
              {data.map((apartment) =>
                apartment.id === paramsId ? (
                  <p key={apartment.id}>{apartment.description}</p>
                ) : (
                  ''
                )
              )}
            </Collapsible>
            <Collapsible label="Equipements">
              <p>
                {data.map((apartment) =>
                  apartment.id === paramsId
                    ? apartment.equipments.map((equipment) => (
                        <React.Fragment key={equipment}>
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

let doesItExist = 0;
function Redirect(navigate) {
  data.forEach((element) => {
    const paramsId = new URL(document.location.href).searchParams.get('id');
    useEffect(() => {
      if (doesItExist === 0) {
        navigate('/article/error::not_found');
      }
    });
    if (element.id === paramsId) {
      doesItExist += 1;
    }
  });
}
export default Article;
