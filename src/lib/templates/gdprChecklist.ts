export interface GdprChecklistParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateGdprChecklist(params: GdprChecklistParams): string {
  const { companyName, websiteUrl, effectiveDate } = params;

  return `# GDPR Compliance Checklist

**Organization:** ${companyName}
**Website:** ${websiteUrl}
**Assessment Date:** ${effectiveDate}

---

## How to Use This Checklist

Review each item below and mark your compliance status. This checklist helps identify areas that may need attention for GDPR compliance. Consult with legal professionals for complete compliance assessment.

---

## 1. Lawful Basis for Processing

- [ ] We have identified the lawful basis for each data processing activity
- [ ] We document our lawful basis in our privacy policy
- [ ] We obtain explicit consent where consent is the lawful basis
- [ ] We can demonstrate consent was freely given, specific, and informed
- [ ] We have a process for users to withdraw consent

## 2. Data Subject Rights

### Right to Access
- [ ] Users can request a copy of their personal data
- [ ] We respond to access requests within 30 days
- [ ] We provide data in a commonly used format

### Right to Rectification
- [ ] Users can update or correct their personal data
- [ ] We have a process to verify and implement corrections

### Right to Erasure (Right to be Forgotten)
- [ ] Users can request deletion of their personal data
- [ ] We can delete data from all systems, including backups
- [ ] We inform third parties of deletion requests

### Right to Data Portability
- [ ] Users can receive their data in a machine-readable format
- [ ] We can transfer data to another controller upon request

### Right to Object
- [ ] Users can object to processing for direct marketing
- [ ] We stop processing upon valid objection

## 3. Privacy by Design

- [ ] We consider privacy at the start of new projects
- [ ] We minimize data collection to what is necessary
- [ ] We implement appropriate technical security measures
- [ ] We conduct Data Protection Impact Assessments (DPIAs) when required
- [ ] We have data retention policies and schedules

## 4. Data Processing Records

- [ ] We maintain records of all processing activities
- [ ] Records include: purposes, categories, recipients, transfers, retention
- [ ] Records are available for supervisory authority review
- [ ] We review and update records regularly

## 5. Third-Party Processors

- [ ] We have Data Processing Agreements (DPAs) with all processors
- [ ] DPAs include required GDPR clauses
- [ ] We verify processors maintain adequate security
- [ ] We maintain a list of all third-party processors
- [ ] We assess international data transfers

## 6. International Data Transfers

- [ ] We identify all transfers outside the EEA
- [ ] We use Standard Contractual Clauses (SCCs) where required
- [ ] We assess adequacy decisions for transfer destinations
- [ ] We document Transfer Impact Assessments

## 7. Security Measures

- [ ] We encrypt personal data in transit and at rest
- [ ] We implement access controls and authentication
- [ ] We regularly test and assess security measures
- [ ] We have incident detection and monitoring systems
- [ ] We maintain security documentation

## 8. Data Breach Procedures

- [ ] We have a data breach response plan
- [ ] We can detect and investigate breaches promptly
- [ ] We can notify supervisory authorities within 72 hours
- [ ] We can notify affected individuals when required
- [ ] We document all breaches and responses

## 9. Privacy Policy & Notices

- [ ] Our privacy policy is clear and accessible
- [ ] We disclose all data processing purposes
- [ ] We list categories of data collected
- [ ] We identify third parties who receive data
- [ ] We explain user rights and how to exercise them
- [ ] We provide contact details for privacy inquiries

## 10. Data Protection Officer (DPO)

- [ ] We have assessed whether a DPO is required
- [ ] If required, we have appointed a qualified DPO
- [ ] DPO contact details are publicly available
- [ ] DPO has adequate resources and independence

## 11. Employee Training

- [ ] Staff handling personal data receive GDPR training
- [ ] Training is provided to new employees
- [ ] We conduct regular refresher training
- [ ] We document all training activities

## 12. Cookie Compliance

- [ ] We have a cookie consent mechanism
- [ ] Non-essential cookies are blocked until consent
- [ ] Users can easily withdraw cookie consent
- [ ] Our cookie policy explains all cookies used

---

## Compliance Summary

### Completed Items
Count the checked items in each section to assess your compliance level.

### Priority Areas
Focus on unchecked items, prioritizing:
1. Lawful basis documentation
2. Data subject rights processes
3. Security measures
4. Breach response procedures

### Next Steps
- [ ] Address high-priority gaps
- [ ] Schedule legal consultation
- [ ] Implement missing processes
- [ ] Plan regular compliance reviews

---

## Disclaimer

This checklist is for informational purposes only and does not constitute legal advice. GDPR compliance requirements may vary based on your specific circumstances. We recommend consulting with qualified legal professionals for comprehensive compliance assessment.

---

*This GDPR Compliance Checklist was generated using LaunchKit.*`;
}
