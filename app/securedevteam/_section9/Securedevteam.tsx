import React from "react";
import Image from "next/image";
import Companylogos from "../../../components/includes/Companylogos";

const features = [
  { title: "Boost Team Collaboration & Productivity",
    description:
      "Dev collaboration is at the heart of everything we do. Shorten feedback loops, avoid merge conflicts, eliminate bottlenecks, and help prioritize high-impact work.",
    link: "Team Collaboration →",  },
  { title: "Gain Organization-Wide Visibility",
    description:"Access a unified view of your organization to spot opportunities for improvement. Visualize cycle times, throughput, merge rates and more across teams.",
    link: "Dev Visibility →", },
  { title: "Retain Developer Talent",
    description:"Improve developer experience and eliminate the daily administrative challenges that lead to developer frustration. Provide the cutting-edge workflow enhancers that your top performers require.",
    link: "Retain Talent →", },
  { title: "Gain Organization-Wide Visibility",
    description:"GitKraken AI is built for how real dev teams work—helping them write better commits, move faster through reviews, and avoid common Git pitfalls. With built-in AI refinements and enforceable approval controls, GitKraken enhances productivity while keeping your team on the driver’s seat.",
    link: "AI-Powered Development →",},
  { title: "High ROI",
    description:"Free up developers to spend more of their time on revenue-generating work. With a low cost and large impact, GitKraken is an easy return on investment.",
    link: "Measure Your ROI →",},
  { title: "Meet Security & Compliance Requirements",
    description:"GitKraken is SOC 2 compliant and attuned to global privacy and security needs. Reduce compliance risks, SOC and centralized management provides complete control for your org.",
    link: "Security & Scalability →", },
];
  const secureFeatures = [
  { title: "SOC 2 Type II",
    description: "Our security policies and controls consistently meet the highest industry standards.",},
  { title: "Single Sign-On",
    description: "Login integration via Azure, Okta, G-Suite, Identity Platform, or SAML 2.0.", },
  { title: "Central Admin Control",
    description: "Easily manage settings and controls in a straightforward interface.",  },
  { title: "Provisioning",
    description: "Manage licenses, team access, and billing from a single admin point.",},
  { title: "Workspaces",
    description: "A secure environment to group and manage team projects, extensions, and settings team-by-team.",},
  { title: "Integrations",
    description: "Connect with your Git host + Jira, Azure DevOps, Trello, Slack, SSO, and more.", },
  { title: "Customer Service",
    description: "Quickly reach our support and success teams via phone, email, and live chat.", },
  { title: "Learning Resources",
    description: "Access technical docs, tutorial videos, onboarding checklists, and more.",},
];

