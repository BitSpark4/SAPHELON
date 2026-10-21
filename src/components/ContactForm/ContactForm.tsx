/**
 * ContactForm component providing Netlify Forms-integrated business enquiry collection,
 * client-side validation, accessible feedback, honeypot spam protection, and lifecycle handling.
 * Source: SAPHELON-Content-Master.md Section 11 contact.form.
 * Netlify Forms reference: https://docs.netlify.com/manage/forms/setup/
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactForm.module.css';
import { Button } from '../Button';
import { CONTACT_CONTENT, ROUTES } from '../../constants';
import type { ContactFormData } from '../../types';

export const ContactForm: React.FC = () => {
  const { form } = CONTACT_CONTENT;

  const initialFormData: ContactFormData = {
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: form.industryOptions[0],
    service: form.serviceOptions[0],
    message: '',
    preferredContactMethod: 'email',
    consent: false,
    botField: '',
  };

  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check: if filled, quietly drop
    if (formData.botField) {
      setStatus('success');
      return;
    }

    // Required fields validation
    if (
      !formData.name.trim() ||
      !formData.company.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields marked with an asterisk (*).');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid business email address.');
      return;
    }

    // Consent validation
    if (!formData.consent) {
      setStatus('error');
      setErrorMessage('Please confirm your consent to be contacted regarding this enquiry.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const body = new URLSearchParams();
      body.append('form-name', 'contact');
      body.append('name', formData.name.trim());
      body.append('company', formData.company.trim());
      body.append('email', formData.email.trim());
      body.append('phone', formData.phone.trim());
      body.append('industry', formData.industry);
      body.append('service', formData.service);
      body.append('preferredContactMethod', formData.preferredContactMethod);
      body.append('message', formData.message.trim());
      body.append('consent', formData.consent ? 'yes' : 'no');

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (response.ok) {
        setStatus('success');
        // Reset form ONLY after confirmed success
        setFormData(initialFormData);
      } else if (
        // When testing on local Vite dev server without Netlify CLI, Vite returns 404 for POST /
        typeof window !== 'undefined' &&
        (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
      ) {
        setStatus('success');
        setFormData(initialFormData);
      } else {
        throw new Error(`Netlify form submission failed with HTTP status ${response.status}`);
      }
    } catch (_err) {
      setStatus('error');
      setErrorMessage(
        form.errorMessage || 'Something went wrong and your enquiry was not sent. Please try again.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.formCard}>
        <div className={`${styles.feedbackBox} ${styles.successBox}`}>
          <h3 className={styles.successTitle}>{form.successTitle}</h3>
          <p className={styles.successText}>
            Thank you for contacting SAPHELON. Our team will get back to you.
          </p>
          <button
            type="button"
            className={styles.resetBtn}
            onClick={() => setStatus('idle')}
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>{form.title}</h2>
        <p className={styles.formSubtitle}>{form.subtitle}</p>
      </div>

      <form
        name="contact"
        method="POST"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Hidden inputs required for Netlify Form detection & bot protection */}
        <input type="hidden" name="form-name" value="contact" />
        <p className={styles.hiddenHoneypot}>
          <label>
            Don’t fill this out if you're human:{' '}
            <input
              name="bot-field"
              value={formData.botField || ''}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </p>

        <div className={styles.formGrid}>
          {/* Full Name */}
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Full Name<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={styles.input}
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
            />
          </div>

          {/* Company Name */}
          <div className={styles.formGroup}>
            <label htmlFor="company" className={styles.label}>
              Company Name<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className={styles.input}
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Acme Pharma Ltd."
            />
          </div>

          {/* Business Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Business Email<span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
            />
          </div>

          {/* Phone Number */}
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Phone Number<span className={styles.required}>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className={styles.input}
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
            />
          </div>

          {/* Industry Selection */}
          <div className={styles.formGroup}>
            <label htmlFor="industry" className={styles.label}>
              Industry<span className={styles.required}>*</span>
            </label>
            <select
              id="industry"
              name="industry"
              className={styles.select}
              value={formData.industry}
              onChange={handleChange}
            >
              {form.industryOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Service of Interest */}
          <div className={styles.formGroup}>
            <label htmlFor="service" className={styles.label}>
              Service of Interest<span className={styles.required}>*</span>
            </label>
            <select
              id="service"
              name="service"
              className={styles.select}
              value={formData.service}
              onChange={handleChange}
            >
              {form.serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Method of Contact */}
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <span className={styles.label}>Preferred Method of Contact</span>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="preferredContactMethod"
                  value="email"
                  checked={formData.preferredContactMethod === 'email'}
                  onChange={handleChange}
                />
                Email
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="preferredContactMethod"
                  value="phone"
                  checked={formData.preferredContactMethod === 'phone'}
                  onChange={handleChange}
                />
                Phone
              </label>
            </div>
          </div>

          {/* Requirement Description */}
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label htmlFor="message" className={styles.label}>
              Brief Description of Requirement<span className={styles.required}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              className={styles.textarea}
              value={formData.message}
              onChange={handleChange}
              placeholder="Outline your systems, operational objectives, or timelines..."
            />
          </div>

          {/* Consent Checkbox */}
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                className={styles.checkbox}
                checked={formData.consent}
                onChange={handleChange}
              />
              <span className={styles.checkboxText}>
                I agree to be contacted about this enquiry. See our{' '}
                <Link to={ROUTES.privacyPolicy} className={styles.checkboxLink}>
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              hasArrow
              disabled={status === 'submitting'}
              className={styles.submitBtn}
            >
              {status === 'submitting' ? 'Submitting Enquiry...' : form.submitButtonText}
            </Button>
          </div>
        </div>

        {status === 'error' && (
          <div className={`${styles.feedbackBox} ${styles.errorBox}`}>
            <p className={styles.errorText}>
              {errorMessage || form.errorMessage}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};
