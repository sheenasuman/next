import React from 'react';
import Promobanner from "../../components/includes/Promobanner";
import Header from '../../components/includes/Header';
import Footer from '../../components/includes/Footer';
import GitlensforVScode from './_secton5/GitlensforVScode';


const Page = () => {``
  return (
  <div className="bg-black text-white">
  <Promobanner />
  <Header />    
  <GitlensforVScode/>
  
  <Footer />
  </div>
);
};


export default Page;  