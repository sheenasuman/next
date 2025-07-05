"use client";
import Image from "next/image";
import Link from 'next/link';
import React, { useState } from "react";
import Video from '../../components/includes/Video';
import GitkrakenAI from '../../components/includes/GitkrakenAI'
import Companylogos from "../../components/includes/Companylogos";
import Downloadbutton from "../../components/includes/Downloadbutton";
import Featurecards from "../../components/includes/Featurecards";  
import Tabs from '../../components/includes/Tabs';
export default function GitKrakenHero() {
   return (
    <main className="bg-black text-white">
        <section className="text-center px-6 py-10">
            <h1 className="font-inter text-[39px] font-bold leading-[72px]">
                Smarter Workflows. Built-In AI. Better Developer Experience.
            </h1>
            <p className="text-lg font-bold text-gray-300 mt-2">
                GitKraken AI works for you to seamlessly orchestrate your workflows
            </p>        
         <main>
            <Downloadbutton />
            <Video />                  
            <GitkrakenAI />
            <h2 className="text-lg font-bold text-white text-center">Not Just for Solo Devs. Solving Git Problems for 100K+ Dev Teams</h2>
            <Companylogos />
            <Featurecards />
            <Tabs />
        </main>
        </section>      
       <section className="bg-black text-white px-6 py-6">
           <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-10">
                  {/* Left Image */}
                 <div className="flex-shrink-0">
                  <Image src="/images/e321.png"alt="Focus Icon" width={40} height={30} className="inline-block align-middle"/>
            </div>    
            {/* Right Text */}
            <div className="text-left space-y-6">
                    <h2 className="text-2xl font-bold max-w-4xl">
                           Enabling Developers to Quickly Visualize Complex Data, Code, and Progress
                    </h2>
    
              <h3 className="text-sm font-semibold uppercase text-gray-300">Visualize</h3>
    
              <h2 className="text-3xl md:text-4xl font-bold">
                  Visualizing complex data sets is a major time saver<br />
                  and it's often a real life saver.
              </h2>
            </div>
          </div>
        </section>
         <div className="relative h-[60vh] w-full overflow-hidden">
                          {/* Background Image */}
                       <Image src="/images/bg1.png" alt="Background" fill className="object-cover object-center z-0" />
                          {/* Foreground Image */}
                      <div className="absolute z-20 inset-0 flex items-center justify-center px-4">
                           <Image src="/images/a.png" alt="Foreground"  width={873} height={700}
                           className="rounded-lg shadow-2xl w-full max-w-4xl mt-35"/>
                      </div>
              </div>
        
              {/* Caption 1 */}
              <div className="mt-6 max-w-4xl mx-auto text-center text-gray-300">
                   <p className="text-xl text-[#BCB5BE] font-bold text-left">
                     Our Commit Graph enables you to visualize complex Git history<br/>across your entire team in seconds
                   </p>
                   <p className="mt-2 text-sm text-left text-center">Available in <span className="text-purple-400">GitKraken Desktop</span>,{" "}
                       <span className="text-purple-400">GitKraken CLI</span> or{" "}
                       <span className="text-purple-400">GitLens</span>.
                   </p>
              </div>
              <section className="bg-black text-white px-10 py-1 min-h-screen flex items-center justify-center">
                        <div className="flex flex-row items-center gap-6 max-w-4xl mx-auto">
                          {/* Image */}
                         <div className="pt-2">
                               <Image src="/images/E1.png"alt="Vertical Icon" width={80} height={40} className="inline-block align-middle"/>
                         </div>      
                               <h1 className="text-3xl md:text-4xl font-bold leading-tight">Being able to visualize what you’re doing
                               (and what will happen) provides context, safety, and peace of mind.</h1>
                          </div>
                    </section>
                            <div className="flex flex-col items-center justify-center max-w-4xl mx-auto ">
                                 <Image src="/images/fourth.png"alt="Visual File History"width={800}height={800}className="rounded-lg shadow-lg "/>
                            </div>         
                            <div className="mt-6 max-w-4xl mx-auto text-center text-gray-300">
                                 <p className="text-xl text-[#BCB5BE] font-bold ">
                                   Use Visual File History to see the entire history of any<br/> file, including: when changes were made, 
                                    how large they<br/> were, and who made them.</p>
                                 <p className="mt-2 text-sm">Available in <span className="text-purple-400 text-left">GitLens</span>.</p>
                            </div>    
 <section className="bg-black text-white px-6 py-6 min-h-screen flex items-center">
          <div className="flex items-start gap-6 max-w-4xl mx-auto">             
               <div className="pt-2">
                  <div className="flex justify-center">
                     <Image src="/images/E1.png" alt="Icon" width={50} height={20} />
                 </div>
              </div>               
              <div className="max-w-3xl">
                <span className="text-white text-sm leading relaxed">VISUALISE</span>
                <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
                    GitKraken lives to make the complex simple – saving developers hours per
                    day with world-beating capabilities like our intuitive merge tools and interactive rebase.
                </h2>
              </div>
          </div>
      </section>
      <section className="bg-black text-white px-10 py-16 min-h-screen flex items-center justify-center">
                 <div className="flex flex-row items-center gap-6 max-w-5xl mx-auto">
                    {/* Image */}
                    <div className="pt-2">
                    <Image src="/images/E1.png" alt="Vertical Icon"width={50} height={50} className="inline-block align-middle"/>
                     </div>
                  {/* Text */}
                  <div>
                      <h1 className="text-3xl md:text-4xl font-bold leading-tight">And GitKraken’s legendary tools aren’t<br />
                         just for devs. We cater to teams of all<br />sizes – and help team leads and managers<br />
                         focus on what’s most important.</h1>
                         <span className="text-sm text-purple-400">Explore Team Insights for Jira</span>
                  </div>
                  </div>
      </section>
                 {/* Team Insights */}
                 <div className="text-3xl md:text-4xl font-bold mx-auto flex justify-center text-center">
                 <Image src="/images/d2.png" alt="Team Insights" width={600} height={400}className="rounded-lg "/>
                 </div>        
                 {/* Git Facts */}
      <section className="bg-black text-white px-10 py-6 min-h-screen flex items-center justify-center gap-8">
                 {/* Left Side Icon */}
                 <div className="pt-2">
                  <Image src="/images/e11.png" alt="Vertical Icon" width={70} height={50} className="inline-block align-middle"/>
                 </div>     
                 <div className="bg-[#000000] text-white">
                      {/* Section Title */}
                              <p className="text-sm font-semibold text-gray-400 mb-2">Git Facts</p>  
                       <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                              <span className="text-5xl font-bold text-white whitespace-nowrap">1,000,000,000+</span>
                              <span className="text-2xl font-semibold text-white">
                                 Commits Visualized (yeah, that’s a billion with a<br/> ‘B’) with the GitKraken Commit Graph</span>
                       </div>
                         {/* Supporting Text */}
                           <p className="text-lg text-white mt-4">How did Lansweeper cut PR review time by over 50% with GitKraken Desktop?{' '}
                           <Link href="#" className="text-purple-300 hover:underline ml-1">
                            Read their dev team’s story </Link></p>
                </div>
        </section>
       
       <section className="relative w-full bg-black rounded-lg overflow-hidden shadow-md">
               <div className="bg-[url('/images/bg5.png')] bg-cover h-30% w-30% mt-10 max-w-6xl mx-auto ">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 h-40%" />
                     {/* Content */}
                        <div className="relative z-10 md:py-16 flex flex-col md:flex-row items-start md:items-center
                                        justify-between gap-6 max-w-5xl mx-auto h-250px">
                          <div className="">
                             <Image src="/images/V.png"alt="git.kon"width={100} height={100} className="rounded-lg shadow-lg "/>
                             <h2 className="text-white text-2xl md:text-3xl leading-tight">Elevating developer experience</h2>
                             <p className="text-gray-300 mt-2 text-sm md:text-base">Join us on December 10–11, 2024</p>
                          </div>
                              <a href="#"className="border border-purple-500 text-white px-6 py-2 rounded-md 
                               hover:bg-purple-600 transition font-medium text-sm"> Watch on-demand </a>
                        </div>
                   </div>
      </section>
       <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
                  <div className="flex items-center gap-8 max-w-4xl">           
                      <div className="flex-shrink-0">
                            <Image src="/images/e29.png" alt="Focus Icon" width={60} height={50} className="inline-block align-middle"/>
                      </div>       
                       <div>
                           <h2 className="text-3xl font-semibold">Helping Developers Focus to Save Time, Minimize Distractions, & Avoid Interruptions
                           </h2>
                            <h3 className="text-md mt-2">Focus</h3>
                           <p className="text-2xl font-bold mt-4">
                              Distractions and interruptions reduce developer productivity,
                              not to mention their quality of code and quality of life.</p>
                       </div>
                  </div>
          </div>
          <div className="relative h-[60vh] w-full overflow-hidden">
                 {/* Background Image */}
                 <Image src="/images/bg3.png"alt="Background"fill className="object-cover object-center z-0"/>
                 {/* Foreground Image */}
               <div className="absolute z-20 inset-0 flex items-center justify-center px-4">
                  <Image src="/images/e1.png" alt="Foreground"width={620}height={600}className="rounded-lg shadow-2xl w-full max-w-4xl mt-35"/>
               </div>
       
             </div>
              <div className="">
                     <p className="text-2xl text-[#BCB5BE] flex justify-center items-center ">Turn down the noise with our Launchpad,
                                   helping you find &<br/>extend your flow state</p>
                    <p className="text-white-400 flex justify-center items-left">Available in<span className="text-purple-400 text-left">
                            GitKraren CLI or Gitlens</span></p>
      </div>
      
      
         <div className="text-3xl md:px-20 max-w-4xl mx-auto text-center">
         <div className="min-h-screen flex items-center justify-center bg-black px-6 text-white">
         <div className="flex items-center gap-12 max-w-6xl w-full">  
               <Image
              src="/images/e29.png"
              alt="Focus Icon"
              width={80}
              height={60}
              className="relative z-10"
            />
          </div>
          <div className="text-left max-w-2xl text-xl md:text-2xl leading-relaxed">
          <h2 className="text-3xl font-semibold">
              GitKraken tools enable developers to find their flow by helping track all open items
              without being bombarded by noise. So you can avoid interruptions, distractions, and
              rework.
             </h2> 
          </div>
      </div>
                  <Image src="/images/eight .png" alt="Focus Tools" width={1800} height={900}className="rounded-lg shadow-lg "/>
              <h4 className="text-2xl text-[#BCB5BE] text-left">See the entire history of any line of code with a quick hover,
                                                                offering you context without distraction</h4>
              <p className="text-white-400 text-sm">Available in<span className="text-purple-400 text-sm">Gitlens</span></p>
            </div>
      
       <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto px-6 py-12">
            <div className="flex-shrink-0">
            <Image src="/images/e7.png" alt="Vertical Icon" width={80} height={30}className="rounded-md"/>
            </div>    
            <div className="max-w-2xl text-left">
                   <h1 className="text-4xl font-bold leading-tight">
                     What you measure matters.Until you can<br/>easily see what helps or hinders your<br/>
                     team’s pace, you can’t improve it.
                   </h1>              
                   <Image src="/images/9.png"alt="Focus Tools"width={900}height={800} className="rounded-lg shadow-lg align-middle"/>
                        <p className="text-2xl text-[#BCB5BE] font-bold"> Enabling everyone on a team (including managers & <br/>leads) 
                           to focus on what’s most important for their<br/>project with GitKraken Insights</p>
                        <p className="text-white-400 text-sm">Available in<span className="text-purple-400"> GitKraken Desktop</span> and
                         <span className="text-purple-400"> GitKraken CLI→</span></p>
            </div>
      </section>                  
      <section className="bg-black text-white px-6 py-16">
                    <div className="flex flex-col md:flex-row items-start gap-6 max-w-4xl mx-auto">                       
                    <div className="shrink-0">
                         <Image src="/images/e11.png" alt="Vertical Icon" width={75} height={40} className="align-middle"/>
                    </div> 
                    <div className="flex-1 max-width-4xl">
                           <span className="text-md text-gray-400 font-semibold mb-2 block">Git Facts</span>
                    <div className="flex flex-col md:flex-row md:items-start md:gap-4">
                              <h2 className="text-[48px] md:text-[59px] font-bold leading-none">4 out of 5</h2>
                              <p className="text-white text-lg md:text-xl font-semibold mt-2 md:mt-4">
                                 developers say that time lost to distraction & interruptions are<br />
                                 among their biggest work-related pain points</p>
                     </div>
                            <p className="mt-6 text-sm font-semibold">How did Johnson Controls improve their developer experience?{' '}
                            <a  href="#" className="text-purple-400 hover:text-purple-300 underline transition-colors">
                                       Read their dev team’s story</a></p>
                    </div>
               </div>
      </section>
      <section className="bg-black text-white flex flex-col md:flex-row items-center justify-center">
                   <div className="rounded-lg shadow-lg mt-20">
                          <Image src="/images/Group-19489.svg"alt="image" width={200} height={200} className="rounded-lg shadow-lg mt-20"/>
                          <p className="text-lg text-gray-300 leading-relaxed">
                               Peek behind the curtain with <span className="font-bold text-white">GitKraken Labs</span> <br />
                              See what our devs are building now & next – putting<br/>powerful AI at your fingertips.
                          </p>
                          <a href="#"className="mt-6 inline-block text-sm text-gray-300 hover:underline" >
                              Tour GitKraken Labs for the latest in <span className="text-purple-400 font-medium">Git Innovation</span>
                           </a>  
                   </div>
                          <Image src="/images/live.png"alt="image" width={600}height={600} className="rounded-lg shadow-lg mt-20"/>
      </section>
       <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
                       <div className="shrink-0">
                       <Image
                        src="/images/e9.png"
                        alt="Git Icon"
                         width={80}
                         height={20}
                         className="rounded-lg shadow-lg"/>
                       </div>
                       <div className="flex flex-col justify-center">
                           <h3 className="text-2xl font-bold mb-4">Helping Distributed Dev Teams Collaborate Like 
                           They’re All In The Same Room</h3>
                           <span className="text-2xl font-bold text-white mb-4">Collaborate</span>
                           <h1 className="text-4xl font-bold leading-tight mb-4">Share dozens (or hundreds or thousands) <br />
                            of repos, with as many team members as <br />you want, in just a few clicks.</h1>
                            <span className="text-purple-400 mt-2">Check out GitKraken Workspaces</span>
                     </div>              
              </div>       
       </main>
  
      );
    }