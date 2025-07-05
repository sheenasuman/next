'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Featurecards from "../../components/includes/Featurecards"; 
export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const handleMouseEnter = (menu: string) => setOpenMenu(menu);
  const handleMouseLeave = () => setOpenMenu(null);

  return (
    <header className="bg-black text-white px-8 py-4 relative z-50 font-poppins">
      <div className="flex items-center justify-evenly ">        
        <div className="flex items-center space-x-4">
      <Link href="https://www.gitkraken.com" target="_blank" rel="noopener noreferrer">
        <Image 
          src="/images/gitkraken.svg" 
          alt="GitKraken Logo" 
          width={120} 
          height={40} 
          className="cursor-pointer" />
      </Link>
    </div>      
        <nav className="flex items-center space-x-5 text-md font-poppins">
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('devtools')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-[#9D4DFF] font-poppins">Dev Tools ▾</button>
            {openMenu === 'devtools' && (
              <div className="absolute left-0 top-full mt-4 bg-black shadow-lg p-6 rounded-lg flex space-x-12 w-[1000px]">
                <Featurecards />               
                <div>
                  <h4 className="text-xs text-gray-500 mb-2">PRODUCTS</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="#">GitKraken Desktop</Link></li>
                    <li><Link href="#">GitLens for VS Code</Link></li>
                    <li><Link href="#">GitKraken CLI</Link></li>
                    <li><Link href="#">GitKraken.dev</Link></li>
                    <li><Link href="#">GitKraken Browser Extension</Link></li>
                  </ul>
                </div>              
                <div>
                  <h4 className="text-xs text-gray-500 mb-2">FEATURES</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="#">Git Simplified</Link></li>
                    <li><Link href="#">Individual Productivity</Link></li>
                    <li><Link href="#">Team Collaboration</Link></li>
                    <li><Link href="#">PR & Code Review</Link></li>
                    <li><Link href="#">Security & Admin</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>          
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('planning')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-[#9D4DFF]">Planning Tools ▾</button>
            {openMenu === 'planning' && (
              <div className="absolute left-0 top-full mt-4 bg-[#151515] border border-gray-700 rounded-md shadow-xl p-6 w-[500px] flex space-x-6">
                  <div className="w-1/2">
                  <h4 className="text-xs text-gray-400 uppercase mb-2">Products</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2 hover:text-[#9D4DFF] transition-colors">
                    <Image src="/images/git.svg" alt="GitKraken" width={30} height={40} />
                      <Link href="#">Git Integration for Jira</Link>
                    </li>
                    <li className="flex items-center gap-2 hover:text-[#9D4DFF] transition-colors">
                    <Image src="/images/pricing.svg" alt="GitKraken" width={30} height={40} />
                      <Link href="#">Pricing <sup>↗</sup></Link>
                    </li>
                  </ul>
                </div>
                {/* Features */}
                <div className="w-1/2 border-l border-gray-700 pl-6">
                  <h4 className="text-xs text-gray-400 uppercase mb-2">Features</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="hover:text-[#9D4DFF]"><Link href="#">Sprint Planning & Execution</Link></li>
                    <li className="hover:text-[#9D4DFF]"><Link href="#">Individual Productivity</Link></li>
                    <li className="hover:text-[#9D4DFF]"><Link href="#">Dev Visibility</Link></li>
                    <li className="hover:text-[#9D4DFF]"><Link href="#">Security & Admin</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('solutions')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-[#9D4DFF]">Solutions ▾</button>
            {openMenu === 'solutions' && (
              <div className="absolute left-0 top-full mt-4 bg-[#151515] border border-gray-700 rounded-md shadow-xl p-6 w-[600px] flex space-x-8">
                {/* Left Column */}
                <div className="w-1/2">
                  <ul className="space-y-3 text-sm">
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Commit Graph</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Launchpad</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Workspaces</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Code Suggest</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Cloud Patches</Link></li>
                  </ul>
                </div>

                {/* Right Column */}
                <div className="w-1/2 border-l border-gray-700 pl-6">
                  <ul className="space-y-3 text-sm">
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">✨ GitKraken AI</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Insights</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Automations</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Codemaps</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Security Controls</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>          
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('resources')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-[#9D4DFF]">Git Resources ▾</button>
            {openMenu === 'resources' && (
              <div className="absolute left-0 top-full mt-4 bg-[#151515] border border-gray-700 rounded-md shadow-xl p-6 w-[600px] flex space-x-8">
                {/* Left Column */}
                <div className="w-1/2">
                  <ul className="space-y-3 text-sm">
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Workshops</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Learn Git Library</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Git Blog</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">GitKon</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Refer and Earn 💰</Link></li>
                  </ul>
                  </div>
                <div className="w-1/2 border-l border-gray-700 pl-6">
                  <ul className="space-y-3 text-sm">
                    <li><Link href="#">Sample Customers</Link></li>
                    <li><Link href="#">Customer Stories</Link></li>
                    <li><Link href="#">Developer Problems</Link></li>
                    <li><Link href="#">GitKraken Labs</Link></li>
                    <li><Link href="#">Help Center</Link></li>
                  </ul>
                </div>        
                {/* Right Column */}
                <div className="w-1/2 border-l border-gray-700 pl-6">
                  <ul className="space-y-3 text-sm">
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Sample Customers</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Customer Stories</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Developer Problems</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">GitKraken Labs</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Help Center</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <Link href="/pricing" className="hover:text-purple-400">Pricing</Link>          
          <Link href="/Sign In"className="hover:text-purple-400">Sign In</Link>
          <button className="text-lg">🔍</button>
        </nav>
      </div>
    </header>
  );
}