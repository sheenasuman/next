import React from "react";
import Image from "next/image";
import { FaLaptopCode, FaCodeBranch, FaTerminal, FaGlobe } from "react-icons/fa";
const companies = [
  "unity.png","NASA.png","honeywell.png","BMW.png","amazon.png","citibank.png"]; 
const GitKrakenHero = () => {
  return (
    <section className="relative bg-[#0D0D0D] text-white overflow-hidden">     
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">   
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Elevate your developer <br /> experience
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Dev tools designed to help you stay focused and unblocked
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-[#7B2FF7] hover:bg-[#9D4DFF] text-white font-medium px-6 py-3 rounded-md">
              Sign up for free
            </button>
            <button className="border border-[#9D4DFF] hover:bg-[#1A1A1A] text-white font-medium px-6 py-3 rounded-md">
              Sign into your account
            </button>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Trusted by 40M+ developers and their teams:
          </p>
          <section className="w-full max-w-5xl mx-auto flex flex-col items-center">     
               <div className="flex flex-wrap justify-center items-center ">
                 {companies.map((logo) => (
                   <Image
                     key={logo}
                     src={`/images/${logo}`}
                     alt={logo.replace('.png', '')}
                     width={90}
                     height={40}
                     className="object-contain grayscale opacity-70 hover:opacity-100 transition"
                   />
                 ))}
               </div>
             </section>
        </div>     
        <div className="relative w-full h-[400px] lg:h-[500px]">
          <Image
            src="/images/gitkraken-jellyfish.png"
            alt="Jellyfish astronaut"
            fill
            className="object-contain"
          />
        </div>
      </div>     
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-bl from-purple-700/30 to-transparent pointer-events-none"></div>
   
      <section className="bg-[#0f0f0f] text-white px-4 py-20 sm:px-10 lg:px-20 space-y-16">
        <div className="grid md:grid-cols-3 gap-8">  
          <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#2A2A2A]">
            <h3 className="text-xl font-semibold mb-2 border-l-4 border-purple-500 pl-3">
              Unblock your team's workflow with Launchpad
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Quickly identify priorities and keep your team moving smoothly.
            </p>
            <Image
              src="/images/dev1"
              alt="Launchpad"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>     
          <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#2A2A2A]">
            <h3 className="text-xl font-semibold mb-2 border-l-4 border-purple-500 pl-3">
              Faster reviews, fewer restrictions with Code Suggest
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Suggest real code changes, beyond comment-only PR feedback, as simple as a Google Doc.
            </p>
            <Image
              src="/images/dev2"
              alt="Code Suggest"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>          
          <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#2A2A2A]">
            <h3 className="text-xl font-semibold mb-2 border-l-4 border-purple-500 pl-3">
              Quickly ramp up new devs with Workspaces
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Onboard new team members onto projects with organized groups of repos & multi-repo actions.
            </p>
            <Image
              src="/images/dev3"
              alt="Workspaces"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>       
        <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#2A2A2A] text-center">
          <h2 className="text-xl font-semibold mb-2">
            GitKraken's DevEx platform meets you and your team wherever you code
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Get started for free by installing any of our tools:
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-sm">            
            <div className="flex flex-col items-center">
              <FaLaptopCode className="text-teal-400 text-2xl mb-2" />
              <span>GitKraken Desktop</span>
              <div className="flex gap-3 mt-1">
                <a href="#" className="text-blue-400 hover:underline">Install</a>
                <a href="#" className="text-blue-400 hover:underline">Learn more</a>
              </div>
            </div>       
            <div className="flex flex-col items-center">
              <FaCodeBranch className="text-blue-400 text-2xl mb-2" />
              <span>GitLens for VS Code</span>
              <div className="flex gap-3 mt-1">
                <a href="#" className="text-blue-400 hover:underline">Install</a>
                <a href="#" className="text-blue-400 hover:underline">Learn more</a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <FaTerminal className="text-green-400 text-2xl mb-2" />
              <span>GitKraken CLI</span>
              <div className="flex gap-3 mt-1">
                <a href="#" className="text-blue-400 hover:underline">Install</a>
                <a href="#" className="text-blue-400 hover:underline">Learn more</a>
              </div>
            </div>       
            <div className="flex flex-col items-center">
              <FaGlobe className="text-purple-400 text-2xl mb-2" />
              <span>Browser Extension</span>
              <div className="flex gap-3 mt-1">
                <a href="#" className="text-blue-400 hover:underline">Install</a>
                <a href="#" className="text-blue-400 hover:underline">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default GitKrakenHero;
