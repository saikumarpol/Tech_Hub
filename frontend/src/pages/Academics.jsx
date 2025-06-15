import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const Academics = () => {
  const academicItems = [
    { title: 'Study Notes', desc: 'Detailed notes for all BTech subjects.' },
    { title: 'Video Lectures', desc: 'High-quality tutorials by experts.' },
    { title: 'Practice Questions', desc: 'Solve problems to master concepts.' },
    { title: 'Project Guides', desc: 'Step-by-step project development resources.' },
  ];

  return (
    <AnimatedPage>
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Academics
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {academicItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-secondary hover:underline"
                >
                  Explore
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Academics;