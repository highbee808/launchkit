export interface FreelancerAgreementParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateFreelancerAgreement(params: FreelancerAgreementParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Freelancer Agreement

**Effective Date:** ${effectiveDate}

## Parties

This Freelancer Agreement ("Agreement") is entered into by and between:

**Client:** ${companyName}
Website: ${websiteUrl}
${email ? `Contact: ${email}` : ""}

**Freelancer:** [FREELANCER NAME]
Address: [FREELANCER ADDRESS]

Collectively referred to as the "Parties" and individually as a "Party."

---

## 1. Scope of Work

### 1.1 Services
The Freelancer agrees to perform the services described in the attached Statement of Work ("SOW") or as otherwise agreed upon in writing by the Parties. Each SOW shall be incorporated into and governed by the terms of this Agreement.

### 1.2 Deliverables
The Freelancer shall produce the deliverables specified in the applicable SOW, meeting all requirements, specifications, and deadlines set forth therein.

### 1.3 Changes to Scope
Any changes to the scope of work must be agreed upon in writing by both Parties. ${companyName} shall submit change requests in writing, and the Freelancer shall provide a revised estimate of timeline and compensation before proceeding.

### 1.4 Standards
All work shall be performed in a professional and workmanlike manner, consistent with industry standards and the requirements of ${companyName}.

## 2. Compensation

### 2.1 Fees
${companyName} shall compensate the Freelancer at the rate specified in the applicable SOW. Compensation may be structured as:

- **Hourly Rate** — [RATE] per hour
- **Fixed Fee** — [AMOUNT] for the complete project
- **Milestone-Based** — Payments tied to the completion of specific milestones as defined in the SOW

### 2.2 Invoicing
The Freelancer shall submit invoices to ${companyName} at ${email ? email : "[designated billing contact]"} in accordance with the schedule specified in the SOW, including a detailed description of services rendered, hours worked (if applicable), and any approved expenses.

### 2.3 Taxes
The Freelancer is solely responsible for all taxes, including income tax, self-employment tax, and any other applicable taxes. ${companyName} will not withhold taxes from payments to the Freelancer. ${companyName} may issue a Form 1099 or equivalent tax document as required by law.

## 3. Payment Terms

### 3.1 Payment Schedule
${companyName} shall pay all undisputed invoices within **thirty (30) days** of receipt.

### 3.2 Late Payments
Invoices not paid within the payment period shall accrue interest at a rate of **1.5% per month** (or the maximum rate permitted by law, whichever is lower) from the due date until paid in full.

### 3.3 Disputed Invoices
If ${companyName} disputes any portion of an invoice, it shall notify the Freelancer in writing within **ten (10) business days** of receipt. The undisputed portion shall be paid on time, and the Parties shall work in good faith to resolve the dispute.

## 4. Intellectual Property

### 4.1 Work Product
All work product, deliverables, inventions, and materials created by the Freelancer in the course of performing services under this Agreement ("Work Product") shall be the sole and exclusive property of ${companyName}.

### 4.2 Assignment
The Freelancer hereby assigns to ${companyName} all right, title, and interest in and to the Work Product, including all intellectual property rights therein. The Freelancer agrees to execute any documents and take any actions necessary to effectuate this assignment.

### 4.3 Work Made for Hire
To the extent permitted by law, all Work Product shall be considered "work made for hire" as defined under applicable copyright law. To the extent any Work Product does not qualify as work made for hire, the Freelancer assigns all rights as set forth in Section 4.2.

### 4.4 Pre-Existing Materials
The Freelancer retains ownership of any materials, tools, or intellectual property owned by the Freelancer prior to this Agreement ("Pre-Existing Materials"). If Pre-Existing Materials are incorporated into the Work Product, the Freelancer grants ${companyName} a perpetual, non-exclusive, royalty-free license to use such Pre-Existing Materials.

## 5. Confidentiality

### 5.1 Confidential Information
The Freelancer acknowledges that during the performance of services, they may have access to confidential and proprietary information of ${companyName} ("Confidential Information"), including but not limited to trade secrets, business plans, customer data, technical information, and financial records.

### 5.2 Obligations
The Freelancer agrees to:

- Hold all Confidential Information in strict confidence
- Use Confidential Information solely for the purpose of performing services under this Agreement
- Not disclose Confidential Information to any third party without prior written consent from ${companyName}
- Return or destroy all Confidential Information upon termination of this Agreement

### 5.3 Exceptions
Confidential Information does not include information that is publicly available, independently developed, or rightfully obtained from a third party without restriction.

## 6. Termination

### 6.1 Termination for Convenience
Either Party may terminate this Agreement at any time by providing **fourteen (14) days** written notice to the other Party.

### 6.2 Termination for Cause
Either Party may terminate this Agreement immediately upon written notice if the other Party materially breaches this Agreement and fails to cure such breach within **ten (10) days** of receiving written notice of the breach.

### 6.3 Effect of Termination
Upon termination:

1. The Freelancer shall deliver all completed and in-progress Work Product to ${companyName}
2. ${companyName} shall pay the Freelancer for all services performed and approved expenses incurred through the date of termination
3. Sections regarding intellectual property, confidentiality, and indemnification shall survive termination

## 7. Independent Contractor Status

### 7.1 Relationship
The Freelancer is an independent contractor and is not an employee, partner, agent, or joint venturer of ${companyName}. Nothing in this Agreement creates an employment relationship between the Parties.

### 7.2 No Benefits
The Freelancer is not entitled to any employee benefits, including but not limited to health insurance, retirement plans, paid time off, or workers' compensation.

### 7.3 Control
The Freelancer retains control over the manner and means by which the services are performed, subject to the specifications and deadlines outlined in the applicable SOW. The Freelancer may set their own schedule and work location.

### 7.4 Other Clients
The Freelancer may provide services to other clients during the term of this Agreement, provided that such engagements do not create a conflict of interest or interfere with the Freelancer's obligations under this Agreement.

## 8. Indemnification

### 8.1 Freelancer Indemnification
The Freelancer shall indemnify, defend, and hold harmless ${companyName} and its officers, directors, employees, and agents from and against any claims, damages, losses, or expenses (including reasonable attorney's fees) arising from:

- The Freelancer's breach of this Agreement
- The Freelancer's negligence or willful misconduct
- Any claim that the Work Product infringes the intellectual property rights of a third party

### 8.2 Company Indemnification
${companyName} shall indemnify, defend, and hold harmless the Freelancer from and against any claims, damages, losses, or expenses arising from ${companyName}'s use of the Work Product in a manner not contemplated by this Agreement.

## 9. Limitation of Liability

In no event shall either Party be liable to the other for any indirect, incidental, special, consequential, or punitive damages arising out of or related to this Agreement, regardless of the cause of action, even if advised of the possibility of such damages. ${companyName}'s total aggregate liability under this Agreement shall not exceed the total fees paid to the Freelancer during the twelve (12) months preceding the claim.

## 10. General Provisions

### Governing Law
This Agreement shall be governed by the laws of the jurisdiction where ${companyName} is located.

### Entire Agreement
This Agreement, together with all SOWs, constitutes the entire agreement between the Parties and supersedes all prior agreements and understandings.

### Amendments
This Agreement may only be amended by a written instrument signed by both Parties.

### Severability
If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.

### Notices
All notices under this Agreement shall be in writing and delivered to the addresses specified above, or by email to ${email ? email : "[designated contact]"} for ${companyName}.

## Signatures

**Client — ${companyName}:**

Name: _________________________
Title: _________________________
Date: _________________________
Signature: _____________________

**Freelancer:**

Name: _________________________
Date: _________________________
Signature: _____________________

---

*This Freelancer Agreement template was generated using LaunchKit. Please have this document reviewed by a legal professional before use.*`;
}
