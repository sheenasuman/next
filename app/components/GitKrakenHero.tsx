"use client";
import Image from "next/image";

import { FaLinux } from 'react-icons/fa';
import React, { useState } from "react";
type Tab = 'desktop' | 'vscode' | 'terminal' | 'web';

const tabs: { label: string; id: Tab; description: string; icon: string }[] = [
  { label: 'Desktop', id: 'desktop', description: 'GitKraken Desktop', icon: '/images/desk.svg' },
  { label: 'VS Code', id: 'vscode', description: 'GitLens', icon: '/images/vs.svg' },
  { label: 'Terminal', id: 'terminal', description: 'GitKraken CLI', icon: '/images/terminal.svg' },
  { label: 'Web/Mobile', id: 'web', description: 'GitKraken.dev', icon: '/images/webmob.svg' },
];

const tabImages: Record<Tab, string> = {
  desktop: '/images/desktop1.png',
  vscode: '/images/vscode1.png',
  terminal: '/images/terminal1.png',
  web: '/images/webmobile1.png'
};
 const companies = [
    "amazon.png",
    "CocaCola.png",
    "netflix.png",
    "unity.png",
    "citibank.png",
    "amex.png",
    "Samsung.png",
    "BMW.png",
    "honeywell.png",
    "NASA.png",
  ];
  export default function GitKrakenHero() {
    const [showOptions, setShowOptions] = useState(false);
    const [activeTab, setActiveTab] = useState<Tab>('desktop');

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="text-center px-6 py-10">
        <h1 className="font-inter text-[39px] font-bold leading-[72px] tracking-[-0.09em]">
          Smarter Workflows. Built-In AI. Better Developer Experience.
        </h1>
        <p className="text-lg font-bold text-gray-300 mt-2">
          GitKraken AI works for you to seamlessly orchestrate your workflows
        </p>
        <div className="flex flex-col items-center space-y-4 text-center bg-[#00000] py-8">
      {/* Main Button */}
      {!showOptions ? (
        <button
          onClick={() => setShowOptions(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-700 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          <FaLinux size={20} />
          Download GitKraken Desktop Free
        </button>
      ) : (
        // Expanded Buttons
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'Ubuntu 18.04+ LTS (.deb)',
            'Ubuntu 18.04+ LTS (tar.gz)',
            'RHEL 8+,Fedora39+(.rpm)',
            'Snapstore'

          ].map((label, index) => (
            <button
              key={index}
              className="bg-gradient-to-r from-purple-700 to-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:scale-105 transition-transform"
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Subtext */}
      <p className="text-sm text-gray-400">
        Available on: <span className="text-purple-300">Windows,Mac or Linux</span>
      </p>
      </div>
        
        </section>
      
       {/*video section*/}
     <section className="text-center px-6 py-10 space-y-8 bg-black text-white">
      <h2 className="text-xl md:text-xl font-semibold text-gray-300">
        Our DevEx platform meets you where you work – across the desktop,IDE & command line
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-3 px-5 py-4 rounded-lg border border-purple-800 shadow-md transition-all duration-300 ${
              activeTab === tab.id ? 'bg-purple-800 text-white' : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
            }`}
          >
            <Image src={tab.icon} alt={tab.label} width={30} height={30} />
            <div className="text-left">
              <div className="font-semibold">{tab.label}</div>
              <div className="text-sm text-fuchsia-400">{tab.description}</div>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <Image
          src={tabImages[activeTab]}
          alt={activeTab}
          width={800}
          height={500}
          className="rounded-lg shadow-xl object-cover mt-6"
        />
      </div>
    </section>
      {/* AI Highlight Section */}
      <section className="bg-gray-900 rounded-lg p-8 max-w-6xl mx-auto my-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-md space-y-4">
          <h2 className="text-4xl font-bold flex items-center gap-2">
            <span className="text-blue-400">✨</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">GitKraken</span>
            <span>AI</span>
          </h2>
          <p className="text-gray-300">
            GitKraken AI works for you to seamlessly orchestrate your workflows. Automagically generate commit messages, stash messages, changelogs, and pull requests.
          </p>
          <a href="#" className="inline-block px-6 py-3 border border-purple-500 rounded-md text-white hover:bg-purple-600 transition">
            Try GitKraken AI
          </a>
        </div>
        <div className="relative">
          <img src="/images/gitaima.png" alt="GitKraken AI demo" className="w-80 rounded-lg shadow-2xl rotate-3" />
          <div className="absolute -top-4 -right-4 w-4 h-4 bg-gray-700 rounded-full" />
          <div className="absolute bottom-10 right-16 w-3 h-3 bg-gray-700 rounded-full" />
          <div className="absolute bottom-0 -right-2 w-6 h-6 bg-gray-700 rounded-full" />
        </div>
      </section>
      {/* Company Logos */}
      <section className="mt-12 w-full max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-lg font-bold text-white text-center">
          Not Just for Solo Devs. Solving Git Problems for 100K+ Dev Teams
        </h2>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
          {companies.map((logo) => (
            <img key={logo} src={`/images/${logo}`} alt="GitKraken AI teams" className="w-20" />
          ))}
        </div>
      </section>
       
      {/* Feature Cards     
        {/* Card 1 */} 
   <section className="flex justify-center items-center gap-6 py-12">
   <div className="flex bg-[#1E1E1E] rounded-lg overflow-hidden w-[550px] group cursor-pointer">
     <div className="w-3/5 overflow-hidden">
         <Image
       
        src="/images/built for teams.png"
        alt="Built for Teams"
        width={900}
        height={300}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
      /> 
    </div>
    <div className="p-6 flex flex-col justify-between w-2/5 text-white">
     <div>
        <h3 className="text-lg font-semibold mb-2">Built for Teams</h3>
        <p className="text-sm text-gray-300">
          A DevEx platform that’s built for team velocity & greater collaboration.
        </p>
      </div>
      <a
        href="#"
        className="mt-4 text-sm text-fuchsia-400 hover:underline flex items-center"
      >
        <Image src="/images/Vector.svg" alt="image" width={20} height={20} />supercharge your Dev Team&gt;
      </a>
    </div>
  </div>
  {/* Card 2 */}
  <div className="flex bg-[#1E1E1E] rounded-lg overflow-hidden w-[550px] group cursor-pointer">
    <div className="w-3/5 overflow-hidden">
      <Image
        src="/images/enterprise grade.png"
        alt="Enterprise Grade"
        width={900}
        height={300}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
      />
    </div>
    <div className="p-6 flex flex-col justify-between w-2/5 text-white bg-black-900 rounded-lg shadow-md box-border">
  <div>
    <h3 className="text-lg font-semibold mb-2">Enterprise Grade</h3>
    <p className="text-sm text-gray-300">
      Solutions designed for large-scale security, privacy & control.
    </p>
  </div>
  <a
    href="#"
    className="mt-3 text-sm text-fuchsia-400 hover:underline flex items-center"
  >
   <Image src="/images/secure.svg" alt="image" width={20} height={20} />Secure Your Dev Team&gt;
  </a>
</div>

  </div>
  
  </section>
  

</main>
  
      );
    }