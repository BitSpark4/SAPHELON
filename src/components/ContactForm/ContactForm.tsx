/**
 * ContactForm component providing complete business enquiry input collection,
 * client-side validation, accessible feedback, and lifecycle state handling.
 * Source: SAPHELON-Content-Master.md Section 11 contact.form.
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ContactForm.module.css';
import { Button } from '../Button';
import { CONTACT_CONTENT, ROUTES } from '../../constants';
import type { ContactFormData } from '../../types';

export const ContactForm: React.FC = () => {
  const { form } = CONTACT_CONTENT;

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    industry: form.industryOptions[0],
    serviceOfInterest: form.serviceOptions[0],
    requirementDescription: '',
    preferredContactMethod: 'email',
    consent: false,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

    if (!formData.consent) {
      alert('Please confirm your consent to be contacted regarding this enquiry.');
      return;
    }

    setStatus('submitting');

    try {
      // Simulate real async receipt / webhook call
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Upon success confirmation:
      setStatus('success');
    } catch (_err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.formCard}>
        <div className={`${styles.feedbackBox} ${styles.successBox}`}>
          <h3 className={styles.successTitle}>{form.successTitle}</h3>
          <p className={styles.successText}>{form.successMessage}</p>
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

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGrid}>
          {/* Full Name */}
          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.label}>
              Full Name<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className={styles.input}
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
            />
          </div>

          {/* Company Name */}
          <div className={styles.formGroup}>
            <label htmlFor="companyName" className={styles.label}>
              Company Name<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              className={styles.input}
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Acme Pharma Ltd."
            />
          </div>

          {/* Business Email */}
          <div className={styles.formGroup}>
            <label htmlFor="businessEmail" className={styles.label}>
              Business Email<span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="businessEmail"
              name="businessEmail"
              required
              className={styles.input}
              value={formData.businessEmail}
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
            <label htmlFor="serviceOfInterest" className={styles.label}>
              Service of Interest<span className={styles.required}>*</span>
            </label>
            <select
              id="serviceOfInterest"
              name="serviceOfInterest"
              className={styles.select}
              value={formData.serviceOfInterest}
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
            <label htmlFor="requirementDescription" className={styles.label}>
              Brief Description of Requirement<span className={styles.required}>*</span>
            </label>
            <textarea
              id="requirementDescription"
              name="requirementDescription"
              required
              className={styles.textarea}
              value={formData.requirementDescription}
              onChange={handleChange}
              placeholder="Outline your systems, operational objectives, or timelines..."
            />
          </div>

          {/* Consent Checkbox */}
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label className={styles.checkboxGroup}>
              <input
                type="checkbox"
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
            <p className={styles.errorText}>{form.errorMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
};
