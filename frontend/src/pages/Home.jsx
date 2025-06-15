import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const Home = () => {
  // State for syllabus section
  const [selectedSyllabusSemester, setSelectedSyllabusSemester] = useState('1-1');
  const [selectedSyllabusPdf, setSelectedSyllabusPdf] = useState(null);
  // State for resources section
  const [selectedResourceSemester, setSelectedResourceSemester] = useState('1-1');
  const [selectedResourcePdf, setSelectedResourcePdf] = useState(null);

  // Mock data for semesters, syllabus PDFs, and resource PDFs
  const semesters = ['1-1', '1-2', '2-1', '2-2', '3-1', '3-2', '4-1', '4-2'];

  const syllabusData = {
    '1-1': {
      syllabi: [
        { name: 'Full Syllabus', pdf: '/pdfs/syllabus/1-1/full-syllabus.pdf' },
        { name: 'Mathematics I Syllabus', pdf: '/pdfs/syllabus/1-1/math1-syllabus.pdf' },
        { name: 'Physics Syllabus', pdf: '/pdfs/syllabus/1-1/physics-syllabus.pdf' },
        { name: 'Programming in C Syllabus', pdf: '/pdfs/syllabus/1-1/c-programming-syllabus.pdf' },
      ],
    },
    '1-2': {
      syllabi: [
        { name: 'Full Syllabus', pdf: '/pdfs/syllabus/1-2/full-syllabus.pdf' },
        { name: 'Mathematics II Syllabus', pdf: '/pdfs/syllabus/1-2/math2-syllabus.pdf' },
        { name: 'Chemistry Syllabus', pdf: '/pdfs/syllabus/1-2/chemistry-syllabus.pdf' },
        { name: 'Data Structures Syllabus', pdf: '/pdfs/syllabus/1-2/data-structures-syllabus.pdf' },
      ],
    },
    '2-1': {
      syllabi: [
        { name: 'Full Syllabus', pdf: '/pdfs/syllabus/2-1/full-syllabus.pdf' },
        { name: 'Digital Logic Design Syllabus', pdf: '/pdfs/syllabus/2-1/dld-syllabus.pdf' },
        { name: 'Discrete Mathematics Syllabus', pdf: '/pdfs/syllabus/2-1/discrete-math-syllabus.pdf' },
        { name: 'OOP Syllabus', pdf: '/pdfs/syllabus/2-1/oop-syllabus.pdf' },
      ],
    },
    '2-2': {
      syllabi: [
        { name: 'Full Syllabus', pdf: '/pdfs/syllabus/2-2/full-syllabus.pdf' },
        { name: 'Database Systems Syllabus', pdf: '/pdfs/syllabus/2-2/dbms-syllabus.pdf' },
        { name: 'Operating Systems Syllabus', pdf: '/pdfs/syllabus/2-2/os-syllabus.pdf' },
        { name: 'Algorithms Syllabus', pdf: '/pdfs/syllabus/2-2/algorithms-syllabus.pdf' },
      ],
    },
    '3-1': {
      syllabi: [
        { name: 'Full Syllabus', pdf: '/pdfs/syllabus/3-1/full-syllabus.pdf' },
        { name: 'Computer Networks Syllabus', pdf: '/pdfs/syllabus/3-1/networks-syllabus.pdf' },
        { name: 'Software Engineering Syllabus', pdf: '/pdfs/syllabus/3-1/se-syllabus.pdf' },
        { name: 'Machine Learning Syllabus', pdf: '/pdfs/syllabus/3-1/ml-syllabus.pdf' },
      ],
    },
    '3-2': {
      syllabi: [
        { name: 'Full Syllabus', pdf: '/pdfs/syllabus/3-2/full-syllabus.pdf' },
        { name: 'Artificial Intelligence Syllabus', pdf: '/pdfs/syllabus/3-2/ai-syllabus.pdf' },
        { name: 'Cloud Computing Syllabus', pdf: '/pdfs/syllabus/3-2/cloud-syllabus.pdf' },
        { name: 'Elective I Syllabus', pdf: '/pdfs/syllabus/3-2/elective1-syllabus.pdf' },
      ],
    },
    '4-1': {
      syllabi: [
        { name: 'Full Syllabus', pdf: '/pdfs/syllabus/4-1/full-syllabus.pdf' },
        { name: 'Big Data Analytics Syllabus', pdf: '/pdfs/syllabus/4-1/big-data-syllabus.pdf' },
        { name: 'Cybersecurity Syllabus', pdf: '/pdfs/syllabus/4-1/cybersecurity-syllabus.pdf' },
        { name: 'Elective II Syllabus', pdf: '/pdfs/syllabus/4-1/elective2-syllabus.pdf' },
      ],
    },
    '4-2': {
      syllabi: [
        { name: 'Full Syllabus', pdf: '/pdfs/syllabus/4-2/full-syllabus.pdf' },
        { name: 'Project Work Syllabus', pdf: '/pdfs/syllabus/4-2/project-syllabus.pdf' },
        { name: 'Internship Syllabus', pdf: '/pdfs/syllabus/4-2/internship-syllabus.pdf' },
        { name: 'Elective III Syllabus', pdf: '/pdfs/syllabus/4-2/elective3-syllabus.pdf' },
      ],
    },
  };

  const resourceData = {
    '1-1': {
      resources: [
        { name: 'Mathematics I Practice', pdf: '/pdfs/resources/1-1/math1-practice.pdf' },
        { name: 'Physics Notes', pdf: '/pdfs/resources/1-1/physics-notes.pdf' },
        { name: 'C Programming Guide', pdf: '/pdfs/resources/1-1/c-programming-guide.pdf' },
      ],
    },
    '1-2': {
      resources: [
        { name: 'Mathematics II Practice', pdf: '/pdfs/resources/1-2/math2-practice.pdf' },
        { name: 'Chemistry Notes', pdf: '/pdfs/resources/1-2/chemistry-notes.pdf' },
        { name: 'Data Structures Guide', pdf: '/pdfs/resources/1-2/data-structures-guide.pdf' },
      ],
    },
    '2-1': {
      resources: [
        { name: 'Digital Logic Practice', pdf: '/pdfs/resources/2-1/dld-practice.pdf' },
        { name: 'Discrete Math Notes', pdf: '/pdfs/resources/2-1/discrete-math-notes.pdf' },
        { name: 'OOP Guide', pdf: '/pdfs/resources/2-1/oop-guide.pdf' },
      ],
    },
    '2-2': {
      resources: [
        { name: 'DBMS Practice', pdf: '/pdfs/resources/2-2/dbms-practice.pdf' },
        { name: 'OS Notes', pdf: '/pdfs/resources/2-2/os-notes.pdf' },
        { name: 'Algorithms Guide', pdf: '/pdfs/resources/2-2/algorithms-guide.pdf' },
      ],
    },
    '3-1': {
      resources: [
        { name: 'Networks Practice', pdf: '/pdfs/resources/3-1/networks-practice.pdf' },
        { name: 'Software Engineering Notes', pdf: '/pdfs/resources/3-1/se-notes.pdf' },
        { name: 'ML Basics Guide', pdf: '/pdfs/resources/3-1/ml-guide.pdf' },
      ],
    },
    '3-2': {
      resources: [
        { name: 'AI Practice', pdf: '/pdfs/resources/3-2/ai-practice.pdf' },
        { name: 'Cloud Computing Notes', pdf: '/pdfs/resources/3-2/cloud-notes.pdf' },
        { name: 'Elective I Guide', pdf: '/pdfs/resources/3-2/elective1-guide.pdf' },
      ],
    },
    '4-1': {
      resources: [
        { name: 'Big Data Practice', pdf: '/pdfs/resources/4-1/big-data-practice.pdf' },
        { name: 'Cybersecurity Notes', pdf: '/pdfs/resources/4-1/cybersecurity-notes.pdf' },
        { name: 'Elective II Guide', pdf: '/pdfs/resources/4-1/elective2-guide.pdf' },
      ],
    },
    '4-2': {
      resources: [
        { name: 'Project Work Notes', pdf: '/pdfs/resources/4-2/project-notes.pdf' },
        { name: 'Internship Guide', pdf: '/pdfs/resources/4-2/internship-guide.pdf' },
        { name: 'Elective III Guide', pdf: '/pdfs/resources/4-2/elective3-guide.pdf' },
      ],
    },
  };

  // Handle semester change for syllabus section
  const handleSyllabusSemesterChange = (sem) => {
    setSelectedSyllabusSemester(sem);
    setSelectedSyllabusPdf(syllabusData[sem].syllabi[0].pdf); // Default to first syllabus
  };

  // Handle semester change for resources section
  const handleResourceSemesterChange = (sem) => {
    setSelectedResourceSemester(sem);
    setSelectedResourcePdf(resourceData[sem].resources[0].pdf); // Default to first resource
  };

  return (
    <AnimatedPage>
      {/* Syllabus Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            BTech Syllabus
          </motion.h2>

          {/* Syllabus Semester Selection */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {semesters.map((sem, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleSyllabusSemesterChange(sem)}
                className={`py-3 px-4 rounded-md text-lg font-semibold transition ${
                  selectedSyllabusSemester === sem
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Semester {sem}
              </motion.button>
            ))}
          </div>

          {/* Syllabus Content and PDF Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Syllabus List */}
            <motion.div
              key={selectedSyllabusSemester}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Semester {selectedSyllabusSemester} Syllabi
              </h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Syllabus Documents</h4>
              <ul className="space-y-2">
                {syllabusData[selectedSyllabusSemester].syllabi.map((syllabus, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => setSelectedSyllabusPdf(syllabus.pdf)}
                      className={`w-full text-left py-2 px-4 rounded-md transition ${
                        selectedSyllabusPdf === syllabus.pdf
                          ? 'bg-primary text-white'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                    >
                      {syllabus.name}
                    </button>
                  </li>
                ))}
              </ul>
              {selectedSyllabusPdf && (
                <a
                  href={selectedSyllabusPdf}
                  download
                  className="mt-4 inline-block bg-secondary text-white px-6 py-2 rounded-md text-lg hover:bg-accent transition"
                >
                  Download Selected Syllabus
                </a>
              )}
            </motion.div>

            {/* Right: Syllabus PDF Viewer */}
            <motion.div
              key={selectedSyllabusPdf}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Syllabus PDF Viewer</h3>
              {selectedSyllabusPdf ? (
                <iframe
                  src={selectedSyllabusPdf}
                  title={`Semester ${selectedSyllabusSemester} Syllabus PDF`}
                  className="w-full h-[600px] rounded-md border border-gray-300"
                />
              ) : (
                <p className="text-gray-600">Select a syllabus to view the PDF.</p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            DEMEDTE Preparation Resources
          </motion.h2>

          {/* Resources Semester Selection */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {semesters.map((sem, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleResourceSemesterChange(sem)}
                className={`py-3 px-4 rounded-md text-lg font-semibold transition ${
                  selectedResourceSemester === sem
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Semester {sem}
              </motion.button>
            ))}
          </div>

          {/* Resources Content and PDF Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Resource List */}
            <motion.div
              key={selectedResourceSemester}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Semester {selectedResourceSemester} Resources
              </h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Study Materials</h4>
              <ul className="space-y-2">
                {resourceData[selectedResourceSemester].resources.map((resource, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => setSelectedResourcePdf(resource.pdf)}
                      className={`w-full text-left py-2 px-4 rounded-md transition ${
                        selectedResourcePdf === resource.pdf
                          ? 'bg-primary text-white'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                    >
                      {resource.name}
                    </button>
                  </li>
                ))}
              </ul>
              {selectedResourcePdf && (
                <a
                  href={selectedResourcePdf}
                  download
                  className="mt-4 inline-block bg-secondary text-white px-6 py-2 rounded-md text-lg hover:bg-accent transition"
                >
                  Download Selected Resource
                </a>
              )}
            </motion.div>

            {/* Right: Resource PDF Viewer */}
            <motion.div
              key={selectedResourcePdf}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Resource PDF Viewer</h3>
              {selectedResourcePdf ? (
                <iframe
                  src={selectedResourcePdf}
                  title={`Semester ${selectedResourceSemester} Resource PDF`}
                  className="w-full h-[600px] rounded-md border border-gray-300"
                />
              ) : (
                <p className="text-gray-600">Select a resource to view the PDF.</p>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Home;