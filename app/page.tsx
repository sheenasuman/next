import React from 'react';
import PromoBanner from './components/PromoBanner';
import Header from './components/Header';
import GitKrakenHero  from './components/GitKrakenHero';
import Navbar from './components/Navbar';
import Second from './components/Second';
import Footer from './components/Footer';
import Third from './components/Third';
import Promo2 from './components/Promo2';
import Spotlight2 from './components/Spotlight2';
import Features2 from './components/Features2';
const Page = () => {
  return (
  <div className="bg-black text-white">
  <PromoBanner />
  <Header />
  <GitKrakenHero />
  <Navbar /> 
  <Second/>
  <Third/>
  <Footer />
  <Promo2/>
  <Spotlight2/>
  <Features2/>
</div>
);
};


export default Page;  