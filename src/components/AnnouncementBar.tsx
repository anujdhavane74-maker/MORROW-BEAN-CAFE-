import React from 'react';
import { Sparkles } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenConceptInfo?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenConceptInfo }) => {
  return (
    <aside
      aria-label="Showcase Announcement"
      style={{
        backgroundColor: 'var(--color-espresso)',
        color: 'var(--color-warm-white)',
        padding: '0.45rem 1rem',
        fontSize: '0.75rem',
        letterSpacing: '0.04em',
        borderBottom: '1px solid rgba(255, 252, 247, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 40,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            color: '#E09F80',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: '0.6875rem',
          }}
        >
          <Sparkles size={12} strokeWidth={2} />
          KILT STUDIO SHOWCASE
        </span>

        <span style={{ opacity: 0.35 }} aria-hidden="true">•</span>

        <span style={{ color: 'rgba(255, 252, 247, 0.88)' }}>
          A fictional neighbourhood coffee ritual for Koregaon Park, Pune
        </span>

        <span style={{ opacity: 0.35 }} aria-hidden="true">•</span>

        <button
          onClick={onOpenConceptInfo}
          type="button"
          style={{
            color: '#FFFCF7',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            fontSize: '0.75rem',
            opacity: 0.85,
            transition: 'opacity 0.2s ease',
            padding: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
        >
          Concept Details &amp; Design Notes
        </button>
      </div>
    </aside>
  );
};
