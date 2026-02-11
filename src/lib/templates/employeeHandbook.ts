export interface EmployeeHandbookParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateEmployeeHandbook(params: EmployeeHandbookParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Employee Handbook

**Effective Date:** ${effectiveDate}

**Company:** ${companyName}
**Website:** ${websiteUrl}
${email ? `**Contact:** ${email}` : ""}

---

## 1. Welcome and Company Mission

### Welcome
Welcome to ${companyName}! We are thrilled to have you as part of our team. This Employee Handbook ("Handbook") is designed to introduce you to our company, provide an overview of our policies and expectations, and serve as a reference throughout your employment.

### Our Mission
${companyName} is committed to delivering exceptional products and services while fostering a collaborative, inclusive, and innovative workplace. We believe that our people are our greatest asset, and we are dedicated to supporting your growth and success.

### About This Handbook
This Handbook is not a contract of employment. ${companyName} reserves the right to modify, revoke, or supplement any policy at any time, with or without notice. The most current version of this Handbook is available at ${websiteUrl} or through your HR representative.

## 2. Employment Policies

### 2.1 Equal Employment Opportunity
${companyName} is an equal opportunity employer. We do not discriminate based on race, color, religion, sex, national origin, age, disability, genetic information, sexual orientation, gender identity, veteran status, or any other protected characteristic under applicable law.

### 2.2 At-Will Employment
Unless otherwise specified in a written employment agreement, all employment with ${companyName} is "at-will," meaning either you or ${companyName} may terminate the employment relationship at any time, with or without cause or notice.

### 2.3 Anti-Harassment and Anti-Discrimination
${companyName} prohibits harassment, discrimination, and retaliation of any kind. This includes:

- Sexual harassment, including unwelcome sexual advances, requests for sexual favors, and other verbal or physical conduct of a sexual nature
- Verbal, physical, or visual conduct that creates a hostile, intimidating, or offensive work environment
- Retaliation against anyone who reports harassment or participates in an investigation

All complaints should be reported to HR at ${email ? email : "[HR contact]"} or through the company's reporting channels.

### 2.4 Immigration Compliance
${companyName} complies with all applicable immigration laws and requires all employees to provide documentation verifying their identity and eligibility to work.

## 3. Workplace Conduct

### 3.1 Professional Standards
All employees are expected to:

- Conduct themselves with integrity, honesty, and professionalism
- Treat colleagues, clients, and partners with respect and courtesy
- Comply with all company policies, procedures, and applicable laws
- Protect company assets and use them responsibly

### 3.2 Dress Code
${companyName} maintains a [business casual / professional / relaxed] dress code. Employees should dress appropriately for their role and any scheduled meetings or client interactions.

### 3.3 Attendance and Punctuality
Regular and punctual attendance is essential. Employees must notify their supervisor as soon as possible if they will be late or absent. Excessive absenteeism or tardiness may result in disciplinary action.

### 3.4 Conflict of Interest
Employees must avoid situations where personal interests could conflict with the interests of ${companyName}. Any potential conflicts must be disclosed to management in writing.

### 3.5 Use of Company Property and Technology
Company equipment, systems, and technology are provided for business purposes. Limited personal use may be permitted, but employees should have no expectation of privacy when using company systems. ${companyName} reserves the right to monitor usage in accordance with applicable law.

## 4. Compensation and Benefits

### 4.1 Pay Schedule
Employees are paid on a [weekly / bi-weekly / semi-monthly / monthly] basis. Pay is distributed via direct deposit or check on the designated payday.

### 4.2 Overtime
Non-exempt employees are eligible for overtime pay in accordance with applicable federal and state laws. Overtime must be pre-approved by your supervisor.

### 4.3 Benefits Overview
${companyName} offers the following benefits to eligible employees (details are available in the separate Benefits Guide):

- Health insurance (medical, dental, vision)
- Retirement plan (401(k) or equivalent)
- Life and disability insurance
- Employee assistance program (EAP)
- Professional development and training opportunities

Benefits eligibility and details may vary based on employment classification and tenure. Contact HR at ${email ? email : "[HR contact]"} for specific information.

### 4.4 Expense Reimbursement
Employees may be reimbursed for reasonable business expenses incurred in the performance of their duties. All expenses must be pre-approved and submitted with appropriate documentation within **thirty (30) days** of being incurred.

## 5. Time Off

### 5.1 Paid Time Off (PTO)
${companyName} provides paid time off to eligible employees. PTO accrual rates and policies are outlined in the Benefits Guide. Employees should request time off in advance through the designated system or by notifying their supervisor.

### 5.2 Holidays
${companyName} observes designated company holidays each year. A list of observed holidays is published annually and available at ${websiteUrl} or from HR.

### 5.3 Sick Leave
Employees may use sick leave for personal illness, medical appointments, or to care for an ill family member, in accordance with applicable law. Absences of more than **three (3) consecutive days** may require medical documentation.

### 5.4 Family and Medical Leave
Eligible employees may take unpaid, job-protected leave under the Family and Medical Leave Act (FMLA) or applicable state leave laws. Contact HR at ${email ? email : "[HR contact]"} for eligibility and procedures.

### 5.5 Other Leave
${companyName} also provides leave for jury duty, bereavement, military service, and other circumstances as required by law. Details are available from HR.

## 6. Performance

### 6.1 Performance Reviews
${companyName} conducts performance reviews on a [quarterly / semi-annual / annual] basis. Reviews provide an opportunity to discuss achievements, areas for growth, and career development goals.

### 6.2 Feedback
We encourage open, constructive feedback at all levels. Employees are welcome to discuss concerns, suggestions, or ideas with their supervisor or HR at any time.

### 6.3 Disciplinary Process
When performance or conduct issues arise, ${companyName} generally follows a progressive discipline process:

1. **Verbal Warning** — Informal discussion of the issue and expectations
2. **Written Warning** — Formal documentation of the issue and required improvements
3. **Performance Improvement Plan (PIP)** — Structured plan with specific goals and timelines
4. **Suspension or Termination** — If improvement is not demonstrated

${companyName} reserves the right to skip steps in the progressive discipline process depending on the severity of the issue.

## 7. Health and Safety

### 7.1 Commitment to Safety
${companyName} is committed to providing a safe and healthy work environment. All employees are responsible for following safety procedures and reporting unsafe conditions or incidents immediately.

### 7.2 Workplace Violence
${companyName} has a zero-tolerance policy for workplace violence. This includes threats, physical altercations, intimidation, and possession of weapons on company premises.

### 7.3 Drug and Alcohol Policy
${companyName} maintains a drug-free workplace. The use, possession, sale, or distribution of illegal drugs on company premises or during work hours is strictly prohibited. Employees must not report to work under the influence of drugs or alcohol.

### 7.4 Workers' Compensation
Employees who suffer a work-related injury or illness are eligible for workers' compensation benefits. All work-related injuries must be reported to your supervisor and HR immediately.

### 7.5 Emergency Procedures
Emergency procedures and evacuation plans are posted in the workplace. All employees should familiarize themselves with the nearest exits and assembly points.

## 8. Termination

### 8.1 Voluntary Resignation
Employees wishing to resign are requested to provide at least **two (2) weeks** written notice. Notice should be submitted to your supervisor and HR.

### 8.2 Involuntary Termination
${companyName} may terminate employment for reasons including, but not limited to, poor performance, misconduct, violation of company policy, or business necessity.

### 8.3 Exit Process
Upon separation from ${companyName}, employees must:

- Return all company property, including equipment, keys, badges, and documents
- Participate in an exit interview if requested
- Ensure all outstanding expenses and obligations are settled

### 8.4 Final Pay
Final paychecks will be issued in accordance with applicable state law. Accrued, unused PTO will be paid out as required by law and company policy.

## 9. Acknowledgment

By continuing your employment with ${companyName}, you acknowledge that you have received, read, and understood this Employee Handbook. If you have questions about any policy, please contact HR at ${email ? email : "[HR contact]"} or visit ${websiteUrl}.

---

*This Employee Handbook template was generated using LaunchKit. Please have this document reviewed by a legal professional before use.*`;
}
