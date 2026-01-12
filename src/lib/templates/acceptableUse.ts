export interface AcceptableUsePolicyParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateAcceptableUsePolicy(params: AcceptableUsePolicyParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Acceptable Use Policy

**Last Updated:** ${effectiveDate}

## Introduction

This Acceptable Use Policy ("AUP") governs your use of ${websiteUrl} and all related services provided by ${companyName} ("we", "us", or "our"). By accessing or using our services, you agree to comply with this policy.

## Prohibited Activities

You agree NOT to use our services to:

### Illegal Activities
- Violate any applicable laws, regulations, or third-party rights
- Engage in fraud, money laundering, or other financial crimes
- Distribute illegal content or materials
- Facilitate illegal transactions

### Harmful Content
- Upload, transmit, or distribute malware, viruses, or malicious code
- Send spam, phishing attempts, or unsolicited communications
- Host or distribute content that promotes violence or hatred
- Share content that exploits minors in any way

### System Abuse
- Attempt to gain unauthorized access to our systems or other users' accounts
- Interfere with or disrupt the integrity or performance of our services
- Circumvent security measures or access controls
- Use automated systems (bots, scrapers) without authorization
- Overload our infrastructure with excessive requests

### Misrepresentation
- Impersonate any person, business, or entity
- Falsely claim affiliation with any organization
- Create misleading or fraudulent accounts
- Misrepresent the source or ownership of content

### Intellectual Property Violations
- Infringe on copyrights, trademarks, or other intellectual property rights
- Distribute pirated software or media
- Remove or alter proprietary notices or labels

## User Responsibilities

As a user of our services, you are responsible for:

- **Account Security**: Maintaining the confidentiality of your login credentials
- **Content**: All content you upload, share, or transmit through our services
- **Compliance**: Ensuring your use complies with all applicable laws and this policy
- **Reporting**: Promptly reporting any violations or security concerns to us
- **Updates**: Keeping your contact information current and accurate

## Monitoring and Enforcement

We reserve the right to:

- Monitor use of our services for policy compliance
- Investigate suspected violations of this policy
- Remove or disable access to content that violates this policy
- Report illegal activities to appropriate law enforcement agencies
- Cooperate with law enforcement investigations

## Consequences of Violations

Violations of this policy may result in:

### Warning
For minor or first-time violations, we may issue a warning and request immediate correction.

### Suspension
Repeated or serious violations may result in temporary suspension of your account and access to services.

### Termination
Severe violations or continued non-compliance will result in permanent termination of your account without refund.

### Legal Action
We reserve the right to pursue legal action for violations that cause harm to us, our users, or third parties.

## Reporting Violations

If you become aware of any violations of this policy, please report them immediately to:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

We take all reports seriously and will investigate promptly.

## Changes to This Policy

We may update this Acceptable Use Policy from time to time. We will notify users of significant changes by posting a notice on our website or sending an email notification.

Continued use of our services after changes become effective constitutes acceptance of the updated policy.

## Contact Us

If you have questions about this Acceptable Use Policy, please contact us:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

---

*This Acceptable Use Policy was generated using LaunchKit.*`;
}
