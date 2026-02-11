export interface AntiSpamPolicyParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateAntiSpamPolicy(params: AntiSpamPolicyParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Anti-Spam Policy

**Effective Date:** ${effectiveDate}

## Introduction

${companyName} is committed to maintaining a spam-free environment for all users and subscribers. This Anti-Spam Policy ("Policy") outlines our practices for preventing, identifying, and addressing spam across our platform at ${websiteUrl} and in all electronic communications sent by or on behalf of ${companyName}.

${email ? `Contact: ${email}` : ""}

---

## 1. Definition of Spam

For the purposes of this Policy, "spam" includes but is not limited to:

- **Unsolicited Commercial Email (UCE)** — Bulk or individual email messages sent to recipients who have not opted in to receive them
- **Unsolicited Bulk Email (UBE)** — Large volumes of identical or substantially similar messages sent indiscriminately
- **Platform Spam** — Repetitive, irrelevant, or promotional content posted on ${companyName}'s platform to drive traffic, manipulate engagement, or deceive users
- **Phishing** — Messages designed to trick recipients into revealing personal information or credentials
- **Malware Distribution** — Messages containing or linking to viruses, trojan horses, or other malicious software
- **Deceptive Messages** — Communications with misleading subject lines, false headers, or spoofed sender information

## 2. Email Practices

### 2.1 Our Commitments
${companyName} adheres to the following email practices:

1. We only send commercial email to recipients who have provided explicit, informed consent
2. Every marketing email includes a clear, functional unsubscribe mechanism
3. We honor unsubscribe requests within **ten (10) business days**
4. We include accurate sender information and a valid physical postal address in all commercial messages
5. We do not use deceptive subject lines or misleading header information
6. We maintain and regularly update our email subscriber lists to remove invalid addresses and unsubscribed users

### 2.2 Transactional vs. Marketing Email
- **Transactional emails** (order confirmations, password resets, security alerts) are sent based on a user's actions and do not require marketing consent
- **Marketing emails** (newsletters, promotions, product announcements) require prior opt-in consent from the recipient

### 2.3 Third-Party Email Practices
${companyName} does not:
- Purchase, rent, or harvest email lists
- Send email on behalf of third parties without proper authorization and consent
- Allow third parties to use ${companyName}'s systems to send unsolicited messages

## 3. CAN-SPAM Compliance

${companyName} complies with the CAN-SPAM Act of 2003 and comparable international anti-spam legislation. Our compliance includes:

- **Accurate Header Information** — The "From," "To," "Reply-To," and routing information in all messages is accurate and identifies ${companyName} as the sender
- **Non-Deceptive Subject Lines** — Subject lines accurately reflect the content of the message
- **Identification as Advertisement** — Commercial messages are clearly identified as advertisements where required
- **Physical Address** — All commercial messages include ${companyName}'s valid physical postal address
- **Opt-Out Mechanism** — Every commercial message contains a clear and conspicuous way to opt out of future messages
- **Timely Opt-Out Processing** — Opt-out requests are processed within **ten (10) business days**
- **Monitoring Third Parties** — We ensure that any third parties sending email on our behalf comply with these requirements

## 4. Opt-In and Opt-Out

### 4.1 Opt-In
${companyName} uses the following consent mechanisms:

- **Single Opt-In** — Users provide their email address through a form on ${websiteUrl} and consent to receive communications
- **Double Opt-In** — Where required by applicable law (e.g., GDPR), users must confirm their subscription via a confirmation email before being added to marketing lists
- **Granular Consent** — Where applicable, users may select specific types of communications they wish to receive

### 4.2 Opt-Out
Users may opt out of communications at any time by:

1. Clicking the "Unsubscribe" link included in every marketing email
2. Visiting the communication preferences page at ${websiteUrl}
3. Contacting us directly at ${email ? email : "[designated contact]"}
4. Replying to any marketing email with "UNSUBSCRIBE" in the subject line

Opt-out requests apply to marketing communications only. Users will continue to receive transactional emails related to their account or purchases.

## 5. Platform Anti-Spam Measures

### 5.1 Automated Detection
${companyName} employs automated systems to detect and prevent spam on our platform, including:

- Rate limiting on content submissions and messages
- Automated content analysis and pattern detection
- CAPTCHA and bot-detection mechanisms
- IP reputation monitoring and blocking
- Account behavior analysis for suspicious activity

### 5.2 User Responsibilities
Users of ${companyName}'s platform agree not to:

- Post or transmit unsolicited promotional content
- Use automated tools, bots, or scripts to create accounts or post content
- Manipulate engagement metrics or artificially inflate reach
- Harvest email addresses or other contact information from the platform
- Distribute chain messages or pyramid schemes

## 6. Reporting Spam

If you receive spam from or related to ${companyName}, or encounter spam on our platform, please report it:

- **Email:** Send a report to ${email ? email : "[spam report email]"} with the full message headers and content
- **In-Platform:** Use the "Report Spam" feature available on all user-generated content
- **Web:** Submit a report through the form at ${websiteUrl}

Please include as much detail as possible, including the sender's address, the date and time of receipt, and the full content of the message.

## 7. Enforcement

### 7.1 Consequences for Violations
Violations of this Anti-Spam Policy may result in:

1. **Warning** — A formal notice of the violation
2. **Content Removal** — Removal of spam content from the platform
3. **Account Suspension** — Temporary suspension of the offending account
4. **Account Termination** — Permanent removal from ${companyName}'s platform
5. **Legal Action** — Pursuit of legal remedies, including claims for damages under applicable anti-spam legislation

### 7.2 Repeat Offenders
${companyName} maintains a zero-tolerance policy for repeat spam offenders. Accounts found to violate this Policy on multiple occasions will be permanently terminated without prior warning.

## 8. Changes to This Policy

${companyName} reserves the right to update this Anti-Spam Policy at any time. Changes will be posted at ${websiteUrl} and take effect immediately. Continued use of our services after changes are posted constitutes acceptance of the revised Policy.

## 9. Contact Us

For questions about this Anti-Spam Policy:

- **Website:** ${websiteUrl}
${email ? `- **Email:** ${email}` : ""}

---

*This Anti-Spam Policy template was generated using LaunchKit. Please have this document reviewed by a legal professional before use.*`;
}
