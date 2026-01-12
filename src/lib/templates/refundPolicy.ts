export interface RefundPolicyParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateRefundPolicy(params: RefundPolicyParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Refund Policy

**Last Updated:** ${effectiveDate}

## Overview

At ${companyName}, we strive to ensure your complete satisfaction with our services. This Refund Policy outlines the terms and conditions for requesting refunds for services purchased through ${websiteUrl}.

## Subscription Services

### Monthly Subscriptions

- **Refund Window**: You may request a full refund within 14 days of your initial purchase
- **Pro-rated Refunds**: After 14 days, no refunds are provided for partial months
- **Cancellation**: You may cancel at any time; access continues until the end of the billing period

### Annual Subscriptions

- **Refund Window**: You may request a full refund within 30 days of your initial purchase
- **Pro-rated Refunds**: After 30 days, refunds may be issued on a pro-rated basis at our discretion
- **Early Cancellation**: No refunds for unused months after the 30-day window

## Eligibility Requirements

To be eligible for a refund, you must meet the following criteria:

- Request must be submitted within the applicable refund window
- Account must be in good standing (no policy violations)
- You must not have previously received a refund for the same service
- The refund request must be for a qualifying reason (see below)

## Qualifying Reasons for Refund

We will consider refund requests for the following reasons:

- **Service Issues**: Significant technical problems preventing use of the service
- **Billing Errors**: Incorrect charges or duplicate payments
- **Misrepresentation**: Service does not match its description
- **Dissatisfaction**: General dissatisfaction within the refund window period

## Non-Refundable Items

The following are NOT eligible for refunds:

- Services used beyond the refund window period
- Accounts terminated due to policy violations
- One-time setup fees or implementation costs
- Third-party services or integrations
- Custom development or consulting services
- Promotional or discounted purchases (unless required by law)

## How to Request a Refund

### Step 1: Contact Us
Send a refund request to ${email || `support@${new URL(websiteUrl).hostname}`} with:
- Your account email address
- Date of purchase
- Reason for refund request
- Order or transaction ID (if available)

### Step 2: Review Process
We will review your request within 5 business days and may contact you for additional information.

### Step 3: Decision
You will receive an email notification of our decision. If approved, the refund will be processed within 5-10 business days.

## Refund Methods

- **Original Payment Method**: Refunds are issued to the original payment method used for purchase
- **Processing Time**: Credit card refunds may take 5-10 business days to appear on your statement
- **Bank Transfers**: May take additional time depending on your financial institution

## Chargebacks and Disputes

We encourage you to contact us directly before initiating a chargeback with your bank or credit card company. Filing a chargeback without first attempting to resolve the issue with us may result in:

- Immediate suspension of your account
- Forfeiture of any remaining service credits
- Potential restrictions on future purchases

## Exceptions

We reserve the right to make exceptions to this policy on a case-by-case basis. Extenuating circumstances may warrant special consideration.

## Changes to This Policy

We may update this Refund Policy from time to time. Changes will be effective when posted on our website. We encourage you to review this policy periodically.

## Contact Information

For refund requests or questions about this policy, please contact us:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

Our support team is available Monday through Friday, 9 AM to 5 PM (local time).

---

*This Refund Policy was generated using LaunchKit.*`;
}
