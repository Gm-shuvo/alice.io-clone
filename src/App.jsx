import React from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustLogos from './components/TrustLogos';
import WonderSuite from './components/WonderSuite';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Differentiators from './components/Differentiators';
import ProblemStatement from './components/ProblemStatement';
import VideoDemo from './components/VideoDemo';
import RabbitHole from './components/RabbitHole';
import TrustPillars from './components/TrustPillars';
import BlogGrid from './components/BlogGrid';
import AdvantageBanner from './components/AdvantageBanner';
import Footer from './components/Footer';
import FixedCTA from './components/FixedCTA';

function App() {
  return (
    <div className="min-h-screen bg-beige font-haas selection:bg-pink selection:text-white">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <TrustLogos />
        <WonderSuite />
        <Stats />
        <Testimonials />
        <Differentiators />
        <ProblemStatement />
        <VideoDemo />
        <RabbitHole />
        <TrustPillars />
        <BlogGrid />
        <AdvantageBanner />
      </main>
      <Footer />
      <FixedCTA />
    </div>
  );
}

export default App;
