'use client';

import { useState } from 'react';
import { ChevronDown, Monitor, Code, Terminal, Globe, Puzzle } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const tools = [
    { name: 'GitKraken Desktop', icon: <Monitor size={18} />, link: '#GitkrakenDesktop' },
    { name: 'GitLens for VS Code', icon: <Code size={18} />, link: '#GitlensforVScode' },
    { name: 'GitKraken CLI', icon: <Terminal size={18} />, link: '#GitkrakenCLI' },
    { name: 'GitKraken.dev', icon: <Globe size={18} />, link: '#GitkrakenDev' },
    { name: 'GitKraken Browser Extension', icon: <Puzzle size={18} />, link: '#GitkrakenBroExt' },
  ];

  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between fixed top-0 w-full z-50">
         <div className="flex items-center gap-6">
        <button className="bg-[#2A2A2A] px-4 py-2 rounded-md font-semibold">Visualize</button>
        <span className="text-gray-300 hover:text-white cursor-pointer">Focus</span>
        <span className="text-gray-300 hover:text-white cursor-pointer">Collaborate</span>
        <span className="text-gray-300 hover:text-white cursor-pointer">Connect</span>
      </div>      
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 border border-purple-600 rounded-md px-4 py-2 cursor-pointer hover:shadow-md transition bg-[#1E1E1E]"
        >
          <Image
            src="/images/giticon.svg"
            alt="icon"
            width={24}
            height={24}
            className="bg-white rounded-full"
          />
          <span className="text-sm font-semibold text-white">
            Try any of our tools for free
          </span>
          <ChevronDown className="w-4 h-4 text-white" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 bg-[#0F0F0F] border border-gray-700 rounded-md shadow-lg w-72 z-50">
            <ul className="py-2">
              {tools.map((tool, index) => (
                <li key={index}>
                  <a
                    href={tool.link}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-[#1A1A1A] cursor-pointer text-white"
                    onClick={() => setIsOpen(false)} 
                  >
                    <span className="text-purple-400">{tool.icon}</span>
                    <span className="text-sm">{tool.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
      

