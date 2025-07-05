'use client';

import Image from "next/image";
import React from "react";
import Downloadbutton from "../../../components/includes/Downloadbutton";
import Companylogos from "../../../components/includes/Companylogos";

const features = [
  {
    img: "/images/Gitdesc1",
    title: "Visualize Git, Minimize Mistakes",
    desc: "Turn a complex web of Git commands into a clear, navigable map of your project’s history.",
  },
  {
    img: "/images/Gitdesc2",
    title: "Unblock PR & Code Reviews",
    desc: "Expedite feedback & fill in the missing context you need for swifter code reviews.",
  },
  {
    img: "/images/Gitdesc3",
    title: "Manage Multiple Repos",
    desc: "Group your repos together to see the status of branches, issues, & pull requests all in one place.",
  },
  {
    img: "/images/Gitdesc4",
    title: "Collaborate in Shared Workspaces",
    desc: "Easily onboard team members and share repositories in collaborative environments.",
  },
  {
    img: "/images/Gitdesc5",
    title: "Get Git Insights",
    desc: "Track commit history, visualize contributors, and gain insights into your repo activity.",
  },
];

export default function GitKrakenDesktopSection() {
  return (
    <>
      <section className="bg-[#1a1a1a] text-white py-20 px-4 sm:px-6 md:px-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Try GitKraken Desktop.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-fuchsia-500">
              It's Free!
            </span>
          </h2>
        </div>
        <Downloadbutton />
        <div className="flex justify-center relative mt-10">
          <Image
            src="/images/Gitdesc0"
            alt="GitKraken Desktop UI"
            width={600}
            height={322}
            className="rounded-xl shadow-xl"
          />

          {/* Play Button
          <button
            aria-label="Play demo video"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 border border-gray-400 text-white px-6 py-2 rounded-full backdrop-blur-md hover:scale-105 transition"
          >
            ▶️ See it in action <span className="ml-2 text-sm text-purple-300">50 Seconds</span>
          </button> */}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-md uppercase text-gray-400">Trusted by industry leaders</p>
          <div className="flex justify-center gap-16 flex-wrap text-sm font-medium">
            <div>
              <span className="text-white text-xl font-bold">#1</span><br />
              Mac, Linux, Windows<br />
              Git Client
            </div>
            <div>
              <span className="text-white text-xl font-bold">100k+</span><br />
              Organizations
            </div>
            <div>
              <span className="text-white text-xl font-bold">40M+</span><br />
              Developers
            </div>
          </div>
        </div>

        <Companylogos />
      </section>

      <section className="bg-[#121212] py-12 px-4 md:px-10 text-white">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#1E1E1E] rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-colors duration-300"
            >
              <div className="relative w-full h-40 md:h-48">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}

          {/* CTA Card */}
         
          <div className="flex flex-col justify-between bg-[#1E1E1E] rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-colors duration-300 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-4">Try GitKraken Desktop Free!</h3>
              <Downloadbutton />
            </div>
            <p className="text-xs text-gray-400 mt-4">Available on: Windows, Mac or Linux</p>
          </div>
        </div>
      </section>
    </>
  );
}
