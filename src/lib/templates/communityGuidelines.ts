export interface CommunityGuidelinesParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateCommunityGuidelines(params: CommunityGuidelinesParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Community Guidelines

**Effective Date:** ${effectiveDate}

## Welcome to the ${companyName} Community

These Community Guidelines ("Guidelines") govern your participation in any community spaces operated by ${companyName}, including but not limited to forums, comment sections, social media channels, and any other interactive features available through ${websiteUrl}.

By participating in our community, you agree to abide by these Guidelines. ${companyName} reserves the right to update these Guidelines at any time.

${email ? `Contact: ${email}` : ""}

---

## 1. Expected Behavior

All community members are expected to:

- **Be Respectful** — Treat others with courtesy and consideration, even when disagreements arise
- **Be Constructive** — Contribute meaningfully to discussions and provide helpful feedback
- **Be Honest** — Represent yourself and your experiences truthfully
- **Be Inclusive** — Welcome newcomers and foster a diverse, open environment
- **Stay On Topic** — Keep discussions relevant to the community's purpose and ${companyName}'s platform
- **Follow the Law** — Comply with all applicable local, national, and international laws

## 2. Prohibited Conduct

The following behaviors are strictly prohibited and may result in immediate action:

### 2.1 Harassment and Abuse
- Personal attacks, insults, or threats directed at other members
- Bullying, intimidation, or stalking behavior
- Doxxing or sharing private information about others without consent
- Discrimination based on race, gender, sexual orientation, religion, disability, age, or any other protected characteristic

### 2.2 Harmful Content
- Content that promotes violence, self-harm, or illegal activities
- Sexually explicit or pornographic material, unless expressly permitted in designated areas
- Graphic or gratuitously violent imagery
- Misinformation or disinformation intended to mislead others

### 2.3 Disruptive Behavior
- Spamming, flooding, or excessive self-promotion
- Trolling or deliberately provoking other community members
- Impersonating other users, ${companyName} staff, or public figures
- Manipulating discussions through sockpuppet accounts or coordinated inauthentic behavior

### 2.4 Security Violations
- Attempting to gain unauthorized access to other accounts or systems
- Distributing malware, viruses, or other harmful software
- Exploiting vulnerabilities in ${companyName}'s platform at ${websiteUrl}

## 3. Content Standards

When posting content in ${companyName} community spaces, you must ensure that your contributions:

1. Do not infringe upon the intellectual property rights of any third party
2. Do not contain false or misleading claims about products, services, or individuals
3. Are appropriately labeled if they contain spoilers, sensitive topics, or mature themes
4. Do not constitute unauthorized advertising or commercial solicitation
5. Comply with all applicable content policies posted on ${websiteUrl}

### User-Generated Content
By posting content in our community, you grant ${companyName} a non-exclusive, royalty-free license to display, distribute, and moderate that content within the community platform. You retain ownership of your original content.

## 4. Reporting Violations

If you witness a violation of these Guidelines, we encourage you to report it promptly:

- **In-Platform Reporting** — Use the built-in reporting tools available on ${websiteUrl}
- **Email** — Send a detailed report to ${email ? email : "[community team email]"} with the following information:
  - A description of the violation
  - The username(s) involved
  - Links or screenshots of the offending content
  - The date and time of the incident

All reports are reviewed confidentially. ${companyName} does not tolerate retaliation against members who report violations in good faith.

## 5. Enforcement Actions

${companyName} may take any of the following actions in response to violations, at its sole discretion:

1. **Warning** — A formal notice that the behavior violates these Guidelines
2. **Content Removal** — Removal of offending posts, comments, or other content
3. **Temporary Suspension** — A time-limited restriction on community participation
4. **Permanent Ban** — Permanent removal from all ${companyName} community spaces
5. **Legal Action** — Referral to law enforcement or pursuit of legal remedies where appropriate

The severity of the enforcement action will depend on factors including the nature and severity of the violation, the member's history, and the impact on other community members.

## 6. Appeals Process

If you believe an enforcement action was taken in error, you may submit an appeal:

1. Submit your appeal in writing to ${email ? email : "[appeals email]"} within **fourteen (14) days** of the action
2. Include your username, the action taken, and a clear explanation of why you believe the action was unwarranted
3. ${companyName} will review your appeal and respond within **thirty (30) days**
4. Appeals are reviewed by a member of the moderation team who was not involved in the original decision
5. The decision on appeal is final

## 7. Moderator Conduct

Community moderators acting on behalf of ${companyName} are held to the same standards as all members, and additionally must:

- Apply these Guidelines consistently and impartially
- Maintain confidentiality regarding reports and member information
- Clearly identify themselves when acting in an official moderator capacity
- Recuse themselves from decisions involving personal conflicts of interest

## 8. Changes to These Guidelines

${companyName} reserves the right to modify these Guidelines at any time. Material changes will be communicated through ${websiteUrl} or other appropriate channels. Continued participation in the community after changes are posted constitutes acceptance of the revised Guidelines.

## 9. Contact Us

If you have questions about these Community Guidelines, please contact us:

- **Website:** ${websiteUrl}
${email ? `- **Email:** ${email}` : ""}

---

*This Community Guidelines template was generated using LaunchKit. Please have this document reviewed by a legal professional before use.*`;
}
