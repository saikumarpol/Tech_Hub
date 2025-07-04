// src/data/roadmaps.js
export const roadmaps = {
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
  Cpp: [
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

export const languages = [
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'C', icon: 'fas fa-code' },
  { name: 'Cpp', icon: 'fas fa-code' },
  { name: 'Java', icon: 'fab fa-java' },
];