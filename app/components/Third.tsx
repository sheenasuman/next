"use client";
import Image from "next/image";
import React from "react";

export default function Third() {
  return (
    <main className="bg-black text-white px-6 py-16">
<div className="bg-black text-white px-6 py-16">
  <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
    {/* Left Image */}
    <div className="shrink-0">
      <Image
        src="/images/e9.png"
        alt="Git Icon"
        width={100}
        height={100}
        className="rounded-lg shadow-lg"
      />
    </div>

    {/* Right Text */}
    <div className="flex flex-col justify-center">
      <h3 className="text-2xl font-bold mb-4">
        Helping Distributed Dev Teams Collaborate Like They’re All In The Same Room
      </h3>

      <span className="text-2xl font-bold text-white mb-4">Collaborate</span>

      <h1 className="text-4xl font-bold leading-tight mb-4">
        Share dozens (or hundreds or thousands) <br />
        of repos, with as many team members as <br />
        you want, in just a few clicks.
      </h1>

      <span className="text-purple-400 mt-2">
        Check out GitKraken Workspaces
      </span>
    </div>
  </div>


               <Image
                        src="/images/Repository.png"
                        alt="image"
                        width={900}
                        height={600}
                        className="rounded-lg shadow-lg mt-20"
                      />
             <h4 className="text-gray-500 text-2xl font-bold justify-center align-center">Share all the repos that matter to your team to keep everyone on the same page </h4>
             <p>Available in <span className="text-purple-400">GitKraken Desktop</span>,
              <span className="text-purple-400">GitKraken CLI</span> or<span className="text-purple-400"> GitLens→</span> </p>
             </div>
            

             <div className="max-width-5xl items-center  mx-auto mt-10 flex flex-col md:flex-col justify-center">
             <div className="bg-black text-white px-6 py-16">
  <div className="flex flex-col md:flex-row items-start gap-10 max-w-6xl mx-auto">
    
    {/* Left Icon */}
    <div className="shrink-0 pt-2">
      <Image
        src="/images/e99.png"
        alt="Vertical Icon"
        width={80}
        height={10}
        className="align-middle"
      />



    {/* Right Content */}
    <div className="flex-1">
      {/* Section 1 */}
      <h1 className="text-5xl font-bold mb-10">
        Among the many benefits of Workspaces is<br />
        that you can onboard new devs to your team in<br />
        minutes, not months.
      </h1>

      <Image
        src="/images/z.png"
        alt="Workspace UI"
        width={700}
        height={600}
        className="rounded-lg shadow-lg mb-10"
      />

      <h4 className="text-gray-500 text-2xl font-bold mb-4">
        Workspaces help you scale by enabling multi-repo Git<br />
        actions and easy onboarding of new team members
      </h4>

      <p className="text-lg mb-20">
        Available in{' '}
        <span className="text-purple-400 font-semibold">GitKraken Desktop</span>,{' '}
        <span className="text-purple-400 font-semibold">GitKraken CLI →</span>
      </p>

      {/* Section 2 */}
      <h1 className="text-4xl font-bold max-w-4xl">
        Staying aligned is tough when you’re<br />
        trying to move fast — even more difficult<br />
        when your team is spread across zip<br />
        codes, time zones & continents.
      </h1>
    </div>
  </div>
</div>
</div>


            

            <div className="relative h-[60vh] w-full overflow-hidden">
              {/* Background Image */}
              <Image
                src="/images/bg7.png"
                alt="Background"
                fill
                className="object-cover object-center z-0"
              />
            
              {/* Foreground Image */}
              <div className="absolute z-20 inset-0 flex items-center justify-center px-4">
                <Image
                  src="/images/7.png"
                  alt="Foreground"
                  width={873}
                  height={700}
                  className="rounded-lg shadow-2xl w-full max-w-4xl mt-35"
                />
              </div>
            </div>
            
            <h4 className="text-gray-500 text-2xl font-bold flex justify-center items-center">Our Workspaces Team View becomes mission control for<br/>distributed dev teams </h4>
            <p className="flex justify-center">Available in <span className="text-purple-400">GitKraken Desktop→</span></p>
            </div>


            
            <div className="bg-black text-white flex flex-col md:flex-col items-center justify-center">
              <h1 className="text-4xl font-bold mt-6 max-width-4xl flex justify-center">
                Development is increasingly a team effort.<br/>And more than ever before,those<br/>teammates aren’t sitting
                 right next to you.  
              </h1>
              <Image
                       src="/images/8.png"
                        alt="image"
                        width={1100}
                        height={600}
                        className="rounded-lg shadow-lg mt-20"
                      />
             <h4 className="text-white-500 text-2xl font-bold justify-center align-center">Avoid costly collisions – especially with distributed
               teams<br/>that can be the difference between success and failure</h4>
               <p>Available in <span className="text-purple-400">GitKraken Desktop→</span></p>
            </div>
            <div className="mt-20 max-w-5xl mx-auto">
           <p className="text-sm text-gray-400 font-semibold mb-2">Git Facts</p>
           <div className="flex flex-col md:flex-row md:items-center md:sp">
      
          <h2 className="text-4xl md:text-6xl font-bold whitespace-nowrap"> 92% </h2>
          <p className="text-lg md:text-2xl font-semibold mt-2 mt-0">of developers say they spend their<br/> days 
            (and nig   <p className="text-sm md:text-2xl font-semibold mt-2 mt-0"></p>hts) working as part of a<br/> team   
          </p>Part of a Dev Team?

        </div>
        <p className="text-sm mt-4">Monorepo or Multirepo? eBook: a guide for optimal workflows.
        
          <a href="#" className="text-purple-400 hover:underline">
          Get it free (no email or account)
          </a>
        </p>
      </div>
      <div className="flex flex-col md:items-center md:sp">
      <Image
      
                        src="/images/10.png"
                        alt="image"
                        width={300}
                        height={200}
                        className="rounded-lg shadow-lg mt-20 "
                      />

       <p>Part of a Dev Team?</p>

      <p>Add multiple team members to try GitKraken Client as an org for 30 days – 100% free & no credit card.</p>

        <span className="text-purple-400">Add a Teammate(s) for a Free 30-Day Business Trial</span>
        <Image
      
      src="/images/11.png"
      alt="image"
      width={800}
      height={200}
      className="rounded-lg shadow-lg mt-20 "
    />

     
      </div>
      <div>
      <h2 className="text-3xl font-bold mt-6 max-width-4xl flex justify-center align-center">Enabling Devs to Stay Connected – To Their Tech Stack and Their Workflow</h2>
      <span className="flex justify-center text-left">Connect</span>
      <h1 className="text-5xl font-bold mt-6 max-width-4xl flex justify-center align-center">Powerful integrations to GitHub, GitLab,<br/>

         Bitbucket, Azure, Jira & more – so we fit<br/> right in with your existing workflow &<br/>stack.
      </h1>

        <Image
      
      src="/images/13.png"
      alt="image"
      width={800}
      height={200}
      className="rounded-lg shadow-lg mt-20 "
    />
      
           
      </div>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
  <h1 className="text-3xl font-bold max-w-4xl">
    Continuity across our entire suite of dev tools,<br />
    so when you do something in the Client, your<br />
    IDE or CLI update in real time. That’s a magical<br />
    developer experience!
  </h1>

  <div className="mt-16 flex flex-col items-center">
    <Image
      src="/images/14.png"
      alt="image"
      width={800}
      height={200}
      className="rounded-lg shadow-lg"
    />

    <h4 className="text-gray-500 text-2xl font-bold mt-8">
      Changes you make in one of our tools – show up in all our tools, in real time
    </h4>

    <p className="mt-4 text-lg">
      Available in{' '}
      <span className="text-purple-400 font-semibold">GitKraken Desktop</span>,{' '}
      <span className="text-purple-400 font-semibold">GitKraken CLI →</span>, and{' '}
      <span className="text-purple-400 font-semibold">GitLens →</span>
    </p>
  </div>
</section>

    <div>
      <h1 className= "text-4xl font-bold mt-6 max-width-4xl flex justify-center align-center">Experience how easy it can be to 
        manage<br/> tasks and keep your context intact. A <br/>smoother,
         more efficient workflow is not<br/>just an aspiration, it's your new reality.
      </h1>
      <div className="bg-[url('/images/bg7.png')] bg-cover bg-center h-full w-full mt-10 max-w-6xl mx-auto">
      <Image
      
      src="/images/15.png"
      alt="image"
      width={800}
      height={200}
      className="rounded-lg shadow-lg mt-20 "
    />
       </div>

               
    <h4 className="text-gray-500 text-2xl font-bold flex justify-center items-center">Seeing issues where you’re actually doing work saves time and minimizes annoying context switching</h4>
    <p className="flex justify-center items-center">Available in <span className="text-purple-400">GitKraken Desktop</span>
    <span className="text-purple-400">GitKraken CLI→</span></p>
 
    </div>
    <div className="mt-20 max-w-5xl mx-auto">
           <p className="text-sm text-gray-400 font-semibold mb-2">Git Facts</p>
           <div className="flex flex-col md:flex-row md:items-center md:sp">
      
          <h2 className="text-4xl md:text-6xl font-bold whitespace-nowrap">
          ONLY 50%
          </h2>
          <p className="text-lg md:text-2xl font-semibold mt-2 mt-0">of developers feel confident they have the tools and context<br/>
                 they need to work effectively on their company’s code.</p>
      </div>
      <div>
        <h2>Oh, hey, we weren’t expecting you way down here!</h2>
        <h4 className="text-gray-500 text-2xl font-bold justify-center align-center">You’ve heard a lot from us. Now let our customers tell you in their own words <span className="text-purple-400"> why they rely on GitKraken dev tools.</span></h4>
        <p className="text-sm md:text-2xl font-semibold mt-2 mt-0">Accelerate your performance —<span className="text-purple-400"> take any of our dev tools for a free spin.</span></p>
      <Image 
      src="/images/17.png"
      alt="image"
      width={800}
      height={200}
      className="rounded-lg shadow-lg mt-20 "
    />
      
      </div>
      </div>
    </main>
  );
}