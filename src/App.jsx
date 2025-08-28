import React from 'react';
import Hero from './components/Hero';
import ProblemAgitation from './components/ProblemAgitation';
import SolutionFeatures from './components/SolutionFeatures';
import Testimonials from './components/Testimonials';
import ComparisonTable from './components/ComparisonTable';
import UrgencyGuarantee from './components/UrgencyGuarantee';
import FooterCTA from './components/FooterCTA';


function App() {
  return (
    <>
      <Hero />
      <ProblemAgitation />
      <SolutionFeatures />
      <Testimonials />
      <ComparisonTable />
      <UrgencyGuarantee />
      <FooterCTA />
    </>
  );
  
}

export default App
