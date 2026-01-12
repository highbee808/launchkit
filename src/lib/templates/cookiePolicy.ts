export interface CookiePolicyParams {
  companyName: string;
  websiteUrl: string;
  email: string;
  effectiveDate: string;
  dataCollected: string[];
}

export function generateCookiePolicy(params: CookiePolicyParams): string {
  const { companyName, websiteUrl, email, effectiveDate } = params;

  return `# Cookie Policy

**Last Updated:** ${effectiveDate}

## What Are Cookies?

Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit ${websiteUrl}. They help us provide you with a better experience by remembering your preferences, understanding how you use our site, and improving our services.

This Cookie Policy explains what cookies are, how ${companyName} ("we", "us", or "our") uses them, and your choices regarding cookies.

## How We Use Cookies

We use cookies for the following purposes:

### Essential Cookies

These cookies are necessary for the website to function properly. They enable core functionality such as:

- User authentication and secure login
- Shopping cart functionality
- Payment processing
- Security features

**These cookies cannot be disabled** as they are essential for the website to work.

### Performance & Analytics Cookies

These cookies help us understand how visitors interact with our website by collecting anonymous information:

- Pages visited and time spent on each page
- Traffic sources and how users arrived at our site
- Browser and device information
- Error messages encountered

We use this data to improve our website performance and user experience.

### Functionality Cookies

These cookies remember your preferences and choices to provide enhanced features:

- Language preferences
- Region or location settings
- Username for faster login
- Customized layouts or themes

### Advertising & Marketing Cookies

These cookies are used to deliver relevant advertisements and track ad campaign performance:

- Interest-based advertising
- Retargeting campaigns
- Social media integration
- Marketing effectiveness measurement

## Types of Cookies We Use

### First-Party Cookies

Cookies set directly by ${companyName} when you visit our website.

### Third-Party Cookies

Cookies set by external services we use, including:

- **Google Analytics**: Website analytics and performance tracking
- **Google Ads**: Advertising and conversion tracking
- **Facebook Pixel**: Social media advertising and analytics
- **Stripe/PayPal**: Payment processing (if applicable)
- **Intercom/Zendesk**: Customer support chat (if applicable)

## Cookie Duration

### Session Cookies

Temporary cookies that are deleted when you close your browser. Used for:
- Maintaining your session while browsing
- Keeping items in your shopping cart

### Persistent Cookies

Cookies that remain on your device for a set period or until you delete them. Used for:
- Remembering your login credentials
- Storing your preferences
- Analytics tracking

## Managing Your Cookie Preferences

### Browser Settings

Most web browsers allow you to control cookies through their settings:

- **Chrome**: Settings → Privacy and Security → Cookies
- **Firefox**: Options → Privacy & Security → Cookies
- **Safari**: Preferences → Privacy → Cookies
- **Edge**: Settings → Privacy → Cookies

### Opt-Out Links

You can opt out of specific third-party cookies:

- Google Analytics: https://tools.google.com/dlpage/gaoptout
- Google Ads: https://adssettings.google.com
- Facebook: https://www.facebook.com/settings/?tab=ads

### Cookie Consent

When you first visit our website, you will see a cookie consent banner. You can:

- **Accept All**: Enable all cookies for the best experience
- **Reject Non-Essential**: Only enable essential cookies
- **Customize**: Choose which cookie categories to enable

You can change your preferences at any time through our cookie settings.

## Impact of Disabling Cookies

If you choose to disable cookies, please note:

- Some features may not function properly
- You may need to re-enter information on each visit
- Personalized content may not be available
- Some pages may not load correctly

## Do Not Track Signals

Some browsers have a "Do Not Track" (DNT) feature. We currently do not respond to DNT signals. However, you can manage cookies through the methods described above.

## Updates to This Policy

We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We will post the updated policy on this page with a new "Last Updated" date.

We encourage you to review this policy periodically to stay informed about our use of cookies.

## More Information About Cookies

For more information about cookies, including how to see what cookies have been set and how to manage and delete them, visit:

- https://www.allaboutcookies.org
- https://www.youronlinechoices.eu (EU users)
- https://optout.networkadvertising.org (US users)

## Contact Us

If you have questions about our use of cookies, please contact us:

**${companyName}**
${email ? `Email: ${email}` : ""}
Website: ${websiteUrl}

---

*This Cookie Policy was generated using LaunchKit.*`;
}
