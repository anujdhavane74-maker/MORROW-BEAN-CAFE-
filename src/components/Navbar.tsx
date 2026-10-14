import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/cafeData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Visit Us', href: '#visit' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
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
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          backgroundColor: isScrolled ? 'rgba(244, 239, 230, 0.95)' : 'var(--color-oat-cream)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled
            ? '1px solid var(--color-taupe-light)'
            : '1px solid transparent',
          transition: 'all 250ms cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '76px',
          }}
        >
          {/* Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1.05,
            }}
            aria-label={`${BRAND_INFO.name} Home`}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4375rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: 'var(--color-espresso)',
                textTransform: 'uppercase',
              }}
            >
              {BRAND_INFO.name}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.625rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-muted-taupe)',
                fontWeight: 500,
                marginTop: '2px',
              }}
            >
              Pune • Est. Concept
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              gap: '2.25rem',
              alignItems: 'center',
            }}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--color-espresso)',
                  letterSpacing: '0.02em',
                  position: 'relative',
                  padding: '0.35rem 0',
                  transition: 'color 180ms ease',
                }}
                className="nav-item"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1rem',
            }}
            className="desktop-cta"
          >
            <button
              id="nav-get-in-touch-btn"
              onClick={onOpenContact}
              className="btn btn-primary"
              style={{
                padding: '0.625rem 1.25rem',
                fontSize: '0.8125rem',
              }}
            >
              <span>Get in touch</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-nav-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              color: 'var(--color-espresso)',
              border: '1px solid var(--color-taupe-light)',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--color-warm-white)',
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            backgroundColor: 'rgba(42, 33, 28, 0.45)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '360px',
              height: '100%',
              backgroundColor: 'var(--color-oat-cream)',
              boxShadow: '-8px 0 24px rgba(42, 33, 28, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              padding: '1.75rem',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid var(--color-taupe-light)',
                marginBottom: '1.5rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    color: 'var(--color-espresso)',
                  }}
                >
                  {BRAND_INFO.name}
                </div>
                <div
                  style={{
                    fontSize: '0.6875rem',
                    color: 'var(--color-muted-taupe)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Pune • Showcase Project
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                style={{
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-taupe-light)',
                  backgroundColor: 'var(--color-warm-white)',
                  color: 'var(--color-espresso)',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                marginBottom: '2rem',
              }}
            >
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.875rem 0.5rem',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.375rem',
                    color: 'var(--color-espresso)',
                    borderBottom: '1px solid var(--color-taupe-light)',
                  }}
                >
                  <span>{link.label}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      color: 'var(--color-muted-taupe)',
                    }}
                  >
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div style={{ marginTop: 'auto' }}>
              <button
                id="mobile-drawer-contact-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.875rem' }}
              >
                <span>Get in touch</span>
                <ArrowUpRight size={16} />
              </button>

              <div
                style={{
                  marginTop: '1.25rem',
                  fontSize: '0.75rem',
                  color: 'var(--color-muted-taupe)',
                  textAlign: 'center',
                }}
              >
                Lane 7, Koregaon Park • Pune
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Responsive media styling for desktop vs mobile nav */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background-color: var(--color-terracotta);
          transition: width 200ms ease;
        }
        .nav-item:hover {
          color: var(--color-terracotta);
        }
        .nav-item:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
};
