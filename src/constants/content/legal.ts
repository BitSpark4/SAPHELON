/**
 * Legal Pages (Privacy Policy, Terms of Use) and 404 Not Found Constants.
 * Source: SAPHELON-Content-Master.md Section 12.
 */

import { ROUTES } from '../routes';

export const PRIVACY_POLICY_CONTENT = {
  eyebrow: 'LEGAL INFORMATION',
  title: 'Privacy ',
  titleAccent: 'Policy',
  lastUpdated: 'October 2026',
  intro:
    'Saphelon Lab Private Limited ("SAPHELON", "we", "us", or "our") respects your privacy and is committed to protecting your personal data in accordance with applicable laws, including the Digital Personal Data Protection Act, 2023 (India).',
  sections: [
    {
      heading: '1. Information We Collect',
      body: 'When you submit a business enquiry through our website, we collect personal and business information including your full name, company name, business email address, telephone number, industry, and details regarding your technical requirements.',
    },
    {
      heading: '2. Purpose of Collection',
      body: 'We collect this information strictly for legitimate business purposes: to review your project enquiry, communicate with you regarding our services, provide technical consultations, and manage our business relationship.',
    },
    {
      heading: '3. Data Retention and Security',
      body: 'We retain your personal data only as long as necessary to fulfill the purposes for which it was collected, or as required by statutory regulations. We maintain technical, administrative, and physical security safeguards to prevent unauthorised access, loss, or disclosure.',
    },
    {
      heading: '4. Third-Party Disclosures',
      body: 'We do not sell, rent, or trade your personal data. We disclose information only to vetted service providers assisting our business operations under strict confidentiality obligations, or when required by law.',
    },
    {
      heading: '5. Your Rights and Contact',
      body: 'You have the right to request access to, correction of, or erasure of your personal data. To exercise these rights or for any privacy queries, contact our Data Grievance Officer at info@saphelon.com.',
    },
  ],
};

export const TERMS_OF_USE_CONTENT = {
  eyebrow: 'LEGAL INFORMATION',
  title: 'Terms of ',
  titleAccent: 'Use',
  lastUpdated: 'October 2026',
  intro:
    'These Terms of Use govern your access to and use of the website operated by Saphelon Lab Private Limited ("SAPHELON"). By accessing our website, you agree to these terms.',
  sections: [
    {
      heading: '1. Intellectual Property',
      body: 'All content, logos, vector marks, design elements, texts, graphics, and software code on this website are the intellectual property of Saphelon Lab Private Limited and protected by applicable copyright, trademark, and intellectual property laws.',
    },
    {
      heading: '2. Use of Site Information',
      body: 'The information on this website is provided for general informational purposes regarding our engineering, automation, IIoT, and software capabilities. It does not constitute a binding contractual commitment or warranty until formal agreements are signed.',
    },
    {
      heading: '3. Limitation of Liability',
      body: 'SAPHELON makes reasonable efforts to ensure the accuracy of website content. However, we disclaim all warranties, express or implied, regarding completeness or suitability for any particular purpose.',
    },
    {
      heading: '4. Governing Law and Jurisdiction',
      body: 'These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Pune, Maharashtra, India.',
    },
  ],
};

export const NOT_FOUND_CONTENT = {
  eyebrow: 'ERROR 404',
  title: 'This Page Could Not Be ',
  titleAccent: 'Found.',
  description:
    'The page you are looking for may have moved, been renamed, or is temporarily unavailable. Try navigating via the links below or contact our team directly.',
  links: [
    { label: 'Return to Home', href: ROUTES.home },
    { label: 'Explore Our Services', href: ROUTES.services },
    { label: 'Contact Us', href: ROUTES.contact },
  ],
};
