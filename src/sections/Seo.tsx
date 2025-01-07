import React from 'react';
import Button from "../components/Button";
import { Element } from "react-scroll";

const SEOSection: React.FC = () => {
  return (
    <Element name='seo'>
    <section className="relative bg-gradient-to-br text-white py-20 px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-[150px] h-[150px] bg-green-400 rounded-full blur-2xl opacity-50 absolute top-10 left-10 animate-float"></div>
        <div className="w-[250px] h-[250px] bg-cyan-400 rounded-full blur-3xl opacity-50 absolute bottom-10 right-20 animate-float"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-6xl font-extrabold mb-6 leading-tight tracking-tight animate-fade-in">
          Optimize Your Website for Growth
        </h1>
        <p className="text-xl font-light mb-8 animate-fade-in-delay">
          Boost your online visibility and drive organic traffic with our expert SEO services.
        </p>
        <div className="flex justify-center gap-6">
          <Button >
            Get Started
          </Button>
          <Button>
            Learn More
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            icon: '🔍',
            title: 'Keyword Research',
            description: 'Identify the best keywords to target for maximum visibility.',
          },
          {
            icon: '📈',
            title: 'On-Page SEO',
            description: 'Optimize your website content and structure for better rankings.',
          },
          {
            icon: '🔗',
            title: 'Link Building',
            description: 'Build a strong backlink profile to boost domain authority.',
          },
          {
            icon: '📊',
            title: 'SEO Analytics',
            description: 'Track your performance with comprehensive SEO reports.',
          },
          {
            icon: '⚡',
            title: 'Site Speed Optimization',
            description: 'Enhance your website speed for better user experience and SEO scores.',
          },
          {
            icon: '🌍',
            title: 'Local SEO',
            description: 'Dominate local search results to attract nearby customers.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-s3/50 text-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:-translate-y-2 animate-slide-up"
          >
            <div className="text-5xl mb-4 ">{feature.icon}</div>
            <h3 className="max-w-400 mb-7 h5 text-p4 max-md:mb-6 max-md:h5">{feature.title}</h3>
            <p className="text-p4">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
    </Element>
  );
};

export default SEOSection;
