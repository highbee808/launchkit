export interface ContentPolicyParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateContentPolicy(params: ContentPolicyParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Content Policy

**Effective Date:** ${effectiveDate}

## Introduction

This Content Policy ("Policy") governs all user-generated content ("UGC") submitted to, posted on, or transmitted through the platforms and services operated by ${companyName} at ${websiteUrl}. By submitting content to our platform, you agree to comply with this Policy.

${email ? `Contact: ${email}` : ""}

---

## 1. Permitted Content

${companyName} encourages users to share content that is:

- **Original** — Content that you have created yourself or have the legal right to share
- **Relevant** — Content that is related to the platform's purpose and community interests
- **Constructive** — Content that contributes positively to discussions and the community experience
- **Accurate** — Content that is truthful and does not intentionally mislead others
- **Respectful** — Content that treats other users and third parties with dignity

### Types of Permitted Content
Users may submit the following types of content, subject to all other provisions of this Policy:

1. Text posts, comments, and reviews
2. Images and photographs that you own or have rights to use
3. Videos and audio files that you own or have rights to share
4. Links to external resources, provided they comply with this Policy
5. Profile information and biographical details

## 2. Prohibited Content

The following types of content are strictly prohibited on ${companyName}'s platform:

### 2.1 Illegal Content
- Content that violates any applicable law or regulation
- Content that facilitates, promotes, or instructs illegal activity
- Content related to the sale or distribution of controlled substances or illegal goods

### 2.2 Harmful or Dangerous Content
- Content that promotes or glorifies violence, terrorism, or self-harm
- Content that exploits, abuses, or endangers minors in any way
- Instructions for creating weapons, explosives, or other dangerous items
- Content that promotes eating disorders, suicide, or other forms of self-harm

### 2.3 Hateful Content
- Content that promotes hatred or discrimination against individuals or groups based on race, ethnicity, religion, gender, sexual orientation, disability, or other protected characteristics
- Slurs, dehumanizing language, or calls for exclusion or segregation
- Holocaust denial or glorification of hate groups

### 2.4 Deceptive Content
- Misinformation or disinformation intended to deceive or manipulate
- Deepfakes or manipulated media presented as authentic
- Fraudulent schemes, scams, or phishing attempts
- Impersonation of other individuals, organizations, or ${companyName} personnel

### 2.5 Sexually Explicit Content
- Pornographic or sexually explicit material, unless expressly permitted in designated areas
- Non-consensual intimate imagery
- Sexual solicitation or exploitation

### 2.6 Spam and Manipulation
- Unsolicited commercial messages or advertisements
- Repetitive, bulk, or automated content submissions
- Artificially inflating engagement metrics (likes, views, shares)
- Coordinated inauthentic behavior or manipulation campaigns

## 3. Intellectual Property

### 3.1 Your Rights
You retain ownership of all original content you submit to ${companyName}'s platform. By submitting content, you grant ${companyName} a non-exclusive, worldwide, royalty-free license to use, display, reproduce, and distribute your content in connection with operating the platform at ${websiteUrl}.

### 3.2 Third-Party Rights
You must not submit content that infringes the intellectual property rights of others, including:

- Copyrighted material used without permission or fair use justification
- Trademarks used in a manner likely to cause confusion
- Patented inventions or processes shared without authorization
- Trade secrets or confidential information belonging to others

### 3.3 DMCA Compliance
${companyName} respects intellectual property rights and complies with the Digital Millennium Copyright Act (DMCA). For copyright infringement claims, please refer to our DMCA Policy available at ${websiteUrl}.

## 4. Content Moderation

### 4.1 Moderation Practices
${companyName} employs a combination of automated systems and human review to moderate content. We may:

- Use automated filters to detect and remove prohibited content
- Employ human moderators to review flagged content
- Proactively monitor content in areas with higher risk of policy violations
- Adjust moderation practices as needed to address emerging threats

### 4.2 Moderation Scope
${companyName} moderates content at its sole discretion. Moderation decisions consider the context, intent, and potential impact of the content, as well as the user's history on the platform.

## 5. Reporting Violations

Users can report content that violates this Policy through the following channels:

1. **In-Platform Reporting** — Use the "Report" feature available on all content
2. **Email** — Send a detailed report to ${email ? email : "[content moderation email]"}
3. **Web Form** — Submit a report through the form available at ${websiteUrl}

When reporting, please include:
- A link to or description of the violating content
- The reason you believe it violates this Policy
- Any additional context that may help our review

## 6. Content Removal Procedures

### 6.1 Review Process
Upon receiving a report or identifying a potential violation:

1. The content is flagged for review by the ${companyName} moderation team
2. A moderator evaluates the content against this Policy
3. A decision is made to remove, restrict, label, or allow the content
4. The content creator is notified of the decision and the reason

### 6.2 Emergency Removal
${companyName} may immediately remove content without prior notice if it:

- Poses an imminent threat to safety or security
- Contains child sexual abuse material
- Constitutes a clear and immediate legal violation
- Could cause significant harm if it remains accessible

## 7. Appeals

### 7.1 Right to Appeal
If your content is removed or your account is restricted, you have the right to appeal the decision.

### 7.2 Appeal Process
1. Submit an appeal within **thirty (30) days** of the moderation action
2. Send your appeal to ${email ? email : "[appeals contact]"} with the subject line "Content Appeal"
3. Include your username, the content in question, and your reasoning for the appeal
4. A different member of the moderation team will review your appeal
5. You will receive a response within **fifteen (15) business days**
6. The appeal decision is final

## 8. Changes to This Policy

${companyName} reserves the right to modify this Content Policy at any time. Changes will be posted at ${websiteUrl} and will take effect immediately upon posting. Continued use of the platform after changes are posted constitutes acceptance of the revised Policy.

## 9. Contact Us

For questions about this Content Policy:

- **Website:** ${websiteUrl}
${email ? `- **Email:** ${email}` : ""}

---

*This Content Policy template was generated using LaunchKit. Please have this document reviewed by a legal professional before use.*`;
}
