export interface OpenSourceLicenseParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateOpenSourceLicense(params: OpenSourceLicenseParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Open Source License

**Effective Date:** ${effectiveDate}

**Copyright (c) ${effectiveDate.split("-")[0] || new Date().getFullYear()} ${companyName}**

**Website:** ${websiteUrl}
${email ? `Contact: ${email}` : ""}

---

## MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

### Copyright Notice Requirement

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

---

## Grant of Rights

${companyName} grants you the following rights with respect to the Software:

### Usage Rights
- **Use** - You may use the Software for any purpose, including commercial applications
- **Copy** - You may make copies of the Software
- **Modify** - You may modify the Software and create derivative works
- **Merge** - You may merge the Software with other software
- **Publish** - You may publish and make the Software publicly available
- **Distribute** - You may distribute the Software to third parties
- **Sublicense** - You may grant sublicenses to third parties
- **Sell** - You may sell copies of the Software

### No Restrictions on Purpose
This license places no restrictions on the field of endeavor. You may use the Software in any context, including:

1. Personal projects and experimentation
2. Commercial products and services
3. Academic and research purposes
4. Government and public sector applications
5. Non-profit and charitable purposes

## Conditions

The following conditions must be met when using, copying, modifying, or distributing the Software:

### 1. Copyright Notice Preservation
- The original copyright notice attributing ${companyName} must be retained in all copies or substantial portions of the Software
- This includes both source code distributions and compiled or binary distributions
- If you create a derivative work, you must include the original copyright notice alongside any additional notices

### 2. License Inclusion
- A copy of this license must accompany all distributions of the Software
- The license may be included as a file (e.g., LICENSE, LICENSE.txt, or LICENSE.md) in the root directory of the distribution
- For binary distributions, the license may be included in the documentation or a notices file

### 3. Attribution
- While not strictly required beyond the copyright notice, ${companyName} appreciates attribution in documentation, about pages, or credits sections
- Suggested attribution format: "This project includes software developed by ${companyName} (${websiteUrl})"

## Contributor Agreement

If you choose to contribute to this Software:

- You represent that you have the right to make such contributions
- You grant ${companyName} and all recipients of the Software a perpetual, worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your contributions
- You understand that your contributions will be licensed under the same terms as this license
- ${companyName} is not obligated to accept or incorporate any contributions

## Trademarks

This license does not grant permission to use the trade names, trademarks, service marks, or product names of ${companyName}, except as required for reasonable and customary use in describing the origin of the Software and reproducing the content of the copyright notice.

## Disclaimer of Warranty

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.

${companyName.toUpperCase()} MAKES NO REPRESENTATIONS OR WARRANTIES REGARDING:

- The suitability of the Software for any particular purpose
- The accuracy, completeness, or reliability of the Software
- That the Software will be uninterrupted, timely, secure, or error-free
- That defects in the Software will be corrected
- That the Software is free of viruses or other harmful components

## Limitation of Liability

IN NO EVENT SHALL ${companyName.toUpperCase()}, ITS AUTHORS, OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

This limitation applies to, but is not limited to:

- Direct, indirect, incidental, special, consequential, or punitive damages
- Loss of profits, data, use, goodwill, or other intangible losses
- Damages arising from the inability to use the Software
- Damages arising from unauthorized access to or alteration of your data
- Any other matter relating to the Software

## No Support Obligation

${companyName} is under no obligation to provide:

- Technical support or assistance
- Bug fixes, patches, or updates
- Documentation beyond what is provided with the Software
- Consultation or professional services

For inquiries regarding this Software, you may contact ${companyName} at ${websiteUrl}.

## Governing Law

This license shall be governed by and interpreted in accordance with the laws of the jurisdiction in which ${companyName} is established, without regard to conflict of law provisions.

---

*This Open Source License template was generated using LaunchKit. Please have this document reviewed by a legal professional before use.*`;
}
