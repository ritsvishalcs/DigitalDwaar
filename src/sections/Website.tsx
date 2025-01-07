import React from 'react';
import Button from "../components/Button";
import { Element } from "react-scroll";

const WebsiteDevelopmentSection: React.FC = () => {
  return (
    <Element name='website development'>
    <section className="bg-gradient-to-r text-white py-16 px-6 md:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">Professional Website Development</h2>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          Build stunning, responsive, and high-performance websites tailored to your business needs.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
          <p className="text-gray-600">Ensure seamless experience across all devices.</p>
        </div>
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-2">SEO Optimized</h3>
          <p className="text-gray-600">Improve search engine rankings with clean code.</p>
        </div>
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
          <p className="text-gray-600">Tailored solutions that meet your unique requirements.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold">Ready to Build Your Dream Website?</h3>
        <p className="text-lg mt-2">Let’s bring your vision to life with our expertise.</p>
        <Button>Get Started</Button>
      </div>
    </section>
    </Element>
  );
};

export default WebsiteDevelopmentSection;
