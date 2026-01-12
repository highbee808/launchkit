export interface DataRetentionParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateDataRetention(params: DataRetentionParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Data Retention Policy

**Last Updated:** ${effectiveDate}

## Introduction

This Data Retention Policy describes how ${companyName} ("we", "us", or "our") retains and manages personal data collected through our website at ${websiteUrl} and related services.

This policy outlines the types of data we retain, retention periods, and procedures for data deletion in compliance with applicable data protection laws including GDPR, CCPA, and other regulations.

## Purpose

The purpose of this Data Retention Policy is to:

- Ensure compliance with legal and regulatory requirements
- Minimize data storage to what is necessary
- Protect individual privacy rights
- Maintain appropriate business records
- Guide employees on data retention practices

## Data Retention Principles

We adhere to the following principles:

### Necessity
We only retain data that is necessary for the purposes for which it was collected or as required by law.

### Minimization
We limit data retention to the minimum period necessary to fulfill our purposes.

### Accuracy
We take reasonable steps to ensure retained data remains accurate and up-to-date.

### Security
We protect retained data with appropriate technical and organizational measures.

### Transparency
We inform individuals about our data retention practices.

## Retention Periods

### Account Data

| Data Type | Retention Period | Justification |
|-----------|------------------|---------------|
| User account information | Duration of account + 30 days | Service provision |
| Profile information | Duration of account + 30 days | User experience |
| Authentication credentials | Duration of account + 30 days | Security |
| Account preferences | Duration of account | Personalization |

### Transaction Data

| Data Type | Retention Period | Justification |
|-----------|------------------|---------------|
| Purchase records | 7 years | Tax/legal requirements |
| Payment information | As required by payment processor | Legal compliance |
| Invoices and receipts | 7 years | Financial records |
| Refund records | 7 years | Financial records |

### Communication Data

| Data Type | Retention Period | Justification |
|-----------|------------------|---------------|
| Customer support tickets | 3 years | Service improvement |
| Email correspondence | 3 years | Business records |
| Chat logs | 1 year | Quality assurance |
| Feedback and surveys | 2 years | Product improvement |

### Technical Data

| Data Type | Retention Period | Justification |
|-----------|------------------|---------------|
| Server logs | 90 days | Security/debugging |
| Error logs | 90 days | Technical support |
| Access logs | 1 year | Security audit |
| Analytics data | 2 years | Business analysis |

### Marketing Data

| Data Type | Retention Period | Justification |
|-----------|------------------|---------------|
| Marketing preferences | Until consent withdrawn | Direct marketing |
| Newsletter subscriptions | Until unsubscribed + 30 days | Marketing |
| Campaign response data | 2 years | Marketing analysis |

### Legal and Compliance Data

| Data Type | Retention Period | Justification |
|-----------|------------------|---------------|
| Consent records | 7 years | Legal compliance |
| Data subject requests | 3 years | Accountability |
| Legal hold documents | Duration of legal matter + 7 years | Legal requirements |
| Audit trails | 7 years | Compliance |

## Data Deletion Procedures

### Automatic Deletion
- Certain data is automatically deleted after the retention period expires
- Automated systems purge expired data on a regular schedule

### Manual Deletion
- Data not subject to automatic deletion is reviewed periodically
- Authorized personnel delete data according to this policy

### Secure Deletion
All data deletion follows secure practices:
- Digital data is permanently erased using industry-standard methods
- Backup data is overwritten in the next backup cycle
- Paper records are securely shredded

## Exceptions to Retention Periods

Data may be retained beyond standard periods for:

### Legal Requirements
- Ongoing litigation or legal proceedings
- Regulatory investigations
- Tax audits or investigations
- Court orders or legal holds

### Business Necessity
- Unresolved disputes or complaints
- Ongoing contractual obligations
- Fraud prevention investigations

### User Requests
- Users may request earlier deletion (subject to legal requirements)
- Deletion requests are processed within 30 days

## User Rights

You have the following rights regarding your data:

### Right to Access
Request a copy of the personal data we hold about you.

### Right to Deletion
Request deletion of your personal data, subject to legal retention requirements.

### Right to Rectification
Request correction of inaccurate personal data.

### Right to Data Portability
Request a copy of your data in a portable format.

### Right to Object
Object to certain types of data processing.

## How to Exercise Your Rights

To exercise any of these rights:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

We will respond to your request within 30 days.

## Data Backup and Recovery

### Backup Schedule
- Full backups: Weekly
- Incremental backups: Daily

### Backup Retention
- Daily backups: 30 days
- Weekly backups: 90 days
- Monthly backups: 1 year

### Backup Deletion
Backups containing deleted data are overwritten according to the backup retention schedule.

## Responsibilities

### Data Protection Officer / Privacy Lead
- Oversees compliance with this policy
- Reviews and updates retention schedules
- Handles data subject requests

### All Employees
- Follow this policy in daily operations
- Report potential compliance issues
- Complete required training

## Policy Review

This policy is reviewed annually and updated as needed to reflect:
- Changes in legal requirements
- Changes in business practices
- Technological developments
- Feedback from stakeholders

## Contact Us

For questions about this Data Retention Policy:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

---

*This Data Retention Policy was generated using LaunchKit.*`;
}
