import React from 'react';
import { ArrowDown, Compass, Coffee } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps {
  onExploreMenu: () => void;
  onFindCorner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onFindCorner }) => {
  return (
    <section
      id="hero"
      aria-label="Welcome to Morrow & Bean"
      style={{
        paddingTop: 'clamp(2.5rem, 5vw, 4.5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5.5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Editorial Typography & Actions */}
          <div style={{ maxWidth: '580px' }} className="hero-content">
            <div className="eyebrow" id="hero-eyebrow">
              YOUR NEIGHBOURHOOD COFFEE RITUAL
            </div>

            <h1
              id="hero-headline"
              style={{
                fontSize: 'clamp(2.6rem, 5vw + 0.5rem, 4.6rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                marginBottom: '1.5rem',
                color: 'var(--color-espresso)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
              }}
            >
              A slower kind of <span className="serif-italic" style={{ color: 'var(--color-terracotta)' }}>everyday.</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.1875rem)',
                lineHeight: 1.7,
                color: 'var(--color-espresso-muted)',
                marginBottom: '2.25rem',
                maxWidth: '490px',
              }}
            >
              Thoughtfully brewed coffee, fresh-from-the-oven treats, and a little more room to slow down.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '3rem',
              }}
            >
              <button
                id="hero-primary-cta"
                onClick={onExploreMenu}
                className="btn btn-primary"
                style={{
                  padding: '0.9375rem 1.875rem',
                  fontSize: '0.9375rem',
                }}
              >
                <span>Explore the menu</span>
                <ArrowDown size={15} />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onFindCorner}
                className="btn btn-secondary"
                style={{
                  padding: '0.9375rem 1.75rem',
                  fontSize: '0.9375rem',
                }}
              >
                <span>Find your corner</span>
                <Compass size={15} />
              </button>
            </div>

            {/* Micro Highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.25rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid var(--color-taupe-light)',
              }}
              className="hero-highlights"
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--color-espresso)',
                  }}
                >
                  88+
                </div>
                <div
                  style={{
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--color-muted-taupe)',
                    marginTop: '2px',
                  }}
                >
                  Cup Score Lots
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--color-espresso)',
                  }}
                >
                  6:30 AM
                </div>
                <div
                  style={{
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--color-muted-taupe)',
                    marginTop: '2px',
                  }}
                >
                  Dawn Bakeshop
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--color-espresso)',
                  }}
                >
                  Lane 7
                </div>
                <div
                  style={{
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--color-muted-taupe)',
                    marginTop: '2px',
                  }}
                >
                  Koregaon Park
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Hero Photography */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '560px',
              marginLeft: 'auto',
            }}
            className="hero-image-col"
          >
            {/* Decorative background accent block */}
            <div
              style={{
                position: 'absolute',
                top: '-14px',
                right: '-14px',
                width: '100%',
                height: '100%',
                border: '1px solid var(--color-taupe-light)',
                borderRadius: 'var(--radius-md)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
              aria-hidden="true"
            />

            {/* Main photograph */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 16px 36px -12px rgba(42, 33, 28, 0.12)',
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85"
                alt="Sunlit specialty café table at Morrow & Bean with hand-poured coffee and fresh pastry"
                aspectRatio="4/5"
                fallbackText="Morning coffee service at Morrow & Bean"
              />

              {/* Editorial Caption Tag in bottom left of image */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  backgroundColor: 'rgba(255, 252, 247, 0.94)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(168, 155, 138, 0.3)',
                  padding: '0.875rem 1.125rem',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: 'var(--color-espresso)',
                    }}
                  >
                    Morning Batch • Ratnagiri Washed
                  </div>
                  <div
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--color-muted-taupe)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Slow Drip &amp; Viennoiserie
                  </div>
                </div>

                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-terracotta-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-terracotta)',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <Coffee size={16} strokeWidth={2} />
                </div>
              </div>
            </div>

            {/* Small corner archival badge */}
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                zIndex: 2,
                backgroundColor: 'var(--color-espresso)',
                color: 'var(--color-warm-white)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-xs)',
                fontSize: '0.6875rem',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Pune Ritual
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-image-col {
            max-width: 100% !important;
            margin-top: 1rem;
          }
        }
        @media (max-width: 480px) {
          .hero-highlights {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
