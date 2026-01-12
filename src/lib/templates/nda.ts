export interface NdaParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateNda(params: NdaParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Non-Disclosure Agreement (NDA)

**Effective Date:** ${effectiveDate}

## Parties

This Non-Disclosure Agreement ("Agreement") is entered into by and between:

**Disclosing Party:** ${companyName}
Website: ${websiteUrl}
${email ? `Contact: ${email}` : ""}

**Receiving Party:** [RECEIVING PARTY NAME]

Collectively referred to as the "Parties".

## Purpose

The Parties wish to explore a potential business relationship (the "Purpose") and, in connection with this, may share certain confidential and proprietary information with each other.

## Definition of Confidential Information

"Confidential Information" means any and all information or data that has or could have commercial value or other utility in the business in which the Disclosing Party is engaged. This includes, but is not limited to:

- Technical data, trade secrets, and know-how
- Research, product plans, and developments
- Services, customers, markets, and marketing strategies
- Software, developments, inventions, and processes
- Designs, drawings, engineering, and hardware configuration
- Financial information, business strategies, and projections
- Personnel and employee information
- Any other information that should reasonably be recognized as confidential

Confidential Information does not include information that:

- Is or becomes publicly known through no fault of the Receiving Party
- Was in the Receiving Party's possession before disclosure
- Is rightfully obtained from a third party without breach of confidentiality
- Is independently developed without use of Confidential Information
- Is required to be disclosed by law or court order

## Obligations of Receiving Party

The Receiving Party agrees to:

### Protection
- Hold and maintain the Confidential Information in strict confidence
- Protect the Confidential Information using the same degree of care used to protect its own confidential information, but in no event less than reasonable care
- Not use the Confidential Information for any purpose other than the Purpose

### Restrictions
- Not disclose Confidential Information to any third parties without prior written consent
- Not copy or reproduce Confidential Information except as necessary for the Purpose
- Limit access to Confidential Information to employees, contractors, and agents who have a need to know and are bound by confidentiality obligations

### Notification
- Promptly notify the Disclosing Party of any unauthorized use or disclosure
- Cooperate with the Disclosing Party to protect its rights

## Term

This Agreement shall remain in effect for a period of **two (2) years** from the Effective Date, unless terminated earlier by either Party with thirty (30) days written notice.

The confidentiality obligations shall survive termination of this Agreement for a period of **three (3) years** following termination.

## Return of Information

Upon termination of this Agreement or upon request by the Disclosing Party, the Receiving Party shall:

- Return all Confidential Information and any copies thereof
- Destroy all documents and materials containing Confidential Information
- Certify in writing that all Confidential Information has been returned or destroyed

## No License

Nothing in this Agreement grants the Receiving Party any rights to the Disclosing Party's Confidential Information, intellectual property, or other proprietary rights.

## No Obligation

This Agreement does not obligate either Party to:

- Enter into any further agreement
- Purchase or sell any products or services
- Disclose any particular Confidential Information

## Remedies

The Receiving Party acknowledges that unauthorized disclosure of Confidential Information may cause irreparable harm for which monetary damages may be inadequate. The Disclosing Party shall be entitled to seek equitable relief, including injunction and specific performance, in addition to any other remedies available at law.

## General Provisions

### Governing Law
This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction where the Disclosing Party is located.

### Entire Agreement
This Agreement constitutes the entire agreement between the Parties concerning the subject matter hereof and supersedes all prior agreements and understandings.

### Amendments
This Agreement may only be amended by a written instrument signed by both Parties.

### Severability
If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.

### Assignment
Neither Party may assign this Agreement without the prior written consent of the other Party.

### Waiver
The failure of either Party to enforce any provision of this Agreement shall not constitute a waiver of that Party's right to enforce that provision or any other provision.

## Signatures

**Disclosing Party:**

Name: _________________________
Title: _________________________
Date: _________________________
Signature: _____________________

**Receiving Party:**

Name: _________________________
Title: _________________________
Date: _________________________
Signature: _____________________

---

*This NDA template was generated using LaunchKit. Please have this document reviewed by a legal professional before use.*`;
}
