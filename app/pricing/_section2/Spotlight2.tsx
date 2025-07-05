'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const tabs = ['GitKraken Desktop', 'GitLens', 'GitKraken.dev', 'GitKraken CLI'];
type Feature = {
    label: string;
    plans: (string | boolean)[];
  };
  
  type FeatureCategory = {
    title: string;
    features: Feature[];
  };
  
  const featureData: FeatureCategory[] = [
    {
      title: 'Repository Access',
      features: [
        {
          label: 'Work with local repos and public remotes',
          plans: [true, true, true, true],
        },
        {
          label: 'Work with private remotes',
          plans: [false, true, true, true],
        },
      ],
    },
    {
      title: 'Git Productivity',
      features: [
        {
          label: 'Local Workspaces',
          plans: [true, true, true, true],
        },
        {
          label: 'Cloud Workspaces',
          plans: [false, 'Public Repos Only', true, true],
        },
        {
          label: 'Merge Conflict Tool',
          plans: [false, 'Public Repos Only', true, true],
        },
        {
          label: 'Merge Conflict Output Editor',
          plans: [false, 'Public Repos Only', true, true],
        },
        {
          label: 'Code Editor',
          plans: [false, 'Public Repos Only', true, true],
        },
        {
          label: 'Pull or fetch multiple repos',
          plans: [true, true, true, true],
        },
        {
          label: 'Multiple Profiles',
          plans: [false, 'Public Repos Only', true, true],
        },
        {
          label: 'Gitflow support',
          plans: [false, 'Public Repos Only', true, true],
        },
        {
          label: 'Git LFS',
          plans: [false, 'Public Repos Only', true, true],
        },
        {
          label: 'Git Worktrees',
          plans: [false, 'Public Repos Only', true, true],
        },
        {
          label: 'File history & blame',
          plans: [false, 'Public Repos Only', true, true],
        },
        {
          label: 'View & create pull requests',
          plans: [false, 'Public Repos Only', true, true],
        },
        {
          label: 'Hiding & soloing',
          plans: [false, 'Public Repos Only', true, true],
        },
        {
          label: 'Auto-Gen SSH key',
          plans: [false, true, true, true],
        },
        {
          label: 'Git hooks support',
          plans: [false, true, true, true],
        },
        {
          label: 'Submodules',
          plans: [false, true, true, true],
        },
        {
          label: 'Visual Interactive Rebase',
          plans: [false, 'Public Repos Only', true, true],
        },
        {
          label: 'Visual Interactive Cherry Pick',
          plans: [false, 'Public Repos Only', true, true],
        },
        {
          label: 'One-click undo & redo Git operations',
          plans: [false, 'Public Repos Only', true, true],
        },
        {
          label: 'Command Palette',
          plans: [false, true, true, true],
        },
        {
          label: 'GPG commit signing',
          plans: [false, true, true, true],
        },
        {
          label: 'Keyboard shortcuts',
          plans: [false, true, true, true],
        },
        {
          label: 'Dark, Light & Custom Themes',
          plans: [false, true, true, true],
        },
      ],
    },
  ];
  

const plans = [
  {
    title: 'GitKraken Desktop',
    icon: '/images/desk.svg',
  },
  {
    title: 'GitLens',
    icon: '/images/vs.svg',
  },
  {
    title: 'GitKraken CLI',
    icon: '/images/terminal.svg',
  },
  {
    title: 'GitKraken.dev',
    icon: '/images/webmob.svg',
  },
];

