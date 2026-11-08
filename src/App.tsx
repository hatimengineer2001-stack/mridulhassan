/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { SMMShowcase } from './components/SMMShowcase';
import { Process } from './components/Process';
import { WhyChooseMe } from './components/WhyChooseMe';
import { Packages } from './components/Packages';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingAction } from './components/FloatingAction';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedPackageForQuote, setSelectedPackageForQuote] = useState<string>('professional');
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('WordPress Website Design');

  // Triggered from Packages cards
  const handleSelectPackage = (packageId: string) => {
    setSelectedPackageForQuote(packageId);
    setQuoteModalOpen(true);
  };

  // Triggered from Service cards
  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForQuote(serviceName);
    // Smooth scroll to contact form or open modal
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const topOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Triggered from Portfolio "Request Similar Project"
  const handleRequestSimilarProject = (projectName: string) => {
    setSelectedServiceForQuote(`Custom Project similar to ${projectName}`);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#10B981]/20 selection:text-[#0F172A]">
      {/* Navigation Header */}
      <Navbar onOpenQuoteModal={() => setQuoteModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenQuoteModal={() => setQuoteModalOpen(true)} />

        {/* 2. About Me */}
        <About onOpenQuoteModal={() => setQuoteModalOpen(true)} />

        {/* 3. My Services */}
        <Services onSelectServiceForQuote={handleSelectService} />

        {/* 4. Portfolio / My Work */}
        <Portfolio onRequestSimilarProject={handleRequestSimilarProject} />

        {/* 5. Social Media Management Showcase */}
        <SMMShowcase onOpenQuoteModal={() => setQuoteModalOpen(true)} />

        {/* 6. My Work Process */}
        <Process onOpenQuoteModal={() => setQuoteModalOpen(true)} />

        {/* 7. Why Work With Me? */}
        <WhyChooseMe />

        {/* 8. Service Packages */}
        <Packages onSelectPackageForQuote={handleSelectPackage} />

        {/* 9. Client Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ />

        {/* 10. Contact Section */}
        <Contact 
          initialService={selectedServiceForQuote} 
          initialPackage={selectedPackageForQuote} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Custom Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultPackage={selectedPackageForQuote}
        defaultService={selectedServiceForQuote}
      />

      {/* Floating Action Button (WhatsApp & Quick Quote) */}
      <FloatingAction onOpenQuoteModal={() => setQuoteModalOpen(true)} />
    </div>
  );
}
