/**
 * Contact Us Page Content and Form Constants.
 * Source: SAPHELON-Content-Master.md Section 11.
 */

import { BRAND } from './brand';
import { EXTERNAL_LINKS } from '../routes';

export const CONTACT_CONTENT = {
  hero: {
    eyebrow: 'CONTACT US',
    title: "Let's Talk About Your Next ",
    titleAccent: 'Project.',
    subtitle:
      'Whether you are exploring an automation requirement, planning an Industrial IoT initiative, assessing an AI use case, developing software or looking for computer system validation (CSV) support, we welcome your business enquiry. Share your requirements and we will discuss the next steps.',
  },
  details: {
    company: BRAND.legalName,
    location: BRAND.location,
    email: BRAND.email,
    phone: BRAND.phone,
    emailLink: EXTERNAL_LINKS.email,
    phoneLink: EXTERNAL_LINKS.phone,
  },
  download: {
    label: 'Download Company Profile (PDF)',
    href: BRAND.companyProfilePdf, // Rendered only when value is not null
  },
  expect: {
    title: 'What Happens Next',
    steps: [
      {
        id: '01',
        title: 'We review',
        description: 'Our engineering team reviews your technical and business requirements.',
      },
      {
        id: '02',
        title: 'We reach out',
        description: 'We connect with you to clarify operational context and expected outcomes.',
      },
      {
        id: '03',
        title: 'We discuss',
        description: 'We present a practical way forward and determine whether an assessment or pilot suits you.',
      },
    ],
  },
  tips: {
    title: 'Helpful to Include in Your Enquiry',
    items: [
      'Your industry or operational domain',
      'The specific equipment, system, or process involved',
      'What you want to improve, measure, or validate',
      'Any known timeline, milestone, or technical constraint',
    ],
  },
  form: {
    title: 'Send a Business Enquiry',
    subtitle: 'Fill in your details below and our team will get back to you shortly.',
    serviceOptions: [
      'Industrial Automation',
      'IIoT & Industry 4.0',
      'Artificial Intelligence',
      'Software Solutions',
      'Pharmaceutical & CSV Solutions',
      'Other / Not Sure Yet',
    ],
    industryOptions: [
      'Pharmaceuticals & Life Sciences',
      'Manufacturing & Industrial Operations',
      'Engineering & Industrial Technology',
      'Digitally Transforming Businesses',
      'Other Industry',
    ],
    submitButtonText: 'Submit Business Enquiry',
    consentText:
      'I agree to be contacted about this enquiry. See our Privacy Policy.',
    successTitle: 'Enquiry Received',
    successMessage:
      'Thank you for contacting SAPHELON. Your enquiry has been received. Our team will review the information and respond using the contact details provided.',
    errorMessage:
      'Something went wrong and your enquiry was not sent. Please try again or email info@saphelon.com directly.',
  },
};