const pricingPlans = [
  {
    name: 'Community',
    subtitle: 'Basic GitKraken Desktop, CLI & GitLens for OSS development',
    price: 'Free',
    seats: '1 seat',
    button: 'Download GitKraken Desktop',
    extraLink: 'Install GitLens for VS Code',
    features: [
      'Free 14-day trial of Advanced plan',
      'Some features limited or removed',
      'Unlimited cloud Git integrations',
      'Only local repos and public remotes',
      'Slack and Help Center support',
      'Built-in GitHub Copilot (GitLens)',
    ],
    highlight: false,
  },
  {
    name: 'Pro',
    subtitle: 'Robust productivity & private repo access for solo devs',
    price: '₹112.50',
    originalPrice: '₹750',
    seats: '1–2 seats',
    note: 'for the first seat, then ₹700 per seat per month, paid annually*',
    button: 'Buy Pro',
    trial: 'Start Free 14-Day Trial',
    features: [
      'Works with private repos',
      'Cloud issue tracker integrations',
      'Conflict Prevention',
      'Launchpad',
      'Cloud Patches',
      'Code Suggest',
      'Shared Cloud Workspaces',
      '25 repos in Cloud Workspaces',
      'Multiple profiles',
      'Timely email support',
      'GitKraken AI – Up to 250,000/week per user',
    ],
    highlight: true,
    highlightLabel: '10TH BIRTHDAY BASH: 83% OFF 1ST SEAT',
  },
  {
    name: 'Advanced',
    subtitle: 'More integrations, powerful features & enhanced AI',
    price: '₹1,050',
    seats: '1–10 seats',
    button: 'Buy Advanced',
    trial: 'Start Free 14-Day Trial',
    features: [
      'Everything in Pro, plus',
      'Self-hosted Git integrations',
      'Enterprise integrations',
      'Single domain SSO',
      'Team Launchpad',
      'Insights & DORA metrics',
      'Create and manage teams',
      'Automations',
      '250 repos in Cloud Workspaces',
      'Priority support',
      'GitKraken AI – Up to 500,000/week per user',
    ],
    highlight: false,
  },
  {
    name: 'Business',
    subtitle: 'Security, compliance & control for companies',
    price: '₹1,400',
    seats: '1–10 seats',
    button: 'Buy Business',
    trial: 'Start Free 30-Day Business Trial',
    features: [
      'Everything in Advanced, plus',
      'Multi-domain SSO',
      'Internal software directory',
      'Customer success manager',
      'Admin invite controls',
      'Admin Conflict Prevention control',
      'Self-hosted Cloud Patches',
      'Foundations of Git training',
      '12-hour customer support response',
      'GitKraken AI – Up to 1,000,000/week per user',
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState('GitKraken Desktop');

  return (
    <>
      {/* Title Section */}
      <section className="bg-[#1E1E1E] text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          GitKraken Plans & Pricing
        </h2>
        <p className="text-gray-300 mb-10">
          All plans include the entire GitKraken DevEx platform:
        </p>

        {/* Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={plan.icon}
                alt={plan.title}
                width={40}
                height={40}
                className="mb-2"
              />
              <p className="text-sm text-white">{plan.title}</p>
              {index < plans.length - 1 && (
                <span className="text-xl font-bold text-white mx-4">+</span>
              )}
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-6 flex flex-col justify-between ${
                plan.highlight
                  ? 'border-2 border-blue-400 bg-[#1c1c1c]'
                  : 'bg-[#1c1c1c]'
              }`}
            >
              {plan.highlight && (
                <p className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded w-fit mb-3">
                  {plan.highlightLabel}
                </p>
              )}
              <div>
                <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-300 mb-2">{plan.subtitle}</p>
                <p className="text-md text-gray-400 mb-2">{plan.seats}</p>

                {plan.originalPrice && (
                  <p className="line-through text-sm text-gray-400">
                    {plan.originalPrice}
                  </p>
                )}

                <p className="text-2xl font-bold mb-1">{plan.price}</p>

                {plan.note && (
                  <p className="text-xs text-gray-400 mb-3">{plan.note}</p>
                )}

                <button className="w-full py-2 bg-[#A259FF] hover:bg-[#913eff] text-white rounded font-semibold mb-2">
                  {plan.button}
                </button>

                {plan.trial && (
                  <p className="text-xs text-center text-blue-400 underline mb-4">
                    {plan.trial}
                  </p>
                )}

                {plan.extraLink && (
                  <p className="text-sm text-blue-400 underline mb-4">
                    {plan.extraLink}
                  </p>
                )}

                <ul className="text-sm text-left space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-400">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 text-blue-400 underline text-sm font-semibold">
          Calculate Your Price & ROI
        </div>
      </section>

      {/* Feature Tabs Section */}
      <div className="bg-[#0F0F0F] text-white py-16 px-4 text-center">
        <p className="text-sm mb-4">
          Need enterprise security, contracts, procurement or custom integrations?{' '}
          <a href="#" className="text-purple-400 underline font-semibold">
            Contact us ↗
          </a>
        </p>
     </div>

     </>  
  );
}