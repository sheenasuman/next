'use client';
import Featureplan from '../../../components/includes/Featureplan';
import { useState } from 'react';

type PlanValue = string | boolean;
type FeatureRow = { name: string; values: PlanValue[] };
type FeatureCategory = { category: string; items: FeatureRow[] };

const plans = ['Community', 'Pro', 'Advanced', 'Business'];
const tabs = ['GitKraken Desktop', 'GitLens', 'GitKraken.dev', 'GitKraken CLI'];

const featuresPart4: FeatureCategory[] = [
  {
    category: 'Repository Access',
    items: [
      {
        name: 'Work with local repos and public remotes',
        values: [true, true, true, true],
      },
      {
        name: 'Work with private remotes',
        values: [false, true, true, true],
      },
    ],
  },
  {
    category: 'Git Productivity',
    items: [
      { name: 'Local Workspaces', values: [true, true, true, true] },
      { name: 'Cloud Workspaces', values: [false, 'Public Repos Only', true, true] },
      { name: 'Merge Conflict Tool', values: [false, 'Public Repos Only', true, true] },
      { name: 'Merge Conflict Detail Editor', values: [false, false, true, true] },
      { name: 'Code editor', values: [false, 'Public Repos Only', true, true] },
      { name: 'Pull or fetch multiple repos', values: [true, true, true, true] },
      { name: 'Multiple Profiles', values: [false, true, true, true] },
      { name: 'Editor support', values: [false, 'Public Repos Only', true, true] },
      { name: 'GPG & S/MIME', values: [false, 'Public Repos Only', true, true] },
      { name: 'Git Worktree', values: [false, 'Public Repos Only', true, true] },
      { name: 'File History & Blame', values: [false, 'Public Repos Only', true, true] },
      { name: 'View & copy pull requests', values: [false, 'Public Repos Only', true, true] },
      { name: 'Hiding Local Only', values: [false, 'Public Repos Only', true, true] },
      { name: 'Auto-Gen SSH key', values: [false, true, true, true] },
      { name: 'Git hooks support', values: [false, false, true, true] },
      { name: 'Smartfetch', values: [false, true, true, true] },
      { name: 'Visual Interactive Rebase', values: [false, 'Public Repos Only', true, true] },
      { name: 'Visual Interactive Cherry Pick', values: [false, 'Public Repos Only', true, true] },
      { name: 'One-click undo & redo Git operations', values: [false, 'Public Repos Only', true, true] },
      { name: 'Command Palette', values: [false, true, true, true] },
      { name: 'GPG commit signing', values: [false, true, true, true] },
      { name: 'Keyboard shortcuts', values: [false, true, true, true] },
      { name: 'Dark, Light & Custom Themes', values: [true, true, true, true] },
    ],
  },
  {
    category: 'GitKraken AI',
    items: [
      { name: 'Weekly AI token allowance per user', values: ['', '250,000', '500,000', '1,000,000'] },
      { name: 'GitKraken-provided AI model', values: ['', 'Gemini 2.0 Flash', 'Gemini 2.0 Flash', 'Gemini 2.0 Flash'] },
      { name: 'AI Commit Messages', values: [false, true, true, true] },
      { name: 'AI Merge Conflict Resolution', values: [false, true, true, true] },
      { name: 'AI PR Title and Description Generation', values: [false, true, true, true] },
      { name: 'AI Patch Messages', values: [false, true, true, true] },
      { name: 'AI Commit Suggestions', values: [false, true, true, true] },
      { name: 'AI Changelog (coming soon)', values: [false, false, false, true] },
      { name: 'Bring your own key (user level)', values: [false, false, false, true] },
      { name: 'Bring your own key (org level)', values: [false, false, false, true] },
      { name: 'Private AI model provider (user level) [coming soon]', values: [false, false, false, true] },
      { name: 'Private AI model provider (org level) [coming soon]', values: [false, false, false, true] },
      { name: 'Set/include AI domains (org level) [coming soon]', values: [false, false, false, true] },
    ],
  },
];

export default function FullFeatureComparison() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="bg-black text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-center">GitKraken Features</h2>
        <p className="text-gray-400 text-center mb-8">Compare what’s available in each plan</p>

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
        <Featureplan/>

        {/* Table */}
        {featuresPart4.map((section) => (
          <div key={section.category} className="mb-10">
            <h3 className="text-lg font-semibold border-b border-gray-700 mb-4 pb-2">{section.category}</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-2 font-medium text-gray-300">Feature</th>
                    {plans.map((plan) => (
                      <th key={plan} className="p-2 font-medium text-gray-300 text-center">{plan}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.items.map((item) => (
                    <tr key={item.name} className="border-t border-gray-700">
                      <td className="p-2">{item.name}</td>
                      {item.values.map((val, idx) => (
                        <td key={idx} className="p-2 text-center">
                          {val === true ? '✔️' : val === false ? '' : <span className="italic text-gray-400">{val}</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
