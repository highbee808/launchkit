export interface AccessibilityStatementParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateAccessibilityStatement(params: AccessibilityStatementParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Accessibility Statement

**Last Updated:** ${effectiveDate}

## Our Commitment

${companyName} is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.

## Conformance Status

We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.

## Measures Taken

To ensure accessibility, ${companyName} has taken the following measures:

### Internal Measures
- Include accessibility as part of our mission statement
- Include accessibility throughout our internal policies
- Integrate accessibility into our procurement practices
- Appoint an accessibility coordinator
- Provide continual accessibility training for our staff

### Technical Measures
- Use semantic HTML markup
- Ensure all images have alternative text
- Provide sufficient color contrast
- Enable keyboard navigation throughout the site
- Include ARIA labels where appropriate
- Ensure forms are properly labeled
- Provide clear and consistent navigation
- Support text resizing without loss of functionality

## Accessibility Features

Our website includes the following accessibility features:

### Navigation
- Consistent navigation structure across all pages
- Skip to main content link
- Clear page headings and structure
- Breadcrumb navigation where appropriate

### Visual Design
- Sufficient color contrast ratios (minimum 4.5:1 for normal text)
- Text can be resized up to 200% without loss of content
- No content flashes more than three times per second
- Focus indicators for interactive elements

### Content
- Alternative text for all meaningful images
- Transcripts and captions for multimedia content
- Clear and simple language
- Descriptive link text

### Forms
- All form fields have associated labels
- Error messages are clearly identified
- Required fields are clearly marked
- Form validation provides helpful feedback

## Known Limitations

While we strive for full accessibility, there may be some limitations:

- **Third-party content**: Some content or functionality provided by third parties may not be fully accessible
- **Legacy documents**: Some older PDF documents may not be fully accessible; we are working to remediate these
- **Complex visualizations**: Some charts or graphs may be challenging to make fully accessible; we provide text alternatives where possible

## Feedback

We welcome your feedback on the accessibility of ${websiteUrl}. Please let us know if you encounter accessibility barriers:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

We try to respond to feedback within 5 business days.

## Compatibility

Our website is designed to be compatible with the following assistive technologies:

- Screen readers (NVDA, JAWS, VoiceOver)
- Screen magnification software
- Speech recognition software
- Keyboard-only navigation

Our website is designed to work with:

- Recent versions of major browsers (Chrome, Firefox, Safari, Edge)
- Desktop and mobile operating systems

## Assessment Approach

${companyName} assesses the accessibility of our website through the following methods:

- Self-evaluation using automated accessibility testing tools
- Manual testing with assistive technologies
- External accessibility audits (when applicable)
- User feedback and testing

## Standards and Guidelines

This statement was created using the W3C Accessibility Statement Generator tool as a reference. We are working toward conformance with:

- Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
- Americans with Disabilities Act (ADA)
- Section 508 of the Rehabilitation Act (for applicable organizations)

## Enforcement Procedure

If you are not satisfied with our response to your accessibility concern, you may consider the following options:

- Contact us directly to discuss your concerns
- File a complaint with the relevant regulatory authority
- Seek legal remediation

## Contact Us

If you have any questions about this Accessibility Statement or need assistance, please contact us:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

---

*This Accessibility Statement was generated using LaunchKit.*`;
}
