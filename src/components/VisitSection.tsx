import React from 'react';
import { MapPin, Clock, Mail, Phone, ArrowRight } from 'lucide-react';
import { BRAND_INFO, OPERATING_HOURS } from '../data/cafeData';

interface VisitSectionProps {
  onOpenContact: () => void;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="visit"
      className="section"
      aria-label="Visit and Contact Details"
      style={{
        backgroundColor: 'var(--color-warm-white)',
        borderTop: '1px solid var(--color-taupe-light)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '640px' }}>
          <div className="eyebrow">VISIT &amp; CONNECT</div>
          <h2 className="section-title">
            Come for the coffee, <span className="serif-italic" style={{ color: 'var(--color-terracotta)' }}>stay for the morning.</span>
          </h2>
          <p className="section-description">
            Tucked under the canopy of Koregaon Park, our sun-filled courtyard and quiet indoor tables are open all week long.
          </p>
        </div>

        {/* Visit Details Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
          className="visit-grid"
        >
          {/* Card 1: Hours & House Rules */}
          <div
            style={{
              backgroundColor: 'var(--color-oat-cream)',
              border: '1px solid var(--color-taupe-light)',
              borderRadius: 'var(--radius-md)',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  color: 'var(--color-terracotta)',
                  marginBottom: '1rem',
                }}
              >
                <Clock size={20} strokeWidth={2} />
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.375rem',
                    color: 'var(--color-espresso)',
                    margin: 0,
                  }}
                >
                  Hours of Service
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '1.75rem' }}>
                {OPERATING_HOURS.map((item) => (
                  <div
                    key={item.day}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingBottom: '0.5rem',
                      borderBottom: '1px dashed var(--color-taupe-light)',
                      fontSize: '0.9375rem',
                    }}
                  >
                    <span style={{ fontWeight: 500, color: 'var(--color-espresso)' }}>{item.day}</span>
                    <span
                      style={{
                        color: item.isClosed ? 'var(--color-terracotta)' : 'var(--color-espresso-muted)',
                        fontWeight: item.isClosed ? 600 : 400,
                      }}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--color-espresso-muted)',
                  lineHeight: 1.6,
                }}
              >
                ✦ Fresh pastries pulled from the oven at 7:30 AM.<br />
                ✦ Filter coffees brewed on demand until dusk.<br />
                ✦ Dogs &amp; bicycles always welcome in the courtyard.
              </div>
            </div>

            <div
              style={{
                marginTop: '1.5rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--color-taupe-light)',
                fontSize: '0.75rem',
                color: 'var(--color-muted-taupe)',
              }}
            >
              [Illustrative Concept Hours — Not a verified commercial schedule]
            </div>
          </div>

          {/* Card 2: Conceptual Location & Stylized Architectural Map */}
          <div
            style={{
              backgroundColor: 'var(--color-oat-cream)',
              border: '1px solid var(--color-taupe-light)',
              borderRadius: 'var(--radius-md)',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  color: 'var(--color-terracotta)',
                  marginBottom: '1rem',
                }}
              >
                <MapPin size={20} strokeWidth={2} />
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.375rem',
                    color: 'var(--color-espresso)',
                    margin: 0,
                  }}
                >
                  Finding the Corner
                </h3>
              </div>

              <p style={{ fontSize: '0.9375rem', color: 'var(--color-espresso)', fontWeight: 500, marginBottom: '0.35rem' }}>
                {BRAND_INFO.fullAddress}
              </p>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-espresso-muted)', marginBottom: '1.25rem' }}>
                Off North Main Road, nestled beneath the canopy of Gulmohar trees.
              </p>

              {/* Minimalist Cartographic Editorial SVG Illustration */}
              <div
                style={{
                  backgroundColor: 'var(--color-warm-white)',
                  border: '1px solid var(--color-taupe-light)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1.25rem',
                  position: 'relative',
                  overflow: 'hidden',
                  marginBottom: '1.25rem',
                }}
                aria-label="Stylized neighbourhood map illustration"
              >
                <svg viewBox="0 0 400 200" style={{ width: '100%', height: 'auto', display: 'block' }}>
                  {/* Road Grid */}
                  <rect width="400" height="200" fill="#FAF6EE" />
                  {/* North Main Road */}
                  <line x1="30" y1="40" x2="370" y2="40" stroke="#E6DEC9" strokeWidth="14" strokeLinecap="round" />
                  <text x="36" y="32" fill="#8C7F6E" fontSize="9" fontFamily="sans-serif" letterSpacing="1">NORTH MAIN ROAD</text>

                  {/* Lane 7 */}
                  <line x1="200" y1="40" x2="200" y2="175" stroke="#E6DEC9" strokeWidth="12" strokeLinecap="round" />
                  <text x="210" y="95" fill="#8C7F6E" fontSize="9" fontFamily="sans-serif" letterSpacing="1">LANE 7</text>

                  {/* Lane 6 Cross */}
                  <line x1="60" y1="130" x2="340" y2="130" stroke="#EDE5D4" strokeWidth="8" strokeLinecap="round" />

                  {/* Park / Greenery Zone */}
                  <rect x="50" y="60" width="110" height="55" rx="6" fill="#E4E7DC" />
                  <text x="65" y="92" fill="#697053" fontSize="8" fontFamily="sans-serif">Osho Garden Axis</text>

                  {/* MORROW & BEAN Pin point */}
                  <circle cx="200" cy="130" r="14" fill="rgba(185, 101, 69, 0.18)" />
                  <circle cx="200" cy="130" r="6" fill="#B96545" />
                  <rect x="220" y="118" width="120" height="24" rx="4" fill="#2A211C" />
                  <text x="230" y="134" fill="#FFFCF7" fontSize="8" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.5">
                    MORROW &amp; BEAN
                  </text>
                </svg>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.625rem',
                    right: '0.75rem',
                    fontSize: '0.625rem',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted-taupe)',
                    letterSpacing: '0.06em',
                  }}
                >
                  Conceptual Cartography
                </div>
              </div>
            </div>

            <div
              style={{
                paddingTop: '1rem',
                borderTop: '1px solid var(--color-taupe-light)',
                fontSize: '0.75rem',
                color: 'var(--color-muted-taupe)',
              }}
            >
              [Fictional Address — Demonstrative showcase concept]
            </div>
          </div>

          {/* Card 3: Connect & Inquire */}
          <div
            style={{
              backgroundColor: 'var(--color-espresso)',
              color: 'var(--color-warm-white)',
              borderRadius: 'var(--radius-md)',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div className="eyebrow" style={{ color: '#E09F80' }}>
                GET IN TOUCH
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.625rem',
                  color: 'var(--color-warm-white)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.25,
                }}
              >
                Planning a slow morning gathering?
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 252, 247, 0.75)',
                  lineHeight: 1.65,
                  marginBottom: '1.75rem',
                }}
              >
                Whether you wish to discuss seasonal bean subscriptions, reserve the sunlit communal table, or collaborate with KILT STUDIO, we are always glad to connect.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem' }}>
                  <Mail size={16} color="#E09F80" />
                  <span style={{ color: 'rgba(255, 252, 247, 0.88)' }}>{BRAND_INFO.email}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem' }}>
                  <Phone size={16} color="#E09F80" />
                  <span style={{ color: 'rgba(255, 252, 247, 0.88)' }}>{BRAND_INFO.phone}</span>
                </div>
              </div>
            </div>

            <div>
              <button
                id="visit-open-contact-btn"
                onClick={onOpenContact}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '0.9375rem',
                  backgroundColor: 'var(--color-terracotta)',
                }}
              >
                <span>Send a Concept Note</span>
                <ArrowRight size={16} />
              </button>

              <div
                style={{
                  marginTop: '1rem',
                  textAlign: 'center',
                  fontSize: '0.6875rem',
                  color: 'rgba(255, 252, 247, 0.5)',
                  letterSpacing: '0.04em',
                }}
              >
                Demonstration modal opens with instant interactive feedback
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
