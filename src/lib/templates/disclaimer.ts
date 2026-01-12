export interface DisclaimerParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
}

export function generateDisclaimer(params: DisclaimerParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Disclaimer

**Last Updated:** ${effectiveDate}

## General Information

The information provided on ${websiteUrl} (the "Website") by ${companyName} ("we", "us", or "our") is for general informational purposes only. All information on the Website is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Website.

## No Professional Advice

The Website does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice.

Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice, including but not limited to:

- Legal advice
- Financial or investment advice
- Medical or health advice
- Tax advice
- Business advice

THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE WEBSITE IS SOLELY AT YOUR OWN RISK.

## External Links Disclaimer

The Website may contain links to external websites that are not provided or maintained by or in any way affiliated with ${companyName}.

Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. We have no control over the content of linked sites and assume no responsibility for:

- The content of any linked website
- Any changes or updates to linked websites
- The privacy policies of linked websites
- The security of linked websites

## Errors and Omissions Disclaimer

While we have made every attempt to ensure that the information contained on this Website is correct, ${companyName} is not responsible for any errors or omissions, or for the results obtained from the use of this information.

All information on the Website is provided "as is", with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information, and without warranty of any kind, express or implied.

## Fair Use Disclaimer

This Website may contain copyrighted material, the use of which may not have been specifically authorized by the copyright owner. This material is available in an effort to explain issues relevant to our content or to illustrate certain points.

The material contained on this Website is distributed without profit for research and educational purposes. Only small portions of original work are being used and those are being used for the transformative purpose of commentary and criticism.

We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the US Copyright Law.

## Views Expressed Disclaimer

Any views or opinions represented on this Website are personal and belong solely to the author and do not represent those of people, institutions, or organizations that the owner may or may not be associated with in professional or personal capacity, unless explicitly stated.

## No Responsibility Disclaimer

In no event shall ${companyName}, nor any of its officers, directors, employees, or agents, be liable to you for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract, tort, or otherwise.

${companyName} shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.

## "Use at Your Own Risk" Disclaimer

All information on this Website is provided "as is", with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information.

Your use of any information or materials on this Website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this Website meet your specific requirements.

## Contact Us

If you have any questions about this Disclaimer, please contact us:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

---

*This Disclaimer was generated using LaunchKit.*`;
}
