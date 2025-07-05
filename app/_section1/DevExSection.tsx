'use client';
import Image from 'next/image';
import React from 'react';
import { Monitor, Terminal, Smartphone, Code2 } from 'lucide-react';

const platforms = [
  {
    name: 'Desktop',
    label: 'GitKraken Desktop',
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    name: 'VS Code',
    label: 'GitLens',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    name: 'Terminal',
    label: 'GitKraken CLI',
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    name: 'Web/Mobile',
    label: 'GitKraken.dev',
    icon: <Smartphone className="w-6 h-6" />,
  },
];

export default function DevExSection() {
  return (
    <section className="bg-[#111] text-white px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Our <span className="text-purple-400">DevEx platform</span> meets you where you work – across the desktop, IDE & command line
        </h2>
      </div>

      {/* Platform Grid */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {platforms.map((platform, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gradient-to-br from-[#1f1f1f] to-[#222] border border-gray-700 rounded-xl px-4 py-4 min-w-[120px] shadow-md hover:shadow-lg transition"
          >
            <div className="text-purple-400 mb-2">{platform.icon}</div>
            <div className="text-sm font-medium text-white">{platform.name}</div>
            <div className="text-xs text-gray-400">{platform.label}</div>
          </div>
        ))}
      </div>

      {/* Image with overlay button */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-5xl rounded-xl overflow-hidden">
          <Image
            src="/images/launchpad-ui.png" // replace with your actual image path
            alt="GitKraken Launchpad"
            width={1200}
            height={600}
            className="w-full rounded-xl"
          />

          {/* Centered CTA Button */}
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            bg-black/80 text-white px-6 py-3 rounded-full border-2 border-purple-500
            hover:bg-purple-600 hover:border-white transition-all shadow-xl">
            <span className="font-semibold">See it in action</span>
            <span className="text-purple-400 ml-2 font-medium">40 Seconds</span>
          </button>
        </div>
      </div>
    </section>
  );
}
