// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Academics from './pages/Academics';
// import Placements from './pages/Placements';
// import Resources from './pages/Resources';
// import './App.css';
// import Roadmaps from './pages/Roadmaps';
// import Team from './pages/Team';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-50 flex flex-col">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/academics" element={<Academics />} />
//             <Route path="/placements" element={<Placements />} />
//             <Route path="/resources" element={<Resources />} />
//             <Route path ='/roadmaps' element={<Roadmaps/>}/>
//             <Route path ='/team' element={<Team/>}/>
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Placements from './pages/Placements';
import Resources from './pages/Resources';
import Roadmaps from './pages/Roadmaps';
import Team from './pages/Team';
import Signup from './components/signup'
import Login from './components/Login'
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/roadmaps" element={<Roadmaps />} />
            <Route path="/team" element={<Team />} />
            <Route path="/signup" element={<Signup />} /> {/* ✅ Added */}
            <Route path="/login" element={<Login />} />   {/* ✅ Added */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
