export interface WarrantyPolicyParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateWarrantyPolicy(params: WarrantyPolicyParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Warranty Policy

**Effective Date:** ${effectiveDate}

This Warranty Policy sets forth the terms and conditions of the warranty provided by **${companyName}** ("Company," "we," "us," or "our") for products purchased through our website and authorized retailers.

**Website:** ${websiteUrl}
${email ? `Contact: ${email}` : ""}

---

## 1. Warranty Coverage

### Limited Warranty
${companyName} warrants that all products sold through ${websiteUrl} will be free from defects in materials and workmanship under normal use for the warranty period specified below.

### Warranty Period
- **Standard Products** - One (1) year from the date of original purchase
- **Premium Products** - Two (2) years from the date of original purchase
- **Accessories and Components** - Ninety (90) days from the date of original purchase

The warranty period begins on the date of delivery as confirmed by shipping records or your order confirmation.

## 2. What Is Covered

This warranty covers defects that arise from:

- Faulty materials used in manufacturing
- Defective workmanship or assembly errors
- Component failures under normal operating conditions
- Functional defects that prevent the product from performing as described in the product specifications

### Covered Repairs and Replacements
Under this warranty, ${companyName} will, at its sole discretion:

1. Repair the defective product at no charge
2. Replace the defective product with an identical or comparable product
3. Issue a refund of the original purchase price

## 3. What Is Not Covered

This warranty does **not** cover damage or defects resulting from:

- **Misuse or Abuse** - Use of the product in a manner inconsistent with its intended purpose or documentation
- **Accidents** - Damage caused by drops, impacts, spills, or other accidental events
- **Unauthorized Modifications** - Alterations, modifications, or repairs performed by anyone other than ${companyName} or its authorized service providers
- **Normal Wear and Tear** - Gradual deterioration resulting from normal use over time, including cosmetic damage such as scratches, dents, or fading
- **Environmental Damage** - Damage caused by exposure to extreme temperatures, moisture, corrosive environments, or natural disasters
- **Improper Storage** - Damage resulting from failure to follow recommended storage guidelines
- **Third-Party Accessories** - Damage caused by the use of unauthorized third-party accessories or components
- **Software Issues** - Issues arising from third-party software, viruses, or unauthorized software modifications
- **Consumable Parts** - Items designed to diminish over time, such as batteries, filters, or bulbs, unless the failure is due to a manufacturing defect

## 4. Warranty Claim Process

### How to File a Claim

To submit a warranty claim, follow these steps:

1. **Contact Us** - Reach out to ${companyName} at ${email || websiteUrl} with your warranty claim
2. **Provide Documentation** - Include the following information:
   - Order number or proof of purchase
   - Product name and model number
   - Detailed description of the defect or issue
   - Photographs or videos demonstrating the problem
   - Date the issue was first noticed
3. **Receive Authorization** - Our team will review your claim and, if approved, provide a Warranty Return Authorization (WRA) number and instructions
4. **Ship the Product** - Send the product to the address provided, with the WRA number clearly marked on the package
5. **Inspection and Resolution** - ${companyName} will inspect the product and determine the appropriate remedy within **10-15 business days** of receipt

### Claim Response Times
- ${companyName} will acknowledge warranty claims within **2 business days**
- Initial assessment and authorization will be provided within **5 business days**
- Final resolution (repair, replacement, or refund) will be completed within **15 business days** of receiving the product

## 5. Shipping for Warranty Claims

- For claims within the first **30 days** of purchase, ${companyName} will cover return shipping costs
- For claims after 30 days, the customer is responsible for shipping the product to ${companyName}
- ${companyName} will cover the cost of shipping repaired or replacement products back to the customer
- We recommend using a trackable shipping method when returning products for warranty service

## 6. Replacement Products and Repairs

### Replacements
- Replacement products may be new or refurbished to like-new condition
- Replacement products carry the remaining warranty from the original product or ninety (90) days, whichever is longer
- ${companyName} reserves the right to substitute comparable products if the original product is discontinued or unavailable

### Repairs
- Repaired products are warranted for the remaining warranty period or ninety (90) days from the date of repair, whichever is longer
- Only genuine ${companyName} parts will be used in warranty repairs
- Repairs performed by unauthorized third parties will void this warranty

## 7. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY LAW:

- ${companyName.toUpperCase()}'S LIABILITY UNDER THIS WARRANTY SHALL NOT EXCEED THE ORIGINAL PURCHASE PRICE OF THE PRODUCT
- ${companyName.toUpperCase()} SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM THE USE OF OR INABILITY TO USE THE PRODUCT
- THIS INCLUDES BUT IS NOT LIMITED TO LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL

## 8. Disclaimer

THIS WARRANTY IS THE SOLE AND EXCLUSIVE WARRANTY PROVIDED BY ${companyName.toUpperCase()}. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ${companyName.toUpperCase()} DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.

Some jurisdictions do not allow limitations on implied warranties, so the above limitations may not apply to you. This warranty gives you specific legal rights, and you may also have other rights that vary by jurisdiction.

## 9. Transferability

- This warranty applies only to the original purchaser and is non-transferable
- Proof of original purchase from ${companyName} or an authorized retailer is required for all warranty claims
- Products purchased from unauthorized resellers or secondhand markets may not be eligible for warranty service

## 10. Extended Warranty

${companyName} may offer extended warranty options at the time of purchase. Extended warranty terms and conditions will be provided separately and will supplement this standard warranty policy. For information about extended warranty options, visit ${websiteUrl}.

## 11. Contact Information

For warranty claims, questions, or support, please contact ${companyName}:

- **Website:** ${websiteUrl}
${email ? `- **Email:** ${email}` : ""}

Please have your order number and product details ready when contacting us.

## 12. Policy Updates

${companyName} reserves the right to modify this Warranty Policy at any time. Changes will be posted at ${websiteUrl}. The warranty terms in effect at the time of your purchase will apply to your product.

---

*This Warranty Policy template was generated using LaunchKit. Please have this document reviewed by a legal professional before use.*`;
}
