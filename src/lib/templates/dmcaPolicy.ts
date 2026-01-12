export interface DmcaPolicyParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateDmcaPolicy(params: DmcaPolicyParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# DMCA Policy

**Last Updated:** ${effectiveDate}

## Introduction

${companyName} ("we", "us", or "our") respects the intellectual property rights of others and expects our users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), we will respond expeditiously to claims of copyright infringement committed using our website (${websiteUrl}) if such claims are reported to our Designated Copyright Agent.

## DMCA Notice Requirements

If you are a copyright owner, or authorized to act on behalf of one, and you believe that copyrighted work has been infringed, please report your notice of infringement to us by providing our Designated Copyright Agent with the following information in writing:

### Required Information

1. **Physical or Electronic Signature**: A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright interest.

2. **Identification of Copyrighted Work**: A description of the copyrighted work that you claim has been infringed. If multiple copyrighted works on our Website are covered by your notice, you may provide a representative list.

3. **Identification of Infringing Material**: Identification of the material that you claim is infringing and that is to be removed or access to which is to be disabled, including at a minimum the URL or other specific location on our Website where the material is located.

4. **Contact Information**: Your address, telephone number, and email address.

5. **Good Faith Statement**: A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.

6. **Accuracy Statement**: A statement, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or are authorized to act on behalf of the copyright owner.

## Designated Copyright Agent

All DMCA notices should be sent to our Designated Copyright Agent:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

Please use "DMCA Notice" in the subject line.

## Counter-Notification

If you believe that material you posted on our Website was removed or access to it was disabled by mistake or misidentification, you may file a counter-notification with us by providing the following information:

1. **Physical or Electronic Signature**: Your physical or electronic signature.

2. **Identification of Removed Material**: Identification of the material that has been removed or to which access has been disabled, and the location at which the material appeared before it was removed or access was disabled.

3. **Statement Under Penalty of Perjury**: A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification.

4. **Consent to Jurisdiction**: A statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located, or if your address is outside of the United States, for any judicial district in which the service provider may be found.

5. **Acceptance of Service**: A statement that you will accept service of process from the person who provided notification of the alleged infringement.

## Processing of Notices

Upon receipt of a valid DMCA notice, we will:

- Remove or disable access to the allegedly infringing material
- Notify the content provider, member, or user that material has been removed or disabled
- Provide the content provider with a copy of the takedown notice

Upon receipt of a valid counter-notification, we will:

- Promptly provide the complainant with a copy of the counter-notification
- Inform the complainant that we will replace the removed material or cease disabling access to it within 10 business days
- Replace the removed material or restore access within 10 to 14 business days after receipt of the counter-notification, unless our Designated Copyright Agent receives notice that a court action has been filed seeking to restrain the user from engaging in infringing activity

## Repeat Infringers

In accordance with the DMCA and other applicable laws, we have adopted a policy of terminating, in appropriate circumstances and at our sole discretion, users who are deemed to be repeat infringers. We may also, at our sole discretion, limit access to our Website and/or terminate accounts of any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.

## Misrepresentation Warning

Under Section 512(f) of the DMCA, any person who knowingly materially misrepresents:

- That material or activity is infringing, or
- That material or activity was removed or disabled by mistake or misidentification

may be subject to liability for damages, including costs and attorneys' fees.

## Contact Us

If you have any questions about this DMCA Policy, please contact us:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

---

*This DMCA Policy was generated using LaunchKit.*`;
}
