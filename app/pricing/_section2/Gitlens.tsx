'use client';

import React from 'react';
import { Check } from 'lucide-react';

type PlanValue = string | boolean;
type FeatureRow = { name: string; values: PlanValue[] };
type FeatureCategory = { category: string; items: FeatureRow[] };

const plans = ['Free', 'Pro', 'Team', 'Enterprise'];

const data: FeatureCategory[] = [
  {
    category: 'IDE Compatibility',
    items: [
      { name: 'VS Code', values: [true, true, true, true] },
      { name: 'IntelliJ', values: [true, true, true, true] },
      { name: 'VS', values: [true, true, true, true] },
      { name: 'NeoVim', values: [true, true, true, true] },
    ],
  },
  {
    category: 'GitLens',
    items: [
      { name: 'Current Line Blame', values: [true, true, true, true] },
      { name: 'Git Code Lens', values: [true, true, true, true] },
      { name: 'Status Bar Blame', values: [true, true, true, true] },
      { name: 'Hovers', values: [true, true, true, true] },
      { name: 'File Blame', values: [true, true, true, true] },
      { name: 'File Changes', values: [true, true, true, true] },
      { name: 'File Heatmap', values: [true, true, true, true] },
      { name: 'Revision Navigator', values: [true, true, true, true] },
      { name: 'Interactive Rebase Editor', values: [true, true, true, true] },
      { name: 'Home View', values: [true, true, true, true] },
      { name: 'Commits View', values: [true, true, true, true] },
      { name: 'Inspect View', values: [true, true, true, true] },
      { name: 'Repositories View', values: [true, true, true, true] },
      { name: 'File History View', values: [true, true, true, true] },
      { name: 'Line History View', values: [true, true, true, true] },
      { name: 'Branches View', values: [true, true, true, true] },
      { name: 'Remote View', values: [true, true, true, true] },
      { name: 'Stashes View', values: [true, true, true, true] },
      { name: 'Tags View', values: [true, true, true, true] },
      { name: 'Contributors View', values: [true, true, true, true] },
      { name: 'Search & Compare View', values: [true, true, true, true] },
      { name: 'Git Command Palette', values: [true, true, true, true] },
      { name: 'Autolinks', values: [true, true, true, true] },
      { name: 'Terminal Integration', values: [true, true, true, true] },
      { name: 'Remote Provider Integrations', values: [true, true, true, true] },
      { name: 'Commit Graph', values: ['Public and local repos', true, true, true] },
      { name: 'Visual File History', values: ['Public and local repos', true, true, true] },
      { name: 'Work Trees', values: ['Public and local repos', true, true, true] },
      { name: 'Launchpad', values: [true, true, true, true] },
      { name: 'Launchpad Pinning', values: [true, true, true, true] },
      { name: 'Launchpad Snoozing', values: ['Account required', true, true, true] },
      { name: 'Cloud Patches', values: ['Account required', true, true, true] },
      { name: 'Code Suggestions', values: ['Account required', true, true, true] },
      { name: 'Local Workspaces', values: ['Public and local repos', true, true, true] },
      { name: 'Cloud Workspaces', values: ['Account required', true, true, true] },
      { name: 'Search Commits', values: ['Limited', true, true, true] },
      { name: 'Line History', values: ['Account required', true, true, true] },
      { name: 'Workspaces', values: [true, true, true, true] },
    ],
  },
  
  {
    category: 'GitKraken AI',
    items: [
      { name: 'Weekly AI token allowance per user', values: [false, true, true, true] },
      { name: 'GitKraken-provided AI model', values: [false, true, true, true] },
      { name: 'Built-in GitHub Copilot', values: [ true, true, true, true] },
      { name: 'AI commit message generation', values: [true, false, true, true] },
      { name: 'AI Stash Message Generation', values: [false,false, true, true] },
      { name: 'AI Commit Explanation', values: [false, false, true, true] },
      { name: 'AI Branch Explanation', values: [false, true, true, true] },
      { name: 'AI Stash Explanation', values: [false, true, true, true] },
      { name: 'AI Working Changes Explanation', values: [false, true, true, true] },
      { name: 'AI Changelog Creation', values: [false, true, true, true] },
      { name: 'Generate Commits with AI', values: [false, true, true, true] },
      { name: 'Generate Rebase with AI', values: [false, true, true, true] },
      { name: 'Bring your own key (user level)', values: [false, true, true, true] },
      { name: 'Bring your own key (org level)', values: [false, true, true, true] },
      { name: 'Private AI model providers (user level) (coming soon)', values: [false, true, true, true] },
      { name: 'Private AI model providers (org level) (coming soon)', values: [false, true, true, true] },
      { name: 'Enforceable AI controls (org level) (coming soon)', values: [false, true, true, true] },      
      { name: 'AI code explanation', values: [false, true, true, true] },
      { name: 'AI command suggestions', values: [false, 'Limited', true, true] },
      { name: 'AI refactor suggestions', values: [false, false, true, true] },
    ],
  },
  {
    category: 'Cloud Repo Integrations',
    items: [
      { name: 'GitHub', values: ['Limited', true, true, true] },
      { name: 'GitLab', values: ['Limited', true, true, true] },
      { name: 'Bitbucket', values: ['Limited', true, true, true] },
      { name: 'Azure DevOps', values: ['Limited', true, true, true] },
      { name: 'Gitea', values: ['Limited', 'Limited','Limited', 'Limited'] },
      { name: 'Gerrit', values: ['Limited', 'Limited','Limited', 'Limited'] },
      { name: 'Gerrit(Google Sources)', values: ['Limited', 'Limited','Limited', 'Limited'] },
    ],
  },
  {
    category: 'Self-Hosted Provider Integrations',
    items: [
      { name: 'GitHub Enterprise Server', values: ['', 'Limited', true, true] },
      { name: 'GitLab Self-Managed', values: ['', 'Limited', true, true] },
      { name: 'Bitbucket Data Center', values: ['', 'Limited', true, true] },
    ],
  },
  {
    category: 'Issue Tracker Integrations',
    items: [
      { name: 'Jira Cloud', values: ['', true, true, true] },
      { name: 'GitHub', values: ['', true, true, true] },
      { name: 'GitHub Enterprise', values: ['', true, true, true] },
      { name: 'GitLab', values: ['', true, true, true] },
      { name: 'GitLab Self-Managed', values: ['', true, true, true] },
      { name: 'Azure DevOps', values: ['', true, true, true] },
      { name: 'Bitbucket', values: ['', true, true, true] },
    ],
  },
  {
    category: 'User, Team & License Management',
    items: [
      { name: 'Maximum Seats', values: ['', '2', '10', '100'] },
      { name: 'One Team Renewal Date; New Team Members are Prorated', values: ['', true, true, true] },
      { name: 'Cloud-Based User Accounts Managed via GitKraken.com', values: ['', true, true, true] },
    ],
  },
  {
    category: 'Admin & Security Controls',
    items: [
      { name: 'AI Security Controls', values: ['', '', true, true] },
      { name: 'Cloud Patch Private Storage', values: ['', '', true, true] },
      { name: 'Cloud Patch Self-Hosted Storage', values: ['', '', true, true] },
      { name: 'Admin Invite Controls', values: ['', '', true, true] },
      { name: 'Admin Conflict Prevention Control', values: ['', '', true, true] },
    ],
  },
  {
    category: 'Access Management',
    items: [
      { name: 'Single Sign-On', values: ['', '', '', true] },
      { name: 'Multi-Domain SSO', values: ['', '', '', true] },
      { name: 'SAML', values: ['', '', '', true] },
    ],
  },
  {
    category: 'Support',
    items: [
      { name: 'Slack and Help Center support', values: ['', true, true, true] },
      { name: 'Timely email support', values: ['', '3 business days', '1 business day', '12 hours'] },
      { name: 'Customer Success Manager', values: ['', '', true, true] },
      { name: 'Resources for Learning Git', values: ['', true, true, true] },
      { name: 'Git Course & Certification', values: ['', true, true, true] },
    ],
  },
  {
    category: 'Contracting & Compliance',
    items: [
      { name: 'Reseller Transactions', values: ['', '', '', true] },
      { name: 'Annual SOC2 report scheduled delivery', values: ['', '', '', true] },
      { name: 'Internal Software Directory', values: ['', '', '', true] },
    ],
  }
];

export default function FeatureComparison() {
  return (
    <div className="bg-black text-white px-4 py-12 overflow-x-auto">
      <div className="max-w-5xl mx-auto space-y-16">
        {data.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h2 className="text-2xl font-bold mb-4">{section.category}</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 pr-4 text-sm font-semibold text-gray-300">Feature</th>
                    {plans.map((plan, i) => (
                      <th key={i} className="text-center py-2 px-4 text-sm font-semibold text-gray-300">
                        {plan}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.items.map((feature, i) => (
                    <tr key={i} className="border-t border-gray-800">
                      <td className="py-2 pr-4 text-sm">{feature.name}</td>
                      {feature.values.map((value, j) => (
                        <td key={j} className="text-center px-4 py-2">
                          {value === true ? (
                            <Check className="w-5 h-5 text-green-400 inline-block" />
                          ) : value === false ? (
                            ''
                          ) : (
                            <span className="text-xs text-gray-400">{value}</span>
                          )}
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
