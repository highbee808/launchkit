export interface DpaParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateDpa(params: DpaParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Data Processing Agreement (DPA)

**Effective Date:** ${effectiveDate}

## Parties

This Data Processing Agreement ("DPA") is entered into between:

**Data Controller:** The entity that determines the purposes and means of processing personal data (the "Controller" or "Customer")

**Data Processor:** ${companyName}, operating at ${websiteUrl} (the "Processor" or "we", "us", "our")

${email ? `Contact: ${email}` : ""}

## Background

This DPA supplements and forms part of the main service agreement between the Parties. It sets out the terms on which the Processor will process personal data on behalf of the Controller in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR).

## Definitions

- **Personal Data**: Any information relating to an identified or identifiable natural person
- **Processing**: Any operation performed on personal data, including collection, storage, use, and deletion
- **Data Subject**: An identified or identifiable natural person whose personal data is processed
- **Sub-processor**: Any third party engaged by the Processor to process personal data

## Scope of Processing

### Subject Matter
The Processor will process personal data as necessary to provide the services described in the main service agreement.

### Duration
Processing will continue for the duration of the main service agreement unless terminated earlier.

### Nature and Purpose
The nature and purpose of processing includes:
- Providing and maintaining the services
- Account management and authentication
- Customer support and communication
- Service improvement and analytics

### Types of Personal Data
The following types of personal data may be processed:
- Contact information (name, email, phone)
- Account credentials
- Usage data and preferences
- Payment information
- Any other data provided by the Controller

### Categories of Data Subjects
- Controller's customers and end users
- Controller's employees and contractors
- Other individuals whose data is provided by the Controller

## Processor Obligations

The Processor agrees to:

### Lawful Processing
- Process personal data only on documented instructions from the Controller
- Inform the Controller if legal requirements conflict with instructions

### Confidentiality
- Ensure persons authorized to process personal data have committed to confidentiality
- Limit access to personal data to those who need access to perform services

### Security Measures
Implement appropriate technical and organizational measures, including:
- Encryption of personal data in transit and at rest
- Access controls and authentication
- Regular security testing and assessment
- Incident response procedures
- Business continuity measures

### Sub-processors
- Not engage sub-processors without prior written authorization from the Controller
- Ensure sub-processors are bound by equivalent data protection obligations
- Remain liable for sub-processor compliance

### Data Subject Rights
- Assist the Controller in responding to data subject requests, including:
  - Access requests
  - Rectification requests
  - Erasure requests
  - Data portability requests
  - Objection requests

### Data Breach Notification
- Notify the Controller without undue delay (within 72 hours) after becoming aware of a personal data breach
- Provide information about the nature of the breach, categories of data affected, and measures taken

### Data Protection Impact Assessments
- Assist the Controller with data protection impact assessments where required

### Audits
- Make available information necessary to demonstrate compliance
- Allow for and contribute to audits and inspections

## Controller Obligations

The Controller agrees to:

- Ensure lawful bases for processing
- Provide documented processing instructions
- Implement appropriate security measures within its own systems
- Respond to data subject requests
- Notify the Processor of any changes to processing instructions

## Data Transfers

### International Transfers
Personal data may be transferred outside the European Economic Area (EEA) only if:
- Adequate safeguards are in place (e.g., Standard Contractual Clauses)
- The destination country has an adequacy decision
- An exception under Article 49 GDPR applies

### Transfer Mechanisms
We rely on the following transfer mechanisms:
- Standard Contractual Clauses (SCCs)
- Adequacy decisions where applicable

## Data Retention and Deletion

Upon termination of the service agreement:
- The Processor will delete or return all personal data within 30 days
- The Controller may request a certificate of deletion
- The Processor may retain data as required by law, with continued DPA obligations

## Liability

- Each Party's liability under this DPA is subject to the limitations set forth in the main service agreement
- The Processor shall be liable for damages caused by non-compliance with GDPR obligations specific to processors

## Term and Termination

- This DPA is effective from the Effective Date
- This DPA terminates automatically upon termination of the main service agreement
- Obligations regarding data deletion and confidentiality survive termination

## Amendments

This DPA may be amended only by written agreement between the Parties. The Processor may update this DPA to reflect changes in data protection laws, with reasonable notice to the Controller.

## Governing Law

This DPA shall be governed by the same law as the main service agreement, or where applicable, the laws required by GDPR.

## Contact

For questions or requests regarding this DPA:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

## Signatures

By using our services, both parties agree to the terms of this DPA.

**Controller:**
Name: _________________________
Title: _________________________
Date: _________________________

**Processor (${companyName}):**
Name: _________________________
Title: _________________________
Date: _________________________

---

*This DPA was generated using LaunchKit. Please have this document reviewed by a legal professional to ensure compliance with applicable data protection laws.*`;
}
