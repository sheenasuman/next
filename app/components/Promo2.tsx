import React from 'react';

export default function Promo2() {
  return (
    <div className="w-full bg-gradient-to-r from-teal-700 to-purple-700 text-white px-6 py-2 flex items-center justify-between text-sm md:text-base">
      <div className="flex items-center flex-wrap gap-2">
        <span className="font-bold uppercase">10th Birthday Bash</span>
        <span role="img" aria-label="cake">🎂</span>
        <span className="font-semibold">60–80% OFF</span>
        <span>Ends In:</span>
        <span className="font-medium">05 Days</span>
        <span className="font-medium">02 Hours</span>
        <span className="font-medium">22 Minutes</span>
        <span className="font-medium">46 Seconds</span>
      </div>
      <button className="ml-4 px-4 py-1 border border-white rounded text-white hover:bg-white hover:text-purple-700 transition">
        Take Advantage to Save
      </button>
    </div>
  );
}