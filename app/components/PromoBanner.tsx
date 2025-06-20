"use client";
import React from "react";
import Image from "next/image";

export default function PromoBanner() {
  return (
    <div className="bg-[#1E1E1E] text-white flex items-center justify-center gap-20 px-6 py-2 text-sm font-medium">
      {/* Left section */}
      <div className="flex items-center gap-2">
        <Image
          src="/images/faleaf.png"
          alt="leaf icon"
          width={280}
          height={20}
          className="object-contain"
        />
        <span className="text-[grey-600]">Only ₹150/month!</span>
       </div> 
           

      {/* Right section */}
      <div className="flex items-center gap-3">
        <span className="bg-white text-bold text-purple-700 px-3 py-1 cursor-pointer hover:underline">
          Save 50% on Pro
        </span>
        </div>
        <Image
          src="/images/Faleaf.png"
          alt="leaf icon"
          width={80}
          height={24}
          className="object-contain"
        />
      </div>
   
  );
}


