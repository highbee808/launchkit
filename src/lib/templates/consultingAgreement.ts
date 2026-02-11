export interface ConsultingAgreementParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateConsultingAgreement(params: ConsultingAgreementParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Consulting Agreement

**Effective Date:** ${effectiveDate}

## Parties

This Consulting Agreement ("Agreement") is entered into by and between:

**Client:** ${companyName}
Website: ${websiteUrl}
${email ? `Contact: ${email}` : ""}

**Consultant:** [CONSULTANT NAME / ENTITY]
Address: [CONSULTANT ADDRESS]

Collectively referred to as the "Parties" and individually as a "Party."

---

## 1. Scope of Services

### 1.1 Engagement
${companyName} hereby engages the Consultant to provide the consulting services described in Exhibit A ("Statement of Work" or "SOW") attached hereto and incorporated by reference.

### 1.2 Statements of Work
Each engagement shall be governed by a separate SOW that specifies the scope, deliverables, timeline, and any additional terms. In the event of a conflict between this Agreement and an SOW, the terms of this Agreement shall prevail unless the SOW expressly states otherwise.

### 1.3 Performance Standards
The Consultant shall perform all services in a professional, competent, and timely manner, consistent with the standards of the consulting industry and the specific requirements of ${companyName}.

### 1.4 Cooperation
${companyName} shall provide the Consultant with reasonable access to information, personnel, and resources necessary for the Consultant to perform the services. The Consultant shall coordinate with ${companyName}'s designated point of contact.

## 2. Compensation

### 2.1 Fees
${companyName} shall compensate the Consultant as follows, unless otherwise specified in the applicable SOW:

- **Hourly Rate:** [RATE] per hour, or
- **Fixed Fee:** [AMOUNT] for the engagement, or
- **Retainer:** [AMOUNT] per month for ongoing advisory services

### 2.2 Invoicing
The Consultant shall submit detailed invoices to ${companyName} at ${email ? email : "[billing contact]"} on a [weekly / bi-weekly / monthly] basis. Each invoice shall include:

1. Description of services performed during the billing period
2. Hours worked (if applicable) and applicable rate
3. Itemized expenses (if applicable)
4. Total amount due

### 2.3 Payment
${companyName} shall pay all undisputed invoices within **thirty (30) days** of receipt. Late payments shall bear interest at a rate of **1.5% per month** (or the maximum rate permitted by law, whichever is lower).

## 3. Expenses

### 3.1 Reimbursable Expenses
${companyName} shall reimburse the Consultant for reasonable, pre-approved out-of-pocket expenses incurred in connection with the services, including:

- Travel expenses (airfare, lodging, ground transportation, meals)
- Software, tools, or materials specifically required for the engagement
- Other expenses approved in writing by ${companyName}

### 3.2 Expense Reporting
The Consultant shall submit expense reports with itemized receipts within **thirty (30) days** of incurring the expense. Expenses exceeding [AMOUNT] require prior written approval from ${companyName}.

### 3.3 Non-Reimbursable Expenses
Unless otherwise agreed in writing, ${companyName} shall not reimburse the Consultant for general overhead, office expenses, or other costs associated with the Consultant's general business operations.

## 4. Term

### 4.1 Initial Term
This Agreement shall commence on the Effective Date and continue for a period of [DURATION], unless earlier terminated in accordance with this Agreement.

### 4.2 Renewal
This Agreement may be renewed for additional terms upon mutual written agreement of the Parties. Renewal terms shall be documented in a written amendment or new SOW.

## 5. Confidentiality

### 5.1 Definition
"Confidential Information" means any non-public information disclosed by one Party to the other in connection with this Agreement, including but not limited to business plans, strategies, financial data, customer information, technical data, trade secrets, and proprietary methodologies.

### 5.2 Obligations
Each Party agrees to:

- Hold Confidential Information in strict confidence using the same degree of care used to protect its own confidential information, but no less than reasonable care
- Use Confidential Information solely for the purposes contemplated by this Agreement
- Limit disclosure to employees and agents who have a need to know and are bound by comparable confidentiality obligations
- Promptly notify the disclosing Party of any unauthorized use or disclosure

### 5.3 Exclusions
Confidential Information does not include information that: (a) is or becomes publicly available through no fault of the receiving Party; (b) was known to the receiving Party prior to disclosure; (c) is independently developed without reference to Confidential Information; or (d) is rightfully received from a third party without restriction.

### 5.4 Duration
Confidentiality obligations shall survive termination of this Agreement for a period of **three (3) years**.

## 6. Intellectual Property

### 6.1 Work Product
All reports, analyses, recommendations, deliverables, and other materials created by the Consultant in performing the services ("Work Product") shall be the sole and exclusive property of ${companyName}.

### 6.2 Assignment
The Consultant hereby irrevocably assigns to ${companyName} all right, title, and interest in and to the Work Product, including all intellectual property rights. The Consultant shall execute all documents necessary to perfect this assignment.

### 6.3 Consultant's Tools
The Consultant retains ownership of pre-existing methodologies, tools, frameworks, and know-how ("Consultant's Tools"). To the extent Consultant's Tools are incorporated into the Work Product, the Consultant grants ${companyName} a perpetual, non-exclusive, royalty-free, worldwide license to use such Consultant's Tools as part of the Work Product.

### 6.4 License Back
${companyName} grants the Consultant a limited, non-exclusive license to reference the general nature of the engagement (but not Confidential Information) in the Consultant's portfolio and marketing materials, subject to ${companyName}'s prior written approval.

## 7. Independent Contractor Status

### 7.1 Relationship
The Consultant is an independent contractor and not an employee, agent, partner, or joint venturer of ${companyName}. The Consultant has no authority to bind ${companyName} or incur obligations on its behalf.

### 7.2 Taxes and Benefits
The Consultant is solely responsible for all taxes arising from compensation received under this Agreement. The Consultant is not eligible for any employee benefits provided by ${companyName}.

### 7.3 Control
The Consultant retains sole discretion over the manner and means of performing the services, subject to the deliverables and timelines specified in the applicable SOW.

## 8. Non-Compete and Non-Solicitation

### 8.1 Non-Compete
During the term of this Agreement and for a period of [DURATION] thereafter, the Consultant agrees not to provide substantially similar services to direct competitors of ${companyName} in the same market, unless agreed otherwise in writing.

### 8.2 Non-Solicitation
During the term and for **twelve (12) months** following termination, the Consultant agrees not to directly or indirectly solicit or hire any employee, contractor, or client of ${companyName} with whom the Consultant had material contact during the engagement.

## 9. Termination

### 9.1 Termination for Convenience
Either Party may terminate this Agreement by providing **thirty (30) days** written notice to the other Party.

### 9.2 Termination for Cause
Either Party may terminate this Agreement immediately upon written notice if the other Party:

- Materially breaches this Agreement and fails to cure within **fifteen (15) days** of written notice
- Becomes insolvent, files for bankruptcy, or ceases operations
- Engages in fraud, gross negligence, or willful misconduct

### 9.3 Effect of Termination
Upon termination:

1. The Consultant shall deliver all completed and in-progress Work Product to ${companyName}
2. ${companyName} shall pay all undisputed fees for services performed through the termination date
3. All Confidential Information shall be returned or destroyed
4. Provisions relating to confidentiality, intellectual property, indemnification, and limitation of liability shall survive termination

## 10. Liability and Indemnification

### 10.1 Limitation of Liability
In no event shall either Party be liable for indirect, incidental, special, consequential, or punitive damages, regardless of the theory of liability. The total aggregate liability of either Party shall not exceed the total fees paid or payable under this Agreement during the twelve (12) months preceding the claim.

### 10.2 Indemnification
Each Party agrees to indemnify, defend, and hold harmless the other Party from any claims, damages, losses, or expenses (including reasonable attorney's fees) arising from the indemnifying Party's breach of this Agreement, negligence, or willful misconduct.

## 11. General Provisions

### Governing Law
This Agreement shall be governed by the laws of the jurisdiction where ${companyName} is located.

### Dispute Resolution
Any dispute arising from this Agreement shall first be submitted to good-faith mediation. If mediation fails, disputes shall be resolved through binding arbitration in the jurisdiction where ${companyName} is located.

### Entire Agreement
This Agreement, together with all SOWs and exhibits, constitutes the entire agreement between the Parties.

### Amendments
This Agreement may only be amended by a written instrument signed by both Parties.

### Severability
If any provision is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.

### Notices
All notices shall be in writing and delivered to the addresses specified above or by email to ${email ? email : "[designated contact]"}.

## Signatures

**Client — ${companyName}:**

Name: _________________________
Title: _________________________
Date: _________________________
Signature: _____________________

**Consultant:**

Name: _________________________
Title: _________________________
Date: _________________________
Signature: _____________________

---

*This Consulting Agreement template was generated using LaunchKit. Please have this document reviewed by a legal professional before use.*`;
}
