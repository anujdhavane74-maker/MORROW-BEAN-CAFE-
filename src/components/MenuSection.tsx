import React, { useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/cafeData';
import type { MenuCategoryId } from '../types';
import { Sparkles, Info } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>('all');

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="section"
      aria-label="Morrow & Bean Menu"
      style={{
        backgroundColor: 'var(--color-oat-cream)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '640px' }}>
          <div className="eyebrow">OUR CURATED MENU</div>
          <h2 className="section-title">
            The Daily <span className="serif-italic" style={{ color: 'var(--color-terracotta)' }}>Offerings.</span>
          </h2>
          <p className="section-description">
            Carefully sourced microlots from the Western Ghats paired with slow-laminated viennoiserie, baked fresh each morning.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div
          role="tablist"
          aria-label="Menu categories"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            overflowX: 'auto',
            paddingBottom: '0.75rem',
            marginBottom: '2.5rem',
            scrollbarWidth: 'none',
          }}
          className="menu-tabs"
        >
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                id={`tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id as MenuCategoryId)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: isActive ? 600 : 500,
                  letterSpacing: '0.02em',
                  padding: '0.625rem 1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: isActive ? 'var(--color-espresso)' : 'var(--color-warm-white)',
                  color: isActive ? 'var(--color-warm-white)' : 'var(--color-espresso)',
                  border: isActive
                    ? '1px solid var(--color-espresso)'
                    : '1px solid var(--color-taupe-light)',
                  transition: 'all 200ms ease',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Composition: Two Columns (Featured Callout + Curated List) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '320px 1fr',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'start',
          }}
          className="menu-layout-grid"
        >
          {/* Left Column: Editorial Feature Callout Card */}
          <div
            className="menu-featured-card"
            style={{
              position: 'sticky',
              top: '100px',
              backgroundColor: 'var(--color-warm-white)',
              border: '1px solid var(--color-taupe-light)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              padding: '1.25rem',
            }}
          >
            <div style={{ position: 'relative', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1rem' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80"
                alt="Signature Flat White with velvety microfoam latte art"
                aspectRatio="1/1"
                fallbackText="Signature Morning Flat White"
              />
              <div
                style={{
                  position: 'absolute',
                  top: '0.75rem',
                  left: '0.75rem',
                  backgroundColor: 'var(--color-terracotta)',
                  color: '#FFFCF7',
                  padding: '0.2rem 0.5rem',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Signature Pour
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--color-terracotta)', marginBottom: '0.35rem' }}>
              <Sparkles size={14} />
              <span style={{ fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                House Microlot
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: 'var(--color-espresso)',
                marginBottom: '0.35rem',
              }}
            >
              Ratnagiri Estate Washed
            </h3>

            <p style={{ fontSize: '0.8125rem', color: 'var(--color-espresso-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Grown at 1,350m elevation in Chikmagalur. Extended fermentation brings notes of dark cacao, roasted hazelnut and subtle black cherry sweetness.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--color-taupe-light)',
                fontSize: '0.75rem',
                color: 'var(--color-muted-taupe)',
              }}
            >
              <span>Roast: Medium-Light</span>
              <span style={{ fontWeight: 600, color: 'var(--color-espresso)' }}>Available in Store</span>
            </div>
          </div>

          {/* Right Column: Menu Items List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1rem',
              }}
            >
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  style={{
                    backgroundColor: 'var(--color-warm-white)',
                    border: '1px solid var(--color-taupe-light)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '1.25rem 1.5rem',
                    transition: 'all 200ms ease',
                  }}
                  className="menu-item-row"
                  tabIndex={0}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      marginBottom: '0.35rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <h4
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.25rem',
                          fontWeight: 600,
                          color: 'var(--color-espresso)',
                          margin: 0,
                        }}
                      >
                        {item.name}
                      </h4>

                      {item.tags?.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.625rem',
                            fontWeight: 600,
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            padding: '0.15rem 0.45rem',
                            borderRadius: 'var(--radius-xs)',
                            backgroundColor: tag === 'Signature' ? 'var(--color-terracotta-subtle)' : 'var(--color-sage-subtle)',
                            color: tag === 'Signature' ? 'var(--color-terracotta)' : 'var(--color-sage)',
                            border: tag === 'Signature' ? '1px solid rgba(185, 101, 69, 0.2)' : '1px solid rgba(114, 118, 91, 0.2)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.0625rem',
                        fontWeight: 600,
                        color: 'var(--color-espresso)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      ₹{item.price}
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-espresso-muted)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>

                  {item.notes && (
                    <div
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        color: 'var(--color-muted-taupe)',
                        marginTop: '0.4rem',
                      }}
                    >
                      Flavor notes: {item.notes}
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* Concept Menu Note */}
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem 1.25rem',
                backgroundColor: 'rgba(255, 252, 247, 0.65)',
                border: '1px dashed var(--color-taupe-light)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                color: 'var(--color-muted-taupe)',
                fontSize: '0.8125rem',
                lineHeight: 1.5,
              }}
            >
              <Info size={16} strokeWidth={1.75} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--color-terracotta)' }} />
              <div>
                <strong>Showcase Demonstration Notice:</strong> All menu selections, pairings, and prices (in INR ₹) are illustrative concept items developed by KILT STUDIO to model real-world café experience. Real ordering or payment processing is intentionally not configured.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .menu-item-row:hover {
          border-color: var(--color-muted-taupe);
          transform: translateX(2px);
        }
        @media (max-width: 900px) {
          .menu-layout-grid {
            grid-template-columns: 1fr !important;
          }
          .menu-featured-card {
            position: static !important;
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};
