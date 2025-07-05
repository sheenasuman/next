import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Monitor, Code, Terminal, Globe, Puzzle } from 'lucide-react';
import Link from 'next/link';


interface Tool {
  name: string;
  icon: React.ReactNode;
}
const tools = [
    { name: 'GitKraken Desktop', icon: <Monitor size={18} /> },
    { name: 'GitLens for VS Code', icon: <Code size={18} /> },
    { name: 'GitKraken CLI', icon: <Terminal size={18} /> },
    { name: 'GitKraken.dev', icon: <Globe size={18} /> },
    { name: 'GitKraken Browser Extension', icon: <Puzzle size={18} /> },
  ];


export default function Tabs() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="bg-black text-white px-6 py-4 flex items-center justify-evenly gap-[30px] sticky top-0 w-full z-50 shadow-md">
      
      {/* Left buttons */}
      <div className="flex items-center gap-6">
        <button className="bg-[#2A2A2A] px-4 py-2 rounded-md font-semibold">
          Visualize
        </button>
        <span className="text-gray-300 hover:text-white cursor-pointer">Focus</span>
        <span className="text-gray-300 hover:text-white cursor-pointer">Collaborate</span>
        <span className="text-gray-300 hover:text-white cursor-pointer">Connect</span>
      </div>

      {/* CTA Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
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

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-[#0F0F0F] border border-gray-700 rounded-md shadow-lg w-72 z-50">
            <ul className="py-2">
              {tools.map((tool, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-[#1A1A1A] cursor-pointer text-white"
                >
                  <span className="text-purple-400">{tool.icon}</span>
                  <span className="text-sm">{tool.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
