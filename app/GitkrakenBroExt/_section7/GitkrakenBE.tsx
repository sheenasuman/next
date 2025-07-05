import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { FaChrome, FaFirefoxBrowser, FaEdge } from "react-icons/fa";
import Companylogos from "../../../components/includes/Companylogos";


const features = [
  {
    title: "Track PRs",
    description:
      "The GitKraken Browser Extension provides the necessary context, such as PR statuses, from your favorite web browser for faster code reviews.",
    image: "/images/GitBE1", 
  },
  {
    title: "View PRs in GitKraken or VS Code",
    description:
      "Casually review code revisions directly from the browser and even open them in GitKraken Desktop or GitLens in VS Code.",
    image: "/images/GitBE2",
  },
  {
    title: "Work Effectively with Providers",
    description:
      "Get links directly on GitHub, GitLab, Azure DevOps, & Bitbucket to open repos as well as commits in GitKraken apps.",
    image: "/images/GitBE3",
  },
];
const GitKrakenExtension = () => {
  return (
    <section className="bg-[#121212] text-white py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">
        Try GitKraken Browser Extension.{" "}
        <span className="text-transparent bg-gradient-to-r from-[#00F0FF] to-[#9D4DFF] bg-clip-text">
          It’s Free!
        </span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          type="button"
          title="Install GitKraken Extension for Chrome"
          className="flex items-center gap-2 px-6 py-3 bg-[#7B2FF7] hover:bg-[#9D4DFF] text-white rounded-md text-sm font-medium"
        >
          <FaChrome className="text-lg" />
          Add to Chrome
        </button>
        <button
          type="button"
          title="Install GitKraken Extension for Firefox"
          className="flex items-center gap-2 px-6 py-3 bg-[#7B2FF7] hover:bg-[#9D4DFF] text-white rounded-md text-sm font-medium"
        >
          <FaFirefoxBrowser className="text-lg" />
          Add to Firefox
        </button>
        <button
          type="button"
          title="Install GitKraken Extension for Microsoft Edge"
          className="flex items-center gap-2 px-6 py-3 bg-[#7B2FF7] hover:bg-[#9D4DFF] text-white rounded-md text-sm font-medium"
        >
          <FaEdge className="text-lg" />
          Add to Microsoft Edge
        </button>
      </div>

      <div className="flex justify-center">
        <div className="rounded-xl overflow-hidden border border-[#1E1E1E] shadow-xl w-full max-w-4xl">
          <Image
            src="/images/GitBE0" 
            alt="GitKraken Extension Preview"
            width={600}
            height={350}
            className="object-cover w-full"
          />
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-6 tracking-widest">TRUSTED BY INDUSTRY LEADERS</p>
        <div className="mt-8">
        <Companylogos />
      </div>                   
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border border-[#333333] rounded-lg overflow-hidden bg-[#1A1A1A] hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-48 relative">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>   
            <div className="bg-[#1B1B1B] border border-[#333] rounded-lg py-10 px-6 text-center max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
              Try GitKraken Browser Extension Free!
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                className="flex items-center gap-2 px-6 py-3 bg-[#7B2FF7] hover:bg-[#9D4DFF] text-white rounded-md text-sm font-medium"
              >
                <FaChrome className="text-lg" />
                Add to Chrome
              </button>
              <button
                type="button"
                className="flex items-center gap-2 px-6 py-3 bg-[#7B2FF7] hover:bg-[#9D4DFF] text-white rounded-md text-sm font-medium"
              >
                <FaFirefoxBrowser className="text-lg" />
                Add to Firefox
              </button>
              <button
                type="button"
                className="flex items-center gap-2 px-6 py-3 bg-[#7B2FF7] hover:bg-[#9D4DFF] text-white rounded-md text-sm font-medium"
              >
                <FaEdge className="text-lg" />
                Add to Microsoft Edge
              </button>
            </div>
          </div>
        </section>
      );
    };
export default GitKrakenExtension;
