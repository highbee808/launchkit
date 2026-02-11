export interface ApiTermsParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateApiTerms(params: ApiTermsParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# API Terms of Use

**Effective Date:** ${effectiveDate}

These API Terms of Use ("API Terms") govern your access to and use of the application programming interfaces ("APIs") provided by **${companyName}** ("Company," "we," "us," or "our"). By accessing or using our APIs, you agree to be bound by these API Terms.

**Website:** ${websiteUrl}
${email ? `Contact: ${email}` : ""}

---

## 1. API Access and Registration

### Account Requirements
To access the ${companyName} APIs, you must:

1. Register for a developer account at ${websiteUrl}
2. Provide accurate and complete information during registration
3. Obtain valid API credentials (API keys, tokens, or other authentication mechanisms)
4. Maintain the confidentiality of your API credentials at all times

### API Keys
- Each API key is unique to your account and must not be shared with third parties
- You are responsible for all activity that occurs using your API credentials
- You must immediately notify ${companyName} if you suspect unauthorized use of your credentials
- ${companyName} reserves the right to revoke API keys at any time without prior notice

## 2. Permitted Use

You may use the ${companyName} APIs to:

- Develop, test, and operate applications that integrate with our services
- Access data and functionality as documented in our API documentation
- Build products and services that provide value to your end users
- Conduct reasonable testing and development activities

## 3. Rate Limits and Usage Quotas

### Rate Limiting
${companyName} enforces rate limits to ensure fair usage and system stability:

- API requests are subject to rate limits as specified in the API documentation
- Rate limits may vary by endpoint, plan tier, and account type
- Exceeding rate limits may result in temporary throttling or suspension of access
- ${companyName} reserves the right to modify rate limits at any time with reasonable notice

### Usage Quotas
- Your API usage is subject to the quotas defined by your subscription plan
- Overage charges may apply if you exceed your allocated quotas
- You are responsible for monitoring your usage through the developer dashboard at ${websiteUrl}

## 4. Restrictions

You agree not to:

- Use the APIs for any unlawful, harmful, or fraudulent purpose
- Exceed documented rate limits or attempt to circumvent usage restrictions
- Reverse engineer, decompile, or disassemble any part of the APIs
- Interfere with or disrupt the integrity or performance of the APIs
- Use the APIs to build a product or service that competes with ${companyName}
- Sell, resell, or redistribute API access without prior written consent
- Cache or store API responses beyond the permitted duration specified in the documentation
- Misrepresent the source of data obtained through the APIs
- Scrape, crawl, or collect data from the APIs beyond what is explicitly permitted
- Use automated means to create multiple accounts or circumvent access controls

## 5. Authentication and Security

### Authentication
- All API requests must be properly authenticated using the provided credentials
- You must use HTTPS for all API communications
- Authentication tokens must be transmitted securely and never exposed in client-side code

### Security Obligations
You agree to:

1. Implement appropriate security measures to protect your API credentials
2. Use industry-standard encryption for data in transit and at rest
3. Promptly report any security vulnerabilities you discover to ${email || websiteUrl}
4. Follow security best practices as outlined in the ${companyName} API documentation

## 6. Intellectual Property

- The APIs, documentation, and all associated materials are the property of ${companyName}
- Nothing in these API Terms grants you any ownership rights to the APIs or underlying technology
- You retain ownership of the applications you build using the APIs
- You grant ${companyName} a limited license to use your application name and logo for promotional purposes related to the API program
- ${companyName} retains all rights not expressly granted in these API Terms

## 7. Service Level and Availability

### Uptime
- ${companyName} will use commercially reasonable efforts to maintain API availability
- Scheduled maintenance windows will be communicated in advance when possible
- ${companyName} does not guarantee uninterrupted or error-free API access

### Support
- API documentation is available at ${websiteUrl}
- Technical support is provided in accordance with your subscription plan
- ${companyName} may provide community forums, developer guides, and status pages

### Modifications
- ${companyName} may update, modify, or deprecate APIs at any time
- We will provide reasonable notice before making breaking changes
- Deprecated API versions will be supported for a minimum transition period as documented

## 8. Data Handling

### Your Data
- You retain ownership of data you submit through the APIs
- You are responsible for ensuring you have the right to submit data through the APIs
- You must comply with all applicable data protection laws when using the APIs

### Our Data
- Data provided by ${companyName} through the APIs remains our property
- You may only use such data as permitted by these API Terms and the documentation
- You must delete cached data upon termination of your API access

### Privacy
- Your use of the APIs must comply with your published privacy policy
- You must not use the APIs to collect personally identifiable information without appropriate consent
- You must handle all personal data in accordance with applicable privacy laws

## 9. Fees and Payment

- API usage may be subject to fees as outlined in the pricing plans at ${websiteUrl}
- ${companyName} reserves the right to change pricing with thirty (30) days notice
- Failure to pay applicable fees may result in suspension or termination of API access
- All fees are non-refundable unless otherwise stated in writing

## 10. Termination

### Termination by You
You may stop using the APIs at any time by deleting your API credentials and ceasing all API usage.

### Termination by Company
${companyName} may suspend or terminate your API access if:

1. You violate any provision of these API Terms
2. Your use poses a security risk to the APIs or other users
3. Your account has been inactive for an extended period
4. Required by law or regulation
5. ${companyName} discontinues the API service

### Effect of Termination
Upon termination:

- Your API credentials will be revoked
- You must immediately cease all use of the APIs
- You must delete any cached or stored data obtained through the APIs
- Provisions relating to intellectual property, limitation of liability, and indemnification shall survive

## 11. Disclaimer of Warranties

THE APIS ARE PROVIDED "AS IS" AND "AS AVAILABLE." ${companyName.toUpperCase()} MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.

## 12. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY LAW, ${companyName.toUpperCase()} SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES ARISING FROM YOUR USE OF THE APIS, REGARDLESS OF THE THEORY OF LIABILITY.

## 13. Indemnification

You agree to indemnify and hold harmless ${companyName} from any claims, damages, or expenses arising from your use of the APIs, your violation of these API Terms, or your infringement of any third-party rights.

## 14. General Provisions

### Governing Law
These API Terms are governed by the laws of the jurisdiction in which ${companyName} is established.

### Amendments
${companyName} may modify these API Terms at any time. Continued use of the APIs after changes constitutes acceptance. Material changes will be communicated via ${websiteUrl} or email.

### Severability
If any provision is found unenforceable, the remaining provisions remain in full effect.

### Entire Agreement
These API Terms, together with any applicable subscription agreement, constitute the entire agreement regarding your use of the APIs.

---

*This API Terms of Use template was generated using LaunchKit. Please have this document reviewed by a legal professional before use.*`;
}
