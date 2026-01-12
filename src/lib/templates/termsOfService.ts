export interface TermsOfServiceParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

function getSafeHostname(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return 'example.com';
  }
}

export function generateTermsOfService(params: TermsOfServiceParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;
  const hostname = getSafeHostname(websiteUrl);

  return `# Terms of Service

**Last Updated:** ${effectiveDate}

## 1. Agreement to Terms

By accessing or using ${websiteUrl} (the "Service") operated by ${companyName} ("Company", "we", "us", or "our"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you do not have permission to access the Service.

## 2. Description of Service

${companyName} provides ${websiteUrl} and related services. We reserve the right to modify, suspend, or discontinue the Service at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.

## 3. User Accounts

### 3.1 Account Creation

When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.

### 3.2 Account Security

You are responsible for safeguarding the password you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.

### 3.3 Account Termination

We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.

## 4. Acceptable Use

### 4.1 Prohibited Activities

You agree not to engage in any of the following prohibited activities:

- Copying, distributing, or disclosing any part of the Service in any medium
- Using any automated system, including "robots," "spiders," or "offline readers," to access the Service
- Transmitting spam, chain letters, or other unsolicited communications
- Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Service
- Taking any action that imposes an unreasonable or disproportionately large load on our infrastructure
- Uploading invalid data, viruses, worms, or other software agents
- Collecting or harvesting any personally identifiable information from the Service
- Using the Service for any commercial solicitation purposes without our prior written consent
- Impersonating another person or otherwise misrepresenting your affiliation with a person or entity
- Interfering with the proper working of the Service
- Accessing any content on the Service through any technology or means other than those provided or authorized by the Service
- Bypassing the measures we may use to prevent or restrict access to the Service

### 4.2 User Content

You retain ownership of any content you submit, post, or display on or through the Service ("User Content"). By posting User Content, you grant us a non-exclusive, worldwide, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content.

## 5. Intellectual Property

### 5.1 Our Content

The Service and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of ${companyName} and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.

### 5.2 Copyright Policy

We respect the intellectual property rights of others. If you believe that any content on the Service infringes your copyright, please contact us at ${email || `legal@${hostname}`}.

## 6. Third-Party Links

The Service may contain links to third-party websites or services that are not owned or controlled by ${companyName}. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by the use of such content, goods, or services.

## 7. Disclaimer of Warranties

THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. ${companyName.toUpperCase()} EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

WE DO NOT WARRANT THAT:
- The Service will function uninterrupted, secure, or available at any particular time or location
- Any errors or defects will be corrected
- The Service is free of viruses or other harmful components
- The results of using the Service will meet your requirements

## 8. Limitation of Liability

IN NO EVENT SHALL ${companyName.toUpperCase()}, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:

- Your access to or use of or inability to access or use the Service
- Any conduct or content of any third party on the Service
- Any content obtained from the Service
- Unauthorized access, use, or alteration of your transmissions or content

WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.

## 9. Indemnification

You agree to defend, indemnify, and hold harmless ${companyName} and its licensees, licensors, employees, contractors, agents, officers, and directors from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from:

- Your use of and access to the Service
- Your violation of any term of these Terms
- Your violation of any third-party right, including any copyright, property, or privacy right
- Any claim that your User Content caused damage to a third party

## 10. Governing Law

These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which ${companyName} is established, without regard to its conflict of law provisions.

## 11. Dispute Resolution

### 11.1 Informal Resolution

Before filing a claim, you agree to try to resolve the dispute informally by contacting us at ${email || `legal@${hostname}`}. We will try to resolve the dispute informally by contacting you via email. If a dispute is not resolved within 30 days of submission, you or ${companyName} may bring a formal proceeding.

### 11.2 Arbitration

Any dispute arising from these Terms shall be resolved through binding arbitration, except that either party may seek injunctive relief in court for intellectual property infringement.

## 12. Changes to Terms

We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.

## 13. Severability

If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.

## 14. Waiver

The failure to exercise a right or require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter, nor shall the waiver of a breach constitute a waiver of any subsequent breach.

## 15. Entire Agreement

These Terms constitute the entire agreement between you and ${companyName} regarding your use of the Service, superseding any prior agreements.

## 16. Contact Us

If you have any questions about these Terms, please contact us:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

---

*This Terms of Service was generated using LaunchKit.*`;
}
