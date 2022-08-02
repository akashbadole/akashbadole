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
import PageNotFound from './Component/PageNotFound';



function App() {
  return (
<div className="fluid-container">
<BrowserRouter>
    <Routes>
      <Route exact  path="/" element={<Home  />} />
      <Route exact  path="Summary" element={<Summary  />} />
      <Route exact  path="Skill" element={<Skill  />} />
      <Route exact  path="Education" element={<Education  />} />
      <Route exact  path="Experience" element={<Experience  />} />
      <Route exact  path="Blog" element={<Blog  />} />
      <Route exact  path="Contact" element={<Contact  />} />
      <Route  path="*" element={<PageNotFound />} />
  
    </Routes>
    


  </BrowserRouter>

       </div>

  );
}

export default App;
