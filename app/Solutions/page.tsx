'use client';
import { useState } from 'react';
import { ChevronDown, ExternalLink, Terminal, LayoutGrid } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => setShowDropdown(menu);
  const handleMouseLeave = () => setShowDropdown(null);

  return (
    <nav className="bg-black text-white px-8 py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img src="/logo.svg" alt="GitKraken" className="h-6" />
      </div>

      {/* Menu */}
      <div className="flex space-x-8 text-sm items-center">
        {['Dev Tools', 'Planning Tools', 'Solutions', 'Git Resources'].map((item) => (
          <div
            key={item}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 font-medium">
              {item} <ChevronDown size={14} />
            </button>

            {showDropdown === item && (
              <div className="absolute top-full left-0 mt-4 w-[500px] bg-[#0E0E0E] text-white border border-gray-700 rounded-lg shadow-lg p-6 z-50 flex">
                {/* Products */}
                <div className="flex-1 pr-4">
                  <h3 className="text-xs font-semibold text-gray-400 mb-3">PRODUCTS</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 hover:text-purple-400 cursor-pointer">
                      <LayoutGrid size={16} className="text-purple-300" />
                      Git Integration for Jira
                    </li>
                    <li className="flex items-center gap-2 hover:text-purple-400 cursor-pointer">
                      <Terminal size={16} className="text-purple-300" />
                      Pricing <ExternalLink size={14} className="ml-1 inline" />
                    </li>
                  </ul>
                </div>

                {/* Divider */}
                <div className="w-px bg-gray-700 mx-4"></div>

                {/* Features */}
                <div className="flex-1 pl-4">
                  <h3 className="text-xs font-semibold text-gray-400 mb-3">FEATURES</h3>
                  <ul className="space-y-3">
                    <li className="hover:text-purple-400 cursor-pointer">Sprint Planning & Execution</li>
                    <li className="hover:text-purple-400 cursor-pointer">Individual Productivity</li>
                    <li className="hover:text-purple-400 cursor-pointer">Dev Visibility</li>
                    <li className="hover:text-purple-400 cursor-pointer">Security & Admin</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Static Links */}
        <Link href="/pricing">
          <span className="hover:underline cursor-pointer">Pricing</span>
        </Link>
        <Link href="/signin">
          <span className="hover:underline cursor-pointer">Sign In</span>
        </Link>
      </div>
    </nav>
  );
}
