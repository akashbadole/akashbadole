
import './App.css';
import React from 'react';

import Summary from './Component/Summary';
import Skill from './Component/Skill';
import Home from './Component/Home';
import { BrowserRouter , Routes, Route } from "react-router-dom";




function App() {
  return (
<div class="container py-3">
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Summary" element={<Summary />} />
      <Route path="Skill" element={<Skill />} />
    </Routes>
    


  </BrowserRouter>

       </div>

  );
}

export default App;
