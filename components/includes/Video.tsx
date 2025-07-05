'use client';

import { useState } from 'react';
import Image from 'next/image';



type Tab = 'desktop' | 'vscode' | 'terminal' | 'webmobile';

const tabs: { id: Tab; title: string; subtitle: string; icon: string }[] = [
  { id: 'desktop', title: 'Desktop', subtitle: 'GitKraken', icon: '/images/desk.svg' },
  { id: 'vscode', title: 'VS Code', subtitle: 'GitLens', icon: '/images/vs.svg' },
  { id: 'terminal', title: 'Terminal', subtitle: 'GitKraken CLI', icon: '/images/terminal.svg' },
  { id: 'webmobile', title: 'Web/Mobile', subtitle: 'GitKraken.dev', icon: '/images/webmob.svg' },
];

const tabImages: Record<Tab, string> = {
  desktop: '/images/desktop1.png',
  vscode: '/images/vscode1.png',
  terminal: '/images/terminal1.png',
  webmobile: '/images/webmobile1.png', 
};

export default function GKPlatformTabs() {
  const [activeTab, setActiveTab] = useState<Tab>('desktop');
  return (
    <div className="w-full max-w-3xl mx-auto text-white">
             <h2 className="text-xl font-semibold text-gray-300 flex justify-center">
                 Our DevEx platform meets you where you work – across the desktop,IDE&amp;command line
             </h2>        
      {/* Tab Buttons */}
          <div className="flex justify-between bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#111111]
                    rounded-xl shadow-md">
                    {tabs.map((tab) => (
            <button      key={tab.id}
                  onMouseEnter={() => setActiveTab(tab.id)} // 
                   className={`flex items-center gap-3 px-4 py-3 rounded-lg transition duration-300 ${
                   activeTab === tab.id
                   ? 'border-b-4 border-purple-500 text-white'
                   : 'text-gray-400 hover:text-white'
                    }`}    >
                 
                 <Image src={tab.icon} alt={tab.title} width={32} height={32} />
                 
                <div className="flex flex-col items-start text-left">
                      <span className="text-sm font-semibold">{tab.title}</span>
                       <span className="text-xs">{tab.subtitle}</span>
                </div>
            </button>
       ))}
</div>



      {/* Image Preview */}
      <div className=" flex justify-center">
        <Image
          src={tabImages[activeTab]}
          alt={activeTab}
          width={800}
          height={600}
          className="rounded-lg shadow-xl object-cover mb-5"
        />
      </div>
    </div>
    
  );
}
