import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/cafeData';

interface FooterProps {
  onOpenConceptInfo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConceptInfo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Visit Us', href: '#visit' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer
      style={{
        backgroundColor: 'var(--color-espresso)',
        color: 'var(--color-warm-white)',
        paddingTop: 'var(--space-4xl)',
        paddingBottom: 'var(--space-2xl)',
        borderTop: '1px solid rgba(255, 252, 247, 0.1)',
      }}
      aria-label="Footer"
    >
      <div className="container">
        {/* Main Footer Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 252, 247, 0.12)',
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '360px' }}>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: 'var(--color-warm-white)',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              {BRAND_INFO.name}
            </div>

            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.125rem',
                fontStyle: 'italic',
                color: '#E09F80',
                marginBottom: '1rem',
                lineHeight: 1.4,
              }}
            >
              "{BRAND_INFO.tagline}"
            </p>

            <p style={{ fontSize: '0.8125rem', color: 'rgba(255, 252, 247, 0.65)', lineHeight: 1.6 }}>
              A slow-paced specialty coffee house and artisan bakeshop concept conceived in Koregaon Park, Pune.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#E09F80',
                marginBottom: '1.25rem',
              }}
            >
              Explore the Space
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} aria-label="Footer Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 252, 247, 0.8)',
                    transition: 'color 180ms ease',
                    width: 'fit-content',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFCF7')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 252, 247, 0.8)')}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Showcase & Attribution Column */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#E09F80',
                marginBottom: '1.25rem',
              }}
            >
              Agency Showcase
            </div>

            <p style={{ fontSize: '0.8125rem', color: 'rgba(255, 252, 247, 0.65)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              Engineered as <strong>Showcase Project 01</strong> for digital creative agency <strong>KILT STUDIO</strong>. Designed for standalone showcase and future portfolio route integration.
            </p>

            <button
              onClick={onOpenConceptInfo}
              className="btn btn-secondary"
              style={{
                borderColor: 'rgba(255, 252, 247, 0.25)',
                color: '#FFFCF7',
                fontSize: '0.75rem',
                padding: '0.5rem 1rem',
              }}
            >
              <Sparkles size={13} color="#E09F80" />
              <span>View Case Study Specs</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Concept Notice & Back to Top */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            fontSize: '0.75rem',
            color: 'rgba(255, 252, 247, 0.55)',
          }}
        >
          <div>
            © 2026 MORROW &amp; BEAN. Fictional concept showcase by KILT STUDIO. Not an active operating commercial entity.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'rgba(255, 252, 247, 0.8)',
              fontSize: '0.75rem',
              fontWeight: 500,
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid rgba(255, 252, 247, 0.15)',
              backgroundColor: 'rgba(255, 252, 247, 0.05)',
              transition: 'all 200ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 252, 247, 0.15)';
              e.currentTarget.style.color = '#FFFCF7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 252, 247, 0.05)';
              e.currentTarget.style.color = 'rgba(255, 252, 247, 0.8)';
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
