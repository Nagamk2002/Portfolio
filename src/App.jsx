import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import IntroductionSection from './IntroductionSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import SkillsSection from './SkillsSection';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<IntroductionSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/skills" element={<SkillsSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
