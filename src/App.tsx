import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { VisitSection } from './components/VisitSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ConceptInfoModal } from './components/ConceptInfoModal';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isConceptInfoOpen, setIsConceptInfoOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Slim Announcement Bar */}
      <AnnouncementBar onOpenConceptInfo={() => setIsConceptInfoOpen(true)} />

      {/* Main Sticky Brand Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content" style={{ flex: 1 }}>
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onFindCorner={() => scrollToSection('visit')}
        />

        <Story />

        <MenuSection />

        <GallerySection />

        <VisitSection onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenConceptInfo={() => setIsConceptInfoOpen(true)} />

      {/* Interactive Contact & Table Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Concept Architecture & Design Specifications Modal */}
      <ConceptInfoModal
        isOpen={isConceptInfoOpen}
        onClose={() => setIsConceptInfoOpen(false)}
      />
    </div>
  );
};

export default App;
