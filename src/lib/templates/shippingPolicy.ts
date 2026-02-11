export interface ShippingPolicyParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateShippingPolicy(params: ShippingPolicyParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Shipping Policy

**Effective Date:** ${effectiveDate}

This Shipping Policy explains how **${companyName}** ("Company," "we," "us," or "our") handles the shipping and delivery of products ordered through our website and services.

**Website:** ${websiteUrl}
${email ? `Contact: ${email}` : ""}

---

## 1. Order Processing

### Processing Times
- Orders are typically processed within **1-3 business days** after payment confirmation
- Orders placed on weekends or holidays will be processed on the next business day
- During peak seasons or promotional periods, processing times may be extended
- You will receive an order confirmation email once your order has been placed and a shipping confirmation email once it has been dispatched

### Order Verification
${companyName} reserves the right to verify orders before processing. Verification may be required for:

1. First-time orders
2. High-value orders
3. Orders shipping to an address different from the billing address
4. Orders flagged by our fraud prevention systems

## 2. Shipping Methods

### Domestic Shipping
We offer the following domestic shipping options:

- **Standard Shipping** - Estimated delivery within 5-7 business days
- **Expedited Shipping** - Estimated delivery within 2-3 business days
- **Overnight/Express Shipping** - Estimated delivery within 1 business day (for orders placed before the cutoff time)

### International Shipping
${companyName} ships to select international destinations:

- **Standard International** - Estimated delivery within 10-21 business days
- **Express International** - Estimated delivery within 5-10 business days
- International delivery times may vary depending on the destination country, customs processing, and local postal services
- International orders may be subject to import duties, taxes, and customs fees, which are the responsibility of the recipient

## 3. Shipping Costs

### Domestic Rates
- Shipping costs are calculated based on the order total, package weight, dimensions, and delivery destination
- Shipping rates are displayed at checkout before you complete your purchase
- Free shipping promotions may be offered periodically and will be clearly communicated on ${websiteUrl}

### International Rates
- International shipping rates vary by destination and are calculated at checkout
- Customs duties, import taxes, and brokerage fees are not included in the shipping cost and are the buyer's responsibility
- ${companyName} is not responsible for delays caused by customs processing

## 4. Tracking Your Order

Once your order has shipped, you will receive:

- A shipping confirmation email with your tracking number
- A link to track your package on the carrier's website
- Estimated delivery date

You can also track your order status by:

1. Logging into your account at ${websiteUrl}
2. Visiting the order status page with your order number
3. Contacting our support team at ${email || websiteUrl}

## 5. Delivery Information

### Delivery Attempts
- Carriers will typically make multiple delivery attempts before returning a package
- If you are not available to receive the package, the carrier may leave a delivery notice with instructions for rescheduling or pickup
- Packages may be left at the door or with a neighbor at the carrier's discretion, depending on your delivery area

### Signature Requirements
- Orders above a certain value may require a signature upon delivery
- You may request signature confirmation for any order at checkout
- ${companyName} is not responsible for packages delivered without a signature when signature confirmation was not requested

## 6. Shipping Delays

While ${companyName} strives to meet all estimated delivery dates, delays may occur due to:

- Severe weather conditions or natural disasters
- Carrier service disruptions or strikes
- Customs processing delays for international orders
- High volume during peak shopping seasons
- Address verification issues
- Inventory availability

If a significant delay is expected, we will notify you via email and provide an updated delivery estimate. For questions about delayed orders, please contact us at ${email || websiteUrl}.

## 7. Lost or Damaged Packages

### Lost Packages
If your package has not arrived within the estimated delivery window:

1. Check the tracking information for the latest status update
2. Verify the shipping address on your order confirmation
3. Check with neighbors or building management for the package
4. Contact the shipping carrier directly with your tracking number
5. If the package cannot be located, contact ${companyName} at ${email || websiteUrl}

${companyName} will investigate lost package claims and, at our discretion, may reship the order or issue a refund. Claims must be filed within **30 days** of the expected delivery date.

### Damaged Packages
If you receive a damaged package:

1. Document the damage by taking photographs of the packaging and contents
2. Contact ${companyName} within **7 days** of delivery at ${email || websiteUrl}
3. Include your order number, photos, and a description of the damage
4. Keep the damaged items and packaging until the claim is resolved

## 8. Address Issues

### Incorrect Address
- It is the customer's responsibility to provide an accurate shipping address
- ${companyName} is not responsible for orders shipped to incorrect addresses provided by the customer
- If you notice an address error, contact us immediately at ${email || websiteUrl} before the order ships
- Address corrections after shipment may incur additional fees

### Undeliverable Packages
- Packages returned to ${companyName} as undeliverable will be processed upon receipt
- We will contact you to arrange reshipment or issue a refund
- Reshipment may be subject to additional shipping charges

## 9. P.O. Boxes and Military Addresses

- Standard shipping is available to P.O. boxes via USPS
- We ship to APO, FPO, and DPO military addresses
- Delivery times to military addresses may be longer than standard estimates
- Express shipping options may not be available for P.O. boxes or military addresses

## 10. Changes and Cancellations

- Orders may be modified or cancelled before they enter the shipping process
- Once an order has been shipped, it cannot be cancelled
- To request changes or cancellation, contact us promptly at ${email || websiteUrl}
- ${companyName} cannot guarantee that modification or cancellation requests will be processed in time

## 11. Policy Updates

${companyName} reserves the right to update this Shipping Policy at any time. Changes will be posted at ${websiteUrl} with an updated effective date. Continued use of our services after changes constitutes acceptance of the updated policy.

---

*This Shipping Policy template was generated using LaunchKit. Please have this document reviewed by a legal professional before use.*`;
}
