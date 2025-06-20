// import { FaXTwitter, FaSlack, FaYoutube, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col items-center">
          <div className="mb-12">
            {/* Logo */}
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
              <span className="text-black font-bold">GK</span> {/* Replace with logo image if needed */}
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {/* Products */}
            <div>
              <h3 className="text-white font-bold mb-4">PRODUCTS</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">GitKraken AI</a></li>
                <li className="font-bold mt-4">GitKraken Desktop</li>
                <ul className="ml-4 space-y-2">
                  <li><a href="#" className="hover:underline">Login</a></li>
                  <li><a href="#" className="hover:underline">Documentation</a></li>
                  <li><a href="#" className="hover:underline">Release Notes</a></li>
                  <li><a href="#" className="hover:underline">Roadmap</a></li>
                  <li><a href="#" className="hover:underline">Feature Upvote</a></li>
                  <li><a href="#" className="hover:underline">Cheat Sheet</a></li>
                </ul>
                <li className="font-bold mt-4">GitLens</li>
                <ul className="ml-4 space-y-2">
                  <li><a href="#" className="hover:underline">Documentation</a></li>
                </ul>
                <li className="font-bold mt-4">GitKraken CLI</li>
                <li className="font-bold mt-4">Git Integration for Jira</li>
                <ul className="ml-4 space-y-2">
                  <li><a href="#" className="hover:underline">Cloud Docs</a></li>
                  <li><a href="#" className="hover:underline">Data Center/Server Docs</a></li>
                  <li><a href="#" className="hover:underline">Security & Trust</a></li>
                </ul>
              </ul>

            </div>

            {/* Community */}
            <div>
              <h3 className="text-white font-bold mb-4">COMMUNITY</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Referral Program</a></li>
                <li><a href="#" className="hover:underline">Learn Git Library</a></li>
                <li><a href="#" className="hover:underline">Git Commands Cheat Sheet</a></li>
                <li><a href="#" className="hover:underline">Git Blog</a></li>
                <li><a href="#" className="hover:underline">GitKraken Labs</a></li>
                <li><a href="#" className="hover:underline">Git Conference</a></li>
                <li><a href="#" className="hover:underline">Ambassador Program</a></li>
                <li><a href="#" className="hover:underline">Newsletter</a></li>
                <li><a href="#" className="hover:underline">Slack Community</a></li>
                <li><a href="#" className="hover:underline">GitKraken for Students</a></li>
                <li><a href="#" className="hover:underline">Store</a></li>
                <li><a href="#" className="hover:underline">Keif Gallery</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold mb-4">COMPANY</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Customers</a></li>
                <li><a href="#" className="hover:underline">Media</a></li>
                <li><a href="#" className="hover:underline">News</a></li>
                <li><a href="#" className="hover:underline">Awards</a></li>
                <li><a href="#" className="hover:underline">Events</a></li>
                <li><a href="#" className="hover:underline">Press Releases</a></li>
                <li><a href="#" className="hover:underline">Logos</a></li>
                <li><a href="#" className="hover:underline">Privacy</a></li>
              </ul>
            </div>
          </div>

          {/* Social Links
          <div className="flex space-x-6 mt-12">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaXTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaSlack size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} />
            </a>
          </div> */}

          {/* Bottom Text */}
          <div className="text-xs text-gray-500 mt-6">
            © 2025 Axosoft, LLC DBA GitKraken
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
