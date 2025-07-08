"use client";
import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const Supercharge = () => {
  return (
    <section className="bg-black text-white py-20 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h4 className="text-l text-gray-300 mb-2 text-left">
          Solving Git Problems for 40M+ Developers
        </h4>
        <h1 className="text-3xl font-bold mb-8 leading-snug">
          Fast-track your team with a DevEx platform built<br />
          for speed, teamwork, and a unified Git experience.
        </h1>
        <div className="flex justify-center gap-4 flex-wrap mb-16">
          <button className="bg-[#7719F7] hover:bg-[#6615d4] transition text-white px-6 py-3 rounded-md font-semibold">
            Start a Free Trial
          </button>
          <button className="bg-[#7719F7] hover:bg-[#6615d4] transition text-white px-6 py-3 rounded-md font-semibold">
            Get a Guided Tour
          </button>
        </div>
        {/* Testimonials Section */}
        <div className="bg-[#0D0D0D] rounded-2xl flex flex-col lg:flex-row items-stretch overflow-hidden max-w-5xl mx-auto">
          <div className="flex-1 p-6 sm:p-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Global Dev Teams ❤️ GitKraken!
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-6">
              From startups to enterprises, software teams around the world
              rely on GitKraken everyday.
            </p>
            <div className="flex gap-10 flex-wrap items-center mb-6">
              <Image src="/images/lansweeper.png" alt="Lansweeper" width={600} height={180} />
            </div>
            <button className="bg-[#7719F7] hover:bg-[#6615d4] transition text-white px-4 py-2 rounded-md text-sm">
              Read Customer Stories
            </button>
          </div>
          {/* Testimonial Card */}
          <div className="bg-black p-6 sm:p-10 flex flex-col justify-between lg:max-w-md">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/images/kyle.png"
                alt="Kyle Fransham"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-white">Kyle Fransham</h4>
                <p className="text-sm text-gray-400">
                  SVP, Research & Development, Superna
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              GitKraken tools enable us to work better as a team. Workspaces are
              tremendously valuable, especially in onboarding. Join the Workspace,
              clone the repos, and it's all there – it's been a game-changer for
              our team.
            </p>
            <a href="#" className="text-sm text-purple-400 hover:underline">
              Learn more
            </a>
          </div>
        </div>
      </div>  
      {/* AI Video Section */}
      <div className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-10 leading-snug">
          The only DevEx platform with built-in AI that boosts team productivity<br />
          across every environment—desktop, IDE, terminal, web, and mobile.
        </h2>

      
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold leading-relaxed mb-8">
          The only DevEx platform with built-in AI that boosts team productivity<br />
          across every environment—desktop, IDE, terminal, web, and mobile.
        </h2>

        {/* Image with Overlay Play Button */}
        <div className="relative inline-block rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/devex-ui.png" 
            alt="DevEx Overview"
            width={1000}
            height={560}
            className="rounded-xl"
          />
          {/* Overlay Play Button */}
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/80 border border-blue-500 rounded-full px-8 py-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300">
              <FaPlay className="text-cyan-400 text-2xl mb-2" />
              <span className="text-cyan-400 font-semibold text-lg">Watch overview</span>
              <span className="text-gray-300 text-sm">60 Seconds</span>
            </div>
          </button>
        </div>
      </div>
       </div>
     <section className="bg-[#121212] text-white px-6 py-20 text-center">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#7C3AED] mb-2">
              Supercharge Teamwork with the Best Visual Tools Available
            </h2>
            <p className="text-gray-300">
              Eliminate Git hurdles with tools that boost speed and reduce conflicts.
            </p>
          </div>    
          {/* Video 1 */}
    <div className="max-w-5xl mx-auto mb-4">
      <div className="aspect-video w-full max-w-5xl mx-auto overflow-hidden rounded-md shadow-md">
        <video
          className="w-full h-full"
          controls
          preload="auto" >
          <source src="/videos/video1.mp4" type="video/mp4" />        
        </video>
      </div>
      <p className="mt-4 text-gray-400 text-sm">
        Our interactive <a href="#" className="text-[#9B5DE5] underline hover:text-purple-400">Commit Graph</a> shows the entire project timeline at a glance, helping your team stay synced and move fast.
      </p>
    </div>
          {/* Video 2 */}
          <div className="max-w-5xl mx-auto mt-16">
            <div className="aspect-video w-full max-w-5xl mx-auto overflow-hidden rounded-md shadow-md">
            <video
          className="w-full h-full"
          controls
          preload="auto" >
          <source src="/videos/video21.mp4" type="video/mp4" />       
        </video>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Zip through Git conflicts with our easy-to-use <a href="#" className="text-[#F15BB5] underline hover:text-pink-400">Merge Conflict Tool</a>. Keep your projects moving smoothly by tackling snags head-on and fast.
            </p>
          </div>   
          {/* Heading */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#7C3AED] mb-2">
              Slash Time-to-First-Commit
            </h2>
            <p className="text-gray-300">
              Onboard at the speed of now and get new hires contributing from day one.
            </p>
          </div>
              {/* Video 3 */}
          <div className="max-w-5xl mx-auto mb-6">
            <div className="aspect-video w-full max-w-5xl mx-auto overflow-hidden rounded-md shadow-md">
            <video
          className="w-full h-full"
          controls
          preload="auto"
        >
          <source src="/videos/video3.mp4" type="video/mp4" />        
        </video>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Centralize project essentials with <a href="#" className="text-[#9B5DE5] underline hover:text-purple-400">Workspaces</a>.
              Set up new developers with all the repos they need for every project in one place.
            </p>
          </div>
              {/* Video 4 */}
          <div className="max-w-5xl mx-auto mt-16">
            <div className="aspect-video w-full max-w-5xl mx-auto overflow-hidden rounded-md shadow-md">
            <video
          className="w-full h-full"
          controls
          preload="auto" >
          <source src="/videos/video4.mp4" type="video/mp4" />
            </video>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Simplify onboarding with <a href="#" className="text-[#F15BB5] underline hover:text-pink-400">Launchpad</a>. 
              Guide new hires through their first tasks, ensuring a smooth and guided entry into your projects.
            </p>
          </div>   
             <div className="mt-16 max-w-xl mx-auto text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Unlock Developer Productivity with Code Visibility
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Reduce onboarding time and ship faster by improving code understanding. Learn how in our free eBook.
            </p>
            <a href="#"
              className="inline-block bg-[#7719F7] hover:bg-[#6615d4] text-white px-6 py-3 rounded-md text-sm font-semibold transition"
            >
              Download Free eBook
            </a>
          </div>              
          <div className="max-w-5xl mx-auto mb-16">
          <Image src="/images/tick.png" alt="Integration Icon" width={68} height={48} />
            <h2 className="text-xl sm:text-base font-semibold text-white uppercase mb-1">
              Standardize Git Operations Across IDE, Desktop, CLI and Web
            </h2>
            <p className="text-gray-300 text-sm mb-6">
              Keep it simple, keep it unified — Git tooling that works the same everywhere.
            </p>
            <div className="aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-md shadow-md">
              <iframe
                className="w-full h-full"
                src="https://youtu.be/edsCT-MIWhs"
                title="Standardize Git Operations"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>     
          <div className="max-w-5xl mx-auto mb-16">
            <Image src="/images/clock.png" alt="Integration Icon" width={78} height={48} />
            <h2 className="text-xl sm:text-base font-semibold text-white uppercase mb-1">
              Get More Visibility and Move Faster as a Team
            </h2>
            <p className="text-gray-300 text-sm mb-6">
              See every team’s activity, anticipate roadblocks sooner, and speed up delivery.
            </p>
            <div className="aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-md shadow-md">
            <video
          className="w-full h-full"
          controls
          preload="auto"
        >
          <source src="/videos/video5.mp4" type="video/mp4" />
        
        </video>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Track team progress and pinpoint issues fast with <a href="#" className="text-white underline hover:text-purple-400">GitKraken Insights</a>. Real-time data keeps everyone motivated and on track.
            </p>
          </div>    
          
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-md shadow-md">
            <video
          className="w-full h-full"
          controls
          preload="auto"
        >
          <source src="/videos/video7.mp4" type="video/mp4" />
           </video>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              See all projects, contributors, and workflows at a glance with <a href="#" className="text-[#F15BB5] underline hover:text-pink-400">Team Launchpad</a>—speed up your team's progress.
            </p>
          </div>            
          <div className="max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Image src="/images/smallgit.png" alt="Integration Icon" width={68} height={48} />
              <h2 className="text-lg sm:text-xl font-semibold">
                Bring Your Tools Together and Work Smarter
              </h2>
            </div>
            <p className="text-sm text-gray-400">
              Cut context switching & centralize everything in the GitKraken DevEx platform.
            </p>
          </div>             
          <div className="max-w-4xl mx-auto mb-6">
            <Image
              src="/images/gitpentagon.png"
              alt="Git Tools Integration"
              width={800}
              height={600}
              className="mx-auto"
            />
          </div>         
          <p className="text-sm text-gray-300 max-w-2xl mx-auto mb-12">
            <span className="text-[#9B5DE5] font-medium cursor-pointer hover:underline">
              Connect
            </span>{" "}
            with major Git hosts like GitHub, GitLab, Bitbucket, and Azure DevOps, plus sync with Jira and Trello. 
            Manage pull requests and merges, keeping your team in sync on one screen.
          </p>        
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Ready to Level Up Your Team’s Git Experience?
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Discover why teams worldwide choose GitKraken for simpler, more powerful Git management.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-[#7719F7] hover:bg-[#6615d4] transition text-white px-6 py-3 rounded-md font-semibold text-sm">
                Start a Free Trial with Your Team
              </button>
              <button className="bg-[#7719F7] hover:bg-[#6615d4] transition text-white px-6 py-3 rounded-md font-semibold text-sm">
                Get a Guided Tour
              </button>
            </div>
          </div>
        </section>
        </section>
  );
};

export default Supercharge;



