export interface AffiliateAgreementParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateAffiliateAgreement(params: AffiliateAgreementParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Affiliate Agreement

**Effective Date:** ${effectiveDate}

This Affiliate Agreement ("Agreement") is entered into between **${companyName}** ("Company," "we," "us," or "our") and you ("Affiliate," "you," or "your"), governing your participation in the ${companyName} Affiliate Program.

**Website:** ${websiteUrl}
${email ? `Contact: ${email}` : ""}

By enrolling in the ${companyName} Affiliate Program, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement.

---

## 1. Program Enrollment

### Eligibility
To participate in the ${companyName} Affiliate Program, you must:

1. Be at least 18 years of age or the age of majority in your jurisdiction
2. Have an active website, blog, social media presence, or other digital platform
3. Submit a complete and accurate affiliate application through ${websiteUrl}
4. Agree to comply with all terms of this Agreement
5. Not be located in a jurisdiction where participation in affiliate programs is prohibited

### Application Review
- ${companyName} reserves the right to accept or reject any affiliate application at its sole discretion
- Approval is not guaranteed, and ${companyName} is not required to provide reasons for rejection
- ${companyName} may revoke approval at any time if you fail to comply with the terms of this Agreement

### Account Setup
Upon approval, you will receive:

- A unique affiliate ID and tracking link
- Access to the affiliate dashboard at ${websiteUrl}
- Marketing materials and promotional assets
- Reporting tools to track your referrals and commissions

## 2. Commission Structure

### Commission Rates
- Affiliates earn a commission on qualifying sales generated through their unique affiliate links
- Commission rates are specified in the affiliate dashboard and may vary by product category
- ${companyName} reserves the right to modify commission rates with **30 days** prior notice

### Qualifying Sales
A sale qualifies for commission when:

1. The customer clicks through your unique affiliate link
2. The customer completes a purchase within the cookie tracking period
3. The transaction is not refunded, cancelled, or charged back
4. The sale does not violate any terms of this Agreement

### Cookie Duration
- Affiliate tracking cookies have a duration of **30 days** from the initial click
- If a customer makes a purchase within this window, the referring affiliate receives credit
- If multiple affiliates refer the same customer, the last-click attribution model applies

## 3. Payment Terms

### Payment Schedule
- Commissions are paid on a **monthly** basis
- Payments are processed by the **15th of each month** for the previous month's confirmed commissions
- A minimum payout threshold of **$50** must be reached before payment is issued
- Unpaid balances below the threshold will carry over to the following month

### Payment Methods
${companyName} offers the following payment methods:

- Bank transfer / ACH direct deposit
- PayPal
- Other methods as made available through the affiliate dashboard

### Taxes
- Affiliates are responsible for reporting and paying all applicable taxes on commission income
- ${companyName} may require tax documentation (e.g., W-9, W-8BEN) before processing payments
- ${companyName} will issue applicable tax forms (e.g., 1099) as required by law

### Commission Adjustments
${companyName} reserves the right to adjust or withhold commissions in cases of:

- Refunded, returned, or cancelled orders
- Fraudulent or invalid transactions
- Violations of this Agreement
- Chargebacks initiated by customers

## 4. Promotional Guidelines

### Permitted Promotional Methods
You may promote ${companyName} products through:

- Content marketing (blog posts, articles, reviews)
- Social media posts and stories
- Email marketing to your own subscribers (with proper consent)
- Video content and tutorials
- Comparison and review websites

### Prohibited Promotional Methods
You must **not**:

- Use spam or unsolicited bulk email to promote ${companyName} products
- Engage in paid search advertising that bids on ${companyName} branded keywords without prior written approval
- Make false, misleading, or unsubstantiated claims about ${companyName} products
- Use cookie stuffing, adware, spyware, or any deceptive tracking methods
- Create websites that impersonate or could be confused with ${companyName} official sites
- Offer unauthorized discounts, coupon codes, or rebates
- Promote ${companyName} products on websites containing illegal, hateful, violent, or adult content
- Generate artificial clicks, impressions, or conversions

### Disclosure Requirements
- You must clearly disclose your affiliate relationship with ${companyName} in accordance with FTC guidelines and applicable laws
- Disclosures must be clear, conspicuous, and placed near the affiliate link or endorsement
- Example disclosure: "This post contains affiliate links. I may earn a commission if you make a purchase through these links."

## 5. Intellectual Property

### License Grant
${companyName} grants you a limited, non-exclusive, non-transferable, revocable license to use our:

- Trademarks, logos, and brand assets solely for promoting products within the affiliate program
- Approved marketing materials and creative assets provided through the affiliate dashboard
- Product images and descriptions as made available for affiliate use

### Restrictions
- You may not modify, alter, or create derivative works from ${companyName} brand assets without prior written consent
- All use of ${companyName} intellectual property must comply with our brand guidelines
- The license to use ${companyName} intellectual property terminates immediately upon termination of this Agreement
- You may not register domain names or social media handles that contain ${companyName} trademarks

## 6. Confidentiality

You agree to keep confidential all non-public information related to the ${companyName} Affiliate Program, including:

- Commission rates and payment structures
- Conversion rates and performance data
- Unreleased products or upcoming promotions
- Any proprietary business information shared during your participation

This confidentiality obligation survives termination of this Agreement for a period of **two (2) years**.

## 7. Term and Termination

### Term
This Agreement is effective from the date of your acceptance and continues until terminated by either party.

### Termination by Affiliate
You may terminate this Agreement at any time by:

1. Providing written notice to ${companyName} at ${email || websiteUrl}
2. Removing all affiliate links and ${companyName} marketing materials from your platforms

### Termination by Company
${companyName} may terminate this Agreement at any time, with or without cause, by providing written notice. Grounds for immediate termination include:

- Violation of any provision of this Agreement
- Fraudulent or unethical promotional activities
- Inactivity for a period of **six (6) consecutive months**
- Actions that harm the reputation or brand of ${companyName}

### Effect of Termination
Upon termination:

- All unpaid commissions above the minimum threshold that have been confirmed will be paid within **60 days**
- Commissions on pending or unconfirmed sales may be forfeited
- You must immediately cease using all ${companyName} marketing materials and intellectual property
- You must remove all affiliate links from your platforms within **10 business days**
- Your access to the affiliate dashboard will be revoked

## 8. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY LAW, ${companyName.toUpperCase()} SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM THIS AGREEMENT OR YOUR PARTICIPATION IN THE AFFILIATE PROGRAM. ${companyName.toUpperCase()}'S TOTAL LIABILITY SHALL NOT EXCEED THE TOTAL COMMISSIONS PAID TO YOU IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.

## 9. Indemnification

You agree to indemnify and hold harmless ${companyName}, its officers, directors, employees, and agents from any claims, damages, or expenses arising from:

- Your promotional activities or content
- Your violation of this Agreement
- Your violation of any applicable laws or regulations
- Any claims made by third parties related to your affiliate activities

## 10. General Provisions

### Independent Contractor
You are an independent contractor, not an employee, partner, or agent of ${companyName}. Nothing in this Agreement creates an employment, partnership, or agency relationship.

### Governing Law
This Agreement is governed by the laws of the jurisdiction in which ${companyName} is established.

### Amendments
${companyName} may modify this Agreement at any time. Changes will be communicated via email or through the affiliate dashboard. Continued participation after changes constitutes acceptance.

### Assignment
You may not assign this Agreement without prior written consent from ${companyName}. ${companyName} may assign this Agreement without restriction.

### Entire Agreement
This Agreement constitutes the entire agreement between you and ${companyName} regarding the Affiliate Program and supersedes all prior agreements and understandings.

### Severability
If any provision of this Agreement is found unenforceable, the remaining provisions shall remain in full force and effect.

---

*This Affiliate Agreement template was generated using LaunchKit. Please have this document reviewed by a legal professional before use.*`;
}
