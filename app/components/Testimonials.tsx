'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Thompson',
    role: 'First-Time Homebuyer',
    content:
      'Jag made our first home buying experience incredibly smooth. Her knowledge and patience were invaluable throughout the process.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Property Investor',
    content:
      'Working with Jag has been fantastic. Her market insights helped me make smart investment decisions in the GTA market.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Home Seller',
    content:
      "Jag's marketing strategy and negotiation skills helped us get top dollar for our property. Highly recommended!'",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            What my clients say about their experience
          </motion.p>
        </div>

        <div className="relative h-[300px] max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
                <p className="text-gray-600 text-lg mb-6 italic">
                  "{testimonials[current].content}"
                </p>
                <h3 className="text-gray-900 font-semibold">
                  {testimonials[current].name}
                </h3>
                <p className="text-gray-500">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 mx-1 rounded-full transition-colors ${
                  current === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 