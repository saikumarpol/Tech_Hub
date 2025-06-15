import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const Home = () => {
  // State for category selection
  const [selectedCategory, setSelectedCategory] = useState('syllabus');
  // State for syllabus section
  const [selectedSyllabusBranch, setSelectedSyllabusBranch] = useState('AI');
  const [selectedSyllabusSemester, setSelectedSyllabusSemester] = useState('1-1');
  const [selectedSyllabusPdf, setSelectedSyllabusPdf] = useState(null);
  // State for resources section
  const [selectedResourceBranch, setSelectedResourceBranch] = useState('AI');
  const [selectedResourceSemester, setSelectedResourceSemester] = useState('1-1');
  const [selectedResourcePdf, setSelectedResourcePdf] = useState(null);
  // State for written PDFs section
  const [selectedWrittenBranch, setSelectedWrittenBranch] = useState('AI');
  const [selectedWrittenSemester, setSelectedWrittenSemester] = useState('1-1');
  const [selectedWrittenPdf, setSelectedWrittenPdf] = useState(null);

  // Mock data for branches, semesters, and PDFs
  const branches = ['AI', 'AID', 'CSM', 'Cyber', 'CSD'];
  const semesters = ['1-1', '1-2', '2-1', '2-2', '3-1', '3-2', '4-1', '4-2'];

 
  const syllabusData = {
    AI: {
      '1-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/AI/1-1/full-syllabus.pdf' },
          { name: 'Mathematics I Syllabus', pdf: '/pdfs/syllabus/AI/1-1/math1-syllabus.pdf' },
          { name: 'AI Fundamentals Syllabus', pdf: '/pdfs/syllabus/AI/1-1/ai-fundamentals-syllabus.pdf' },
          { name: 'Programming in C Syllabus', pdf: '/pdfs/syllabus/AI/1-1/c-programming-syllabus.pdf' },
        ],
      },
      '1-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/AI/1-2/full-syllabus.pdf' },
          { name: 'Mathematics II Syllabus', pdf: '/pdfs/syllabus/AI/1-2/math2-syllabus.pdf' },
          { name: 'Data Structures Syllabus', pdf: '/pdfs/syllabus/AI/1-2/data-structures-syllabus.pdf' },
          { name: 'ML Basics Syllabus', pdf: '/pdfs/syllabus/AI/1-2/ml-basics-syllabus.pdf' },
        ],
      },
      '2-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/AI/2-1/full-syllabus.pdf' },
          { name: 'Discrete Mathematics Syllabus', pdf: '/pdfs/syllabus/AI/2-1/discrete-math-syllabus.pdf' },
          { name: 'OOP Syllabus', pdf: '/pdfs/syllabus/AI/2-1/oop-syllabus.pdf' },
          { name: 'Neural Networks Syllabus', pdf: '/pdfs/syllabus/AI/2-1/neural-networks-syllabus.pdf' },
        ],
      },
      '2-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/AI/2-2/full-syllabus.pdf' },
          { name: 'Database Systems Syllabus', pdf: '/pdfs/syllabus/AI/2-2/dbms-syllabus.pdf' },
          { name: 'Algorithms Syllabus', pdf: '/pdfs/syllabus/AI/2-2/algorithms-syllabus.pdf' },
          { name: 'Deep Learning Syllabus', pdf: '/pdfs/syllabus/AI/2-2/deep-learning-syllabus.pdf' },
        ],
      },
      '3-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/AI/3-1/full-syllabus.pdf' },
          { name: 'Computer Networks Syllabus', pdf: '/pdfs/syllabus/AI/3-1/networks-syllabus.pdf' },
          { name: 'AI Techniques Syllabus', pdf: '/pdfs/syllabus/AI/3-1/ai-techniques-syllabus.pdf' },
          { name: 'Software Engineering Syllabus', pdf: '/pdfs/syllabus/AI/3-1/se-syllabus.pdf' },
        ],
      },
      '3-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/AI/3-2/full-syllabus.pdf' },
          { name: 'Natural Language Processing Syllabus', pdf: '/pdfs/syllabus/AI/3-2/nlp-syllabus.pdf' },
          { name: 'Cloud Computing Syllabus', pdf: '/pdfs/syllabus/AI/3-2/cloud-syllabus.pdf' },
          { name: 'Elective I Syllabus', pdf: '/pdfs/syllabus/AI/3-2/elective1-syllabus.pdf' },
        ],
      },
      '4-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/AI/4-1/full-syllabus.pdf' },
          { name: 'Reinforcement Learning Syllabus', pdf: '/pdfs/syllabus/AI/4-1/rl-syllabus.pdf' },
          { name: 'Big Data Analytics Syllabus', pdf: '/pdfs/syllabus/AI/4-1/big-data-syllabus.pdf' },
          { name: 'Elective II Syllabus', pdf: '/pdfs/syllabus/AI/4-1/elective2-syllabus.pdf' },
        ],
      },
      '4-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/AI/4-2/full-syllabus.pdf' },
          { name: 'Project Work Syllabus', pdf: '/pdfs/syllabus/AI/4-2/project-syllabus.pdf' },
          { name: 'Internship Syllabus', pdf: '/pdfs/syllabus/AI/4-2/internship-syllabus.pdf' },
          { name: 'Elective III Syllabus', pdf: '/pdfs/syllabus/AI/4-2/elective3-syllabus.pdf' },
        ],
      },
    },
    AID: {
      '1-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/AID/1-1/full-syllabus.pdf' },
          { name: 'Mathematics I Syllabus', pdf: '/pdfs/syllabus/AID/1-1/math1-syllabus.pdf' },
          { name: 'Data Science Intro Syllabus', pdf: '/pdfs/syllabus/AID/1-1/ds-intro-syllabus.pdf' },
          { name: 'Programming in C Syllabus', pdf: '/pdfs/syllabus/AID/1-1/c-programming-syllabus.pdf' },
        ],
      },
      '1-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/AID/1-2/full-syllabus.pdf' },
          { name: 'Mathematics II Syllabus', pdf: '/pdfs/syllabus/AID/1-2/math2-syllabus.pdf' },
          { name: 'Data Structures Syllabus', pdf: '/pdfs/syllabus/AID/1-2/data-structures-syllabus.pdf' },
          { name: 'Statistics for DS Syllabus', pdf: '/pdfs/syllabus/AID/1-2/stats-syllabus.pdf' },
        ],
      },
      '2-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/AID/2-1/full-syllabus.pdf' },
          { name: 'Discrete Mathematics Syllabus', pdf: '/pdfs/syllabus/AID/2-1/discrete-math-syllabus.pdf' },
          { name: 'OOP Syllabus', pdf: '/pdfs/syllabus/AID/2-1/oop-syllabus.pdf' },
          { name: 'Data Visualization Syllabus', pdf: '/pdfs/syllabus/AID/2-1/data-viz-syllabus.pdf' },
        ],
      },
      '2-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/AID/2-2/full-syllabus.pdf' },
          { name: 'Database Systems Syllabus', pdf: '/pdfs/syllabus/AID/2-2/dbms-syllabus.pdf' },
          { name: 'Algorithms Syllabus', pdf: '/pdfs/syllabus/AID/2-2/algorithms-syllabus.pdf' },
          { name: 'ML for DS Syllabus', pdf: '/pdfs/syllabus/AID/2-2/ml-ds-syllabus.pdf' },
        ],
      },
      '3-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/AID/3-1/full-syllabus.pdf' },
          { name: 'Computer Networks Syllabus', pdf: '/pdfs/syllabus/AID/3-1/networks-syllabus.pdf' },
          { name: 'Data Mining Syllabus', pdf: '/pdfs/syllabus/AID/3-1/data-mining-syllabus.pdf' },
          { name: 'Software Engineering Syllabus', pdf: '/pdfs/syllabus/AID/3-1/se-syllabus.pdf' },
        ],
      },
      '3-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/AID/3-2/full-syllabus.pdf' },
          { name: 'Big Data Technologies Syllabus', pdf: '/pdfs/syllabus/AID/3-2/big-data-tech-syllabus.pdf' },
          { name: 'Cloud Computing Syllabus', pdf: '/pdfs/syllabus/AID/3-2/cloud-syllabus.pdf' },
          { name: 'Elective I Syllabus', pdf: '/pdfs/syllabus/AID/3-2/elective1-syllabus.pdf' },
        ],
      },
      '4-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/AID/4-1/full-syllabus.pdf' },
          { name: 'Predictive Analytics Syllabus', pdf: '/pdfs/syllabus/AID/4-1/predictive-analytics-syllabus.pdf' },
          { name: 'AI Applications Syllabus', pdf: '/pdfs/syllabus/AID/4-1/ai-apps-syllabus.pdf' },
          { name: 'Elective II Syllabus', pdf: '/pdfs/syllabus/AID/4-1/elective2-syllabus.pdf' },
        ],
      },
      '4-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/AID/4-2/full-syllabus.pdf' },
          { name: 'Project Work Syllabus', pdf: '/pdfs/syllabus/AID/4-2/project-syllabus.pdf' },
          { name: 'Internship Syllabus', pdf: '/pdfs/syllabus/AID/4-2/internship-syllabus.pdf' },
          { name: 'Elective III Syllabus', pdf: '/pdfs/syllabus/AID/4-2/elective3-syllabus.pdf' },
        ],
      },
    },
    CSM: {
      '1-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/CSM/1-1/full-syllabus.pdf' },
          { name: 'Mathematics I Syllabus', pdf: '/pdfs/syllabus/CSM/1-1/math1-syllabus.pdf' },
          { name: 'ML Foundations Syllabus', pdf: '/pdfs/syllabus/CSM/1-1/ml-foundations-syllabus.pdf' },
          { name: 'Programming in C Syllabus', pdf: '/pdfs/syllabus/CSM/1-1/c-programming-syllabus.pdf' },
        ],
      },
      '1-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/CSM/1-2/full-syllabus.pdf' },
          { name: 'Mathematics II Syllabus', pdf: '/pdfs/syllabus/CSM/1-2/math2-syllabus.pdf' },
          { name: 'Data Structures Syllabus', pdf: '/pdfs/syllabus/CSM/1-2/data-structures-syllabus.pdf' },
          { name: 'Statistical ML Syllabus', pdf: '/pdfs/syllabus/CSM/1-2/stat-ml-syllabus.pdf' },
        ],
      },
      '2-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/CSM/2-1/full-syllabus.pdf' },
          { name: 'Discrete Mathematics Syllabus', pdf: '/pdfs/syllabus/CSM/2-1/discrete-math-syllabus.pdf' },
          { name: 'OOP Syllabus', pdf: '/pdfs/syllabus/CSM/2-1/oop-syllabus.pdf' },
          { name: 'Supervised Learning Syllabus', pdf: '/pdfs/syllabus/CSM/2-1/supervised-learning-syllabus.pdf' },
        ],
      },
      '2-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/CSM/2-2/full-syllabus.pdf' },
          { name: 'Database Systems Syllabus', pdf: '/pdfs/syllabus/CSM/2-2/dbms-syllabus.pdf' },
          { name: 'Algorithms Syllabus', pdf: '/pdfs/syllabus/CSM/2-2/algorithms-syllabus.pdf' },
          { name: 'Unsupervised Learning Syllabus', pdf: '/pdfs/syllabus/CSM/2-2/unsupervised-learning-syllabus.pdf' },
        ],
      },
      '3-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/CSM/3-1/full-syllabus.pdf' },
          { name: 'Computer Networks Syllabus', pdf: '/pdfs/syllabus/CSM/3-1/networks-syllabus.pdf' },
          { name: 'Advanced ML Syllabus', pdf: '/pdfs/syllabus/CSM/3-1/advanced-ml-syllabus.pdf' },
          { name: 'Software Engineering Syllabus', pdf: '/pdfs/syllabus/CSM/3-1/se-syllabus.pdf' },
        ],
      },
      '3-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/CSM/3-2/full-syllabus.pdf' },
          { name: 'Deep Learning Syllabus', pdf: '/pdfs/syllabus/CSM/3-2/deep-learning-syllabus.pdf' },
          { name: 'Cloud Computing Syllabus', pdf: '/pdfs/syllabus/CSM/3-2/cloud-syllabus.pdf' },
          { name: 'Elective I Syllabus', pdf: '/pdfs/syllabus/CSM/3-2/elective1-syllabus.pdf' },
        ],
      },
      '4-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/CSM/4-1/full-syllabus.pdf' },
          { name: 'Reinforcement Learning Syllabus', pdf: '/pdfs/syllabus/CSM/4-1/rl-syllabus.pdf' },
          { name: 'Big Data Analytics Syllabus', pdf: '/pdfs/syllabus/CSM/4-1/big-data-syllabus.pdf' },
          { name: 'Elective II Syllabus', pdf: '/pdfs/syllabus/CSM/4-1/elective2-syllabus.pdf' },
        ],
      },
      '4-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/CSM/4-2/full-syllabus.pdf' },
          { name: 'Project Work Syllabus', pdf: '/pdfs/syllabus/CSM/4-2/project-syllabus.pdf' },
          { name: 'Internship Syllabus', pdf: '/pdfs/syllabus/CSM/4-2/internship-syllabus.pdf' },
          { name: 'Elective III Syllabus', pdf: '/pdfs/syllabus/CSM/4-2/elective3-syllabus.pdf' },
        ],
      },
    },
    Cyber: {
      '1-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/Cyber/1-1/full-syllabus.pdf' },
          { name: 'Mathematics I Syllabus', pdf: '/pdfs/syllabus/Cyber/1-1/math1-syllabus.pdf' },
          { name: 'Cybersecurity Basics Syllabus', pdf: '/pdfs/syllabus/Cyber/1-1/cyber-basics-syllabus.pdf' },
          { name: 'Programming in C Syllabus', pdf: '/pdfs/syllabus/Cyber/1-1/c-programming-syllabus.pdf' },
        ],
      },
      '1-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/Cyber/1-2/full-syllabus.pdf' },
          { name: 'Mathematics II Syllabus', pdf: '/pdfs/syllabus/Cyber/1-2/math2-syllabus.pdf' },
          { name: 'Data Structures Syllabus', pdf: '/pdfs/syllabus/Cyber/1-2/data-structures-syllabus.pdf' },
          { name: 'Network Security Syllabus', pdf: '/pdfs/syllabus/Cyber/1-2/network-security-syllabus.pdf' },
        ],
      },
      '2-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/Cyber/2-1/full-syllabus.pdf' },
          { name: 'Discrete Mathematics Syllabus', pdf: '/pdfs/syllabus/Cyber/2-1/discrete-math-syllabus.pdf' },
          { name: 'OOP Syllabus', pdf: '/pdfs/syllabus/Cyber/2-1/oop-syllabus.pdf' },
          { name: 'Cryptography Syllabus', pdf: '/pdfs/syllabus/Cyber/2-1/cryptography-syllabus.pdf' },
        ],
      },
      '2-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/Cyber/2-2/full-syllabus.pdf' },
          { name: 'Database Systems Syllabus', pdf: '/pdfs/syllabus/Cyber/2-2/dbms-syllabus.pdf' },
          { name: 'Algorithms Syllabus', pdf: '/pdfs/syllabus/Cyber/2-2/algorithms-syllabus.pdf' },
          { name: 'Ethical Hacking Syllabus', pdf: '/pdfs/syllabus/Cyber/2-2/ethical-hacking-syllabus.pdf' },
        ],
      },
      '3-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/Cyber/3-1/full-syllabus.pdf' },
          { name: 'Computer Networks Syllabus', pdf: '/pdfs/syllabus/Cyber/3-1/networks-syllabus.pdf' },
          { name: 'Cyber Forensics Syllabus', pdf: '/pdfs/syllabus/Cyber/3-1/cyber-forensics-syllabus.pdf' },
          { name: 'Software Engineering Syllabus', pdf: '/pdfs/syllabus/Cyber/3-1/se-syllabus.pdf' },
        ],
      },
      '3-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/Cyber/3-2/full-syllabus.pdf' },
          { name: 'Cloud Security Syllabus', pdf: '/pdfs/syllabus/Cyber/3-2/cloud-security-syllabus.pdf' },
          { name: 'Incident Response Syllabus', pdf: '/pdfs/syllabus/Cyber/3-2/incident-response-syllabus.pdf' },
          { name: 'Elective I Syllabus', pdf: '/pdfs/syllabus/Cyber/3-2/elective1-syllabus.pdf' },
        ],
      },
      '4-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/Cyber/4-1/full-syllabus.pdf' },
          { name: 'Advanced Cryptography Syllabus', pdf: '/pdfs/syllabus/Cyber/4-1/advanced-crypto-syllabus.pdf' },
          { name: 'Security Analytics Syllabus', pdf: '/pdfs/syllabus/Cyber/4-1/security-analytics-syllabus.pdf' },
          { name: 'Elective II Syllabus', pdf: '/pdfs/syllabus/Cyber/4-1/elective2-syllabus.pdf' },
        ],
      },
      '4-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/Cyber/4-2/full-syllabus.pdf' },
          { name: 'Project Work Syllabus', pdf: '/pdfs/syllabus/Cyber/4-2/project-syllabus.pdf' },
          { name: 'Internship Syllabus', pdf: '/pdfs/syllabus/Cyber/4-2/internship-syllabus.pdf' },
          { name: 'Elective III Syllabus', pdf: '/pdfs/syllabus/Cyber/4-2/elective3-syllabus.pdf' },
        ],
      },
    },
    CSD: {
      '1-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/CSD/1-1/full-syllabus.pdf' },
          { name: 'Mathematics I Syllabus', pdf: '/pdfs/syllabus/CSD/1-1/math1-syllabus.pdf' },
          { name: 'Design Principles Syllabus', pdf: '/pdfs/syllabus/CSD/1-1/design-principles-syllabus.pdf' },
          { name: 'Programming in C Syllabus', pdf: '/pdfs/syllabus/CSD/1-1/c-programming-syllabus.pdf' },
        ],
      },
      '1-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/CSD/1-2/full-syllabus.pdf' },
          { name: 'Mathematics II Syllabus', pdf: '/pdfs/syllabus/CSD/1-2/math2-syllabus.pdf' },
          { name: 'Data Structures Syllabus', pdf: '/pdfs/syllabus/CSD/1-2/data-structures-syllabus.pdf' },
          { name: 'UI/UX Design Syllabus', pdf: '/pdfs/syllabus/CSD/1-2/ui-ux-syllabus.pdf' },
        ],
      },
      '2-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/CSD/2-1/full-syllabus.pdf' },
          { name: 'Discrete Mathematics Syllabus', pdf: '/pdfs/syllabus/CSD/2-1/discrete-math-syllabus.pdf' },
          { name: 'OOP Syllabus', pdf: '/pdfs/syllabus/CSD/2-1/oop-syllabus.pdf' },
          { name: 'Graphic Design Syllabus', pdf: '/pdfs/syllabus/CSD/2-1/graphic-design-syllabus.pdf' },
        ],
      },
      '2-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/CSD/2-2/full-syllabus.pdf' },
          { name: 'Database Systems Syllabus', pdf: '/pdfs/syllabus/CSD/2-2/dbms-syllabus.pdf' },
          { name: 'Algorithms Syllabus', pdf: '/pdfs/syllabus/CSD/2-2/algorithms-syllabus.pdf' },
          { name: 'Interaction Design Syllabus', pdf: '/pdfs/syllabus/CSD/2-2/interaction-design-syllabus.pdf' },
        ],
      },
      '3-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/CSD/3-1/full-syllabus.pdf' },
          { name: 'Computer Networks Syllabus', pdf: '/pdfs/syllabus/CSD/3-1/networks-syllabus.pdf' },
          { name: 'Design Thinking Syllabus', pdf: '/pdfs/syllabus/CSD/3-1/design-thinking-syllabus.pdf' },
          { name: 'Software Engineering Syllabus', pdf: '/pdfs/syllabus/CSD/3-1/se-syllabus.pdf' },
        ],
      },
      '3-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/CSD/3-2/full-syllabus.pdf' },
          { name: 'Web Design Syllabus', pdf: '/pdfs/syllabus/CSD/3-2/web-design-syllabus.pdf' },
          { name: 'Cloud Computing Syllabus', pdf: '/pdfs/syllabus/CSD/3-2/cloud-syllabus.pdf' },
          { name: 'Elective I Syllabus', pdf: '/pdfs/syllabus/CSD/3-2/elective1-syllabus.pdf' },
        ],
      },
      '4-1': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/CSD/4-1/full-syllabus.pdf' },
          { name: 'Advanced UI/UX Syllabus', pdf: '/pdfs/syllabus/CSD/4-1/advanced-ui-ux-syllabus.pdf' },
          { name: 'Design Portfolio Syllabus', pdf: '/pdfs/syllabus/CSD/4-1/design-portfolio-syllabus.pdf' },
          { name: 'Elective II Syllabus', pdf: '/pdfs/syllabus/CSD/4-1/elective2-syllabus.pdf' },
        ],
      },
      '4-2': {
        syllabi: [
          { name: 'Full Syllabus', pdf: '/pdfs/syllabus/CSD/4-2/full-syllabus.pdf' },
          { name: 'Project Work Syllabus', pdf: '/pdfs/syllabus/CSD/4-2/project-syllabus.pdf' },
          { name: 'Internship Syllabus', pdf: '/pdfs/syllabus/CSD/4-2/internship-syllabus.pdf' },
          { name: 'Elective III Syllabus', pdf: '/pdfs/syllabus/CSD/4-2/elective3-syllabus.pdf' },
        ],
      },
    },
  };

  // Resource data for all branches and semesters
  const resourceData = {
    AI: {
      '1-1': {
        resources: [
          { name: 'Mathematics I Practice', pdf: '/pdfs/resources/AI/1-1/math1-practice.pdf' },
          { name: 'AI Fundamentals Notes', pdf: '/pdfs/resources/AI/1-1/ai-notes.pdf' },
          { name: 'C Programming Guide', pdf: '/pdfs/resources/AI/1-1/c-guide.pdf' },
        ],
      },
      '1-2': {
        resources: [
          { name: 'Mathematics II Practice', pdf: '/pdfs/resources/AI/1-2/math2-practice.pdf' },
          { name: 'Data Structures Notes', pdf: '/pdfs/resources/AI/1-2/data-structures-notes.pdf' },
          { name: 'ML Basics Guide', pdf: '/pdfs/resources/AI/1-2/ml-guide.pdf' },
        ],
      },
      '2-1': {
        resources: [
          { name: 'Discrete Mathematics Practice', pdf: '/pdfs/resources/AI/2-1/discrete-math-practice.pdf' },
          { name: 'OOP Notes', pdf: '/pdfs/resources/AI/2-1/oop-notes.pdf' },
          { name: 'Neural Networks Guide', pdf: '/pdfs/resources/AI/2-1/neural-networks-guide.pdf' },
        ],
      },
      '2-2': {
        resources: [
          { name: 'Database Systems Practice', pdf: '/pdfs/resources/AI/2-2/dbms-practice.pdf' },
          { name: 'Algorithms Notes', pdf: '/pdfs/resources/AI/2-2/algorithms-notes.pdf' },
          { name: 'Deep Learning Guide', pdf: '/pdfs/resources/AI/2-2/deep-learning-guide.pdf' },
        ],
      },
      '3-1': {
        resources: [
          { name: 'Computer Networks Practice', pdf: '/pdfs/resources/AI/3-1/networks-practice.pdf' },
          { name: 'AI Techniques Notes', pdf: '/pdfs/resources/AI/3-1/ai-techniques-notes.pdf' },
          { name: 'Software Engineering Guide', pdf: '/pdfs/resources/AI/3-1/se-guide.pdf' },
        ],
      },
      '3-2': {
        resources: [
          { name: 'NLP Practice', pdf: '/pdfs/resources/AI/3-2/nlp-practice.pdf' },
          { name: 'Cloud Computing Notes', pdf: '/pdfs/resources/AI/3-2/cloud-notes.pdf' },
          { name: 'Elective I Guide', pdf: '/pdfs/resources/AI/3-2/elective1-guide.pdf' },
        ],
      },
      '4-1': {
        resources: [
          { name: 'Reinforcement Learning Practice', pdf: '/pdfs/resources/AI/4-1/rl-practice.pdf' },
          { name: 'Big Data Analytics Notes', pdf: '/pdfs/resources/AI/4-1/big-data-notes.pdf' },
          { name: 'Elective II Guide', pdf: '/pdfs/resources/AI/4-1/elective2-guide.pdf' },
        ],
      },
      '4-2': {
        resources: [
          { name: 'Project Work Notes', pdf: '/pdfs/resources/AI/4-2/project-notes.pdf' },
          { name: 'Internship Guide', pdf: '/pdfs/resources/AI/4-2/internship-guide.pdf' },
          { name: 'Elective III Guide', pdf: '/pdfs/resources/AI/4-2/elective3-guide.pdf' },
        ],
      },
    },
    AID: {
      '1-1': {
        resources: [
          { name: 'Mathematics I Practice', pdf: '/pdfs/resources/AID/1-1/math1-practice.pdf' },
          { name: 'Data Science Notes', pdf: '/pdfs/resources/AID/1-1/ds-notes.pdf' },
          { name: 'C Programming Guide', pdf: '/pdfs/resources/AID/1-1/c-guide.pdf' },
        ],
      },
      '1-2': {
        resources: [
          { name: 'Mathematics II Practice', pdf: '/pdfs/resources/AID/1-2/math2-practice.pdf' },
          { name: 'Data Structures Notes', pdf: '/pdfs/resources/AID/1-2/data-structures-notes.pdf' },
          { name: 'Statistics Guide', pdf: '/pdfs/resources/AID/1-2/stats-guide.pdf' },
        ],
      },
      '2-1': {
        resources: [
          { name: 'Discrete Mathematics Practice', pdf: '/pdfs/resources/AID/2-1/discrete-math-practice.pdf' },
          { name: 'OOP Notes', pdf: '/pdfs/resources/AID/2-1/oop-notes.pdf' },
          { name: 'Data Visualization Guide', pdf: '/pdfs/resources/AID/2-1/data-viz-guide.pdf' },
        ],
      },
      '2-2': {
        resources: [
          { name: 'Database Systems Practice', pdf: '/pdfs/resources/AID/2-2/dbms-practice.pdf' },
          { name: 'Algorithms Notes', pdf: '/pdfs/resources/AID/2-2/algorithms-notes.pdf' },
          { name: 'ML for DS Guide', pdf: '/pdfs/resources/AID/2-2/ml-ds-guide.pdf' },
        ],
      },
      '3-1': {
        resources: [
          { name: 'Computer Networks Practice', pdf: '/pdfs/resources/AID/3-1/networks-practice.pdf' },
          { name: 'Data Mining Notes', pdf: '/pdfs/resources/AID/3-1/data-mining-notes.pdf' },
          { name: 'Software Engineering Guide', pdf: '/pdfs/resources/AID/3-1/se-guide.pdf' },
        ],
      },
      '3-2': {
        resources: [
          { name: 'Big Data Tech Practice', pdf: '/pdfs/resources/AID/3-2/big-data-tech-practice.pdf' },
          { name: 'Cloud Computing Notes', pdf: '/pdfs/resources/AID/3-2/cloud-notes.pdf' },
          { name: 'Elective I Guide', pdf: '/pdfs/resources/AID/3-2/elective1-guide.pdf' },
        ],
      },
      '4-1': {
        resources: [
          { name: 'Predictive Analytics Practice', pdf: '/pdfs/resources/AID/4-1/predictive-analytics-practice.pdf' },
          { name: 'AI Applications Notes', pdf: '/pdfs/resources/AID/4-1/ai-apps-notes.pdf' },
          { name: 'Elective II Guide', pdf: '/pdfs/resources/AID/4-1/elective2-guide.pdf' },
        ],
      },
      '4-2': {
        resources: [
          { name: 'Project Work Notes', pdf: '/pdfs/resources/AID/4-2/project-notes.pdf' },
          { name: 'Internship Guide', pdf: '/pdfs/resources/AID/4-2/internship-guide.pdf' },
          { name: 'Elective III Guide', pdf: '/pdfs/resources/AID/4-2/elective3-guide.pdf' },
        ],
      },
    },
    CSM: {
      '1-1': {
        resources: [
          { name: 'Mathematics I Practice', pdf: '/pdfs/resources/CSM/1-1/math1-practice.pdf' },
          { name: 'ML Foundations Notes', pdf: '/pdfs/resources/CSM/1-1/ml-foundations-notes.pdf' },
          { name: 'C Programming Guide', pdf: '/pdfs/resources/CSM/1-1/c-guide.pdf' },
        ],
      },
      '1-2': {
        resources: [
          { name: 'Mathematics II Practice', pdf: '/pdfs/resources/CSM/1-2/math2-practice.pdf' },
          { name: 'Data Structures Notes', pdf: '/pdfs/resources/CSM/1-2/data-structures-notes.pdf' },
          { name: 'Statistical ML Guide', pdf: '/pdfs/resources/CSM/1-2/stat-ml-guide.pdf' },
        ],
      },
      '2-1': {
        resources: [
          { name: 'Discrete Mathematics Practice', pdf: '/pdfs/resources/CSM/2-1/discrete-math-practice.pdf' },
          { name: 'OOP Notes', pdf: '/pdfs/resources/CSM/2-1/oop-notes.pdf' },
          { name: 'Supervised Learning Guide', pdf: '/pdfs/resources/CSM/2-1/supervised-learning-guide.pdf' },
        ],
      },
      '2-2': {
        resources: [
          { name: 'Database Systems Practice', pdf: '/pdfs/resources/CSM/2-2/dbms-practice.pdf' },
          { name: 'Algorithms Notes', pdf: '/pdfs/resources/CSM/2-2/algorithms-notes.pdf' },
          { name: 'Unsupervised Learning Guide', pdf: '/pdfs/resources/CSM/2-2/unsupervised-learning-guide.pdf' },
        ],
      },
      '3-1': {
        resources: [
          { name: 'Computer Networks Practice', pdf: '/pdfs/resources/CSM/3-1/networks-practice.pdf' },
          { name: 'Advanced ML Notes', pdf: '/pdfs/resources/CSM/3-1/advanced-ml-notes.pdf' },
          { name: 'Software Engineering Guide', pdf: '/pdfs/resources/CSM/3-1/se-guide.pdf' },
        ],
      },
      '3-2': {
        resources: [
          { name: 'Deep Learning Practice', pdf: '/pdfs/resources/CSM/3-2/deep-learning-practice.pdf' },
          { name: 'Cloud Computing Notes', pdf: '/pdfs/resources/CSM/3-2/cloud-notes.pdf' },
          { name: 'Elective I Guide', pdf: '/pdfs/resources/CSM/3-2/elective1-guide.pdf' },
        ],
      },
      '4-1': {
        resources: [
          { name: 'Reinforcement Learning Practice', pdf: '/pdfs/resources/CSM/4-1/rl-practice.pdf' },
          { name: 'Big Data Analytics Notes', pdf: '/pdfs/resources/CSM/4-1/big-data-notes.pdf' },
          { name: 'Elective II Guide', pdf: '/pdfs/resources/CSM/4-1/elective2-guide.pdf' },
        ],
      },
      '4-2': {
        resources: [
          { name: 'Project Work Notes', pdf: '/pdfs/resources/CSM/4-2/project-notes.pdf' },
          { name: 'Internship Guide', pdf: '/pdfs/resources/CSM/4-2/internship-guide.pdf' },
          { name: 'Elective III Guide', pdf: '/pdfs/resources/CSM/4-2/elective3-guide.pdf' },
        ],
      },
    },
    Cyber: {
      '1-1': {
        resources: [
          { name: 'Mathematics I Practice', pdf: '/pdfs/resources/Cyber/1-1/math1-practice.pdf' },
          { name: 'Cybersecurity Basics Notes', pdf: '/pdfs/resources/Cyber/1-1/cyber-basics-notes.pdf' },
          { name: 'C Programming Guide', pdf: '/pdfs/resources/Cyber/1-1/c-guide.pdf' },
        ],
      },
      '1-2': {
        resources: [
          { name: 'Mathematics II Practice', pdf: '/pdfs/resources/Cyber/1-2/math2-practice.pdf' },
          { name: 'Data Structures Notes', pdf: '/pdfs/resources/Cyber/1-2/data-structures-notes.pdf' },
          { name: 'Network Security Guide', pdf: '/pdfs/resources/Cyber/1-2/network-security-guide.pdf' },
        ],
      },
      '2-1': {
        resources: [
          { name: 'Discrete Mathematics Practice', pdf: '/pdfs/resources/Cyber/2-1/discrete-math-practice.pdf' },
          { name: 'OOP Notes', pdf: '/pdfs/resources/Cyber/2-1/oop-notes.pdf' },
          { name: 'Cryptography Guide', pdf: '/pdfs/resources/Cyber/2-1/cryptography-guide.pdf' },
        ],
      },
      '2-2': {
        resources: [
          { name: 'Database Systems Practice', pdf: '/pdfs/resources/Cyber/2-2/dbms-practice.pdf' },
          { name: 'Algorithms Notes', pdf: '/pdfs/resources/Cyber/2-2/algorithms-notes.pdf' },
          { name: 'Ethical Hacking Guide', pdf: '/pdfs/resources/Cyber/2-2/ethical-hacking-guide.pdf' },
        ],
      },
      '3-1': {
        resources: [
          { name: 'Computer Networks Practice', pdf: '/pdfs/resources/Cyber/3-1/networks-practice.pdf' },
          { name: 'Cyber Forensics Notes', pdf: '/pdfs/resources/Cyber/3-1/cyber-forensics-notes.pdf' },
          { name: 'Software Engineering Guide', pdf: '/pdfs/resources/Cyber/3-1/se-guide.pdf' },
        ],
      },
      '3-2': {
        resources: [
          { name: 'Cloud Security Practice', pdf: '/pdfs/resources/Cyber/3-2/cloud-security-practice.pdf' },
          { name: 'Incident Response Notes', pdf: '/pdfs/resources/Cyber/3-2/incident-response-notes.pdf' },
          { name: 'Elective I Guide', pdf: '/pdfs/resources/Cyber/3-2/elective1-guide.pdf' },
        ],
      },
      '4-1': {
        resources: [
          { name: 'Advanced Cryptography Practice', pdf: '/pdfs/resources/Cyber/4-1/advanced-crypto-practice.pdf' },
          { name: 'Security Analytics Notes', pdf: '/pdfs/resources/Cyber/4-1/security-analytics-notes.pdf' },
          { name: 'Elective II Guide', pdf: '/pdfs/resources/Cyber/4-1/elective2-guide.pdf' },
        ],
      },
      '4-2': {
        resources: [
          { name: 'Project Work Notes', pdf: '/pdfs/resources/Cyber/4-2/project-notes.pdf' },
          { name: 'Internship Guide', pdf: '/pdfs/resources/Cyber/4-2/internship-guide.pdf' },
          { name: 'Elective III Guide', pdf: '/pdfs/resources/Cyber/4-2/elective3-guide.pdf' },
        ],
      },
    },
    CSD: {
      '1-1': {
        resources: [
          { name: 'Mathematics I Practice', pdf: '/pdfs/resources/CSD/1-1/math1-practice.pdf' },
          { name: 'Design Principles Notes', pdf: '/pdfs/resources/CSD/1-1/design-principles-notes.pdf' },
          { name: 'C Programming Guide', pdf: '/pdfs/resources/CSD/1-1/c-guide.pdf' },
        ],
      },
      '1-2': {
        resources: [
          { name: 'Mathematics II Practice', pdf: '/pdfs/resources/CSD/1-2/math2-practice.pdf' },
          { name: 'Data Structures Notes', pdf: '/pdfs/resources/CSD/1-2/data-structures-notes.pdf' },
          { name: 'UI/UX Design Guide', pdf: '/pdfs/resources/CSD/1-2/ui-ux-guide.pdf' },
        ],
      },
      '2-1': {
        resources: [
          { name: 'Discrete Mathematics Practice', pdf: '/pdfs/resources/CSD/2-1/discrete-math-practice.pdf' },
          { name: 'OOP Notes', pdf: '/pdfs/resources/CSD/2-1/oop-notes.pdf' },
          { name: 'Graphic Design Guide', pdf: '/pdfs/resources/CSD/2-1/graphic-design-guide.pdf' },
        ],
      },
      '2-2': {
        resources: [
          { name: 'Database Systems Practice', pdf: '/pdfs/resources/CSD/2-2/dbms-practice.pdf' },
          { name: 'Algorithms Notes', pdf: '/pdfs/resources/CSD/2-2/algorithms-notes.pdf' },
          { name: 'Interaction Design Guide', pdf: '/pdfs/resources/CSD/2-2/interaction-design-guide.pdf' },
        ],
      },
      '3-1': {
        resources: [
          { name: 'Computer Networks Practice', pdf: '/pdfs/resources/CSD/3-1/networks-practice.pdf' },
          { name: 'Design Thinking Notes', pdf: '/pdfs/resources/CSD/3-1/design-thinking-notes.pdf' },
          { name: 'Software Engineering Guide', pdf: '/pdfs/resources/CSD/3-1/se-guide.pdf' },
        ],
      },
      '3-2': {
        resources: [
          { name: 'Web Design Practice', pdf: '/pdfs/resources/CSD/3-2/web-design-practice.pdf' },
          { name: 'Cloud Computing Notes', pdf: '/pdfs/resources/CSD/3-2/cloud-notes.pdf' },
          { name: 'Elective I Guide', pdf: '/pdfs/resources/CSD/3-2/elective1-guide.pdf' },
        ],
      },
      '4-1': {
        resources: [
          { name: 'Advanced UI/UX Practice', pdf: '/pdfs/resources/CSD/4-1/advanced-ui-ux-practice.pdf' },
          { name: 'Design Portfolio Notes', pdf: '/pdfs/resources/CSD/4-1/design-portfolio-notes.pdf' },
          { name: 'Elective II Guide', pdf: '/pdfs/resources/CSD/4-1/elective2-guide.pdf' },
        ],
      },
      '4-2': {
        resources: [
          { name: 'Project Work Notes', pdf: '/pdfs/resources/CSD/4-2/project-notes.pdf' },
          { name: 'Internship Guide', pdf: '/pdfs/resources/CSD/4-2/internship-guide.pdf' },
          { name: 'Elective III Guide', pdf: '/pdfs/resources/CSD/4-2/elective3-guide.pdf' },
        ],
      },
    },
  };

  // Written PDFs data for all branches and semesters
  const writtenData = {
    AI: {
      '1-1': {
        written: [
          { name: 'Mathematics I Handwritten Notes', pdf: '/pdfs/written/AI/1-1/math1-notes.pdf' },
          { name: 'AI Fundamentals Practice', pdf: '/pdfs/written/AI/1-1/ai-practice.pdf' },
          { name: 'C Programming Examples', pdf: '/pdfs/written/AI/1-1/c-examples.pdf' },
        ],
      },
      '1-2': {
        written: [
          { name: 'Mathematics II Handwritten Notes', pdf: '/pdfs/written/AI/1-2/math2-notes.pdf' },
          { name: 'Data Structures Practice', pdf: '/pdfs/written/AI/1-2/data-structures-practice.pdf' },
          { name: 'ML Basics Questions', pdf: '/pdfs/written/AI/1-2/ml-questions.pdf' },
        ],
      },
      '2-1': {
        written: [
          { name: 'Discrete Mathematics Handwritten Notes', pdf: '/pdfs/written/AI/2-1/discrete-math-notes.pdf' },
          { name: 'OOP Practice', pdf: '/pdfs/written/AI/2-1/oop-practice.pdf' },
          { name: 'Neural Networks Questions', pdf: '/pdfs/written/AI/2-1/neural-networks-questions.pdf' },
        ],
      },
      '2-2': {
        written: [
          { name: 'Database Systems Handwritten Notes', pdf: '/pdfs/written/AI/2-2/dbms-notes.pdf' },
          { name: 'Algorithms Practice', pdf: '/pdfs/written/AI/2-2/algorithms-practice.pdf' },
          { name: 'Deep Learning Questions', pdf: '/pdfs/written/AI/2-2/deep-learning-questions.pdf' },
        ],
      },
      '3-1': {
        written: [
          { name: 'Computer Networks Handwritten Notes', pdf: '/pdfs/written/AI/3-1/networks-notes.pdf' },
          { name: 'AI Techniques Practice', pdf: '/pdfs/written/AI/3-1/ai-techniques-practice.pdf' },
          { name: 'Software Engineering Questions', pdf: '/pdfs/written/AI/3-1/se-questions.pdf' },
        ],
      },
      '3-2': {
        written: [
          { name: 'NLP Handwritten Notes', pdf: '/pdfs/written/AI/3-2/nlp-notes.pdf' },
          { name: 'Cloud Computing Practice', pdf: '/pdfs/written/AI/3-2/cloud-practice.pdf' },
          { name: 'Elective I Questions', pdf: '/pdfs/written/AI/3-2/elective1-questions.pdf' },
        ],
      },
      '4-1': {
        written: [
          { name: 'Reinforcement Learning Handwritten Notes', pdf: '/pdfs/written/AI/4-1/rl-notes.pdf' },
          { name: 'Big Data Analytics Practice', pdf: '/pdfs/written/AI/4-1/big-data-practice.pdf' },
          { name: 'Elective II Questions', pdf: '/pdfs/written/AI/4-1/elective2-questions.pdf' },
        ],
      },
      '4-2': {
        written: [
          { name: 'Project Work Handwritten Notes', pdf: '/pdfs/written/AI/4-2/project-notes.pdf' },
          { name: 'Internship Practice', pdf: '/pdfs/written/AI/4-2/internship-practice.pdf' },
          { name: 'Elective III Questions', pdf: '/pdfs/written/AI/4-2/elective3-questions.pdf' },
        ],
      },
    },
    AID: {
      '1-1': {
        written: [
          { name: 'Mathematics I Handwritten Notes', pdf: '/pdfs/written/AID/1-1/math1-notes.pdf' },
          { name: 'Data Science Practice', pdf: '/pdfs/written/AID/1-1/ds-practice.pdf' },
          { name: 'C Programming Examples', pdf: '/pdfs/written/AID/1-1/c-examples.pdf' },
        ],
      },
      '1-2': {
        written: [
          { name: 'Mathematics II Handwritten Notes', pdf: '/pdfs/written/AID/1-2/math2-notes.pdf' },
          { name: 'Data Structures Practice', pdf: '/pdfs/written/AID/1-2/data-structures-practice.pdf' },
          { name: 'Statistics Questions', pdf: '/pdfs/written/AID/1-2/stats-questions.pdf' },
        ],
      },
      '2-1': {
        written: [
          { name: 'Discrete Mathematics Handwritten Notes', pdf: '/pdfs/written/AID/2-1/discrete-math-notes.pdf' },
          { name: 'OOP Practice', pdf: '/pdfs/written/AID/2-1/oop-practice.pdf' },
          { name: 'Data Visualization Questions', pdf: '/pdfs/written/AID/2-1/data-viz-questions.pdf' },
        ],
      },
      '2-2': {
        written: [
          { name: 'Database Systems Handwritten Notes', pdf: '/pdfs/written/AID/2-2/dbms-notes.pdf' },
          { name: 'Algorithms Practice', pdf: '/pdfs/written/AID/2-2/algorithms-practice.pdf' },
          { name: 'ML for DS Questions', pdf: '/pdfs/written/AID/2-2/ml-ds-questions.pdf' },
        ],
      },
      '3-1': {
        written: [
          { name: 'Computer Networks Handwritten Notes', pdf: '/pdfs/written/AID/3-1/networks-notes.pdf' },
          { name: 'Data Mining Practice', pdf: '/pdfs/written/AID/3-1/data-mining-practice.pdf' },
          { name: 'Software Engineering Questions', pdf: '/pdfs/written/AID/3-1/se-questions.pdf' },
        ],
      },
      '3-2': {
        written: [
          { name: 'Big Data Tech Handwritten Notes', pdf: '/pdfs/written/AID/3-2/big-data-tech-notes.pdf' },
          { name: 'Cloud Computing Practice', pdf: '/pdfs/written/AID/3-2/cloud-practice.pdf' },
          { name: 'Elective I Questions', pdf: '/pdfs/written/AID/3-2/elective1-questions.pdf' },
        ],
      },
      '4-1': {
        written: [
          { name: 'Predictive Analytics Handwritten Notes', pdf: '/pdfs/written/AID/4-1/predictive-analytics-notes.pdf' },
          { name: 'AI Applications Practice', pdf: '/pdfs/written/AID/4-1/ai-apps-practice.pdf' },
          { name: 'Elective II Questions', pdf: '/pdfs/written/AID/4-1/elective2-questions.pdf' },
        ],
      },
      '4-2': {
        written: [
          { name: 'Project Work Handwritten Notes', pdf: '/pdfs/written/AID/4-2/project-notes.pdf' },
          { name: 'Internship Practice', pdf: '/pdfs/written/AID/4-2/internship-practice.pdf' },
          { name: 'Elective III Questions', pdf: '/pdfs/written/AID/4-2/elective3-questions.pdf' },
        ],
      },
    },
    CSM: {
      '1-1': {
        written: [
          { name: 'Mathematics I Handwritten Notes', pdf: '/pdfs/written/CSM/1-1/math1-notes.pdf' },
          { name: 'ML Foundations Practice', pdf: '/pdfs/written/CSM/1-1/ml-foundations-practice.pdf' },
          { name: 'C Programming Examples', pdf: '/pdfs/written/CSM/1-1/c-examples.pdf' },
        ],
      },
      '1-2': {
        written: [
          { name: 'Mathematics II Handwritten Notes', pdf: '/pdfs/written/CSM/1-2/math2-notes.pdf' },
          { name: 'Data Structures Practice', pdf: '/pdfs/written/CSM/1-2/data-structures-practice.pdf' },
          { name: 'Statistical ML Questions', pdf: '/pdfs/written/CSM/1-2/stat-ml-questions.pdf' },
        ],
      },
      '2-1': {
        written: [
          { name: 'Discrete Mathematics Handwritten Notes', pdf: '/pdfs/written/CSM/2-1/discrete-math-notes.pdf' },
          { name: 'OOP Practice', pdf: '/pdfs/written/CSM/2-1/oop-practice.pdf' },
          { name: 'Supervised Learning Questions', pdf: '/pdfs/written/CSM/2-1/supervised-learning-questions.pdf' },
        ],
      },
      '2-2': {
        written: [
          { name: 'Database Systems Handwritten Notes', pdf: '/pdfs/written/CSM/2-2/dbms-notes.pdf' },
          { name: 'Algorithms Practice', pdf: '/pdfs/written/CSM/2-2/algorithms-practice.pdf' },
          { name: 'Unsupervised Learning Questions', pdf: '/pdfs/written/CSM/2-2/unsupervised-learning-questions.pdf' },
        ],
      },
      '3-1': {
        written: [
          { name: 'Computer Networks Handwritten Notes', pdf: '/pdfs/written/CSM/3-1/networks-notes.pdf' },
          { name: 'Advanced ML Practice', pdf: '/pdfs/written/CSM/3-1/advanced-ml-practice.pdf' },
          { name: 'Software Engineering Questions', pdf: '/pdfs/written/CSM/3-1/se-questions.pdf' },
        ],
      },
      '3-2': {
        written: [
          { name: 'Deep Learning Handwritten Notes', pdf: '/pdfs/written/CSM/3-2/deep-learning-notes.pdf' },
          { name: 'Cloud Computing Practice', pdf: '/pdfs/written/CSM/3-2/cloud-practice.pdf' },
          { name: 'Elective I Questions', pdf: '/pdfs/written/CSM/3-2/elective1-questions.pdf' },
        ],
      },
      '4-1': {
        written: [
          { name: 'Reinforcement Learning Handwritten Notes', pdf: '/pdfs/written/CSM/4-1/rl-notes.pdf' },
          { name: 'Big Data Analytics Practice', pdf: '/pdfs/written/CSM/4-1/big-data-practice.pdf' },
          { name: 'Elective II Questions', pdf: '/pdfs/written/CSM/4-1/elective2-questions.pdf' },
        ],
      },
      '4-2': {
        written: [
          { name: 'Project Work Handwritten Notes', pdf: '/pdfs/written/CSM/4-2/project-notes.pdf' },
          { name: 'Internship Practice', pdf: '/pdfs/written/CSM/4-2/internship-practice.pdf' },
          { name: 'Elective III Questions', pdf: '/pdfs/written/CSM/4-2/elective3-questions.pdf' },
        ],
      },
    },
    Cyber: {
      '1-1': {
        written: [
          { name: 'Mathematics I Handwritten Notes', pdf: '/pdfs/written/Cyber/1-1/math1-notes.pdf' },
          { name: 'Cybersecurity Basics Practice', pdf: '/pdfs/written/Cyber/1-1/cyber-basics-practice.pdf' },
          { name: 'C Programming Examples', pdf: '/pdfs/written/Cyber/1-1/c-examples.pdf' },
        ],
      },
      '1-2': {
        written: [
          { name: 'Mathematics II Handwritten Notes', pdf: '/pdfs/written/Cyber/1-2/math2-notes.pdf' },
          { name: 'Data Structures Practice', pdf: '/pdfs/written/Cyber/1-2/data-structures-practice.pdf' },
          { name: 'Network Security Questions', pdf: '/pdfs/written/Cyber/1-2/network-security-questions.pdf' },
        ],
      },
      '2-1': {
        written: [
          { name: 'Discrete Mathematics Handwritten Notes', pdf: '/pdfs/written/Cyber/2-1/discrete-math-notes.pdf' },
          { name: 'OOP Practice', pdf: '/pdfs/written/Cyber/2-1/oop-practice.pdf' },
          { name: 'Cryptography Questions', pdf: '/pdfs/written/Cyber/2-1/cryptography-questions.pdf' },
        ],
      },
      '2-2': {
        written: [
          { name: 'Database Systems Handwritten Notes', pdf: '/pdfs/written/Cyber/2-2/dbms-notes.pdf' },
          { name: 'Algorithms Practice', pdf: '/pdfs/written/Cyber/2-2/algorithms-practice.pdf' },
          { name: 'Ethical Hacking Questions', pdf: '/pdfs/written/Cyber/2-2/ethical-hacking-questions.pdf' },
        ],
      },
      '3-1': {
        written: [
          { name: 'Computer Networks Handwritten Notes', pdf: '/pdfs/written/Cyber/3-1/networks-notes.pdf' },
          { name: 'Cyber Forensics Practice', pdf: '/pdfs/written/Cyber/3-1/cyber-forensics-practice.pdf' },
          { name: 'Software Engineering Questions', pdf: '/pdfs/written/Cyber/3-1/se-questions.pdf' },
        ],
      },
      '3-2': {
        written: [
          { name: 'Cloud Security Handwritten Notes', pdf: '/pdfs/written/Cyber/3-2/cloud-security-notes.pdf' },
          { name: 'Incident Response Practice', pdf: '/pdfs/written/Cyber/3-2/incident-response-practice.pdf' },
          { name: 'Elective I Questions', pdf: '/pdfs/written/Cyber/3-2/elective1-questions.pdf' },
        ],
      },
      '4-1': {
        written: [
          { name: 'Advanced Cryptography Handwritten Notes', pdf: '/pdfs/written/Cyber/4-1/advanced-crypto-notes.pdf' },
          { name: 'Security Analytics Practice', pdf: '/pdfs/written/Cyber/4-1/security-analytics-practice.pdf' },
          { name: 'Elective II Questions', pdf: '/pdfs/written/Cyber/4-1/elective2-questions.pdf' },
        ],
      },
      '4-2': {
        written: [
          { name: 'Project Work Handwritten Notes', pdf: '/pdfs/written/Cyber/4-2/project-notes.pdf' },
          { name: 'Internship Practice', pdf: '/pdfs/written/Cyber/4-2/internship-practice.pdf' },
          { name: 'Elective III Questions', pdf: '/pdfs/written/Cyber/4-2/elective3-questions.pdf' },
        ],
      },
    },
    CSD: {
      '1-1': {
        written: [
          { name: 'Mathematics I Handwritten Notes', pdf: '/pdfs/written/CSD/1-1/math1-notes.pdf' },
          { name: 'Design Principles Practice', pdf: '/pdfs/written/CSD/1-1/design-principles-practice.pdf' },
          { name: 'C Programming Examples', pdf: '/pdfs/written/CSD/1-1/c-examples.pdf' },
        ],
      },
      '1-2': {
        written: [
          { name: 'Mathematics II Handwritten Notes', pdf: '/pdfs/written/CSD/1-2/math2-notes.pdf' },
          { name: 'Data Structures Practice', pdf: '/pdfs/written/CSD/1-2/data-structures-practice.pdf' },
          { name: 'UI/UX Design Questions', pdf: '/pdfs/written/CSD/1-2/ui-ux-questions.pdf' },
        ],
      },
      '2-1': {
        written: [
          { name: 'Discrete Mathematics Handwritten Notes', pdf: '/pdfs/written/CSD/2-1/discrete-math-notes.pdf' },
          { name: 'OOP Practice', pdf: '/pdfs/written/CSD/2-1/oop-practice.pdf' },
          { name: 'Graphic Design Questions', pdf: '/pdfs/written/CSD/2-1/graphic-design-questions.pdf' },
        ],
      },
      '2-2': {
        written: [
          { name: 'Database Systems Handwritten Notes', pdf: '/pdfs/written/CSD/2-2/dbms-notes.pdf' },
          { name: 'Algorithms Practice', pdf: '/pdfs/written/CSD/2-2/algorithms-practice.pdf' },
          { name: 'Interaction Design Questions', pdf: '/pdfs/written/CSD/2-2/interaction-design-questions.pdf' },
        ],
      },
      '3-1': {
        written: [
          { name: 'Computer Networks Handwritten Notes', pdf: '/pdfs/written/CSD/3-1/networks-notes.pdf' },
          { name: 'Design Thinking Practice', pdf: '/pdfs/written/CSD/3-1/design-thinking-practice.pdf' },
          { name: 'Software Engineering Questions', pdf: '/pdfs/written/CSD/3-1/se-questions.pdf' },
        ],
      },
      '3-2': {
        written: [
          { name: 'Web Design Handwritten Notes', pdf: '/pdfs/written/CSD/3-2/web-design-notes.pdf' },
          { name: 'Cloud Computing Practice', pdf: '/pdfs/written/CSD/3-2/cloud-practice.pdf' },
          { name: 'Elective I Questions', pdf: '/pdfs/written/CSD/3-2/elective1-questions.pdf' },
        ],
      },
      '4-1': {
        written: [
          { name: 'Advanced UI/UX Handwritten Notes', pdf: '/pdfs/written/CSD/4-1/advanced-ui-ux-notes.pdf' },
          { name: 'Design Portfolio Practice', pdf: '/pdfs/written/CSD/4-1/design-portfolio-practice.pdf' },
          { name: 'Elective II Questions', pdf: '/pdfs/written/CSD/4-1/elective2-questions.pdf' },
        ],
      },
      '4-2': {
        written: [
          { name: 'Project Work Handwritten Notes', pdf: '/pdfs/written/CSD/4-2/project-notes.pdf' },
          { name: 'Internship Practice', pdf: '/pdfs/written/CSD/4-2/internship-practice.pdf' },
          { name: 'Elective III Questions', pdf: '/pdfs/written/CSD/4-2/elective3-questions.pdf' },
        ],
      },
    },
  };

  

  // Handle branch and semester changes
  const handleSyllabusBranchChange = (branch) => {
    setSelectedSyllabusBranch(branch);
    setSelectedSyllabusSemester('1-1');
    setSelectedSyllabusPdf(syllabusData[branch]['1-1'].syllabi[0].pdf);
  };

  const handleSyllabusSemesterChange = (sem) => {
    setSelectedSyllabusSemester(sem);
    setSelectedSyllabusPdf(syllabusData[selectedSyllabusBranch][sem].syllabi[0].pdf);
  };

  const handleResourceBranchChange = (branch) => {
    setSelectedResourceBranch(branch);
    setSelectedResourceSemester('1-1');
    setSelectedResourcePdf(resourceData[branch]['1-1'].resources[0].pdf);
  };

  const handleResourceSemesterChange = (sem) => {
    setSelectedResourceSemester(sem);
    setSelectedResourcePdf(resourceData[selectedResourceBranch][sem].resources[0].pdf);
  };

  const handleWrittenBranchChange = (branch) => {
    setSelectedWrittenBranch(branch);
    setSelectedWrittenSemester('1-1');
    setSelectedWrittenPdf(writtenData[branch]['1-1'].written[0].pdf);
  };

  const handleWrittenSemesterChange = (sem) => {
    setSelectedWrittenSemester(sem);
    setSelectedWrittenPdf(writtenData[selectedWrittenBranch][sem].written[0].pdf);
  };

  return (
    <AnimatedPage>
      {/* Category Selection Tabs */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4 mb-12"
          >
            {[
              { id: 'syllabus', label: 'JNTU Syllabus' },
              { id: 'resources', label: 'DEMEDTE Resources' },
              { id: 'written', label: 'Written PDFs' },
            ].map((category, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`py-3 px-6 rounded-md text-lg font-semibold transition ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Syllabus Section */}
      {selectedCategory === 'syllabus' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-gray-800 mb-12"
            >
              JNTU Syllabus
            </motion.h2>

            {/* Branch Selection */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-12">
              {branches.map((branch, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => handleSyllabusBranchChange(branch)}
                  className={`py-3 px-4 rounded-md text-lg font-semibold transition ${
                    selectedSyllabusBranch === branch
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {branch}
                </motion.button>
              ))}
            </div>

            {/* Semester Selection */}
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
                key={`${selectedSyllabusBranch}-${selectedSyllabusSemester}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {selectedSyllabusBranch} Semester {selectedSyllabusSemester} Syllabi
                </h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Syllabus Documents</h4>
                <ul className="space-y-2">
                  {syllabusData[selectedSyllabusBranch][selectedSyllabusSemester].syllabi.map((syllabus, idx) => (
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
                    title={`${selectedSyllabusBranch} Semester ${selectedSyllabusSemester} Syllabus PDF`}
                    className="w-full h-[600px] rounded-md border border-gray-300"
                  />
                ) : (
                  <p className="text-gray-600">Select a syllabus to view the PDF.</p>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Resources Section */}
      {selectedCategory === 'resources' && (
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

            {/* Branch Selection */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-12">
              {branches.map((branch, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => handleResourceBranchChange(branch)}
                  className={`py-3 px-4 rounded-md text-lg font-semibold transition ${
                    selectedResourceBranch === branch
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {branch}
                </motion.button>
              ))}
            </div>

            {/* Semester Selection */}
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
                key={`${selectedResourceBranch}-${selectedResourceSemester}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {selectedResourceBranch} Semester {selectedResourceSemester} Resources
                </h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Study Materials</h4>
                <ul className="space-y-2">
                  {resourceData[selectedResourceBranch][selectedResourceSemester].resources.map((resource, idx) => (
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
                    title={`${selectedResourceBranch} Semester ${selectedResourceSemester} Resource PDF`}
                    className="w-full h-[600px] rounded-md border border-gray-300"
                  />
                ) : (
                  <p className="text-gray-600">Select a resource to view the PDF.</p>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Written PDFs Section */}
      {selectedCategory === 'written' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-gray-800 mb-12"
            >
              Written PDFs by Our Team
            </motion.h2>

            {/* Branch Selection */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-12">
              {branches.map((branch, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => handleWrittenBranchChange(branch)}
                  className={`py-3 px-4 rounded-md text-lg font-semibold transition ${
                    selectedWrittenBranch === branch
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {branch}
                </motion.button>
              ))}
            </div>

            {/* Semester Selection */}
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
                  onClick={() => handleWrittenSemesterChange(sem)}
                  className={`py-3 px-4 rounded-md text-lg font-semibold transition ${
                    selectedWrittenSemester === sem
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Semester {sem}
                </motion.button>
              ))}
            </div>

            {/* Written Content and PDF Viewer */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Written PDF List */}
              <motion.div
                key={`${selectedWrittenBranch}-${selectedWrittenSemester}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {selectedWrittenBranch} Semester {selectedWrittenSemester} Written PDFs
                </h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Study Materials</h4>
                <ul className="space-y-2">
                  {writtenData[selectedWrittenBranch][selectedWrittenSemester].written.map((written, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => setSelectedWrittenPdf(written.pdf)}
                        className={`w-full text-left py-2 px-4 rounded-md transition ${
                          selectedWrittenPdf === written.pdf
                            ? 'bg-primary text-white'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}
                      >
                        {written.name}
                      </button>
                    </li>
                  ))}
                </ul>
                {selectedWrittenPdf && (
                  <a
                    href={selectedWrittenPdf}
                    download
                    className="mt-4 inline-block bg-secondary text-white px-6 py-2 rounded-md text-lg hover:bg-accent transition"
                  >
                    Download Selected Written PDF
                  </a>
                )}
              </motion.div>

              {/* Right: Written PDF Viewer */}
              <motion.div
                key={selectedWrittenPdf}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2 bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Written PDF Viewer</h3>
                {selectedWrittenPdf ? (
                  <iframe
                    src={selectedWrittenPdf}
                    title={`${selectedWrittenBranch} Semester ${selectedWrittenSemester} Written PDF`}
                    className="w-full h-[600px] rounded-md border border-gray-300"
                  />
                ) : (
                  <p className="text-gray-600">Select a written PDF to view the PDF.</p>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </AnimatedPage>
  );
};

export default Home;