'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  CurrencyDollarIcon,
  KeyIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Buying Properties',
    description:
      "Find your dream home with our expert guidance. We'll help you navigate the market and make informed decisions.",
    icon: HomeIcon,
  },
  {
    title: 'Selling Properties',
    description:
      'Get the best value for your property with our strategic marketing and negotiation expertise.',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'First-Time Buyers',
    description:
      'Special guidance and support for first-time homebuyers, making your first purchase smooth and successful.',
    icon: KeyIcon,
  },
  {
    title: 'Investment Properties',
    description:
      'Maximize your real estate investment potential with our market insights and property management expertise.',
    icon: BuildingOfficeIcon,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            My Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive real estate services tailored to your needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 