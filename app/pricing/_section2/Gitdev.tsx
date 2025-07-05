'use client';

import React from 'react';
import { Check } from 'lucide-react';

type PlanValue = string | boolean;
type FeatureRow = { name: string; values: PlanValue[] };
type FeatureCategory = { category: string; items: FeatureRow[] };

const plans = ['Free', 'Pro', 'Team', 'Enterprise'];

const data: FeatureCategory[] = [
  {
    category: 'Launchpad',
    items: [
      { name: 'Personal Launchpad', values: ['', true, true, true] },
      { name: 'Team Launchpad Views', values: ['', true, true, true] },
      { name: 'Custom Views', values: ['', '', true, true] },
    ],
  },
  {
    category: 'GitKraken AI',
    items: [
      { name: 'Weekly AI tokens allowance', values: ['', '250K', '500K', '1M'] },
      { name: 'GitKraken-provided AI model', values: ['', 'Gemini 2.0 Flash', 'Gemini 2.0 Flash', 'Gemini 2.0 Flash'] },
      { name: 'Bring Your Own Key (User Level)', values: ['', true, true, true] },
      { name: 'Private AI model providers (User Level – Coming soon)', values: ['', '', true, true] },
      { name: 'Enforceable AI Controls', values: ['', '', '', true] },
      { name: 'Private AI model providers (Org Level – Coming soon)', values: ['', '', '', true] },
      { name: 'Bring Your Own Key (Org Level – Coming soon)', values: ['', '', '', true] },
    ],
  },
  {
    category: 'Insights',
    items: [
      { name: 'Number of visible Metrics (Coming Soon)', values: ['', '2', '10', '20'] },
      { name: 'Available Metrics', values: ['', 'Limited', 'All', 'All'] },
      { name: 'Data history', values: ['', '2 weeks', '3 months', '12 months'] },
      { name: '# of Repositories', values: ['', '1', '10', '100'] },
      { name: 'Permissions & Access Management', values: ['', '', '', true] },
      { name: 'Export data', values: ['', '', '', true] },
      { name: 'Metric alerts & benchmarks', values: ['', '', '', true] },
    ],
  },
  {
    category: 'Automations (preview)',
    items: [
      { name: 'Repositories "connected"', values: ['', '2', '10', '20'] },
      { name: '# of automations per repo', values: ['', '1', '5', '10'] },
      { name: 'Conditions', values: ['', 'Limited', 'Git & Issue', 'All'] },
      { name: 'Actions', values: ['', 'Limited', 'Git & Issue', 'All'] },
      { name: 'Templates', values: ['', 'Limited', 'Limited', 'All'] },
    ],
  },
  {
    category: 'Cloud Repo Integrations',
    items: [
      { name: 'GitHub.com', values: [true, true, true, true] },
      { name: 'GitLab.com', values: [true, true, true, true] },
      { name: 'Bitbucket.org', values: [true, true, true, true] },
      { name: 'Azure DevOps', values: [true, true, true, true] },
    ],
  },
  {
    category: 'Self-Hosted Repo Integrations',
    items: [
      { name: 'GitHub Enterprise', values: ['', '', true, true] },
      { name: 'GitLab Self-Managed', values: ['', '', true, true] },
      { name: 'Bitbucket Data Center', values: ['', '', true, true] },
    ],
  },
  {
    category: 'Issue Tracker Integrations',
    items: [
      { name: 'Jira Cloud', values: ['', true, true, true, true] },
      { name: 'Jira Data Center/Server', values: ['', true, true, true, true] },
      { name: 'Azure DevOps', values: ['', true, true, true, true] },
      { name: 'GitHub.com', values: ['', true, true, true, true] },
      { name: 'GitHub Enterprise', values: ['', true, true, true, true] },
      { name: 'GitLab.com', values: ['', true, true, true, true] },
      { name: 'GitLab Self-Managed', values: ['', true, true, true, true] },
      { name: 'Trello', values: ['', true, true, true, true] },
    ],
  },
  {
    category: 'Admin & Security Controls',
    items: [
      { name: 'Invite Approval control', values: ['', '', true, true, true] },
      { name: 'Conflict Prevention control', values: ['', '', true, true, true] },
      { name: 'AI security controls', values: ['', '', true, true, true] },
      { name: 'Cloud Patch Private Storage (Coming Soon)', values: ['', '', '', true, true] },
      { name: 'Cloud Patch Self-Hosted Storage', values: ['', '', '', true, true] },
    ],
  },
  {
    category: 'Access Management',
    items: [
      { name: 'Single Sign-On', values: ['', '', '', true, true] },
      { name: 'SAML', values: ['', '', '', true, true] },
      { name: 'Multi-Domain SSO', values: ['', '', '', true, true] },
    ],
  },
  {
    category: 'Single Sign-On',
    items: [
      { name: 'Azure Active Directory', values: ['', '', '', true, true] },
      { name: 'Google Identity Platform', values: ['', '', '', true, true] },
      { name: 'Okta', values: ['', '', '', true, true] },
      { name: 'Ping Identity', values: ['', '', '', true, true] },
    ],
  },
  {
    category: 'User, Team & License Management',
    items: [
      { name: 'Maximum Seats', values: ['', '2', '10', '100', ''] },
      { name: 'One Team Renewal Date; New Team Members are Prorated', values: ['', true, true, true, ''] },
      { name: 'Cloud-Based User Accounts Managed via gk.dev', values: [true, true, true, true, ''] },
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
            <h2 className="text-xl font-bold mb-4">{section.category}</h2>
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
