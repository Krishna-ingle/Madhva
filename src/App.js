import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import './App.css';
import Navbar from './components/Navbar';
//pages
import UserFormPage from "./pages/userform";
import { ProcessDealPage } from './pages/ProcessDealPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/userform" element={<UserFormPage />} />
          <Route path='/processdealpage' element={<ProcessDealPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;