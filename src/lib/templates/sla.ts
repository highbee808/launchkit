export interface SlaParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateSla(params: SlaParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Service Level Agreement (SLA)

**Effective Date:** ${effectiveDate}

## Introduction

This Service Level Agreement ("SLA") is a policy governing the use of the services provided by ${companyName} ("we", "us", "our", or "Provider") under the terms of the service agreement between ${companyName} and customers ("you", "your", or "Customer").

This SLA applies to the services available at ${websiteUrl} and any related services.

## Service Commitment

${companyName} will use commercially reasonable efforts to make the Service available with a Monthly Uptime Percentage of at least **99.9%** during any monthly billing cycle (the "Service Commitment").

## Definitions

### Monthly Uptime Percentage
The total number of minutes in a month minus the number of minutes of Downtime suffered in a month, divided by the total number of minutes in a month.

### Downtime
A period of time when the Service is unavailable or unreachable. Downtime does not include:

- Scheduled maintenance (with at least 48 hours notice)
- Force majeure events
- Issues caused by factors outside our reasonable control
- Issues resulting from your equipment, software, or network connections
- Issues caused by your actions or the actions of third parties

## Service Credits

If we fail to meet our Service Commitment, you may be eligible for a Service Credit.

### Credit Schedule

| Monthly Uptime Percentage | Service Credit |
|---------------------------|----------------|
| 99.0% - 99.9%             | 10% of monthly fee |
| 95.0% - 99.0%             | 25% of monthly fee |
| Below 95.0%               | 50% of monthly fee |

### Credit Request and Payment

To request a Service Credit:

1. Submit a claim to ${email || "our support team"} within 30 days of the incident
2. Include your account information and dates/times of unavailability
3. Include any relevant documentation or error logs

Service Credits are not refundable for cash and can only be applied to future payments.

## Support Services

### Support Channels

- **Email Support**: ${email || "support@example.com"}
- **Website**: ${websiteUrl}

### Response Times

| Priority | Description | Initial Response | Resolution Target |
|----------|-------------|------------------|-------------------|
| Critical | Service completely unavailable | 1 hour | 4 hours |
| High | Major feature unavailable | 4 hours | 24 hours |
| Medium | Minor feature impacted | 8 hours | 48 hours |
| Low | General questions | 24 hours | 5 business days |

### Support Hours

- **Standard Support**: Monday - Friday, 9 AM - 6 PM (local time)
- **Critical Issues**: 24/7 for service-affecting emergencies

## Maintenance

### Scheduled Maintenance

- We will provide at least **48 hours notice** for scheduled maintenance
- Maintenance windows will typically be during off-peak hours
- We will minimize the duration and frequency of maintenance windows

### Emergency Maintenance

- Emergency maintenance may be performed without prior notice when necessary to protect the service or security
- We will notify you as soon as reasonably practicable

## Security

We implement and maintain the following security measures:

- **Encryption**: TLS/SSL encryption for data in transit
- **Access Control**: Role-based access controls and authentication
- **Monitoring**: 24/7 infrastructure monitoring and alerting
- **Backups**: Regular automated backups with secure storage
- **Incident Response**: Documented incident response procedures

## Data Protection

- We maintain regular backups of your data
- Backup frequency: Daily incremental, weekly full backups
- Backup retention: 30 days minimum
- Data recovery available upon request

## Performance Standards

We commit to the following performance standards:

| Metric | Target |
|--------|--------|
| Page Load Time | < 3 seconds (average) |
| API Response Time | < 500ms (95th percentile) |
| Error Rate | < 0.1% of requests |

## Exclusions

This SLA does not apply to:

- Features labeled as "beta", "preview", or "experimental"
- Free or trial accounts
- Circumstances beyond our reasonable control
- Your breach of the service agreement
- Use not in accordance with documentation

## SLA Violations

If we repeatedly fail to meet our SLA commitments:

- You may terminate your service with 30 days notice
- You will receive a pro-rated refund for any prepaid fees

## Modifications

We may modify this SLA from time to time. Material changes will be communicated with at least 30 days notice. Continued use of the service after changes constitutes acceptance of the modified SLA.

## Contact Information

For questions about this SLA or to report issues:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

---

*This SLA was generated using LaunchKit. Customize the specific terms to match your service offerings.*`;
}
