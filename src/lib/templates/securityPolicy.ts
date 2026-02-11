export interface SecurityPolicyParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateSecurityPolicy(params: SecurityPolicyParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Security Policy

**Effective Date:** ${effectiveDate}

This Security Policy outlines the security measures, practices, and commitments of **${companyName}** ("Company," "we," "us," or "our") to protect the confidentiality, integrity, and availability of our systems, data, and services.

**Website:** ${websiteUrl}
${email ? `Contact: ${email}` : ""}

---

## 1. Overview

${companyName} is committed to maintaining the highest standards of information security. This policy applies to all employees, contractors, partners, and third parties who access our systems and data. We continuously invest in security infrastructure and practices to safeguard the trust our users and customers place in us.

## 2. Data Encryption

### Data in Transit
- All data transmitted between users and ${companyName} services is encrypted using TLS 1.2 or higher
- API communications require HTTPS with strong cipher suites
- Internal service-to-service communications are encrypted using mutual TLS (mTLS)

### Data at Rest
- Customer data stored in databases is encrypted using AES-256 encryption
- Encryption keys are managed through a dedicated key management service with regular rotation
- Backup data is encrypted using the same standards as primary data
- Sensitive credentials and secrets are stored in encrypted vaults with strict access controls

## 3. Access Controls

### Authentication
- Multi-factor authentication (MFA) is required for all employee access to production systems
- Strong password policies are enforced across all systems (minimum 12 characters, complexity requirements)
- Single sign-on (SSO) is implemented for centralized identity management
- Session timeouts are enforced for inactive users

### Authorization
- Access is granted on a principle of least privilege basis
- Role-based access control (RBAC) is implemented across all systems
- Access to production environments is restricted to authorized personnel only
- Privileged access requires additional approval and is logged and audited

### Access Reviews
- User access permissions are reviewed on a quarterly basis
- Access is promptly revoked upon employee departure or role change
- Service account permissions are reviewed and rotated regularly

## 4. Infrastructure Security

### Network Security
- Production environments are isolated within secure virtual private clouds (VPCs)
- Network segmentation separates critical systems and data
- Firewalls and intrusion detection/prevention systems (IDS/IPS) monitor all network traffic
- DDoS protection is deployed at the network edge

### Application Security
- Secure software development lifecycle (SDLC) practices are followed
- Code reviews and static analysis are required before deployment
- Dynamic application security testing (DAST) is performed regularly
- Web application firewalls (WAF) protect against common attack vectors

## 5. Incident Response

${companyName} maintains a comprehensive incident response plan:

### Detection and Classification
1. Security events are monitored 24/7 through automated alerting systems
2. Incidents are classified by severity (Critical, High, Medium, Low)
3. A dedicated incident response team is on call at all times

### Response Process
1. **Identification** - Detect and confirm the security incident
2. **Containment** - Isolate affected systems to prevent further damage
3. **Eradication** - Remove the root cause of the incident
4. **Recovery** - Restore systems and services to normal operation
5. **Post-Incident Review** - Conduct a thorough analysis and document lessons learned

### Notification
- Affected users will be notified within 72 hours of a confirmed data breach
- Relevant regulatory authorities will be notified as required by applicable law
- Security incident reports are available upon request to ${email || websiteUrl}

## 6. Vulnerability Management

### Scanning and Assessment
- Automated vulnerability scanning is conducted on a weekly basis
- Penetration testing is performed at least annually by qualified third parties
- All identified vulnerabilities are triaged and prioritized based on severity and exploitability

### Remediation
- Critical vulnerabilities are addressed within 24 hours
- High-severity vulnerabilities are remediated within 7 days
- Medium and low-severity vulnerabilities are addressed within 30 days
- Emergency patches are deployed outside normal release cycles when necessary

### Responsible Disclosure
${companyName} maintains a responsible disclosure program. Security researchers may report vulnerabilities to ${email || websiteUrl}. We commit to:

- Acknowledging receipt of vulnerability reports within 48 hours
- Providing regular updates on remediation progress
- Not pursuing legal action against researchers who act in good faith

## 7. Employee Security Training

### Onboarding
- All new employees complete security awareness training within their first week
- Role-specific security training is provided for engineering and operations staff
- Employees must acknowledge and sign the information security policy

### Ongoing Training
- Annual security awareness refresher training is mandatory for all staff
- Phishing simulation exercises are conducted quarterly
- Security updates and threat briefings are shared regularly with all teams
- Specialized training is provided when new threats or technologies are introduced

## 8. Third-Party Security

### Vendor Assessment
- All third-party vendors undergo a security assessment before engagement
- Vendors handling sensitive data must demonstrate compliance with industry security standards
- Vendor security practices are reviewed annually

### Contractual Requirements
- Data processing agreements (DPAs) are required with all vendors who access customer data
- Vendors must maintain appropriate security certifications and insurance
- Right-to-audit clauses are included in vendor contracts
- Vendors must promptly notify ${companyName} of any security incidents affecting our data

## 9. Compliance Frameworks

${companyName} aligns its security practices with recognized industry standards and frameworks:

- **SOC 2 Type II** - Annual audits for security, availability, and confidentiality
- **ISO 27001** - Information security management system (ISMS) alignment
- **GDPR** - Compliance with European data protection regulations
- **CCPA** - Compliance with California Consumer Privacy Act requirements
- **OWASP** - Adherence to OWASP Top 10 security guidelines for application security

## 10. Physical Security

- Data centers used by ${companyName} are SOC 2 certified facilities
- Physical access to servers is restricted to authorized personnel
- Environmental controls including fire suppression and climate management are in place
- 24/7 surveillance and monitoring of all physical facilities

## 11. Business Continuity and Disaster Recovery

- Regular backups are performed and tested for recoverability
- Disaster recovery plans are documented and tested at least annually
- Recovery time objectives (RTO) and recovery point objectives (RPO) are defined for all critical systems
- Geographically distributed infrastructure ensures resilience against regional outages

## 12. Policy Updates

This Security Policy is reviewed and updated at least annually or whenever significant changes occur. The latest version is always available at ${websiteUrl}.

For security inquiries or to report a security concern, please contact ${companyName} at ${email || websiteUrl}.

---

*This Security Policy template was generated using LaunchKit. Please have this document reviewed by a legal professional before use.*`;
}
