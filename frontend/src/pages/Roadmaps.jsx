import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import ReactFlow, { Background, Controls } from 'react-flow-renderer';

const Roadmaps = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Python');

  // Language selection data
  const languages = [
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'C', icon: 'fas fa-code' },
    { name: 'C++', icon: 'fas fa-code' },
    { name: 'Java', icon: 'fab fa-java' },
  ];

  // Roadmap nodes and edges
  const roadmaps = {
    Python: [
      { id: '1', data: { label: 'Introduction to Python' }, position: { x: 250, y: 0 }, style: { background: '#2563eb', color: '#fff', border: '1px solid #fff', padding: 10 } },
      { id: '2', data: { label: 'Basic Syntax' }, position: { x: 250, y: 100 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '3', data: { label: 'Operators' }, position: { x: 250, y: 200 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '4', data: { label: 'Control Structures' }, position: { x: 250, y: 300 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '5', data: { label: 'Functions' }, position: { x: 250, y: 400 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '6', data: { label: 'Data Structures' }, position: { x: 250, y: 500 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '7', data: { label: 'String Manipulation' }, position: { x: 250, y: 600 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '8', data: { label: 'Modules & Packages' }, position: { x: 250, y: 700 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '9', data: { label: 'File I/O' }, position: { x: 250, y: 800 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '10', data: { label: 'Exception Handling' }, position: { x: 250, y: 900 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '11', data: { label: 'OOP Basics' }, position: { x: 250, y: 1000 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '12', data: { label: 'OOP Advanced' }, position: { x: 250, y: 1100 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '13', data: { label: 'Libraries: NumPy, pandas' }, position: { x: 250, y: 1200 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '14', data: { label: 'Web Scraping' }, position: { x: 250, y: 1300 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '15', data: { label: 'Web Development: Flask/Django' }, position: { x: 250, y: 1400 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '16', data: { label: 'Testing: pytest' }, position: { x: 250, y: 1500 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '17', data: { label: 'Version Control: Git' }, position: { x: 250, y: 1600 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '18', data: { label: 'Projects: CLI Apps, APIs' }, position: { x: 250, y: 1700 }, style: { background: '#10b981', color: '#fff', border: '1px solid #fff', padding: 10 } },
      { source: '1', target: '2', animated: true },
      { source: '2', target: '3', animated: true },
      { source: '3', target: '4', animated: true },
      { source: '4', target: '5', animated: true },
      { source: '5', target: '6', animated: true },
      { source: '6', target: '7', animated: true },
      { source: '7', target: '8', animated: true },
      { source: '8', target: '9', animated: true },
      { source: '9', target: '10', animated: true },
      { source: '10', target: '11', animated: true },
      { source: '11', target: '12', animated: true },
      { source: '12', target: '13', animated: true },
      { source: '13', target: '14', animated: true },
      { source: '14', target: '15', animated: true },
      { source: '15', target: '16', animated: true },
      { source: '16', target: '17', animated: true },
      { source: '17', target: '18', animated: true },
    ],
    C: [
      { id: '1', data: { label: 'Introduction to C' }, position: { x: 250, y: 0 }, style: { background: '#2563eb', color: '#fff', border: '1px solid #fff', padding: 10 } },
      { id: '2', data: { label: 'Basic Syntax' }, position: { x: 250, y: 100 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '3', data: { label: 'Operators' }, position: { x: 250, y: 200 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '4', data: { label: 'Control Structures' }, position: { x: 250, y: 300 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '5', data: { label: 'Functions' }, position: { x: 250, y: 400 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '6', data: { label: 'Arrays' }, position: { x: 250, y: 500 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '7', data: { label: 'Strings' }, position: { x: 250, y: 600 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '8', data: { label: 'Pointers' }, position: { x: 250, y: 700 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '9', data: { label: 'Dynamic Memory' }, position: { x: 250, y: 800 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '10', data: { label: 'Structures' }, position: { x: 250, y: 900 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '11', data: { label: 'File I/O' }, position: { x: 250, y: 1000 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '12', data: { label: 'Preprocessor' }, position: { x: 250, y: 1100 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '13', data: { label: 'Debugging: GDB' }, position: { x: 250, y: 1200 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '14', data: { label: 'Version Control: Git' }, position: { x: 250, y: 1300 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '15', data: { label: 'Algorithms: Sorting, Searching' }, position: { x: 250, y: 1400 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '16', data: { label: 'Projects: Database, Games' }, position: { x: 250, y: 1500 }, style: { background: '#10b981', color: '#fff', border: '1px solid #fff', padding: 10 } },
      { source: '1', target: '2', animated: true },
      { source: '2', target: '3', animated: true },
      { source: '3', target: '4', animated: true },
      { source: '4', target: '5', animated: true },
      { source: '5', target: '6', animated: true },
      { source: '6', target: '7', animated: true },
      { source: '7', target: '8', animated: true },
      { source: '8', target: '9', animated: true },
      { source: '9', target: '10', animated: true },
      { source: '10', target: '11', animated: true },
      { source: '11', target: '12', animated: true },
      { source: '12', target: '13', animated: true },
      { source: '13', target: '14', animated: true },
      { source: '14', target: '15', animated: true },
      { source: '15', target: '16', animated: true },
    ],
    'C++': [
      { id: '1', data: { label: 'Introduction to C++' }, position: { x: 250, y: 0 }, style: { background: '#2563eb', color: '#fff', border: '1px solid #fff', padding: 10 } },
      { id: '2', data: { label: 'Basic Syntax' }, position: { x: 250, y: 100 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '3', data: { label: 'Operators' }, position: { x: 250, y: 200 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '4', data: { label: 'Control Structures' }, position: { x: 250, y: 300 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '5', data: { label: 'Functions' }, position: { x: 250, y: 400 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '6', data: { label: 'Arrays & Strings' }, position: { x: 250, y: 500 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '7', data: { label: 'Pointers & References' }, position: { x: 250, y: 600 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '8', data: { label: 'OOP Basics' }, position: { x: 250, y: 700 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '9', data: { label: 'OOP Advanced' }, position: { x: 250, y: 800 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '10', data: { label: 'STL' }, position: { x: 250, y: 900 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '11', data: { label: 'Algorithms' }, position: { x: 250, y: 1000 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '12', data: { label: 'File I/O' }, position: { x: 250, y: 1100 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '13', data: { label: 'Exception Handling' }, position: { x: 250, y: 1200 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '14', data: { label: 'Templates' }, position: { x: 250, y: 1300 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '15', data: { label: 'Debugging: GDB, Valgrind' }, position: { x: 250, y: 1400 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '16', data: { label: 'Version Control: Git' }, position: { x: 250, y: 1500 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '17', data: { label: 'Competitive Programming' }, position: { x: 250, y: 1600 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '18', data: { label: 'Projects: Console Apps, Algorithms' }, position: { x: 250, y: 1700 }, style: { background: '#10b981', color: '#fff', border: '1px solid #fff', padding: 10 } },
      { source: '1', target: '2', animated: true },
      { source: '2', target: '3', animated: true },
      { source: '3', target: '4', animated: true },
      { source: '4', target: '5', animated: true },
      { source: '5', target: '6', animated: true },
      { source: '6', target: '7', animated: true },
      { source: '7', target: '8', animated: true },
      { source: '8', target: '9', animated: true },
      { source: '9', target: '10', animated: true },
      { source: '10', target: '11', animated: true },
      { source: '11', target: '12', animated: true },
      { source: '12', target: '13', animated: true },
      { source: '13', target: '14', animated: true },
      { source: '14', target: '15', animated: true },
      { source: '15', target: '16', animated: true },
      { source: '16', target: '17', animated: true },
      { source: '17', target: '18', animated: true },
    ],
    Java: [
      { id: '1', data: { label: 'Introduction to Java' }, position: { x: 250, y: 0 }, style: { background: '#2563eb', color: '#fff', border: '1px solid #fff', padding: 10 } },
      { id: '2', data: { label: 'Basic Syntax' }, position: { x: 250, y: 100 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '3', data: { label: 'Operators' }, position: { x: 250, y: 200 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '4', data: { label: 'Control Structures' }, position: { x: 250, y: 300 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '5', data: { label: 'Methods' }, position: { x: 250, y: 400 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '6', data: { label: 'Arrays' }, position: { x: 250, y: 500 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '7', data: { label: 'Strings' }, position: { x: 250, y: 600 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '8', data: { label: 'OOP Basics' }, position: { x: 250, y: 700 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '9', data: { label: 'OOP Advanced' }, position: { x: 250, y: 800 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '10', data: { label: 'Collections' }, position: { x: 250, y: 900 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '11', data: { label: 'Exception Handling' }, position: { x: 250, y: 1000 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '12', data: { label: 'File I/O' }, position: { x: 250, y: 1100 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '13', data: { label: 'Multithreading' }, position: { x: 250, y: 1200 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '14', data: { label: 'Java Libraries: JDBC, JavaFX' }, position: { x: 250, y: 1300 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '15', data: { label: 'Version Control: Git' }, position: { x: 250, y: 1400 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '16', data: { label: 'Build Tools: Maven/Gradle' }, position: { x: 250, y: 1500 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 } },
      { id: '17', data: { label: 'Projects: GUI Apps, Spring Boot APIs' }, position: { x: 250, y: 1600 }, style: { background: '#10b981', color: '#fff', border: '1px solid #fff', padding: 10 } },
      { source: '1', target: '2', animated: true },
      { source: '2', target: '3', animated: true },
      { source: '3', target: '4', animated: true },
      { source: '4', target: '5', animated: true },
      { source: '5', target: '6', animated: true },
      { source: '6', target: '7', animated: true },
      { source: '7', target: '8', animated: true },
      { source: '8', target: '9', animated: true },
      { source: '9', target: '10', animated: true },
      { source: '10', target: '11', animated: true },
      { source: '11', target: '12', animated: true },
      { source: '12', target: '13', animated: true },
      { source: '13', target: '14', animated: true },
      { source: '14', target: '15', animated: true },
      { source: '15', target: '16', animated: true },
      { source: '16', target: '17', animated: true },
    ],
  };

  // Handle language change
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
  };

  return (
    <AnimatedPage>
      {/* Font Awesome for language icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Learn to Code with Our Roadmaps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow our step-by-step roadmaps to master Python, Java, C, and C++ for placements.
            </p>
          </motion.div>

          {/* Language Selection */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {languages.map((lang, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleLanguageChange(lang.name)}
                className={`flex items-center justify-center space-x-2 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  selectedLanguage === lang.name
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <i className={`${lang.icon} text-xl`}></i>
                <span>{lang.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Roadmap Flowchart */}
          <motion.div
            key={selectedLanguage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center space-x-2">
              <i className={`${languages.find((lang) => lang.name === selectedLanguage).icon} text-primary`}></i>
              <span>{selectedLanguage} Learning Roadmap</span>
            </h3>
            <div style={{ height: '1800px', width: '100%' }}>
              <ReactFlow
                nodes={roadmaps[selectedLanguage].filter((item) => item.id)}
                edges={roadmaps[selectedLanguage].filter((item) => item.source)}
                fitView
                style={{ background: '#f9fafb' }}
              >
                <Background color="#d1d5db" gap={16} />
                <Controls />
              </ReactFlow>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Roadmaps;