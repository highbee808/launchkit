"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { saveDocument } from "@/lib/documentHistory";
import { renderInlineMarkdown, renderInlineMarkdownHTML } from "@/lib/markdown";
import { generatePrivacyPolicy } from "@/lib/templates/privacyPolicy";
import { generateTermsOfService } from "@/lib/templates/termsOfService";
import { generateAcceptableUsePolicy } from "@/lib/templates/acceptableUse";
import { generateRefundPolicy } from "@/lib/templates/refundPolicy";
import { generateGdprChecklist } from "@/lib/templates/gdprChecklist";
import { generateCookiePolicy } from "@/lib/templates/cookiePolicy";
import { generateDisclaimer } from "@/lib/templates/disclaimer";
import { generateDmcaPolicy } from "@/lib/templates/dmcaPolicy";
import { generateAccessibilityStatement } from "@/lib/templates/accessibilityStatement";
import { generateNda } from "@/lib/templates/nda";
import { generateSla } from "@/lib/templates/sla";
import { generateDpa } from "@/lib/templates/dpa";
import { generateCcpaNotice } from "@/lib/templates/ccpaNotice";
import { generateCoppaPolicy } from "@/lib/templates/coppaPolicy";
import { generateDataRetention } from "@/lib/templates/dataRetention";
import { generateEula } from "@/lib/templates/eula";
import { generateApiTerms } from "@/lib/templates/apiTerms";
import { generateSecurityPolicy } from "@/lib/templates/securityPolicy";
import { generateOpenSourceLicense } from "@/lib/templates/openSourceLicense";
import { generateShippingPolicy } from "@/lib/templates/shippingPolicy";
import { generateReturnPolicy } from "@/lib/templates/returnPolicy";
import { generateWarrantyPolicy } from "@/lib/templates/warrantyPolicy";
import { generateAffiliateAgreement } from "@/lib/templates/affiliateAgreement";
import { generateCommunityGuidelines } from "@/lib/templates/communityGuidelines";
import { generateSocialMediaPolicy } from "@/lib/templates/socialMediaPolicy";
import { generateContentPolicy } from "@/lib/templates/contentPolicy";
import { generateAntiSpamPolicy } from "@/lib/templates/antiSpamPolicy";
import { generateFreelancerAgreement } from "@/lib/templates/freelancerAgreement";
import { generateEmployeeHandbook } from "@/lib/templates/employeeHandbook";
import { generateConsultingAgreement } from "@/lib/templates/consultingAgreement";
import { generateIpAssignment } from "@/lib/templates/ipAssignment";

const documentConfig: Record<string, { label: string; filename: string }> = {
  privacy: { label: "Privacy Policy", filename: "privacy-policy" },
  terms: { label: "Terms of Service", filename: "terms-of-service" },
  cookies: { label: "Cookie Policy", filename: "cookie-policy" },
  aup: { label: "Acceptable Use Policy", filename: "acceptable-use-policy" },
  refund: { label: "Refund Policy", filename: "refund-policy" },
  gdpr: { label: "GDPR Checklist", filename: "gdpr-checklist" },
  disclaimer: { label: "Disclaimer", filename: "disclaimer" },
  dmca: { label: "DMCA Policy", filename: "dmca-policy" },
  accessibility: { label: "Accessibility Statement", filename: "accessibility-statement" },
  nda: { label: "NDA", filename: "nda" },
  sla: { label: "SLA", filename: "sla" },
  dpa: { label: "Data Processing Agreement", filename: "dpa" },
  ccpa: { label: "CCPA Notice", filename: "ccpa-notice" },
  coppa: { label: "COPPA Policy", filename: "coppa-policy" },
  dataretention: { label: "Data Retention Policy", filename: "data-retention-policy" },
  eula: { label: "EULA", filename: "eula" },
  apiterms: { label: "API Terms of Use", filename: "api-terms-of-use" },
  security: { label: "Security Policy", filename: "security-policy" },
  opensource: { label: "Open Source License", filename: "open-source-license" },
  shipping: { label: "Shipping Policy", filename: "shipping-policy" },
  returns: { label: "Return & Exchange Policy", filename: "return-exchange-policy" },
  warranty: { label: "Warranty Policy", filename: "warranty-policy" },
  affiliate: { label: "Affiliate Agreement", filename: "affiliate-agreement" },
  community: { label: "Community Guidelines", filename: "community-guidelines" },
  socialmedia: { label: "Social Media Policy", filename: "social-media-policy" },
  content: { label: "Content Policy", filename: "content-policy" },
  antispam: { label: "Anti-Spam Policy", filename: "anti-spam-policy" },
  freelancer: { label: "Freelancer Agreement", filename: "freelancer-agreement" },
  handbook: { label: "Employee Handbook", filename: "employee-handbook" },
  consulting: { label: "Consulting Agreement", filename: "consulting-agreement" },
  ipassignment: { label: "IP Assignment", filename: "ip-assignment" },
};

