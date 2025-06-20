'use client';

import { useState } from 'react';

const planTitles = ['Community', 'Pro', 'Advanced', 'Business'];
const tabs = ['GitKraken Desktop', 'GitLens', 'GitKraken.dev', 'GitKraken CLI'];

type FeatureRow = {
  label: string;
  values: (string | boolean)[];
};

type FeatureCategory = {
  category: string;
  features: FeatureRow[];
};

const featuresByPlan: FeatureCategory[] = [
  {
    category: 'Repository Access',
    features: [
      { label: 'Work with local repos and public remotes', values: [true, true, true, true] },
      { label: 'Work with private remotes', values: [false, true, true, true] },
    ],
  },
  {
    category: 'Git Productivity',
    features: [
      { label: 'Local Workspaces', values: [true, true, true, true] },
      { label: 'Cloud Workspaces', values: [false, 'Public Repos Only', true, true] },
      { label: 'Merge Conflict Tool', values: [false, 'Public Repos Only', true, true] },
      { label: 'Pull or fetch multiple repos', values: [true, true, true, true] },
      { label: 'Auto-Gen SSH key', values: [false, true, true, true] },
      { label: 'Command Palette', values: [false, true, true, true] },
    ],
  },
];

const featuresPart2: FeatureCategory[] = [
  {
    category: 'GitKraken AI',
    features: [
      { label: 'Weekly AI token allowance per user', values: ['', '250,000', '500,000', '1,000,000'] },
      { label: 'GitKraken-provided AI model', values: ['', 'Gemini 2.0 Flash', 'Gemini 2.0 Flash', 'Gemini 2.0 Flash'] },
      { label: 'AI Commit Messages', values: [false, true, true, true] },
      { label: 'AI PR Title and Description Generation', values: [false, true, true, true] },
    ],
  },
  {
    category: 'Team Collaboration',
    features: [
      { label: 'Code Suggest', values: [false, true, true, true] },
      { label: 'Share Cloud Workspaces', values: [false, true, true, true] },
      { label: 'Cloud Patches', values: [false, true, true, true] },
    ],
  },
];

export default function FeatureComparison() {
  const [activeTab, setActiveTab] = useState('GitKraken Desktop');

  return (
    <section className="bg-[#0F0F0F] text-white px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-1">GitKraken Features</h2>
        <p className="text-gray-400 mb-6 text-sm">
          Compare features by plan across our dev tools
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-2 flex-wrap mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full border transition text-sm ${
                activeTab === tab
                  ? 'bg-white text-black border-white'
                  : 'border-gray-600 text-gray-400 hover:border-white hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Feature Table Header */}
        <div className="grid grid-cols-5 gap-4 text-sm border-b border-gray-700 py-2 text-left">
          <div className="font-medium">Feature By Plan</div>
          {planTitles.map((plan, i) => (
            <div key={i} className="text-center font-semibold text-white">
              {plan}
              <div>
                <button className="mt-1 px-3 py-1 text-xs border border-purple-400 rounded text-purple-400 hover:bg-purple-400 hover:text-white">
                  {plan === 'Community' ? 'Download Free' : `Buy ${plan}`}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features - Part 1 */}
        {featuresByPlan.map((section, i) => (
          <div key={i} className="text-sm text-left">
            <div className="text-white mt-8 font-semibold mb-2">{section.category}</div>
            {section.features.map((feature, fi) => (
              <div key={fi} className="grid grid-cols-5 gap-4 border-b border-gray-800 py-2 items-start">
                <div className="text-white">{feature.label}</div>
                {feature.values.map((value, pi) => (
                  <div key={pi} className="text-center">
                    {value === true ? (
                      <span className="text-green-400">✔</span>
                    ) : value === false ? (
                      ''
                    ) : (
                      <span className="text-gray-400 italic">{value}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Features - Part 2 */}
      <div className="max-w-6xl mx-auto text-sm mt-16">
        {featuresPart2.map((section, i) => (
          <div key={i} className="mb-12">
            <div className="text-white text-base font-semibold mb-3">{section.category}</div>
            {section.features.map((feature, fi) => (
              <div key={fi} className="grid grid-cols-5 gap-4 border-b border-gray-800 py-2 items-start">
                <div className="text-white">{feature.label}</div>
                {feature.values.map((value, pi) => (
                  <div key={pi} className="text-center">
                    {value === true ? (
                      <span className="text-green-400">✔</span>
                    ) : value === false ? (
                      ''
                    ) : (
                      <span className="text-gray-400 italic">{value}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
