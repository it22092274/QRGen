import React from 'react';
import Navbar from '../components/NavigationBar';
import WelcomeBanner from '../components/WelcomeBanner';
import AboutSection from '../components/About';
import HowToUseSection from '../components/HowToUseSection';
import Footer from '../components/Footer';
import ReviewSection from '../components/ReviewSection';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <WelcomeBanner />
      <AboutSection />
      <HowToUseSection />
      <ReviewSection />
      <Footer />
      {/* Add other home page content here if needed */}
    </div>
  );
};

export default HomePage;