function PreviewContent() {
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);

  const company = searchParams.get("company") || "Your Company";
  const website = searchParams.get("website") || "https://example.com";
  const email = searchParams.get("email") || "";
  const docType = searchParams.get("type") || "privacy";
  const dataParam = searchParams.get("data") || "";

  const data = useMemo(() => (dataParam ? dataParam.split(",") : []), [dataParam]);

  const effectiveDate = useMemo(
    () =>
      new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    []
  );

  const document = useMemo(() => {
    const baseParams = { companyName: company, websiteUrl: website, email, effectiveDate };

    switch (docType) {
      case "terms":
        return generateTermsOfService(baseParams);
      case "cookies":
        return generateCookiePolicy({ ...baseParams, dataCollected: data });
      case "aup":
        return generateAcceptableUsePolicy(baseParams);
      case "refund":
        return generateRefundPolicy(baseParams);
      case "gdpr":
        return generateGdprChecklist(baseParams);
      case "disclaimer":
        return generateDisclaimer(baseParams);
      case "dmca":
        return generateDmcaPolicy(baseParams);
      case "accessibility":
        return generateAccessibilityStatement(baseParams);
      case "nda":
        return generateNda(baseParams);
      case "sla":
        return generateSla(baseParams);
      case "dpa":
        return generateDpa(baseParams);
      case "ccpa":
        return generateCcpaNotice(baseParams);
      case "coppa":
        return generateCoppaPolicy(baseParams);
      case "dataretention":
        return generateDataRetention(baseParams);
      case "eula":
        return generateEula(baseParams);
      case "apiterms":
        return generateApiTerms(baseParams);
      case "security":
        return generateSecurityPolicy(baseParams);
      case "opensource":
        return generateOpenSourceLicense(baseParams);
      case "shipping":
        return generateShippingPolicy(baseParams);
      case "returns":
        return generateReturnPolicy(baseParams);
      case "warranty":
        return generateWarrantyPolicy(baseParams);
      case "affiliate":
        return generateAffiliateAgreement(baseParams);
      case "community":
        return generateCommunityGuidelines(baseParams);
      case "socialmedia":
        return generateSocialMediaPolicy(baseParams);
      case "content":
        return generateContentPolicy(baseParams);
      case "antispam":
        return generateAntiSpamPolicy(baseParams);
      case "freelancer":
        return generateFreelancerAgreement(baseParams);
      case "handbook":
        return generateEmployeeHandbook(baseParams);
      case "consulting":
        return generateConsultingAgreement(baseParams);
      case "ipassignment":
        return generateIpAssignment(baseParams);
      case "privacy":
      default:
        return generatePrivacyPolicy({ ...baseParams, dataCollected: data });
    }
  }, [company, website, email, docType, data, effectiveDate]);

  const config = documentConfig[docType] || documentConfig.privacy;

  // Save to history on first load
  const hasSaved = useRef(false);
  useEffect(() => {
    if (!hasSaved.current && document && company && docType) {
      saveDocument({
        type: docType,
        companyName: company,
        websiteUrl: website,
        email,
        data,
        content: document,
      });
      hasSaved.current = true;
    }
  }, [document, docType, company, website, email, data]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(document);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadMarkdown = () => {
    const blob = new Blob([document], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = window.document.createElement("a");
    a.href = url;
    a.download = `${config.filename}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadHTML = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${config.label} - ${company}</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px 20px; line-height: 1.7; color: #333; background: #fafafa; }
    h1 { color: #111; border-bottom: 3px solid #1DB954; padding-bottom: 12px; margin-bottom: 24px; }
    h2 { color: #222; margin-top: 36px; padding-top: 16px; border-top: 1px solid #eee; }
    h3 { color: #444; margin-top: 24px; }
    ul, ol { padding-left: 24px; }
    li { margin: 10px 0; }
    p { margin: 16px 0; }
    strong { color: #111; }
    code { background: #f0f0f0; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
    a { color: #1DB954; text-decoration: underline; }
  </style>
</head>
<body>
${document
  .split("\n")
  .map((line: string) => {
    if (line.startsWith("# ")) return `<h1>${renderInlineMarkdownHTML(line.slice(2))}</h1>`;
    if (line.startsWith("## ")) return `<h2>${renderInlineMarkdownHTML(line.slice(3))}</h2>`;
    if (line.startsWith("### ")) return `<h3>${renderInlineMarkdownHTML(line.slice(4))}</h3>`;
    if (line.startsWith("- ")) return `<ul-item><li>${renderInlineMarkdownHTML(line.slice(2))}</li></ul-item>`;
    if (/^\d+\.\s/.test(line)) {
      const m = line.match(/^\d+\.\s(.+)$/);
      return m ? `<ol-item><li>${renderInlineMarkdownHTML(m[1])}</li></ol-item>` : `<p>${renderInlineMarkdownHTML(line)}</p>`;
    }
    if (line.startsWith("---")) return "<hr>";
    if (line.trim() === "") return "";
    return `<p>${renderInlineMarkdownHTML(line)}</p>`;
  })
  .join("\n")
  .replace(/(<ul-item><li>.*?<\/li><\/ul-item>\n?)+/g, (match: string) => `<ul>${match.replace(/<\/?ul-item>/g, "")}</ul>`)
  .replace(/(<ol-item><li>.*?<\/li><\/ol-item>\n?)+/g, (match: string) => `<ol>${match.replace(/<\/?ol-item>/g, "")}</ol>`)}
</body>
</html>`;
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = window.document.createElement("a");
    a.href = url;
    a.download = `${config.filename}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen pb-40 md:pb-8 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 gradient-mesh -z-10" />

      {/* Mobile Header - Sticky */}
      <div className="sticky top-0 z-40 md:relative">
        <div className="glass-strong border-b border-border/50 md:bg-transparent md:border-none md:backdrop-blur-none">
          <div className="flex items-center justify-between px-4 py-3 md:py-0 md:pt-8">
            {/* Back button */}
            <Link
              href="/generated"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors press-scale md:hidden"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              <span className="text-sm font-medium">Back</span>
            </Link>

            {/* Document type badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold text-primary truncate max-w-[140px]">
                {config.label}
              </span>
            </div>

            {/* Desktop: Empty space for alignment */}
            <div className="w-16 md:hidden" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 pt-4 md:pt-8">
        <div className="max-w-4xl mx-auto">

          {/* Desktop Header */}
          <div className="hidden md:block text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              Document{" "}
              <span className="font-display italic text-primary">Ready</span>
            </h1>
            <p className="text-muted-foreground">
              {config.label} for <span className="text-foreground font-medium">{company}</span>
            </p>
          </div>

          {/* Mobile: Company info card */}
          <div className="md:hidden mb-4 animate-fade-in">
            <div className="card-premium rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h1 className="font-semibold text-foreground truncate">{company}</h1>
                  <p className="text-xs text-muted-foreground truncate">{website}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Document Preview Card */}
          <div className="animate-fade-in delay-100">
            <div className="card-premium rounded-2xl overflow-hidden">
              {/* Document header bar */}
              <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border/30 bg-secondary/20">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono truncate">
                    {config.filename}.md
                  </span>
                </div>
                {/* Desktop quick actions */}
                <div className="hidden md:flex items-center gap-2">
                  <Button
                    onClick={copyToClipboard}
                    variant="ghost"
                    size="sm"
                    className="h-8 px-3 text-xs text-muted-foreground hover:text-foreground"
                  >
                    {copied ? (
                      <>
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 mr-1.5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Copied
                      </>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                        </svg>
                        Copy
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={downloadMarkdown}
                    variant="ghost"
                    size="sm"
                    className="h-8 px-3 text-xs text-muted-foreground hover:text-foreground"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    .md
                  </Button>
                  <Button
                    onClick={downloadHTML}
                    variant="ghost"
                    size="sm"
                    className="h-8 px-3 text-xs text-muted-foreground hover:text-foreground"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                    .html
                  </Button>
                </div>
              </div>

              {/* Document content */}
              <div className="p-4 sm:p-6 max-h-[60vh] md:max-h-[70vh] overflow-y-auto scrollbar-hide">
                <div className="prose prose-invert prose-sm max-w-none">
                  <div className="space-y-1">
                    {document.split("\n").map((line, i) => {
                      if (line.startsWith("# ")) {
                        return (
                          <h1 key={i} className="text-xl sm:text-2xl font-bold text-foreground mb-4 mt-0 leading-tight">
                            {renderInlineMarkdown(line.replace("# ", ""))}
                          </h1>
                        );
                      }
                      if (line.startsWith("## ")) {
                        return (
                          <h2 key={i} className="text-base sm:text-lg font-semibold text-foreground mt-6 mb-3 leading-tight">
                            {renderInlineMarkdown(line.replace("## ", ""))}
                          </h2>
                        );
                      }
                      if (line.startsWith("### ")) {
                        return (
                          <h3 key={i} className="text-sm sm:text-base font-semibold text-foreground/90 mt-4 mb-2 leading-tight">
                            {renderInlineMarkdown(line.replace("### ", ""))}
                          </h3>
                        );
                      }
                      if (line.startsWith("**") && line.endsWith("**")) {
                        return (
                          <p key={i} className="text-sm font-semibold text-foreground/80 mb-2">
                            {line.replace(/\*\*/g, "")}
                          </p>
                        );
                      }
                      if (line.startsWith("- ")) {
                        return (
                          <div key={i} className="flex gap-2 ml-2 sm:ml-4 mb-1 text-sm text-muted-foreground">
                            <span className="text-primary shrink-0">•</span>
                            <span>{renderInlineMarkdown(line.replace("- ", ""))}</span>
                          </div>
                        );
                      }
                      if (/^\d+\.\s/.test(line)) {
                        const match = line.match(/^(\d+)\.\s(.+)$/);
                        if (match) {
                          return (
                            <div key={i} className="flex gap-2 ml-2 sm:ml-4 mb-1 text-sm text-muted-foreground">
                              <span className="text-primary shrink-0 font-medium">{match[1]}.</span>
                              <span>{renderInlineMarkdown(match[2])}</span>
                            </div>
                          );
                        }
                      }
                      if (line.startsWith("---")) {
                        return <hr key={i} className="border-border/30 my-6" />;
                      }
                      if (line.startsWith("*") && line.endsWith("*") && !line.startsWith("**")) {
                        return (
                          <p key={i} className="text-xs text-muted-foreground/60 italic mt-4">
                            {line.replace(/^\*|\*$/g, "")}
                          </p>
                        );
                      }
                      if (line.match(/^[A-Z][A-Z\s]+$/)) {
                        return (
                          <p key={i} className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2">
                            {line}
                          </p>
                        );
                      }
                      return line ? (
                        <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-2">
                          {renderInlineMarkdown(line)}
                        </p>
                      ) : (
                        <div key={i} className="h-2" />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Additional actions */}
          <div className="hidden md:flex justify-center gap-4 mt-6 animate-fade-in delay-200">
            <Link href="/documents">
              <Button variant="outline" className="rounded-xl h-11 px-6 border-border/50 hover:border-primary/30">
                <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                New Document
              </Button>
            </Link>
            <Link href="/generated">
              <Button variant="ghost" className="rounded-xl h-11 px-6 text-muted-foreground">
                <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                View History
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile: Fixed bottom export bar */}
      <div className="fixed bottom-16 left-0 right-0 z-40 md:hidden p-4" style={{ paddingBottom: 'env(safe-area-inset-bottom, 16px)' }}>
        <div className="glass-strong rounded-2xl p-3 border border-border/50 shadow-xl shadow-black/20">
          <div className="flex items-center gap-2">
            {/* Copy button */}
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className={`
                flex-1 h-11 rounded-xl border-border/50 text-sm font-medium
                transition-all duration-200 press-scale
                ${copied ? "bg-primary/10 border-primary/30 text-primary" : "hover:bg-secondary/50"}
              `}
            >
              {copied ? (
                <>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                  </svg>
                  Copy
                </>
              )}
            </Button>

            {/* Download .md */}
            <Button
              onClick={downloadMarkdown}
              variant="outline"
              className="h-11 w-11 rounded-xl border-border/50 hover:bg-secondary/50 p-0 press-scale btn-icon"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </Button>

            {/* Download .html */}
            <Button
              onClick={downloadHTML}
              variant="outline"
              className="h-11 w-11 rounded-xl border-border/50 hover:bg-secondary/50 p-0 press-scale btn-icon"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PreviewPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <PreviewContent />
    </Suspense>
  );
}
