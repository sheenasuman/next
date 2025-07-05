'use client';

import React from 'react';
import Image from 'next/image';
import Companylogos from '../../../components/includes/Companylogos';

const features = [
  {
    title: 'Navigate Git, Minimize Mistakes',
    description: "GitLens turns complex Git commands into a clear and searchable map of your project's history.",
    image: '/images/GitVS1',
  },
  {
    title: 'Unblock PR & Code Reviews',
    description: "GitLens turns complex Git commands into a clear and searchable map of your project's history.",
    image: '/images/GitVS2',
  },
  {
    title: 'Manage Multiple Repos',
    description: "GitLens lets you see all your issues, WIPs, and pull requests in one place.",
    image: '/images/GitVS3',
  },
  {
    title: 'Navigate Git, Minimize Mistakes',
    description: "GitLens turns complex Git commands into a clear and searchable map of your project's history.",
    image: '/images/GitVS4',
  },
];

export default function GitKrakenGitLensSection() {
  return (
    <div className="bg-black text-white px-4 py-16 sm:px-6 lg:px-12">
      <section className="bg-[#1a1a1a] text-white py-20 px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">
          Try GitLens for VS Code.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-fuchsia-500">
              It's Free!
            </span>
          </h2>
        </div>

        {/* Image */}
        <div className="flex justify-center relative mt-10">
          <Image
            src="/images/GitVS0"
            alt="GitKraken Desktop UI"
            width={600}
            height={322}
            className="rounded-xl shadow-xl"
          />
        </div>

        {/* Logos */}
        <Companylogos />

        {/* Feature Cards + CTA */}
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 mt-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg overflow-hidden shadow-sm hover:border-purple-500 transition-all"
            >
              <div className="relative w-full h-40 md:h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-[#1F012C] to-[#0E0032] border border-[#2A2A2A] rounded-lg p-6 flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-semibold mb-6 text-white">Try GitLens Free!</h3>
            <div className="flex gap-4 flex-col sm:flex-row">
              <a
                href="#"
                className="bg-[#7C3AED] hover:bg-[#8B5CF6] text-white text-sm font-medium px-5 py-2 rounded-lg transition"
              >
                ⬇ Install GitLens in VS Code
              </a>
              <a
                href="#"
                className="bg-[#6366F1] hover:bg-[#818CF8] text-white text-sm font-medium px-5 py-2 rounded-lg transition"
              >
                🚀 Start Multi-User Trial
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
