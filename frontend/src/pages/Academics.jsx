import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { BookOpenIcon, PencilIcon, StarIcon } from '@heroicons/react/24/outline';

const CodingResources = () => {
  // State for language selection and PDF
  const [selectedLanguage, setSelectedLanguage] = useState('Python');
  const [selectedCodingPdf, setSelectedCodingPdf] = useState(null);

  // Data for programming languages and PDFs
  const languages = [
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'C', icon: 'fas fa-code' },
    { name: 'C++', icon: 'fas fa-code' },
    { name: 'Java', icon: 'fab fa-java' },
  ];

  const codingData = {
    Python: {
      resources: [
        { name: 'Python Tutorial', pdf: '/pdfs/coding/python/python-tutorial.pdf', type: 'tutorial' },
        { name: 'Basics Practice Problems (10)', pdf: '/pdfs/coding/python/basics-problems.pdf', type: 'practice' },
        { name: 'Data Structures Practice Problems (10)', pdf: '/pdfs/coding/python/ds-problems.pdf', type: 'practice' },
        { name: 'Algorithms Practice Problems (10)', pdf: '/pdfs/coding/python/algo-problems.pdf', type: 'practice' },
        { name: 'OOP Practice Problems (10)', pdf: '/pdfs/coding/python/oop-problems.pdf', type: 'practice' },
        { name: 'File Handling Practice Problems (10)', pdf: '/pdfs/coding/python/file-problems.pdf', type: 'practice' },
        { name: 'Top 100 Placement Questions', pdf: '/pdfs/coding/python/top-100-placement.pdf', type: 'placement' },
      ],
    },
    C: {
      resources: [
        { name: 'C Tutorial', pdf: '/pdfs/coding/c/c-tutorial.pdf', type: 'tutorial' },
        { name: 'Basics Practice Problems (10)', pdf: '/pdfs/coding/c/basics-problems.pdf', type: 'practice' },
        { name: 'Pointers Practice Problems (10)', pdf: '/pdfs/coding/c/pointers-problems.pdf', type: 'practice' },
        { name: 'Arrays Practice Problems (10)', pdf: '/pdfs/coding/c/arrays-problems.pdf', type: 'practice' },
        { name: 'Functions Practice Problems (10)', pdf: '/pdfs/coding/c/functions-problems.pdf', type: 'practice' },
        { name: 'Structures Practice Problems (10)', pdf: '/pdfs/coding/c/structures-problems.pdf', type: 'practice' },
        { name: 'Top 100 Placement Questions', pdf: '/pdfs/coding/c/top-100-placement.pdf', type: 'placement' },
      ],
    },
    'C++': {
      resources: [
        { name: 'C++ Tutorial', pdf: '/pdfs/coding/cpp/cpp-tutorial.pdf', type: 'tutorial' },
        { name: 'Basics Practice Problems (10)', pdf: '/pdfs/coding/cpp/basics-problems.pdf', type: 'practice' },
        { name: 'OOP Practice Problems (10)', pdf: '/pdfs/coding/cpp/oop-problems.pdf', type: 'practice' },
        { name: 'STL Practice Problems (10)', pdf: '/pdfs/coding/cpp/stl-problems.pdf', type: 'practice' },
        { name: 'Templates Practice Problems (10)', pdf: '/pdfs/coding/cpp/templates-problems.pdf', type: 'practice' },
        { name: 'Data Structures Practice Problems (10)', pdf: '/pdfs/coding/cpp/ds-problems.pdf', type: 'practice' },
        { name: 'Top 100 Placement Questions', pdf: '/pdfs/coding/cpp/top-100-placement.pdf', type: 'placement' },
      ],
    },
    Java: {
      resources: [
        { name: 'Java Tutorial', pdf: '/pdfs/coding/java/java-tutorial.pdf', type: 'tutorial' },
        { name: 'Basics Practice Problems (10)', pdf: '/pdfs/coding/java/basics-problems.pdf', type: 'practice' },
        { name: 'OOP Practice Problems (10)', pdf: '/pdfs/coding/java/oop-problems.pdf', type: 'practice' },
        { name: 'Collections Practice Problems (10)', pdf: '/pdfs/coding/java/collections-problems.pdf', type: 'practice' },
        { name: 'Exceptions Practice Problems (10)', pdf: '/pdfs/coding/java/exceptions-problems.pdf', type: 'practice' },
        { name: 'Threads Practice Problems (10)', pdf: '/pdfs/coding/java/threads-problems.pdf', type: 'practice' },
        { name: 'Top 100 Placement Questions', pdf: '/pdfs/coding/java/top-100-placement.pdf', type: 'placement' },
      ],
    },
  };

  // Handle language change
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setSelectedCodingPdf(codingData[lang].resources[0].pdf); // Default to tutorial PDF
  };

  // Get icon for PDF type
  const getPdfIcon = (type) => {
    switch (type) {
      case 'tutorial':
        return <BookOpenIcon className="h-5 w-5 text-primary" />;
      case 'practice':
        return <PencilIcon className="h-5 w-5 text-primary" />;
      case 'placement':
        return <StarIcon className="h-5 w-5 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <AnimatedPage>
      {/* Include Font Awesome for language icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      {/* Coding Resources Section */}
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
              Master Coding with Our Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore tutorials, practice problems, and placement prep questions for top programming languages.
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

          {/* Resources Content and PDF Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Resource List */}
            <motion.div
              key={selectedLanguage}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg lg:sticky lg:top-4"
            >
              <h3 className="text-2xl font-semibold text-primary mb-6">
                {selectedLanguage} Resources
              </h3>
              <ul className="space-y-3">
                {codingData[selectedLanguage].resources.map((resource, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <button
                      onClick={() => setSelectedCodingPdf(resource.pdf)}
                      className={`w-full flex items-center space-x-3 text-left py-3 px-4 rounded-lg transition-all duration-200 ${
                        selectedCodingPdf === resource.pdf
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {getPdfIcon(resource.type)}
                      <span className="truncate">{resource.name}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
              {selectedCodingPdf && (
                <motion.a
                  href={selectedCodingPdf}
                  download
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 inline-block w-full text-center bg-gradient-to-r from-secondary to-accent text-white px-6 py-3 rounded-lg font-semibold text-lg hover:from-accent hover:to-secondary transition-all duration-300"
                >
                  Download Selected Resource
                </motion.a>
              )}
            </motion.div>

            {/* Right: Resource PDF Viewer */}
            <motion.div
              key={selectedCodingPdf}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                <i className={`${languages.find(lang => lang.name === selectedLanguage).icon} text-primary`}></i>
                <span>{selectedLanguage} PDF Viewer</span>
              </h3>
              {selectedCodingPdf ? (
                <iframe
                  src={selectedCodingPdf}
                  title={`${selectedLanguage} Resource PDF`}
                  className="w-full h-[600px] rounded-lg border border-gray-200"
                />
              ) : (
                <p className="text-gray-500 text-center py-16">
                  Select a resource to view the PDF.
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default CodingResources;