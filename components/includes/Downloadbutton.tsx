import Image from "next/image";
import React, { useState } from "react";
import { FaLinux } from "react-icons/fa";

export default function Downloadbuttom() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-4 text-center bg-[#00000] py-8">
      {/* Main Button */}
      {!showOptions ? (
        <button
          onClick={() => setShowOptions(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-700 to-blue-700 text-white 
                     px-8 py-3 rounded-md font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          <FaLinux size={20} />
          Download GitKraken Desktop Free
        </button>
      ) : (
        // Expanded Buttons
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Ubuntu 18.04+ LTS (.deb)",
            "Ubuntu 18.04+ LTS (tar.gz)",
            "RHEL 8+, Fedora 39+ (.rpm)",
            "Snapstore",
          ].map((label, index) => (
            <button
              key={index}
              className="bg-gradient-to-r from-purple-700 to-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:scale-105 transition-transform"
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Subtext */}
      <p className="text-sm text-gray-400">
        Available on:{" "}
        <span className="text-purple-300">Windows, Mac, or Linux</span>
      </p>
    </div>
  );
}
