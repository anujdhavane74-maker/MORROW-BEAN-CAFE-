import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/cafeData';
import type { GalleryItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedImage(GALLERY_ITEMS[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setSelectedImage(GALLERY_ITEMS[nextIndex]);
  };

  return (
    <section
      id="gallery"
      className="section"
      aria-label="Atmosphere and Gallery"
      style={{
        backgroundColor: 'var(--color-espresso)',
        color: 'var(--color-warm-white)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '640px' }}>
          <div className="eyebrow" style={{ color: '#E09F80' }}>
            ATMOSPHERE &amp; DETAIL
          </div>
          <h2 className="section-title" style={{ color: 'var(--color-warm-white)' }}>
            Captured in the <span className="serif-italic" style={{ color: '#E09F80' }}>morning light.</span>
          </h2>
          <p className="section-description" style={{ color: 'rgba(255, 252, 247, 0.72)' }}>
            Tactile ceramics, slow extractions, freshly pulled croissants, and the gentle rhythm of Koregaon Park.
          </p>
        </div>

        {/* Asymmetrical Editorial Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.25rem',
          }}
          className="gallery-asymmetric-grid"
        >
          {GALLERY_ITEMS.map((item, index) => {
            // Assign deliberate editorial spans to create visual rhythm
            const gridColumnSpan = index === 0 ? 'span 7' : index === 1 ? 'span 5' : index === 2 ? 'span 4' : index === 3 ? 'span 4' : index === 4 ? 'span 4' : 'span 12';
            const itemAspectRatio = index === 0 ? '16/10' : index === 1 ? '4/5' : index === 5 ? '21/9' : '1/1';

            return (
              <div
                key={item.id}
                style={{
                  gridColumn: gridColumnSpan,
                  position: 'relative',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundColor: 'rgba(255, 252, 247, 0.05)',
                  border: '1px solid rgba(255, 252, 247, 0.1)',
                }}
                className="gallery-item-card"
                onClick={() => setSelectedImage(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedImage(item);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View enlarged photograph: ${item.title}`}
              >
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.alt}
                  aspectRatio={itemAspectRatio}
                  containerClassName="gallery-img-container"
                />

                {/* Overlay on hover */}
                <div
                  className="gallery-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(42, 33, 28, 0.65)',
                    backdropFilter: 'blur(3px)',
                    WebkitBackdropFilter: 'blur(3px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.5rem',
                    opacity: 0,
                    transition: 'opacity 250ms ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 252, 247, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFCF7',
                      }}
                      aria-hidden="true"
                    >
                      <Maximize2 size={16} />
                    </div>
                  </div>

                  <div>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '0.6875rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#E09F80',
                        fontWeight: 600,
                        marginBottom: '0.25rem',
                      }}
                    >
                      {item.category}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        color: '#FFFCF7',
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.8125rem',
                        color: 'rgba(255, 252, 247, 0.75)',
                        marginTop: '0.25rem',
                        margin: 0,
                      }}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged photo: ${selectedImage.title}`}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            backgroundColor: 'rgba(20, 16, 13, 0.94)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close photo preview"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 252, 247, 0.1)',
              color: '#FFFCF7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 252, 247, 0.2)',
              transition: 'background-color 200ms ease',
            }}
          >
            <X size={20} />
          </button>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous photograph"
            style={{
              position: 'absolute',
              left: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 252, 247, 0.1)',
              color: '#FFFCF7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 252, 247, 0.2)',
            }}
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next photograph"
            style={{
              position: 'absolute',
              right: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 252, 247, 0.1)',
              color: '#FFFCF7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 252, 247, 0.2)',
            }}
          >
            <ChevronRight size={22} />
          </button>

          {/* Modal Content */}
          <div
            style={{
              maxWidth: '860px',
              width: '100%',
              backgroundColor: 'var(--color-espresso)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 252, 247, 0.15)',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ maxHeight: '70vh', overflow: 'hidden' }}>
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.alt}
                style={{
                  width: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  backgroundColor: '#17120F',
                }}
              />
            </div>

            <div
              style={{
                padding: '1.25rem 1.75rem',
                backgroundColor: 'var(--color-espresso)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid rgba(255, 252, 247, 0.1)',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#E09F80',
                    fontWeight: 600,
                  }}
                >
                  {selectedImage.category}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    color: '#FFFCF7',
                    margin: '0.2rem 0',
                  }}
                >
                  {selectedImage.title}
                </h3>
                <p style={{ fontSize: '0.8125rem', color: 'rgba(255, 252, 247, 0.65)', margin: 0 }}>
                  {selectedImage.subtitle}
                </p>
              </div>

              <div
                style={{
                  fontSize: '0.6875rem',
                  color: 'rgba(255, 252, 247, 0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                MORROW &amp; BEAN
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-item-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-item-card:hover img {
          transform: scale(1.03);
        }
        @media (max-width: 900px) {
          .gallery-asymmetric-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .gallery-asymmetric-grid > div {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 580px) {
          .gallery-asymmetric-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
