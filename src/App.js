import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import './App.css';
import Navbar from './components/Navbar';
//pages
import UserFormPage from "./pages/userform";
import { ProcessDealPage } from './pages/ProcessDealPage';
import ServiceDetail from './pages/ServiceDetail';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/userform" element={<UserFormPage />} />
          <Route path='/processdealpage' element={<ProcessDealPage/>} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path = '/TermsAndConditions' element={<TermsAndConditions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;