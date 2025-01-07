// Modern and Interactive Social Media Marketing Section

import React from 'react';
import Button from "../components/Button.jsx";
import { Element } from "react-scroll";

const AdvertisingSection: React.FC = () => {
  const platforms = [
    {
      icon: '📘',
      color: 'text-blue-600',
      title: 'Facebook Ads',
      description: 'Target your audience effectively and grow your brand with precision-driven Facebook campaigns.'
    },
    {
      icon: '📸',
      color: 'text-pink-500',
      title: 'Instagram Ads',
      description: 'Captivate and engage with visually stunning Instagram campaigns tailored to your audience.'
    },
    {
      icon: '🐦',
      color: 'text-blue-400',
      title: 'Twitter Ads',
      description: 'Amplify your message and spark conversations with highly targeted Twitter campaigns.'
    },
    {
      icon: '📺',
      color: 'text-red-500',
      title: 'YouTube Ads',
      description: 'Boost brand visibility with engaging video content through YouTube\'s vast network.'
    },
    {
      icon: '💼',
      color: 'text-teal-500',
      title: 'LinkedIn Ads',
      description: 'Connect with professionals and decision-makers through strategic LinkedIn campaigns.'
    },
    {
      icon: '💬',
      color: 'text-green-500',
      title: 'WhatsApp Marketing',
      description: 'Engage with your audience directly and build strong customer relationships through WhatsApp.'
    }
  ];

  return (
    <Element name='social media marketing'>
    <section className="bg-gradient-to-r text-white py-20 px-8 md:px-16 lg:px-24 relative">
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-30 bg-cover bg-center" 
        style={{ backgroundImage: 'url(https://source.unsplash.com/random/1600x900?social-media)' }}
      ></div>
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Elevate Your Social Media Game
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Empower your brand with impactful social media campaigns across platforms like Facebook, Instagram, and Twitter.
        </p>
        <div className="flex justify-center gap-4">
          <Button>Get Started</Button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {platforms.map((platform, index) => (
          <div 
            key={index} 
            className="bg-s3/50 text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <div className={`${platform.color} text-5xl mb-4`}>{platform.icon}</div>
            <h3 className="max-w-400 mb-7 h5 text-p4 max-md:mb-6 max-md:h5">{platform.title}</h3>
            <p className='text-p4'>{platform.description}</p>
          </div>
        ))}
      </div>
    </section>
    </Element>
  );
};

export default AdvertisingSection;
