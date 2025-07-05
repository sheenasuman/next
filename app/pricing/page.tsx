import React from 'react';
import Promobanner from "../../components/includes/Promobanner";
import Header from '../../components/includes/Header';
import Features from './_section2/Features';
import Gitlens from './_section2/Gitlens';
import Gitdev from './_section2/Gitdev';
import Gitcli from './_section2/Gitcli';
import Features2 from './_section2/Features2';
import Spotlight2 from './_section2/Spotlight2';
import Footer from '../../components/includes/Footer';

const Page = () => {``
  return (
  <div className="bg-black text-white">
  <Promobanner />
  <Header />    
  <Spotlight2/>
  <Features/>
  <Features2/>
  <Gitlens/>
  <Gitdev/>
  <Gitcli/>
  <Footer />
  </div>
);
};


export default Page;  
