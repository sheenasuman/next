'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaSlack,
  FaYoutube,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';

export default function Footer() {
  const footerLinks = [
    {
      title: 'Products',
      links: [
        'Pricing',
        'Help Center',
        'GitKraken AI',
        { section: 'GitKraken Desktop', items: ['Login', 'Documentation', 'Release Notes', 'Roadmap', 'Feature Upvote', 'Cheat Sheet'] },
        { section: 'GitLens', items: ['Documentation'] },
        { section: 'GitKraken CLI', items: [] },
        { section: 'Git Integration for Jira', items: ['Cloud Docs', 'Data Center/Server Docs', 'Security & Trust'] },
      ],
    },
    {
      title: 'Community',
      links: [
        'Referral Program',
        'Learn Git Library',
        'Git Commands Cheat Sheet',
        'Git Blog',
        'GitKraken Labs',
        'Git Conference',
        'Ambassador Program',
        'Newsletter',
        'Slack Community',
        'GitKraken for Students',
        'Store',
        'Keif Gallery',
      ],
    },
    {
      title: 'Company',
      links: [
        'Contact Us',
        'About Us',
        'Careers',
        'Customers',
        'Media',
        'News',
        'Awards',
        'Events',
        'Press Releases',
        'Logos',
        'Privacy',
      ],
    },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="flex justify-center mt-16">
        <Image src="/images/Union.svg" alt="Logo" width={30} height={30} />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {footerLinks.map((col, idx) => (
          <div key={idx}>
            <h3 className="uppercase text-sm font-semibold mb-4 border-b border-gray-700 pb-1">
              {col.title}
            </h3>

            {col.links.map((link, i) =>
              typeof link === 'string' ? (
                <p key={i} className="text-sm text-gray-300 hover:text-white cursor-pointer mb-1">
                  {link}
                </p>
              ) : (
                <div key={i} className="mt-4">
                  <h4 className="font-semibold text-sm mb-1">{link.section}</h4>
                  {link.items.map((item, j) => (
                    <p
                      key={j}
                      className="text-sm text-gray-300 hover:text-white cursor-pointer mb-1 ml-2"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )
            )}
          </div>
        ))}
      </div>

     
      <div className="flex justify-center space-x-6 text-white text-xl mb-6">
        <FaXTwitter />
        <FaSlack />
        <FaYoutube />
        <FaLinkedin />
      </div>

      <p className="text-center text-xs text-gray-500 py-4 border-t border-gray-800">
        © 2025 Axosoft, LLC DBA GitKraken
      </p>
    </footer>
  );
}

  