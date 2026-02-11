export interface ReturnPolicyParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateReturnPolicy(params: ReturnPolicyParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Return & Exchange Policy

**Effective Date:** ${effectiveDate}

This Return & Exchange Policy outlines the terms and conditions under which **${companyName}** ("Company," "we," "us," or "our") accepts returns and exchanges for products purchased through our website and services.

**Website:** ${websiteUrl}
${email ? `Contact: ${email}` : ""}

---

## 1. Return Eligibility

### General Requirements
To be eligible for a return, the following conditions must be met:

- The item must be returned within **30 days** of the original delivery date
- The item must be in its original condition: unused, unworn, unwashed, and unaltered
- The item must include all original tags, labels, and packaging
- You must have a valid proof of purchase (order confirmation email or receipt)

### Condition Requirements
Items must be returned in resalable condition. This means:

1. No signs of wear, use, or damage caused by the customer
2. All original components, accessories, and documentation are included
3. Original packaging is intact and undamaged
4. Hygiene seals (where applicable) have not been broken

## 2. Non-Returnable Items

The following items are **not eligible** for return or exchange:

- Gift cards and store credits
- Downloadable software or digital products
- Personalized or custom-made items
- Perishable goods
- Intimate or sanitary items
- Hazardous materials
- Items marked as "Final Sale" or "Non-Returnable" at the time of purchase
- Items that have been used, altered, or damaged by the customer
- Items returned without original packaging or tags

## 3. Return Process

### How to Initiate a Return

1. **Submit a Return Request** - Log into your account at ${websiteUrl} or contact us at ${email || websiteUrl} with your order number and reason for return
2. **Receive Return Authorization** - Once approved, you will receive a Return Merchandise Authorization (RMA) number and return instructions via email
3. **Package the Item** - Securely package the item in its original packaging with the RMA number clearly marked on the outside
4. **Ship the Return** - Send the package to the return address provided in your return authorization
5. **Confirmation** - You will receive an email confirmation once we have received and inspected your return

### Important Notes
- Returns without a valid RMA number may be refused or delayed
- ${companyName} is not responsible for items lost or damaged during return shipping
- We recommend using a trackable shipping method and purchasing shipping insurance for your return

## 4. Return Shipping

### Customer-Initiated Returns
- Return shipping costs are the responsibility of the customer unless the return is due to an error by ${companyName} (e.g., wrong item shipped, defective product)
- Original shipping charges are non-refundable unless the return is due to our error

### Company Error Returns
If you received an incorrect, defective, or damaged item:

- ${companyName} will provide a prepaid return shipping label
- Original shipping charges will be refunded
- Contact us at ${email || websiteUrl} within **7 days** of delivery to report the issue

## 5. Refund Methods

### Refund Processing
- Refunds are processed within **5-10 business days** after we receive and inspect the returned item
- You will receive an email notification once your refund has been processed

### Refund Options
Refunds will be issued to the original payment method:

- **Credit/Debit Card** - Refunds will appear on your statement within 5-10 business days after processing, depending on your card issuer
- **PayPal/Digital Wallets** - Refunds will be credited to your account within 3-5 business days
- **Store Credit** - Available immediately upon processing and can be used on future purchases at ${websiteUrl}

### Partial Refunds
A partial refund may be issued if:

- The item shows signs of use or wear
- Items are returned without original packaging, tags, or accessories
- The return is made outside the standard return window but within an extended grace period

## 6. Exchanges

### Exchange Process
If you would like to exchange an item for a different size, color, or product:

1. Contact ${companyName} at ${email || websiteUrl} with your order number and exchange request
2. Follow the standard return process to send back the original item
3. Once the returned item is received and approved, the replacement item will be shipped

### Exchange Availability
- Exchanges are subject to product availability
- If the desired exchange item is unavailable, you may choose an alternative item or receive a refund
- Price differences between the original and exchange items will be charged or refunded accordingly

## 7. Damaged or Defective Goods

If you receive an item that is damaged or defective:

1. **Document the Issue** - Take clear photographs of the damage or defect
2. **Contact Us Promptly** - Reach out to ${companyName} at ${email || websiteUrl} within **7 days** of delivery
3. **Provide Details** - Include your order number, description of the issue, and photographs
4. **Resolution** - We will offer a replacement, exchange, or full refund at your choice

${companyName} covers all return shipping costs for damaged or defective items.

## 8. Late Returns

- Returns received after the **30-day** return window may be accepted at the discretion of ${companyName}
- Late returns, if accepted, may be subject to a restocking fee of up to 15% of the item's purchase price
- Items returned more than **60 days** after delivery will not be accepted

## 9. Refund for Cancelled Orders

- Orders cancelled before shipment will receive a full refund
- Orders cancelled after shipment must follow the standard return process
- Refunds for cancelled orders are typically processed within **3-5 business days**

## 10. Gift Returns

- Gift recipients may return items with a gift receipt
- Refunds for gift returns will be issued as store credit to the gift recipient
- The original purchaser will not be notified of the gift return

## 11. Promotional and Sale Items

- Items purchased during promotional events or sales are subject to the same return policy unless otherwise noted
- Items purchased with a discount code or coupon will be refunded at the price paid
- Free gifts included with a purchase must be returned along with the qualifying item

## 12. Contact Us

For questions about returns, exchanges, or refunds, please contact ${companyName}:

- **Website:** ${websiteUrl}
${email ? `- **Email:** ${email}` : ""}

## 13. Policy Updates

${companyName} reserves the right to modify this Return & Exchange Policy at any time. Changes will be posted at ${websiteUrl} with an updated effective date.

---

*This Return & Exchange Policy template was generated using LaunchKit. Please have this document reviewed by a legal professional before use.*`;
}
