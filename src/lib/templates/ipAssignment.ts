export interface IpAssignmentParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateIpAssignment(params: IpAssignmentParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Intellectual Property Assignment Agreement

**Effective Date:** ${effectiveDate}

## Parties

This Intellectual Property Assignment Agreement ("Agreement") is entered into by and between:

**Assignee:** ${companyName}
Website: ${websiteUrl}
${email ? `Contact: ${email}` : ""}

**Assignor:** [ASSIGNOR NAME]
Address: [ASSIGNOR ADDRESS]

Collectively referred to as the "Parties" and individually as a "Party."

---

## Recitals

WHEREAS, the Assignor has created, developed, or otherwise acquired certain intellectual property as described herein;

WHEREAS, ${companyName} desires to acquire all right, title, and interest in and to such intellectual property;

WHEREAS, the Assignor desires to assign such intellectual property to ${companyName} in accordance with the terms and conditions set forth in this Agreement;

NOW, THEREFORE, in consideration of the mutual covenants and agreements contained herein, and for other good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the Parties agree as follows:

## 1. Definitions

For the purposes of this Agreement, the following terms shall have the meanings set forth below:

### 1.1 "Intellectual Property" or "IP"
All intellectual property rights, including but not limited to:

- **Patents** — All patents, patent applications, and patent rights, including provisional applications, continuations, continuations-in-part, divisionals, reissues, and extensions
- **Copyrights** — All copyrights, copyright registrations, and copyright applications in all works of authorship, including software, documentation, designs, and creative works
- **Trademarks** — All trademarks, service marks, trade names, trade dress, logos, and domain names, whether registered or unregistered
- **Trade Secrets** — All trade secrets, know-how, proprietary information, processes, formulas, algorithms, and techniques
- **Other Rights** — All other intellectual property or proprietary rights recognized under any applicable law, including moral rights, database rights, and rights of publicity

### 1.2 "Assigned IP"
All Intellectual Property created, conceived, developed, or reduced to practice by the Assignor, whether solely or jointly with others, that:

1. Was developed in connection with work performed for ${companyName}
2. Relates to the current or anticipated business activities of ${companyName}
3. Was created using resources, facilities, or Confidential Information of ${companyName}
4. Is otherwise specified in Exhibit A attached hereto

### 1.3 "Confidential Information"
Any non-public information of ${companyName}, including but not limited to technical data, trade secrets, business plans, customer lists, financial information, and any other proprietary information disclosed to the Assignor.

## 2. Assignment of Rights

### 2.1 Present Assignment
The Assignor hereby irrevocably assigns, transfers, and conveys to ${companyName} all right, title, and interest in and to the Assigned IP, including all Intellectual Property rights therein, throughout the world, for the full duration of such rights, including all extensions and renewals.

### 2.2 Scope of Assignment
This assignment includes, without limitation:

- The right to file, prosecute, and maintain applications for patents, copyrights, trademarks, and other registrations
- The right to enforce, license, and sublicense the Assigned IP
- The right to create derivative works based on the Assigned IP
- The right to assign or transfer any or all of the foregoing rights to third parties
- All income, royalties, damages, and payments now or hereafter due or payable with respect to the Assigned IP
- All causes of action and rights to sue for past, present, and future infringement, misappropriation, or other violation of the Assigned IP

### 2.3 Future Works
The Assignor agrees that any Intellectual Property that falls within the definition of Assigned IP created during the term of the Assignor's relationship with ${companyName} shall be automatically assigned to ${companyName} upon creation, without the need for further action.

## 3. Consideration

### 3.1 Compensation
In consideration for the assignment of the Assigned IP, ${companyName} shall provide the Assignor with:

- [DESCRIPTION OF CONSIDERATION — e.g., monetary compensation, employment, equity, or other consideration as specified in a separate agreement]

### 3.2 Sufficiency
The Assignor acknowledges that the consideration set forth herein is good and valuable, and that no additional compensation is due for the assignment of the Assigned IP.

## 4. Representations and Warranties

### 4.1 Assignor's Representations
The Assignor represents and warrants to ${companyName} that:

1. **Ownership** — The Assignor is the sole and exclusive owner of the Assigned IP and has the full right and authority to enter into this Agreement and to assign the Assigned IP
2. **No Encumbrances** — The Assigned IP is free and clear of all liens, encumbrances, security interests, licenses, and claims of any kind
3. **No Infringement** — To the Assignor's knowledge, the Assigned IP does not infringe, misappropriate, or violate the intellectual property rights of any third party
4. **No Prior Assignment** — The Assignor has not previously assigned, transferred, or licensed any rights in the Assigned IP to any third party that would conflict with this Agreement
5. **Disclosure** — The Assignor has fully disclosed all Assigned IP to ${companyName} and has not concealed or withheld any material information regarding the Assigned IP
6. **No Disputes** — There are no pending or threatened claims, disputes, or litigation involving the Assigned IP

### 4.2 Company Representations
${companyName} represents and warrants that it has the authority to enter into this Agreement and to accept the assignment of the Assigned IP.

## 5. Further Assurances

### 5.1 Cooperation
The Assignor agrees to execute any additional documents, instruments, or agreements, and to take any further actions reasonably requested by ${companyName} to evidence, perfect, register, or enforce the assignment and ${companyName}'s rights in the Assigned IP. This includes:

- Signing patent, copyright, and trademark applications and assignments
- Providing declarations, affidavits, and other documents required for prosecution or enforcement
- Testifying in proceedings related to the Assigned IP
- Cooperating in any enforcement action related to the Assigned IP

### 5.2 Power of Attorney
The Assignor hereby irrevocably appoints ${companyName} and its officers as the Assignor's attorney-in-fact, with full power and authority to execute documents and take actions on the Assignor's behalf for the limited purpose of effecting the assignments contemplated by this Agreement, in the event the Assignor is unable or unwilling to do so. This power of attorney is coupled with an interest.

### 5.3 Costs
${companyName} shall bear all costs associated with filing, prosecuting, and maintaining registrations of the Assigned IP.

## 6. Work Made for Hire

To the extent that any of the Assigned IP constitutes a "work" eligible for copyright protection, the Parties acknowledge and agree that such work is a "work made for hire" as defined under the United States Copyright Act (17 U.S.C. Section 101) and comparable provisions of applicable foreign law. To the extent any work does not qualify as a work made for hire, the Assignor hereby assigns all copyright interest therein to ${companyName} as set forth in Section 2.

## 7. Moral Rights Waiver

### 7.1 Waiver
To the fullest extent permitted by applicable law, the Assignor hereby irrevocably waives and agrees not to assert any and all moral rights (including rights of attribution, integrity, disclosure, and withdrawal) that the Assignor may have in or with respect to the Assigned IP.

### 7.2 Consent
To the extent that moral rights cannot be waived under applicable law, the Assignor consents to any action by ${companyName} that would otherwise violate such moral rights, including the right to modify, adapt, or create derivative works from the Assigned IP without attribution to the Assignor.

## 8. Confidentiality

The Assignor agrees to hold in strict confidence and not to disclose to any third party any Confidential Information of ${companyName} received in connection with this Agreement or the Assigned IP, except as required by law or with the prior written consent of ${companyName}. This obligation shall survive termination of this Agreement.

## 9. Governing Law and Dispute Resolution

### 9.1 Governing Law
This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction where ${companyName} is located, without regard to conflict of law principles.

### 9.2 Dispute Resolution
Any dispute arising out of or relating to this Agreement shall be resolved through binding arbitration in the jurisdiction where ${companyName} is located, in accordance with the rules of the American Arbitration Association or an equivalent arbitration body.

### 9.3 Equitable Relief
Notwithstanding the foregoing, either Party may seek injunctive or equitable relief from a court of competent jurisdiction to prevent irreparable harm.

## 10. General Provisions

### Entire Agreement
This Agreement, together with all exhibits, constitutes the entire agreement between the Parties with respect to the subject matter hereof and supersedes all prior agreements and understandings.

### Amendments
This Agreement may only be amended by a written instrument signed by both Parties.

### Severability
If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.

### Successors and Assigns
This Agreement shall be binding upon and inure to the benefit of the Parties and their respective successors and assigns. ${companyName} may freely assign this Agreement. The Assignor may not assign this Agreement without the prior written consent of ${companyName}.

### Notices
All notices shall be in writing and delivered to the addresses specified above, or by email to ${email ? email : "[designated contact]"} for ${companyName}.

### Counterparts
This Agreement may be executed in counterparts, each of which shall be deemed an original and all of which together shall constitute one and the same instrument.

## Signatures

**Assignee — ${companyName}:**

Name: _________________________
Title: _________________________
Date: _________________________
Signature: _____________________

**Assignor:**

Name: _________________________
Date: _________________________
Signature: _____________________

---

*This IP Assignment Agreement template was generated using LaunchKit. Please have this document reviewed by a legal professional before use.*`;
}
