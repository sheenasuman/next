import React from "react";
import Image from "next/image";

export default function Featurecards() {
  return (
    <section className="flex justify-center items-center gap-6 py-12 flex-wrap">
      {/* Card 1 */}
      <div className="flex bg-[#1E1E1E] rounded-lg overflow-hidden w-[500px] group cursor-pointer">
        <div className="w-3/5 overflow-hidden">
          <Image
            src="/images/built for teams.png"
            alt="Built for Teams"
            width={900}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
          />
        </div>
        <div className="p-6 flex flex-col justify-between w-2/5 text-white">
          <h3 className="text- font-semibold mb-2">Built for Teams</h3>
          <p className="text-sm text-gray-300">
            A DevEx platform that’s built for team velocity & greater collaboration.
          </p>
          <a
            href="#"
            className="mt-4 text-sm text-fuchsia-400 hover:underline flex items-center"
          >
            <Image
              src="/images/Vector.svg"
              alt="Arrow"
              width={20}
              height={20}
              className="mr-2"
            />
            Supercharge your Dev Team &gt;
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex bg-[#1E1E1E] rounded-lg overflow-hidden w-[500px] group cursor-pointer">
        <div className="w-3/5 overflow-hidden">
          <Image
            src="/images/enterprise grade.png"
            alt="Built for Teams"
            width={900}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
          />
        </div>
        <div className="p-6 flex flex-col justify-between w-2/5 text-white">
          <h3 className="text-sm font-semibold mb-2">Enterprise Grade</h3>
          <p className="text-sm text-gray-300">
          Solutions designed for large-scale security, privacy & control.</p>
          <a
            href="#"
            className="mt-4 text-sm text-fuchsia-400 hover:underline flex items-center"
          >
            <Image
              src="/images/Vector.svg"
              alt="Arrow"
              width={20}
              height={20}
              className="mr-2"
            />
            Secure your Dev team&gt;
          </a>
        </div>
      </div>
      
    </section>
  );
}
