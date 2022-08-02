import React from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import './App.css';
import Summary from './Component/Summary';
import Skill from './Component/Skill';
import Home from './Component/Home';
import Education from './Component/Education';
import Experience from './Component/Experience';
import Contact from './Component/Contact';
import Blog from './Component/Blog';



function App() {
  return (
<div className="fluid-container">
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Summary" element={<Summary />} />
      <Route path="Skill" element={<Skill />} />
      <Route path="Education" element={<Education />} />
      <Route path="Experience" element={<Experience />} />
      <Route path="Blog" element={<Blog />} />
      <Route path="Contact" element={<Contact />} />
      <Route
      path="*"
      element={

        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  
    </Routes>
    


  </BrowserRouter>

       </div>

  );
}

export default App;
