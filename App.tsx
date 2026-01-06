import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import AIAssistant from './components/AIAssistant';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Services />
        {/* AI Assistant Section serves as a high-value interactive break in the page */}
        <AIAssistant />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;