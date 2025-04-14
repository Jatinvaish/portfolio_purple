'use client';

import React from 'react';
import { FiCode, FiDatabase, FiRepeat, FiServer, FiShoppingCart } from 'react-icons/fi';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Full Stack Development",
    description: "Building responsive, end-to-end web applications with seamless frontend and backend integration.",
    icon: <FiCode className="w-6 h-6" />,
    features: [
      "React / Next.js",
      "Node.js / .NET APIs",
      "Authentication & Authorization",
      "RESTful API Integration",
    ]
  },
  {
    id: 2,
    title: "Scalable Applications",
    description: "Designing and developing scalable architectures that grow with your business needs.",
    icon: <FiServer className="w-6 h-6" />,
    features: [
      "Microservices Architecture",
      "Cloud Deployment",
      "Performance Optimization",
      "CI/CD Integration"
    ]
  },
  {
    id: 3,
    title: "Database Design",
    description: "Structuring robust databases that ensure data consistency, integrity, and high performance.",
    icon: <FiDatabase className="w-6 h-6" />,
    features: [
      "SQL Server / PostgreSQL",
      "MongoDB / NoSQL",
      "Schema Design & Normalization",
      "Data Security & Backups"
    ]
  },
  {
    id: 4,
    title: "Agile Development",
    description: "Adopting agile methodologies for fast, flexible, and user-focused software delivery.",
    icon: <FiRepeat className="w-6 h-6" />,
    features: [
      "Scrum & Kanban Practices",
      "Iterative Development",
      "User Story Mapping",
      "Continuous Feedback Loops"
    ]
  },
  {
    id: 5,
    title: "WordPress Development",
    description: "Building customized and high-performing WordPress websites tailored to your goals.",
    icon: <FiCode className="w-6 h-6" />,
    features: [
      "Theme Customization",
      "Plugin Development",
      "WooCommerce Integration",
      "SEO Optimization"
    ]
  },
  {
    id: 6,
    title: "E-Commerce Solutions",
    description: "Creating robust e-commerce platforms that drive conversions and deliver seamless shopping experiences.",
    icon: <FiShoppingCart className="w-6 h-6" />,
    features: [
      "Custom Shopping Carts",
      "Payment Gateway Integration",
      "Order Management Systems",
      "User Account & Checkout Flows"
    ]
  }
];

const Services = () => {
  return (
    <section className="relative min-h-screen py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(123,31,162,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_300px,rgba(59,130,246,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-grid"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive design solutions tailored to elevate your brand and engage your audience
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-8 group hover:bg-gradient-to-br hover:from-purple-900/50 hover:to-blue-900/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 text-purple-400 group-hover:text-purple-300 transition-colors">
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 group-hover:text-gray-300">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-400 group-hover:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
