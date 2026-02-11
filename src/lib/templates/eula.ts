export interface EulaParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateEula(params: EulaParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# End-User License Agreement (EULA)

**Effective Date:** ${effectiveDate}

This End-User License Agreement ("Agreement") is a legal agreement between you ("User" or "you") and **${companyName}** ("Company," "we," "us," or "our") governing your use of our software, applications, and related services (collectively, the "Software").

**Website:** ${websiteUrl}
${email ? `Contact: ${email}` : ""}

By installing, accessing, or using the Software, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. If you do not agree to these terms, do not install or use the Software.

---

## 1. License Grant

Subject to your compliance with this Agreement, ${companyName} grants you a limited, non-exclusive, non-transferable, revocable license to:

- Install and use the Software for your personal or internal business purposes
- Access the Software through authorized devices and platforms
- Make a reasonable number of backup copies for archival purposes

This license does not constitute a sale of the Software or any portion thereof.

## 2. Restrictions

You agree that you will not:

- Copy, modify, adapt, translate, or create derivative works based on the Software
- Reverse engineer, disassemble, decompile, or otherwise attempt to derive the source code of the Software
- Rent, lease, lend, sell, sublicense, or distribute the Software to any third party
- Remove, alter, or obscure any proprietary notices, labels, or marks on the Software
- Use the Software for any unlawful purpose or in violation of any applicable laws or regulations
- Use the Software to develop a competing product or service
- Circumvent or disable any security or technological features of the Software
- Share your account credentials or allow unauthorized access to the Software

## 3. Intellectual Property

The Software and all copies thereof are proprietary to ${companyName} and title thereto remains in ${companyName}. All rights in the Software not specifically granted in this Agreement are reserved to ${companyName}.

- The Software is protected by copyright laws, international treaty provisions, and other intellectual property laws
- All trademarks, service marks, trade names, and logos associated with the Software are the property of ${companyName}
- You acknowledge that the Software contains valuable trade secrets and confidential information belonging to ${companyName}
- Any feedback, suggestions, or improvements you provide regarding the Software shall become the exclusive property of ${companyName}

## 4. Account and Access

To use certain features of the Software, you may be required to create an account. You agree to:

1. Provide accurate and complete registration information
2. Maintain the security of your account credentials
3. Promptly notify ${companyName} of any unauthorized use of your account
4. Accept responsibility for all activities that occur under your account

## 5. Updates and Modifications

${companyName} may, from time to time, issue updates, patches, or new versions of the Software. These updates may be installed automatically or may require manual action.

- Updates may modify or delete certain features or functionalities
- Continued use of the Software following an update constitutes acceptance of the modified Software
- ${companyName} is not obligated to provide any updates, maintenance, or support for the Software

## 6. Data Collection and Privacy

The Software may collect certain data as described in our Privacy Policy available at ${websiteUrl}. By using the Software, you consent to such data collection and use in accordance with our Privacy Policy.

## 7. Term and Termination

### Term
This Agreement is effective from the date you first install or use the Software and continues until terminated.

### Termination by User
You may terminate this Agreement at any time by uninstalling and ceasing all use of the Software.

### Termination by Company
${companyName} may terminate this Agreement immediately and without notice if you breach any term of this Agreement.

### Effect of Termination
Upon termination:

- All rights granted to you under this Agreement shall immediately cease
- You must uninstall and destroy all copies of the Software in your possession
- Sections relating to intellectual property, disclaimers, limitation of liability, and general provisions shall survive termination

## 8. Disclaimer of Warranties

THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. ${companyName.toUpperCase()} DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:

- IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
- WARRANTIES OF NON-INFRINGEMENT
- WARRANTIES THAT THE SOFTWARE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE
- WARRANTIES REGARDING THE ACCURACY OR RELIABILITY OF THE SOFTWARE

## 9. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ${companyName.toUpperCase()} BE LIABLE FOR:

- Any indirect, incidental, special, consequential, or punitive damages
- Loss of profits, data, business opportunities, or goodwill
- Cost of procurement of substitute goods or services
- Any damages exceeding the amount paid by you for the Software in the twelve (12) months preceding the claim

These limitations apply regardless of the theory of liability, whether based on warranty, contract, tort, negligence, strict liability, or any other legal theory.

## 10. Indemnification

You agree to indemnify, defend, and hold harmless ${companyName}, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in connection with your use of the Software or violation of this Agreement.

## 11. Export Compliance

You agree to comply with all applicable export and re-export control laws and regulations in your use of the Software.

## 12. Governing Law

This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which ${companyName} is established, without regard to its conflict of law provisions.

## 13. Dispute Resolution

Any disputes arising out of or relating to this Agreement shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the applicable arbitration authority in the jurisdiction of ${companyName}.

## 14. General Provisions

### Entire Agreement
This Agreement constitutes the entire agreement between you and ${companyName} regarding the Software and supersedes all prior agreements and understandings.

### Severability
If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.

### Waiver
The failure of ${companyName} to enforce any right or provision of this Agreement shall not constitute a waiver of such right or provision.

### Assignment
You may not assign or transfer this Agreement without the prior written consent of ${companyName}. ${companyName} may assign this Agreement without restriction.

### Contact
For questions regarding this EULA, please contact ${companyName} at ${websiteUrl}.

---

*This EULA template was generated using LaunchKit. Please have this document reviewed by a legal professional before use.*`;
}
