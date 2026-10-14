import React, { useState } from 'react';
import { Coffee } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: string;
  fallbackText?: string;
  className?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  aspectRatio,
  fallbackText,
  className = '',
  containerClassName = '',
  loading = 'lazy',
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`image-wrapper ${containerClassName}`}
      style={{
        aspectRatio: aspectRatio || 'auto',
        position: 'relative',
        backgroundColor: 'var(--color-taupe-light)',
      }}
    >
      {!isLoaded && !hasError && <div className="image-skeleton" aria-hidden="true" />}

      {hasError ? (
        <div
          role="img"
          aria-label={alt}
          style={{
            width: '100%',
            height: '100%',
            minHeight: '220px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--color-warm-white)',
            border: '1px solid var(--color-taupe-light)',
            padding: '1.5rem',
            textAlign: 'center',
            color: 'var(--color-muted-taupe)',
          }}
        >
          <Coffee size={28} strokeWidth={1.5} color="var(--color-terracotta)" style={{ marginBottom: '0.75rem' }} />
          <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-serif)', color: 'var(--color-espresso)', fontStyle: 'italic' }}>
            {fallbackText || alt}
          </span>
          <span style={{ fontSize: '0.6875rem', marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-muted-taupe)' }}>
            MORROW &amp; BEAN Archival View
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={className}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.4s ease, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
            display: 'block',
          }}
          {...rest}
        />
      )}
    </div>
  );
};
