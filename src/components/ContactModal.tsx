import React, { useState, useEffect, useCallback } from 'react';
import { X, Send, CheckCircle2, Coffee } from 'lucide-react';
import type { ContactFormState } from '../types';
import { BRAND_INFO } from '../data/cafeData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    topic: 'Communal Table Reservation',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = useCallback(() => {
    setIsSubmitted(false);
    onClose();
  }, [onClose]);

  // Close on Escape key and handle background scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
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
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief gentle submission transition
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 70,
        backgroundColor: 'rgba(30, 24, 20, 0.65)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
      onClick={handleClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '540px',
          backgroundColor: 'var(--color-oat-cream)',
          border: '1px solid var(--color-taupe-light)',
          borderRadius: 'var(--radius-md)',
          padding: 'clamp(1.75rem, 4vw, 2.5rem)',
          boxShadow: '0 24px 50px -12px rgba(42, 33, 28, 0.25)',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '38px',
            height: '38px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-taupe-light)',
            backgroundColor: 'var(--color-warm-white)',
            color: 'var(--color-espresso)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={18} />
        </button>

        {!isSubmitted ? (
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontSize: '0.6875rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-terracotta)',
                marginBottom: '0.5rem',
              }}
            >
              <Coffee size={14} />
              <span>{BRAND_INFO.conceptBadge}</span>
            </div>

            <h2
              id="contact-modal-title"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.875rem',
                color: 'var(--color-espresso)',
                marginBottom: '0.35rem',
              }}
            >
              Reach out to <span className="serif-italic" style={{ color: 'var(--color-terracotta)' }}>the corner.</span>
            </h2>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-espresso-muted)', marginBottom: '1.75rem' }}>
              Have questions about single origins, table reservations, or our agency showcase? Send us a simulated note below.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
              <div>
                <label
                  htmlFor="contact-name"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-espresso)', marginBottom: '0.35rem' }}
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Rohini Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-taupe-light)',
                    backgroundColor: 'var(--color-warm-white)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-espresso)',
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-espresso)', marginBottom: '0.35rem' }}
                >
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-taupe-light)',
                    backgroundColor: 'var(--color-warm-white)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-espresso)',
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-topic"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-espresso)', marginBottom: '0.35rem' }}
                >
                  Nature of Inquiry
                </label>
                <select
                  id="contact-topic"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-taupe-light)',
                    backgroundColor: 'var(--color-warm-white)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-espresso)',
                  }}
                >
                  <option value="Communal Table Reservation">Communal Table Reservation</option>
                  <option value="Microlot Bean Subscription">Microlot Bean Subscription</option>
                  <option value="Private Morning Gathering">Private Morning Gathering</option>
                  <option value="KILT STUDIO Project Inquiry">KILT STUDIO Digital Showcase Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-espresso)', marginBottom: '0.35rem' }}
                >
                  Message or Preference
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  placeholder="Tell us what you have in mind..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-taupe-light)',
                    backgroundColor: 'var(--color-warm-white)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-espresso)',
                    resize: 'vertical',
                  }}
                />
              </div>

              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--color-muted-taupe)',
                  backgroundColor: 'rgba(255, 252, 247, 0.7)',
                  padding: '0.625rem 0.875rem',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px dashed var(--color-taupe-light)',
                }}
              >
                Demonstration Notice: Form submissions in this showcase project are handled purely client-side without storing user data.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{
                  padding: '0.875rem',
                  marginTop: '0.5rem',
                  opacity: isSubmitting ? 0.75 : 1,
                }}
              >
                <span>{isSubmitting ? 'Sending Note...' : 'Send Note'}</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-sage-subtle)',
                color: 'var(--color-sage)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <CheckCircle2 size={32} />
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.625rem',
                color: 'var(--color-espresso)',
                marginBottom: '0.5rem',
              }}
            >
              Thank you, {formData.name || 'Friend'}.
            </h3>

            <p style={{ fontSize: '0.9375rem', color: 'var(--color-espresso-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Your concept message for <strong>{formData.topic}</strong> has been received by the Morrow &amp; Bean showcase system.
            </p>

            <button
              type="button"
              onClick={handleClose}
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.75rem' }}
            >
              Back to Showcase
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
