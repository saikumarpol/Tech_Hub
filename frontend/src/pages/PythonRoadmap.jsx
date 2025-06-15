import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage.jsx';
import ReactFlow, { Background, Controls } from 'react-flow-renderer';

const PythonRoadmap = () => {
  const [progress, setProgress] = useState({});

  const resourceLinks = [
    'https://www.python.org/downloads/',
    'https://www.w3schools.com/python/python_intro.asp',
    'https://www.programiz.com/python-programming/variables-datatypes',
    'https://www.geeksforgeeks.org/python-operators/',
    'https://www.tutorialspoint.com/python/python_basic_input_output.htm',
    'https://www.w3schools.com/python/python_comments.asp',
    'https://www.programiz.com/python-programming/if-elif-else',
    'https://www.w3schools.com/python/python_for_loops.asp',
    'https://www.geeksforgeeks.org/python-while-loop/',
    'https://www.programiz.com/python-programming/break-continue',
    'https://www.w3schools.com/python/python_functions.asp',
    'https://www.geeksforgeeks.org/args-kwargs-python/',
    'https://www.programiz.com/python-programming/list',
    'https://www.w3schools.com/python/python_tuples.asp',
    'https://www.geeksforgeeks.org/python-dictionary/',
    'https://www.programiz.com/python-programming/set',
    'https://www.w3schools.com/python/python_strings.asp',
    'https://www.geeksforgeeks.org/python-list-comprehension/',
    'https://www.programiz.com/python-programming/modules',
    'https://www.geeksforgeeks.org/python-pip/',
    'https://www.w3schools.com/python/python_file_handling.asp',
    'https://www.programiz.com/python-programming/exception-handling',
    'https://www.geeksforgeeks.org/python-classes-and-objects/',
    'https://www.programiz.com/python-programming/inheritance',
    'https://www.w3schools.com/python/numpy/default.asp',
    'https://realpython.com/flask-project/',
    'https://www.atlassian.com/git/tutorials',
    'https://www.freecodecamp.org/news/python-projects-for-beginners/',
  ];

  const descriptions = [
    'Set up Python 3.x and an IDE like VS Code.',
    'Learn Python’s interpreters and its role in scripting.',
    'Understand integers, floats, strings, and type conversion.',
    'Use arithmetic, comparison, and logical operators.',
    'Get user input with input() and display with print().',
    'Write single-line and multi-line comments for clarity.',
    'Make decisions with if, elif, and else statements.',
    'Iterate over lists or ranges using for loops.',
    'Use while loops for indefinite iteration.',
    'Control loops with break (exit) or continue (skip).',
    'Define reusable functions with parameters and return.',
    'Use default arguments and variable-length args.',
    'Create, access, and modify lists with methods.',
    'Work with immutable tuples and their slicing.',
    'Store data in key-value pairs with dictionaries.',
    'Use sets for unique elements and operations.',
    'Manipulate strings with split, join, format.',
    'Generate lists efficiently with comprehensions.',
    'Import standard or custom modules.',
    'Install libraries with pip, use virtualenv.',
    'Read and write text or CSV files.',
    'Handle errors with try-except blocks.',
    'Define classes with attributes and methods.',
    'Extend classes using inheritance and polymorphism.',
    'Analyze data with NumPy and pandas libraries.',
    'Build a web app with Flask framework.',
    'Learn Git for version control (commit, push).',
    'Build a to-do list, web scraper, or Flask API.',
  ];

  const roadmap = [
    { id: '1', data: { label: 'Install Python' }, position: { x: 250, y: 0 }, style: { background: '#2563eb', color: '#fff', border: '1px solid #fff', padding: 10 }, title: descriptions[0] },
    { id: '2', data: { label: 'Understand Python Basics' }, position: { x: 250, y: 100 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[1] },
    { id: '3', data: { label: 'Variables and Data Types' }, position: { x: 250, y: 200 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[2] },
    { id: '4', data: { label: 'Operators' }, position: { x: 250, y: 300 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[3] },
    { id: '5', data: { label: 'Input and Output' }, position: { x: 250, y: 400 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[4] },
    { id: '6', data: { label: 'Comments' }, position: { x: 250, y: 500 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[5] },
    { id: '7', data: { label: 'Conditionals' }, position: { x: 250, y: 600 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[6] },
    { id: '8', data: { label: 'Loops: For' }, position: { x: 250, y: 700 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[7] },
    { id: '9', data: { label: 'Loops: While' }, position: { x: 250, y: 800 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[8] },
    { id: '10', data: { label: 'Break and Continue' }, position: { x: 250, y: 900 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[9] },
    { id: '11', data: { label: 'Functions: Basics' }, position: { x: 250, y: 1000 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[10] },
    { id: '12', data: { label: 'Functions: Advanced' }, position: { x: 250, y: 1100 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[11] },
    { id: '13', data: { label: 'Lists' }, position: { x: 250, y: 1200 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[12] },
    { id: '14', data: { label: 'Tuples' }, position: { x: 250, y: 1300 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[13] },
    { id: '15', data: { label: 'Dictionaries' }, position: { x: 250, y: 1400 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[14] },
    { id: '16', data: { label: 'Sets' }, position: { x: 250, y: 1500 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[15] },
    { id: '17', data: { label: 'String Methods' }, position: { x: 250, y: 1600 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[16] },
    { id: '18', data: { label: 'List Comprehensions' }, position: { x: 250, y: 1700 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[17] },
    { id: '19', data: { label: 'Modules' }, position: { x: 250, y: 1800 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[18] },
    { id: '20', data: { label: 'Packages and pip' }, position: { x: 250, y: 1900 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[19] },
    { id: '21', data: { label: 'File I/O' }, position: { x: 250, y: 2000 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[20] },
    { id: '22', data: { label: 'Exception Handling' }, position: { x: 250, y: 2100 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[21] },
    { id: '23', data: { label: 'OOP: Classes and Objects' }, position: { x: 250, y: 2200 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[22] },
    { id: '24', data: { label: 'OOP: Inheritance' }, position: { x: 250, y: 2300 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[23] },
    { id: '25', data: { label: 'Libraries: NumPy, pandas' }, position: { x: 250, y: 2400 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[24] },
    { id: '26', data: { label: 'Web Development: Flask' }, position: { x: 250, y: 2500 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[25] },
    { id: '27', data: { label: 'Version Control: Git' }, position: { x: 250, y: 2600 }, style: { background: '#e5f4ff', border: '1px solid #2563eb', padding: 10 }, title: descriptions[26] },
    { id: '28', data: { label: 'Projects' }, position: { x: 250, y: 2700 }, style: { background: '#10b981', color: '#fff', border: '1px solid #fff', padding: 10 }, title: descriptions[27] },
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
    { source: '18', target: '19', animated: true },
    { source: '19', target: '20', animated: true },
    { source: '20', target: '21', animated: true },
    { source: '21', target: '22', animated: true },
    { source: '22', target: '23', animated: true },
    { source: '23', target: '24', animated: true },
    { source: '24', target: '25', animated: true },
    { source: '25', target: '26', animated: true },
    { source: '26', target: '27', animated: true },
    { source: '27', target: '28', animated: true },
  ];

  const onNodeClick = (event, node) => {
    const index = parseInt(node.id) - 1;
    window.open(resourceLinks[index], '_blank');
    setProgress({ ...progress, [`Python-${node.id}`]: true });
  };

  return (
    <AnimatedPage>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Python Learning Roadmap
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow this beginner-friendly roadmap to master Python for JNTU placements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center space-x-2">
              <i className="fab fa-python text-primary"></i>
              <span>Python Roadmap</span>
            </h3>
            <div style={{ height: '3000px', width: '100%' }}>
              <ReactFlow
                nodes={roadmap.filter((item) => item.id).map((node) => ({
                  ...node,
                  style: {
                    ...node.style,
                    background: progress[`Python-${node.id}`] ? '#10b981' : node.style.background,
                  },
                }))}
                edges={roadmap.filter((item) => item.source)}
                fitView
                style={{ background: '#f9fafb' }}
                onNodeClick={onNodeClick}
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

export default PythonRoadmap;