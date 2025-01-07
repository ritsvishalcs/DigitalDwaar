import React from 'react';
import {Element} from "react-scroll"

interface ServiceCardProps {
  logo: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ logo, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-s3/20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="text-4xl mb-4">{logo}</div>
    <h3 className="text-xl font-semibold text-p4 mb-2">{title}</h3>
    <p className="text-center">{description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  const services = [
    { logo: '🌐', title: 'Web Development', description: 'Responsive, user-friendly websites tailored to your goals.' },
    { logo: '📱', title: 'Mobile App Development', description: 'Seamless mobile applications for Android and iOS.' },
    { logo: '🎨', title: 'UI/UX Design', description: 'Design user-centric interfaces for better experiences.' },
    { logo: '📈', title: 'Digital Marketing', description: 'Boost your online presence with strategic marketing.' },
    { logo: '☁️', title: 'Cloud Solutions', description: 'Secure and scalable cloud infrastructure.' },
    { logo: '💼', title: 'IT Consulting', description: 'Optimize your IT infrastructure with expert guidance.' },
  ];

  return (
    <section className="py-6 mb-20">
      <Element name='services'>
      <div className="container mx-auto px-6">
        <h3 className="h3 max-lg:h-4 max-md:h-5 z-3 relative mx-auto
                    mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">Our Services</h3>
        <p className="text-center body-1 max-lg:max-w-sm mb-12 max-w-2xl max-sm:max-w-sm mx-auto">
          We provide a wide range of solutions to meet your business needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              logo={service.logo}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      </Element>
    </section>
  );
};

export default ServicesSection;
