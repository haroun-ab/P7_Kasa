import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';

function Home() {
  return (
    <React.Fragment>
      <div className="center-content">
        <Banner />
        <main>
          <section className="img-header">
            <h1>Chez&nbsp;vous, partout&nbsp;et&nbsp;ailleurs</h1>
          </section>
          <Card />
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
