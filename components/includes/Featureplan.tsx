'use client';

import React from 'react';

const plans = ['Community', 'Pro', 'Advanced', 'Business'];

export default function FeatureHeaderRow() {
  return (
    <div className="grid grid-cols-5 gap-4 text-sm border-b border-gray-700 py-4 items-start position-sticky">
      {/* Left-most header */}
      <div className="font-medium text-white">Feature By Plan</div>

      {/* Plan titles and buttons */}
      {plans.map((plan, i) => (
        <div key={i} className="text-center">
          <div className="font-semibold text-white mb-2">{plan}</div>
          <button
            className="px-4 py-1 text-sm border border-purple-500 text-purple-400 rounded hover:bg-purple-500 hover:text-white transition"
          >
            {plan === 'Community' ? 'Install Free' : `Buy ${plan}`}
          </button>
        </div>
      ))}
    </div>
  );
}
