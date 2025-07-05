import React from 'react';
import Promobanner from "../../components/includes/Promobanner";
import Header from '../../components/includes/Header';
import Footer from '../../components/includes/Footer';
import GitKrakenDesk from '../../app/GitKrakenDesktop/_section3/GitKrakenDesk';

const Page = () => {``
  return (
  <div className="bg-black text-white">
  <Promobanner />
  <Header />    
  <GitKrakenDesk />
  
  <Footer />
  </div>
);
};


export default Page;  