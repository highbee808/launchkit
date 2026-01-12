export interface PrivacyPolicyParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
  dataCollected: string[];
}

const dataDescriptions: Record<string, { name: string; description: string }> = {
  email: {
    name: "Email Addresses",
    description: "We collect email addresses for communication, account management, and sending you important updates about our services.",
  },
  name: {
    name: "Names",
    description: "We collect your name for personalization and to properly identify you within our services.",
  },
  phone: {
    name: "Phone Numbers",
    description: "We collect phone numbers for customer support, account verification, and important notifications.",
  },
  address: {
    name: "Physical Addresses",
    description: "We collect physical addresses for shipping, billing, and compliance with legal requirements.",
  },
  payment: {
    name: "Payment Information",
    description: "We collect payment information including credit card details to process transactions. This data is handled securely through PCI-compliant payment processors.",
  },
  usage: {
    name: "Usage Data",
    description: "We automatically collect information about how you interact with our services, including pages visited, features used, and time spent on the platform.",
  },
  cookies: {
    name: "Cookies & Tracking Technologies",
    description: "We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and deliver personalized content.",
  },
  location: {
    name: "Location Data",
    description: "We may collect location information to provide location-based services and improve our offerings in your region.",
  },
};

export function generatePrivacyPolicy(params: PrivacyPolicyParams): string {
  const { companyName, websiteUrl, email, effectiveDate, dataCollected } = params;

  const dataSection = dataCollected
    .map((id) => {
      const info = dataDescriptions[id];
      if (!info) return null;
      return `### ${info.name}\n\n${info.description}`;
    })
    .filter(Boolean)
    .join("\n\n");

  const dataList = dataCollected
    .map((id) => dataDescriptions[id]?.name)
    .filter(Boolean)
    .map((name) => `- ${name}`)
    .join("\n");

  return `# Privacy Policy

**Last Updated:** ${effectiveDate}

## Introduction

${companyName} ("we", "our", or "us") operates ${websiteUrl} (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.

Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Service.

We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.

## Information We Collect

We collect information that you provide directly to us and information that is automatically collected when you use our Service.

### Personal Data We Collect

${dataList || "- Basic contact information as provided by you"}

${dataSection}

## How We Use Your Information

We use the information we collect for various purposes, including:

- **Service Delivery**: To provide, operate, and maintain our Service
- **Improvement**: To understand and analyze how you use our Service and develop new products, services, features, and functionality
- **Communication**: To communicate with you, either directly or through one of our partners, for customer service, updates, and other Service-related information
- **Marketing**: To send you promotional communications (with your consent where required)
- **Security**: To detect, prevent, and address technical issues and protect against fraudulent or illegal activity
- **Legal Compliance**: To comply with legal obligations and enforce our terms and policies

## Legal Basis for Processing (GDPR)

If you are from the European Economic Area (EEA), our legal basis for collecting and using your personal information depends on the data concerned and the context in which we collect it. We may process your personal data because:

- We need to perform a contract with you
- You have given us permission to do so
- The processing is in our legitimate interests and is not overridden by your rights
- To comply with the law

## Data Retention

We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.

## Disclosure of Your Information

We may share information we have collected about you in certain situations:

### Service Providers

We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include payment processing, data analysis, email delivery, hosting services, customer service, and marketing efforts.

### Business Transfers

If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will provide notice before your personal information is transferred and becomes subject to a different privacy policy.

### Legal Requirements

We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.

### Protection of Rights

We may disclose information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person, or as evidence in litigation.

## Cookies and Tracking Technologies

We may use cookies, web beacons, tracking pixels, and other tracking technologies to collect and store your information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.

### Types of Cookies We Use

- **Essential Cookies**: Required for the operation of our Service
- **Analytics Cookies**: Help us understand how visitors interact with our Service
- **Functional Cookies**: Enable enhanced functionality and personalization
- **Advertising Cookies**: Used to deliver relevant advertisements (if applicable)

## Your Privacy Rights

Depending on your location, you may have certain rights regarding your personal information:

### For All Users

- **Access**: Request access to your personal information
- **Correction**: Request correction of inaccurate personal information
- **Deletion**: Request deletion of your personal information
- **Objection**: Object to processing of your personal information
- **Data Portability**: Request transfer of your personal information

### For California Residents (CCPA)

California residents have additional rights under the California Consumer Privacy Act (CCPA):

- Right to know what personal information is collected
- Right to know whether personal information is sold or disclosed
- Right to say no to the sale of personal information
- Right to equal service and price, even after exercising privacy rights

### For European Residents (GDPR)

If you are a resident of the European Economic Area, you have additional rights:

- Right to withdraw consent at any time
- Right to lodge a complaint with a supervisory authority

To exercise any of these rights, please contact us using the information provided below.

## Security of Your Information

We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against interception or misuse.

## Children's Privacy

Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.

## International Data Transfers

Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.

If you are located outside the United States and choose to provide information to us, please note that we transfer the data to the United States and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.

## Third-Party Websites

Our Service may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policy of every site you visit.

## Do Not Track Signals

Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked. We currently do not respond to "Do Not Track" signals.

## Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

## Contact Us

If you have questions or concerns about this Privacy Policy or our data practices, please contact us:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

---

*This privacy policy was generated using LaunchKit.*`;
}
