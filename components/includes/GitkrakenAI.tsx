'use client';

import Image from 'next/image';

export default function GitKrakenAISection() {
  return (
    <section className="bg-gray-900 rounded-lg p-4 max-w-4xl mx-auto flex flex-col md:flex-row
                        items-center justify-between gap-6 border border-gray-100">
    <div className="max-w-md space-y-2">
      <h2 className="text-3xl font-semibold leading-tight flex items-center gap-2">
        <span className="text-blue-400">✨</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
          GitKraken
        </span>
        <span>AI</span>
      </h2>
      <p className="text-gray-300 text-sm leading-snug">
        GitKraken AI works for you to seamlessly orchestrate your workflows. 
        Automagically generate commit messages, stash messages, changelogs, and pull requests.
      </p>
      <a
        href="#"
        className="inline-block px-5 py-2 border border-purple-500 rounded-md text-white hover:bg-purple-600 transition text-sm"
      >
        Try GitKraken AI
      </a>
    </div>
  
    <div className="relative">
      <img
        src="/images/gitaima.png"
        alt="GitKraken AI demo"
        className="w-64 rounded-lg shadow-xl rotate-1"
      />
      <div className="absolute -top-3 -right-3 w-3 h-3 bg-gray-700 rounded-full" />
      <div className="absolute bottom-8 right-12 w-2 h-2 bg-gray-700 rounded-full" />
    </div>
  </section>
  
  );
}