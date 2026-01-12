export interface CcpaNoticeParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateCcpaNotice(params: CcpaNoticeParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# California Consumer Privacy Act (CCPA) Notice

**Last Updated:** ${effectiveDate}

## Introduction

This CCPA Notice supplements the information contained in our Privacy Policy and applies solely to visitors, users, and others who reside in the State of California ("consumers" or "you"). ${companyName} ("we", "us", or "our") adopts this notice to comply with the California Consumer Privacy Act of 2018 ("CCPA") and the California Privacy Rights Act ("CPRA"), and any terms defined in the CCPA/CPRA have the same meaning when used in this notice.

## Information We Collect

We have collected the following categories of personal information from consumers within the last twelve (12) months:

### Categories of Personal Information

| Category | Examples | Collected |
|----------|----------|-----------|
| **Identifiers** | Real name, alias, postal address, unique personal identifier, online identifier, IP address, email address, account name | Yes |
| **Personal Information (Cal. Civ. Code § 1798.80(e))** | Name, signature, address, telephone number, education, employment, financial information | Yes |
| **Protected Classifications** | Age, race, gender, sexual orientation, marital status, disability, veteran status | No |
| **Commercial Information** | Records of products or services purchased, purchasing histories or tendencies | Yes |
| **Biometric Information** | Genetic, physiological, behavioral characteristics, fingerprints, face recognition | No |
| **Internet/Network Activity** | Browsing history, search history, interaction with websites or advertisements | Yes |
| **Geolocation Data** | Physical location or movements | Yes |
| **Sensory Data** | Audio, electronic, visual, thermal, olfactory, or similar information | No |
| **Professional/Employment Info** | Current or past job history, performance evaluations | No |
| **Education Information** | Education records directly related to a student | No |
| **Inferences** | Profile reflecting preferences, characteristics, behavior, attitudes | Yes |
| **Sensitive Personal Information** | SSN, driver's license, financial account info, precise geolocation, racial/ethnic origin, religious beliefs, health info, sex life/orientation | No |

## Sources of Personal Information

We obtain personal information from the following sources:

- **Directly from you**: When you register, make a purchase, or contact us
- **Indirectly from you**: Through your activity on our website
- **Third parties**: Business partners, service providers, analytics providers

## Use of Personal Information

We may use or disclose the personal information we collect for one or more of the following business purposes:

- To fulfill or meet the reason for which the information is provided
- To provide you with information, products, or services that you request
- To provide you with email alerts and other notices concerning our products/services
- To improve our website and present its contents to you
- For testing, research, analysis, and product development
- To respond to law enforcement requests and as required by law
- To protect our rights, privacy, safety, or property

## Sharing Personal Information

We may disclose your personal information to a third party for a business purpose. When we disclose personal information for a business purpose, we enter a contract that describes the purpose and requires the recipient to keep that personal information confidential.

### Disclosures for Business Purposes

In the preceding twelve (12) months, we have disclosed the following categories:

- Identifiers
- Personal information categories listed in the California Customer Records statute
- Commercial information
- Internet or other similar network activity
- Geolocation data

## Sale and Sharing of Personal Information

${companyName} does not sell personal information as defined by the CCPA/CPRA.

We do not sell the personal information of minors under 16 years of age without affirmative authorization.

## Your Rights Under CCPA/CPRA

California residents have the following rights:

### Right to Know
You have the right to request that we disclose:
- The categories of personal information we collected
- The categories of sources from which the personal information is collected
- Our business purpose for collecting or selling personal information
- The categories of third parties with whom we share personal information
- The specific pieces of personal information we collected about you

### Right to Delete
You have the right to request that we delete any of your personal information that we collected, subject to certain exceptions.

### Right to Correct
You have the right to request that we correct inaccurate personal information that we maintain about you.

### Right to Opt-Out
You have the right to opt-out of the sale or sharing of your personal information.

### Right to Limit Use
You have the right to limit the use and disclosure of sensitive personal information.

### Right to Non-Discrimination
We will not discriminate against you for exercising any of your CCPA rights, including by:
- Denying you goods or services
- Charging you different prices or rates
- Providing you a different level or quality of goods or services
- Suggesting that you may receive a different price or rate

## Exercising Your Rights

To exercise your rights described above, please submit a verifiable consumer request to us by:

**Email:** ${email || "privacy@example.com"}
**Website:** ${websiteUrl}

### Verification

Only you, or someone legally authorized to act on your behalf, may make a request related to your personal information. You may also make a request on behalf of your minor child.

To verify your identity, we may request:
- Your email address
- Account credentials
- Other information to verify your identity

### Authorized Agents

You may designate an authorized agent to make a request on your behalf. We may require:
- Written permission from you
- Verification of the agent's identity

## Response Timing

We will respond to a verifiable consumer request within 45 days. If we require more time (up to 90 days), we will inform you of the reason and extension period.

## Data Retention

We retain personal information for as long as necessary to fulfill the purposes outlined in our Privacy Policy, unless a longer retention period is required by law.

## Contact Information

If you have any questions about this CCPA Notice or our privacy practices:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

---

*This CCPA Notice was generated using LaunchKit.*`;
}
