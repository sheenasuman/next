import React from 'react';
import Hero from './_section1/Hero';
// import Second from './_section1/Second';
import Third from './_section1/Third';
import Header from '../components/includes/Header';
import Footer from '../components/includes/Footer';
import Promobanner from '../components/includes/Promobanner';
const Page = () => {``
  return (
  <div className="bg-black text-white">
  <Promobanner />
  <Header />
  <Hero />
  {/* <Second/> */}
  <Third/>
  <Footer /> 

</div>
);
};


export default Page;  