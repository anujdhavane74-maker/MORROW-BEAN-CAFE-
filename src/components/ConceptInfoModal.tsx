import React, { useEffect } from 'react';
import { X, Sparkles, Code2, Palette, ShieldCheck } from 'lucide-react';

interface ConceptInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConceptInfoModal: React.FC<ConceptInfoModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="concept-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 80,
        backgroundColor: 'rgba(30, 24, 20, 0.72)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          backgroundColor: 'var(--color-warm-white)',
          border: '1px solid var(--color-taupe-light)',
          borderRadius: 'var(--radius-md)',
          padding: 'clamp(1.75rem, 4vw, 2.5rem)',
          boxShadow: '0 24px 50px -12px rgba(42, 33, 28, 0.3)',
          position: 'relative',
          maxHeight: '85vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '38px',
            height: '38px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-taupe-light)',
            backgroundColor: 'var(--color-oat-cream)',
            color: 'var(--color-espresso)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={18} />
        </button>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-terracotta)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          <Sparkles size={14} />
          <span>KILT STUDIO • SHOWCASE PROJECT 01</span>
        </div>

        <h2
          id="concept-modal-title"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.875rem',
            color: 'var(--color-espresso)',
            marginBottom: '0.75rem',
          }}
        >
          Project Overview &amp; Specifications
        </h2>

        <p style={{ fontSize: '0.9375rem', color: 'var(--color-espresso-muted)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
          <strong>MORROW &amp; BEAN</strong> is a standalone concept showcase engineered for digital agency <strong>KILT STUDIO</strong> to exhibit premium editorial art direction, accessible responsive engineering, and specialty coffee brand storytelling.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Section 1 */}
          <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-oat-cream)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-taupe-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-espresso)', fontWeight: 600, fontSize: '0.9375rem' }}>
              <Palette size={16} color="var(--color-terracotta)" />
              <span>Design System Tokens</span>
            </div>
            <ul style={{ fontSize: '0.8125rem', color: 'var(--color-espresso-muted)', paddingLeft: '1.25rem', lineHeight: 1.7 }}>
              <li><strong>Oat Cream (#F4EFE6):</strong> Primary background</li>
              <li><strong>Espresso Brown (#2A211C):</strong> Primary text &amp; dark contrast sections</li>
              <li><strong>Terracotta (#B96545):</strong> Primary accent &amp; interactive CTA highlights</li>
              <li><strong>Sage Olive (#72765B):</strong> Secondary accent &amp; botanical indicators</li>
              <li><strong>Warm White (#FFFCF7):</strong> Cards and illuminated surfaces</li>
              <li><strong>Muted Taupe (#A89B8A):</strong> Subtle dividers &amp; metadata</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-oat-cream)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-taupe-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-espresso)', fontWeight: 600, fontSize: '0.9375rem' }}>
              <Code2 size={16} color="var(--color-terracotta)" />
              <span>Architecture &amp; Portfolio Integration</span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-espresso-muted)', lineHeight: 1.65 }}>
              Engineered with <strong>React 19 + TypeScript + Vite</strong>, using a modular CSS token system and zero external UI bloat. Built strictly frontend-only with zero database dependencies, ensuring instant embedding into the KILT STUDIO portfolio as a standalone route or sub-app.
            </p>
          </div>

          {/* Section 3 */}
          <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-oat-cream)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-taupe-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-espresso)', fontWeight: 600, fontSize: '0.9375rem' }}>
              <ShieldCheck size={16} color="var(--color-sage)" />
              <span>Fictional Demonstration Disclaimer</span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-espresso-muted)', lineHeight: 1.65 }}>
              This project does not invent real customers, fake reviews, commercial awards, or active commerce transactions. All addresses (Koregaon Park, Pune), menu prices (₹ INR), phone numbers, and hours are illustrative concept placeholders.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-primary"
            style={{ padding: '0.625rem 1.5rem' }}
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
