import React from 'react';
import Header from './containers/header/Header';
import Hero from './containers/hero/Hero';
import Shop from './containers/shop/Shop';
import CardsSection from './containers/cards_section/CardsSection';
import News from './containers/news/News';
import Footer from './containers/footer/Footer';
import '../src/styles.css'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Shop />
      <CardsSection/>
      <News />
      <Footer />
    </div>
  );
}

export default App;