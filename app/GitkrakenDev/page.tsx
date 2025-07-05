import React from 'react';
import Promobanner from "../../components/includes/Promobanner";
import Header from '../../components/includes/Header';
import Footer from '../../components/includes/Footer';
import GitkrakenDev from '../GitkrakenDev/_section4/Gitkrakendev';

const Page = () => {``
  return (
  <div className="bg-black text-white">
  <Promobanner />
  {/* <Header />     */}
  
  <GitkrakenDev />
  <Footer />
  </div>
);
};


export default Page;  