const Securedevteam = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-lg text-gray-300">GitKraken for Enterprise</h3>
        <h2 className="text-4xl font-extrabold mt-2 mb-4">
          Unify. Measure. Improve.
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Unlock developer collaboration across tools and get organization-wide insights with the first DevEx platform built to maximize productivity.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-[#A259FF] text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition">
            Start a Free Trial with Your Team
          </button>
          <button className="bg-[#A259FF] text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition">
            Get a Guided Tour
          </button>
        </div>
        <Companylogos/>
        </div>
          <div className="mt-20">
          <h2 className="text-3xl font-bold max-w-3xl mx-auto leading-tight">
            Ship More Code, Faster by Reducing the Friction That Comes From Working as a Team
          </h2>       
          <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-12">
            <Image
              src="/images/innerloop.png" 
              alt="Inner Loop"
              width={800}
              height={300}/>
            </div>
        </div>     
       <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed mb-16">
        Increase the time developers can spend on coding by eliminating the productivity leaks
        associated with version control and administrative tasks. Make improvement a standard part
       of your organization’s workflows with comprehensive insights. </p>   
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          Meet Developers Where They Already Are
        </h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          You don’t need another tool that devs will be resistant to adopt. Developers can access
          time-saving features from the tools they already use – IDE, desktop, terminal, or browser.
          And it all integrates with your Git hosting provider and issue tracker.
        </p>
      </div>
      <div className="max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden mb-12 shadow-xl border border-[#1e1e1e]">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="GitKraken DevEx Platform"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      </div>   
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Built for the Complex Problems Enterprises Face
        </h2>
        <p className="text-gray-300 text-sm sm:text-base">
          Enhance the effectiveness of your individual contributors and managers while easily handling
          organizational security and infrastructure requirements.
        </p>
      </div>   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{feature.description}</p>
            <p className="text-sm text-purple-400 font-medium">{feature.link}</p>
          </div>
        ))}
      </div>
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Get Actionable Insights Into Organizational Performance
        </h2>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          With a unified toolset that cuts across all teams, leaders know how work is progressing
          and where projects are stalled. Robust metrics measure team performance and offer a view
          into where processes can be improved.
        </p>
      </div>
        {/* Video 1 */}
      <div className="max-w-4xl mx-auto mb-6">
        <video
          controls
          className="w-full rounded-lg border border-[#2A2A2A] shadow-lg"
          poster="/images/insight-thumb1.png" 
        >
          <source src="/videos/securevideo1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-xs text-center text-gray-400 mt-2">
          Team Launchpad combines data from issue trackers and Git to provide a complete picture
          of where teams are stuck and contributing to longer cycle times.
        </p>
      </div>
      {/* Video 2 */}
      <div className="max-w-4xl mx-auto mb-12">
        <video
          controls
          className="w-full rounded-lg border border-[#2A2A2A] shadow-lg"
          poster="/images/insight-thumb2.png"
        >
          <source src="/videos/securevideo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-xs text-center text-gray-400 mt-2">
          Insights measure team performance across various metrics so individual devs, managers,
          and leadership can monitor and improve.
        </p>
      </div>
      {/* Podcast Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Text block */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Software is a Team Sport</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            In this podcast series we talk to developers, engineers, and team leads from across the
            globe to uncover how great teams make teams work better together.
          </p>
        </div>
        {/* Video thumbnail or embedded player */}
        <div className="w-full">
          <video
            controls
            className="w-full rounded-lg border border-[#2A2A2A] shadow-md"
            poster="/images/podcast-thumb.png"
          >
            <source src="/videos/podcast-preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* Secure and Scalable */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">Secure and Scalable</h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Security and control is important to your team and ours. GitKraken provides all the tools
          and resources you need to safely manage the platform and maximize the value your team receives.
        </p>
      </div>
      <div className="mb-16 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Secure and Scalable</h2>
        <p className="text-sm sm:text-base text-gray-300">
          Security and control is important to your team and ours. GitKraken provides all the tools
          and resources you need to safely manage the platform and maximize the value your team receives.
        </p>
      </div>
      {/* Icon Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
        {secureFeatures.map((item, index) => (
          <div
            key={index}
            className="border border-[#2A2A2A] bg-[#1A1A1A] rounded-lg p-5 hover:shadow-md transition"
          >
            <h3 className="text-base font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
      {/* Better DevEx Card */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          Better DevEx, Better Outcomes
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-300 mb-6 max-w-3xl mx-auto">
          A better developer experience goes a long way in retaining talent. By reducing roadblocks like
          waiting on PR reviews and helping to prioritize important work, we enable devs to work better
          together and enjoy their work more.
        </p>
        <div className="bg-[#1B1B1B] border border-[#444] rounded-xl overflow-hidden p-6 flex flex-col lg:flex-row gap-6 items-center">
          {/* Left side image overlay */}
          <div className="relative w-full lg:w-1/2 h-64 lg:h-80 overflow-hidden rounded-lg">
            <Image
              src="/images/secureimage.png"
              alt="Johnson Controls DevEx"
              fill
              className="object-cover" />
          </div>        
          {/* Right side quote */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/images/angelo.png"
                alt="Angela Lado"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">Angela Lado</p>
                <p className="text-xs text-gray-400">Design Manager, Johnson Controls</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              “With GitKraken DevEx platform, everything is very visual. It shows you where to
              invest devs, what’s new, what you can delete, what’s changing. It’s made life much
              easier and we can find issues so much faster.”
            </p>
            <a href="#" className="text-purple-400 text-sm font-medium hover:underline">
              Learn More →
            </a>
          </div>
        </div>
      </div>
      {/* Final CTA */}
      <div className="text-center">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          What could your devs be building with 6 extra hours each week?
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          See why enterprises across the globe optimize and improve team workflows with GitKraken.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-sm font-medium transition">
            Start Free Trial with Your Team
          </button>
          <button className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-3 rounded-md text-sm font-medium transition">
            Get a Guided Tour
          </button>
        </div>
      </div>
    </section>
  );
};

    
export default Securedevteam;
