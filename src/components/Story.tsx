import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';
import { BRAND_PILLARS } from '../data/cafeData';

export const Story: React.FC = () => {
  return (
    <section
      id="story"
      className="section"
      aria-label="Our Story and Philosophy"
      style={{
        backgroundColor: 'var(--color-warm-white)',
        borderTop: '1px solid var(--color-taupe-light)',
        borderBottom: '1px solid var(--color-taupe-light)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <div className="eyebrow">OUR PHILOSOPHY</div>
          <h2
            style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 3.25rem)',
              maxWidth: '820px',
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              color: 'var(--color-espresso)',
            }}
          >
            "Good coffee is more than the cup. It's the <span className="serif-italic" style={{ color: 'var(--color-terracotta)' }}>familiar corner</span>, the conversation that runs long, and the quiet moment before the day begins."
          </h2>
        </div>

        {/* Two-Column Editorial Composition */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 4.5vw, 4rem)',
            alignItems: 'center',
          }}
          className="story-grid"
        >
          {/* Left Column: Rich Café Atmosphere Photograph */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -10px rgba(42, 33, 28, 0.08)',
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
                alt="Quiet sunlit corner of Morrow & Bean café interior with natural timber and earthy textures"
                aspectRatio="4/5"
                fallbackText="The calm corner at Morrow & Bean, Pune"
              />
            </div>

            {/* Small floating tactile caption card */}
            <div
              style={{
                position: 'absolute',
                bottom: '-1.25rem',
                right: '1.5rem',
                backgroundColor: 'var(--color-espresso)',
                color: 'var(--color-warm-white)',
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-sm)',
                maxWidth: '240px',
                boxShadow: '0 8px 24px rgba(42, 33, 28, 0.16)',
              }}
              className="story-floating-card"
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  color: '#FFFCF7',
                  lineHeight: 1.3,
                }}
              >
                "Space to linger without rush."
              </div>
              <div
                style={{
                  fontSize: '0.6875rem',
                  color: 'rgba(255, 252, 247, 0.6)',
                  marginTop: '0.35rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                The Morrow &amp; Bean Creed
              </div>
            </div>
          </div>

          {/* Right Column: Values & Craft Narrative */}
          <div style={{ maxWidth: '540px' }} className="story-content">
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.75,
                color: 'var(--color-espresso)',
                marginBottom: '2rem',
                fontWeight: 400,
              }}
            >
              Founded conceptually in the leafy lanes of Koregaon Park, <strong>MORROW &amp; BEAN</strong> was imagined as an antidote to frantic commutes and mass-produced espresso. We believe that genuine hospitality starts with small, deliberate choices.
            </p>

            {/* Three Brand Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {BRAND_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'flex-start',
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid var(--color-taupe-light)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: 'var(--color-terracotta)',
                      lineHeight: 1,
                      marginTop: '0.125rem',
                    }}
                  >
                    {pillar.number}
                  </span>

                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: 'var(--color-espresso)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.9375rem',
                        lineHeight: 1.6,
                        color: 'var(--color-espresso-muted)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {pillar.description}
                    </p>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--color-sage)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      ✦ {pillar.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .story-grid {
            grid-template-columns: 1fr !important;
          }
          .story-floating-card {
            position: static !important;
            margin-top: 1rem;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
