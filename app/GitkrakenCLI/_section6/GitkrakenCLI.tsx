import React from "react";
import Image from "next/image";
import Companylogos from '../../../components/includes/Companylogos';
const features = [
  {
    title: "Bring PRs & Issues To The Terminal",
    description:
      "GitKraken CLI speeds up this process, providing the essential context needed for faster & more effective code reviews.",
    image: "/images/GitCLI1",
    border: "from-purple-500 to-pink-500",
  },
  {
    title: "Run Multi-Repo Commands",
    description:
      "Execute gk commands for pull, fetch & clone to efficiently update your repositories in batch.",
    image: "/images/GitCLI2",
    border: "from-green-400 to-lime-500",
  },
  {
    title: "Manage Groups of Repos",
    description:
      "Organize repos in workspaces to see the status of branches, issues, & pull requests all in one place.",
    image: "/images/GitCLI3",
    border: "from-blue-400 to-cyan-500",
  },
  {
    title: "Suggest Code Revisions",
    description:
      "Easily propose code revisions right from the terminal in a more informal manner.",
    image: "/images/GitCLI4",
    border: "from-lime-300 to-green-500",
  },
];

export default function GitKrakenCliSection() {
  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-4 sm:px-8 md:px-12 text-center">
      <h2 className="text-4xl font-bold mb-6">
        Try GitKraken CLI.{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFD1] via-[#00F] to-[#FF00C7]">
          It’s Free!
        </span>
      </h2>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <div className="bg-[#151515] border border-[#333] px-4 py-2 rounded-lg text-sm font-mono text-purple-400">
          winget install gitkraken.cli
        </div>
        <button className="bg-[#9D4DFF] hover:bg-[#7f2be8] text-white font-semibold px-6 py-2 rounded-lg transition">
          Start Multi-User Trial
        </button>
      </div>

      <p className="text-gray-400 mb-10">
        Or download on{" "}
        <a href="https://github.com" target="_blank" className="text-blue-400 underline">
          GitHub
        </a>
      </p>   
      <div className="flex justify-center">
        <Image
          src="/images/GitCLI0"
          alt="GitKraken CLI Screenshot"
          width={700}
          height={400}
          className="rounded-xl shadow-lg border border-[#333]"
        />
      </div>      
      <p className="text-sm text-gray-500 mt-10 tracking-wide uppercase">
        Trusted by Industry Leaders</p>
          <Companylogos />
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
          <div
          key={idx}
          className={`bg-[#151515] rounded-xl overflow-hidden border border-gray-700
             hover:border-transparent transition duration-300 p-0 flex flex-col justify-between shadow-md ${
            idx === 3 ? "md:col-span-1" : ""
          }`}
        >
          <div
            className={`border-t-4 bg-[#0F0F0F] border-transparent bg-gradient-to-r ${feature.border}`}
          >
            <Image
              src={feature.image}
              alt={feature.title}
              width={400}
              height={312}
              className="w-full h-[200px] object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        </div>
      ))}
      <div className="bg-gradient-to-br from-[#151515] to-[#111111] border border-[#333] rounded-xl p-6 flex flex-col justify-center items-center text-center col-span-1 md:col-span-2">
        <h3 className="text-2xl font-semibold mb-6">Try GitKraken CLI Free!</h3>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="bg-[#0f0f0f] px-4 py-2 rounded font-mono text-purple-400 text-sm border border-gray-600">
            winget install gitkraken.cli
          </div>
          <button className="bg-[#9D4DFF] hover:bg-[#7c2ae8] text-white font-semibold px-6 py-2 rounded-lg transition">
            Start Multi-User Trial
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-4">
          Or download on{" "}
          <a
            href="https://github.com"
            target="_blank"
            className="text-purple-300 underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  </section>
  );
}
