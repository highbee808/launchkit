export interface SocialMediaPolicyParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateSocialMediaPolicy(params: SocialMediaPolicyParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Social Media Policy

**Effective Date:** ${effectiveDate}

## Overview

This Social Media Policy ("Policy") establishes guidelines for the use of social media by ${companyName} and its employees, contractors, and representatives. This Policy applies to all social media activity conducted on behalf of ${companyName} or that references ${companyName}, its products, services, or stakeholders.

**Company:** ${companyName}
**Website:** ${websiteUrl}
${email ? `**Contact:** ${email}` : ""}

---

## 1. Official Accounts

### 1.1 Account Ownership
All social media accounts created on behalf of ${companyName} are the property of ${companyName}. This includes all content, followers, and associated data. Access credentials must be managed through approved company systems.

### 1.2 Authorized Representatives
Only designated personnel may post on behalf of ${companyName}'s official accounts. Authorization must be granted in writing by management. A current list of authorized representatives is maintained internally.

### 1.3 Account Management
- All official account passwords must follow ${companyName}'s security policies
- Multi-factor authentication must be enabled on all official accounts
- Access must be revoked immediately upon role change or departure from ${companyName}
- Account recovery information must be tied to ${companyName} corporate contacts, not personal accounts

## 2. Employee Guidelines

### 2.1 Personal Use
Employees may use social media in a personal capacity, subject to the following:

1. Clearly state that views expressed are your own and do not represent ${companyName}
2. Do not use ${companyName} logos, trademarks, or branding on personal accounts without approval
3. Do not claim to speak on behalf of ${companyName} unless expressly authorized
4. Exercise sound judgment and common sense in all social media activity

### 2.2 Workplace Social Media Use
- Personal social media use during work hours should be limited and must not interfere with job responsibilities
- Company devices and networks may be monitored in accordance with ${companyName}'s acceptable use policies
- Employees must not use social media to harass, bully, or discriminate against colleagues

### 2.3 Identification
When discussing ${companyName} or its industry online, employees in public-facing roles should disclose their affiliation with ${companyName} in accordance with applicable disclosure regulations.

## 3. Content Standards

All content posted on ${companyName}'s official social media channels must:

- **Be Accurate** — Verify all facts, statistics, and claims before publishing
- **Be Professional** — Maintain a tone consistent with ${companyName}'s brand voice
- **Be Respectful** — Avoid inflammatory, offensive, or divisive language
- **Be Compliant** — Adhere to all applicable laws, regulations, and platform terms of service
- **Be Accessible** — Include alt text for images, captions for videos where possible

### Prohibited Content
The following content must never be posted on official ${companyName} accounts:

- Misleading or deceptive statements about products or services
- Political endorsements or partisan commentary (unless central to ${companyName}'s mission)
- Content that infringes intellectual property rights
- Unverified claims about competitors
- Content that could be construed as insider trading or securities violations

## 4. Brand Representation

### 4.1 Visual Identity
All official social media content must adhere to ${companyName}'s brand guidelines, including proper use of logos, colors, and typography. Brand guidelines are available at ${websiteUrl}.

### 4.2 Tone and Voice
Official communications should reflect ${companyName}'s values and maintain consistency across platforms. When in doubt, consult the communications team before posting.

### 4.3 Third-Party Endorsements
- All sponsored content, partnerships, and endorsements must be clearly disclosed using appropriate hashtags and labels (e.g., #ad, #sponsored, #partner)
- Influencer and ambassador relationships must be documented and comply with FTC guidelines and local regulations

## 5. Confidentiality

### 5.1 Protected Information
The following must never be shared on social media without express written authorization:

- Trade secrets, proprietary technology, or unreleased product information
- Internal financial data, forecasts, or projections
- Customer or client data, including personal information
- Internal communications, meeting notes, or strategic plans
- Information about pending legal matters, investigations, or disputes

### 5.2 Intellectual Property
Employees and representatives must respect intellectual property rights when posting on social media, including copyrights, trademarks, and patents belonging to ${companyName} and third parties.

## 6. Crisis Management

### 6.1 Social Media Incidents
In the event of a social media crisis (e.g., viral negative content, data breach disclosure, public relations incident):

1. **Do not respond** without authorization from ${companyName}'s designated crisis team
2. **Document** the situation by capturing screenshots and relevant information
3. **Notify** management and the communications team immediately at ${email ? email : "[designated contact]"}
4. **Follow** the established crisis communication plan

### 6.2 Response Protocol
- Only authorized spokespersons may issue official statements during a crisis
- All responses must be reviewed and approved before publication
- Maintain a factual, empathetic, and transparent tone in all crisis communications

## 7. Compliance and Enforcement

### 7.1 Monitoring
${companyName} reserves the right to monitor official social media accounts and public social media activity that references ${companyName} to ensure compliance with this Policy.

### 7.2 Violations
Violations of this Policy may result in disciplinary action, up to and including termination of employment or contract. Serious violations may also result in legal action.

### 7.3 Reporting
Employees who become aware of potential violations should report them to ${email ? email : "[compliance contact]"} or through ${companyName}'s internal reporting channels.

## 8. Policy Updates

${companyName} reserves the right to update this Policy at any time. Updates will be communicated through internal channels and posted on ${websiteUrl}. Continued use of social media on behalf of ${companyName} constitutes acceptance of the updated Policy.

## 9. Contact

For questions about this Social Media Policy, please contact:

- **Website:** ${websiteUrl}
${email ? `- **Email:** ${email}` : ""}

---

*This Social Media Policy template was generated using LaunchKit. Please have this document reviewed by a legal professional before use.*`;
}
