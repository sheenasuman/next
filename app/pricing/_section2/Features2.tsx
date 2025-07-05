'use client';

import React from 'react';

const plans = ['Free', 'Pro', 'Team', 'Enterprise'];

const features = [
  {
    category: 'Team Collaboration',
    items: [
      { name: 'Code Suggest (preview)', values: [false, true, true, true] },
      { name: 'Share Cloud Workspaces with teams and individuals', values: [true, true, true, true] },
      { name: 'Cloud Patches (preview)', values: [false, true, true, true] },
      { name: 'GitKraken Insights for Cloud Workspaces', values: ['View last 7 days', 'View up to last 14 days', 'View up to last 14 days', 'View up to last 14 days'] },
      { name: 'Launchpad', values: [false, true, true, true] },
      { name: 'Launchpad Pinning', values: [false, true, true, true] },
      { name: 'Launchpad Snoozing', values: [false, true, true, true] },
      { name: 'Team View in Launchpad', values: [false, true, true, true] },
      { name: 'Team View with live activity status in Left Panel', values: [false, true, true, true] },
      { name: 'Conflict Prevention', values: [false, true, true, true] },
      { name: 'Predictive merge conflict alerts', values: [false, true, true, true] },
      { name: 'Filter commit graph by teams', values: [false, true, true, true] },
      { name: 'Share with deep links', values: [true, true, true, true] },
    ]
  },
  {
    category: 'Cloud Repo Integrations',
    items: [
      { name: 'GitHub', values: ['Public Repos Only', true, true, true] },
      { name: 'GitLab', values: ['Public Repos Only', true, true, true] },
      { name: 'Bitbucket', values: ['Public Repos Only', true, true, true] },
      { name: 'Azure DevOps', values: [false, true, true, true] },
    ]
  },
  {
    category: 'Self-Hosted Repo Integrations',
    items: [
      { name: 'GitHub Enterprise Server', values: [false, true, true, true] },
      { name: 'GitLab Self-Managed', values: [false, true, true, true] },
      { name: 'Bitbucket Data Center', values: [false, true, true, true] },
    ]
  },
  {
    category: 'Pull Request Management',
    items: [
      { name: 'GitHub', values: ['Public Repos Only', true, true, true] },
    ]
  },
];

const featuresPart2 = [
  {
    category: 'Issue Tracker Integrations',
    items: [
      { name: 'Jira Cloud', values: [false, 'View Only', '✔️', '✔️'] },
      { name: 'Jira Data Center', values: [false, false, false, '✔️'] },
      { name: 'Jira App Integration: Git Integration for Jira', values: [false, false, false, '✔️'] },
      { name: 'GitHub', values: ['Public Repos Only', true, true, true] },
      { name: 'GitHub Enterprise', values: [false, false, false, '✔️'] },
      { name: 'GitLab', values: ['Public Repos Only', true, true, true] },
      { name: 'GitLab Self-Managed', values: [false, false, false, 'View Only'] },
      { name: 'Trello', values: [false, false, false, 'View Only'] },
    ]
  },
  {
    category: 'User, Team & License Management',
    items: [
      { name: 'One user license for all machines & OSes', values: [false, true, true, true] },
      { name: 'Maximum Seats', values: [false, '2', '10', '100'] },
      { name: 'Maximum Teams', values: [false, false, '10', 'Unlimited'] },
      { name: 'One Team Renewal Date; New Team Members are Prorated', values: [false, false, true, 'Default'] },
      { name: 'Cloud-Based User Account Management', values: [false, true, true, 'Default'] },
      { name: 'On-Premise Solutions (10-user minimum)', values: [false, false, false, 'Available'] },
    ]
  },
  {
    category: 'Admin & Security Controls',
    items: [
      { name: 'All security controls', values: [false, false, true, true] },
      { name: 'Cloud Patch Private Storage (Coming Soon)', values: [false, false, false, true] },
      { name: 'Cloud Patch Self-Hosted Storage', values: [false, false, false, true] },
    ]
  },
  {
    category: 'Access Management',
    items: [
      { name: 'Single Sign-On', values: [false, false, true, true] },
      { name: 'Multi-Domain SSO', values: [false, false, false, true] },
      { name: 'SAML', values: [false, false, false, true] },
    ]
  },
  {
    category: 'Integrated Terminal',
    items: [
      { name: 'Git-Enhanced Terminal', values: ['Public Repos Only', true, true, true] },
      { name: 'Live Synchronized Commit Graph', values: ['Public Repos Only', true, true, true] },
      { name: 'CLI Diff View, Blame & History', values: ['Public Repos Only', true, true, true] },
      { name: 'Auto-suggest & Auto-complete Git Commands', values: [false, true, true, true] },
    ]
  },
];

const featuresPart3 = [
  {
    category: 'Support',
    items: [
      { name: 'Slack and Help Center support', values: [false, true, true, true] },
      { name: 'Timely email support', values: [false, '3 business days', '1 business day', '12 hours'] },
      { name: 'Customer Success Manager', values: [false, false, false, true] },
      { name: 'Resources for Learning Git', values: [true, true, true, true] },
      { name: 'Git Course & Certification', values: [false, true, true, true] },
    ]
  },
  {
    category: 'Contracting & Compliance',
    items: [
      { name: 'Reseller Transactions', values: [false, false, false, true] },
      { name: 'Annual SOC2 report scheduled delivery', values: [false, false, false, true] },
      { name: 'Internal Software Directory', values: [false, false, false, true] },
    ]
  },
 
];

export default function FeatureComparison() {
  const allFeatures = [...features, ...featuresPart2, ...featuresPart3];

  return (
    <div className="bg-black text-white px-6 py-10 max-w-5xl mx-auto">
      {allFeatures.map((section) => (
        <div key={section.category} className="mb-10">
          <h3 className="text-xl font-semibold border-b border-gray-700 mb-4 pb-2">{section.category}</h3>
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
                        {val === true ? '✔️' : val === false ? '' : val}
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
  );
}
