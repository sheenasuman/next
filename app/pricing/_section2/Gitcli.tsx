'use client';

import React from 'react';
import { Check } from 'lucide-react';

type PlanValue = string | boolean;
type FeatureRow = { name: string; values: PlanValue[] };
type FeatureCategory = { category: string; items: FeatureRow[] };

const plans = ['Free', 'Pro', 'Team', 'Enterprise', 'Enterprise+'];

const data: FeatureCategory[] = [
  {
    category: 'Git Productivity',
    items: [
      { name: 'Local Workspaces', values: [true, true, true, true, true] },
      { name: 'Multi-repo tab', values: [true, true, true, true, true] },
      { name: 'Multi-repo push', values: [true, true, true, true, true] },
      { name: 'Multi-repo commit', values: [true, true, true, true, true] },
      { name: 'Multi-repo checkout', values: [true, true, true, true, true] },
      { name: 'Open visual commit graph', values: ['Public Repos', true, true, true, true] },
    ],
  },
  {
    category: 'GitKraken AI',
    items: [
      { name: 'AI Commit Messages', values: [true, true, true, true, true] },
      { name: 'AI Generated PR Details', values: [true, true, true, true, true] },
    ],
  },
  {
    category: 'Team Collaboration',
    items: [
      { name: 'Cloud Workspaces', values: ['Account required', true, true, true, true] },
      { name: 'Multi-repo clones', values: [true, true, true, true, true] },
    ],
  },
  {
    category: 'Cloud Repo Integrations',
    items: [
      { name: 'GitHub.com', values: [true, true, true, true, true] },
    ],
  },
  {
    category: 'Issue Tracker Integrations',
    items: [
      { name: 'Jira Cloud', values: [true, true, true, true, true] },
      { name: 'GitHub.com', values: [true, true, true, true, true] },
      { name: 'GitHub Enterprise', values: [true, true, true, true, true] },
      { name: 'GitLab.com', values: [true, true, true, true, true] },
    ],
  },
  {
    category: 'Support',
    items: [
      { name: 'Slack and Help Center support', values: ['', true, true, true, true] },
      { name: 'Timely email support', values: ['', '', '3 business days', '1 business day', '12 hours'] },
      { name: 'Customer Success Manager', values: ['', '', '', true, true] },
      { name: 'Resources for Learning Git', values: ['', true, true, true, true] },
      { name: 'Git Course & Certification', values: ['', true, true, true, true] },
    ],
  },
  {
    category: 'Contracting & Compliance',
    items: [
      { name: 'Reseller Transactions', values: ['', '', '', '', true] },
      { name: 'Annual SOC2 report scheduled delivery', values: ['', '', '', '', true] },
      { name: 'Internal Software Directory', values: ['', '', '', '', true] },
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
                          ) : value === false || value === '' ? (
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
