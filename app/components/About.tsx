'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollUtils';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full max-w-[450px] mx-auto rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/realtorjag.jpg"
              alt="Jag Kaur - Real Estate Agent"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Hello! I'm Jag Kaur, a dedicated real estate professional serving the Greater Toronto Area. With my expertise in the local market and commitment to exceptional service, I help clients achieve their real estate goals, whether they're buying their dream home or selling their property.
              </p>
              <p>
                My approach combines in-depth market knowledge, personalized attention, and a genuine passion for helping people find their perfect home. I understand that every client's needs are unique, and I pride myself on providing tailored solutions and guidance throughout the entire real estate journey.
              </p>
              <p>
                As your real estate agent, I bring:
              </p>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>Expert knowledge of the GTA real estate market</li>
                <li>Dedicated personal service and attention to detail</li>
                <li>Strong negotiation skills to get you the best deal</li>
                <li>Clear communication throughout the entire process</li>
                <li>A network of trusted professionals to assist with your real estate needs</li>
              </ul>
              <p>
                Let me help you navigate the real estate market with confidence and achieve your property goals.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 