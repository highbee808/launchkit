export interface CoppaPolicyParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateCoppaPolicy(params: CoppaPolicyParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Children's Privacy Policy (COPPA Compliance)

**Last Updated:** ${effectiveDate}

## Introduction

${companyName} ("we", "us", or "our") is committed to protecting the privacy of children who use our website at ${websiteUrl}. This Children's Privacy Policy explains our information collection, disclosure, and parental consent practices with respect to information provided by children under the age of 13 ("child" or "children"), and uses terms defined in the Children's Online Privacy Protection Act of 1998 ("COPPA") and its implementing regulations.

This Policy is in accordance with the U.S. Children's Online Privacy Protection Act ("COPPA") and outlines our practices regarding the collection, use, and disclosure of personal information from children under 13.

## Our Commitment to Children's Privacy

We do not knowingly collect personal information from children under the age of 13 without verifiable parental consent. If you are under 13 years of age, please do not provide any personal information to us.

## When We Collect Information from Children

We may collect personal information from children under 13 in the following situations:

### With Parental Consent
- When a parent or guardian provides consent for their child to create an account
- When a parent or guardian provides consent for their child to participate in activities on our site

### Without Parental Consent (Limited Exceptions)
We may collect a child's information without parental consent only to:
- Respond directly to a one-time request from the child
- Request parental consent
- Protect the safety of a child
- Protect the security of our site

## Types of Information We May Collect

If we have parental consent, we may collect:

- **Contact Information**: Child's name, parent's email address
- **Account Information**: Username, password (stored securely)
- **Activity Information**: Game scores, preferences, progress
- **Device Information**: IP address, browser type (for security and functionality)

We do **NOT** collect:
- Social Security numbers
- Physical addresses of children
- Phone numbers of children
- Photos or videos of children
- Precise geolocation data from children

## How We Use Children's Information

With appropriate parental consent, we may use children's information to:

- Provide access to age-appropriate content and features
- Respond to support requests
- Send notifications about their account (to parents)
- Improve our services
- Ensure a safe online experience
- Comply with legal requirements

## Disclosure of Children's Information

We do not share, sell, or rent children's personal information to third parties for their marketing purposes.

We may disclose children's information only:
- To service providers who help us operate our services (under strict confidentiality)
- To comply with legal requirements
- To protect the safety of children
- To protect our rights and property

## Parental Rights

Parents and guardians have the following rights under COPPA:

### Right to Review
You may request to review the personal information we have collected from your child by contacting us.

### Right to Delete
You may request that we delete your child's personal information from our records.

### Right to Refuse Further Collection
You may refuse to permit any further collection or use of your child's information.

### Right to Consent
You may provide or revoke consent for the collection and use of your child's information.

## How to Exercise Parental Rights

To exercise any of these rights, please contact us:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

When you contact us, please include:
- Your name and contact information
- Your child's username or account information
- A description of your request
- Proof that you are the child's parent or legal guardian

We will respond to your request within 30 days.

## Parental Consent Process

Before collecting personal information from a child, we will:

1. **Notify Parents**: Send an email to the parent/guardian explaining what information we collect, how we use it, and their rights
2. **Obtain Consent**: Require the parent/guardian to provide verifiable consent
3. **Verify Identity**: Use reasonable methods to verify the parent/guardian's identity

### Consent Methods

We may use the following methods to obtain verifiable parental consent:
- Consent form signed and returned via email, fax, or mail
- Credit card verification (with clear disclosure)
- Government ID verification
- Video call verification

## Data Security

We implement reasonable security measures to protect children's personal information, including:

- Encryption of sensitive data
- Secure storage with access controls
- Regular security assessments
- Employee training on children's privacy

## Data Retention

We retain children's personal information only as long as necessary to:
- Provide our services
- Comply with legal obligations
- Resolve disputes
- Enforce our agreements

When information is no longer needed, we will securely delete or anonymize it.

## Third-Party Services

Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage parents to review the privacy policies of any third-party sites their children visit.

## Changes to This Policy

We may update this Children's Privacy Policy from time to time. If we make material changes that affect children's information, we will notify parents by email and seek new consent if required.

## California Residents

If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA). Please see our CCPA Notice for more information.

## Contact Us

If you have questions about this Children's Privacy Policy or our practices regarding children's information:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

---

*This Children's Privacy Policy was generated using LaunchKit to help with COPPA compliance.*`;
}
