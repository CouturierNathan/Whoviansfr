import React from 'react';

import { Route, Routes } from 'react-router-dom';

import MyNavbar from './Components/common/Navbar';
import Footer from './Components/common/Footer';
import Home from './Components/Home/Home';
import Convention from './Components/Convention/Convention';
import Contact from './Components/Contact/Contact';
import RegisterEvent from './Components/RegisterEvent/RegisterEvent';

import NotFound from './Components/generic/NotFound';
import WorkingOn from "./Components/generic/WorkingOn"

import "./styles/generic.css"

function App() {  
  return (
    <div className='wrapper'>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Convention/" element={<Convention />} />
        <Route path="/generic/workingon" element={<WorkingOn />} />
        <Route path="/RegisterEvent/" element={<RegisterEvent />} />
        <Route path="/Contact/" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <main className='void'/>
      <Footer />
    </div>
  );
}
  
export default App;
