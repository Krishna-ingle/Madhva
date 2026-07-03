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



import NetBillPrivacyPolicy from './components/NetBillPrivacyPolicy';
import NetBillTermsAndConditions from './components/NetBillTermsAndConditions';
 

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

  
          {/* NetBill app-specific legal pages — used for Play Console submission */}
          <Route path='/netbill/privacy-policy' element={<NetBillPrivacyPolicy />} />
          <Route path='/netbill/terms-and-conditions' element={<NetBillTermsAndConditions />} />
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
