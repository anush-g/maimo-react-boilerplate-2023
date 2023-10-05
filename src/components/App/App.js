import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import CardsContainer from '../CardsContainer/CardsContainer';
import Newsletter from '../Newsletter/Newsletter';
import CallToAction from '../CallToAction/CallToAction';
import Footer from '../Footer/Footer';
import { Element } from 'react-scroll';

const App = () => {
  return (
    <div className='App'>
      <Header title={`mi titulo`} />
      <Element name='hero' className='element'>
        <Hero />
      </Element>
      <Element name='cardsContainer' className='element'>
        <CardsContainer />
      </Element>
      <Element name='nl' className='element'>
        <Newsletter />
      </Element>
      <Element name='cta' className='element'>
        <CallToAction />
      </Element>
      <Footer />
      
    </div>
  );
};

export default App;
