"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { saveDocument } from "@/lib/documentHistory";
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

const documentConfig: Record<string, { label: string; filename: string; icon: JSX.Element }> = {
  privacy: {
    label: "Privacy Policy",
    filename: "privacy-policy",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  terms: {
    label: "Terms of Service",
    filename: "terms-of-service",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  cookies: {
    label: "Cookie Policy",
    filename: "cookie-policy",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  aup: {
    label: "Acceptable Use Policy",
    filename: "acceptable-use-policy",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  refund: {
    label: "Refund Policy",
    filename: "refund-policy",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  gdpr: {
    label: "GDPR Checklist",
    filename: "gdpr-checklist",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  disclaimer: {
    label: "Disclaimer",
    filename: "disclaimer",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  dmca: {
    label: "DMCA Policy",
    filename: "dmca-policy",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  accessibility: {
    label: "Accessibility Statement",
    filename: "accessibility-statement",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  nda: {
    label: "NDA",
    filename: "nda",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  sla: {
    label: "SLA",
    filename: "sla",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  dpa: {
    label: "Data Processing Agreement",
    filename: "dpa",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  ccpa: {
    label: "CCPA Notice",
    filename: "ccpa-notice",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  coppa: {
    label: "COPPA Policy",
    filename: "coppa-policy",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  dataretention: {
    label: "Data Retention Policy",
    filename: "data-retention-policy",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
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
    ul { padding-left: 24px; }
    li { margin: 10px 0; }
    p { margin: 16px 0; }
    strong { color: #111; }
  </style>
</head>
<body>
${document
  .replace(/^# (.+)$/gm, "<h1>$1</h1>")
  .replace(/^## (.+)$/gm, "<h2>$1</h2>")
  .replace(/^### (.+)$/gm, "<h3>$1</h3>")
  .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
  .replace(/^- (.+)$/gm, "<li>$1</li>")
  .replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)
  .replace(/^(?!<[hul]|<li)(.+)$/gm, "<p>$1</p>")
  .replace(/<p>---<\/p>/g, "<hr>")
  .replace(/<p>\s*<\/p>/g, "")}
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
    <div className="min-h-screen py-20 px-4 sm:px-6 overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 gradient-mesh -z-10" />
      <div className="fixed inset-0 noise -z-10" />

      <div className="max-w-6xl mx-auto overflow-hidden">
        {/* Success header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Your document is ready
          </h1>
          <p className="text-lg text-muted-foreground">
            Review, copy, or download your generated {config.label.toLowerCase()}.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Sidebar */}
          <div className="space-y-4 animate-fade-in delay-100">
            {/* Document info card */}
            <div className="rounded-xl bg-card border border-border/50 p-4 sm:p-5 overflow-hidden">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                {config.icon}
                <span className="truncate">{config.label}</span>
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground shrink-0">Company</span>
                  <span className="font-medium truncate">{company}</span>
                </div>
                {(docType === "privacy" || docType === "cookies") && (
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground shrink-0">Data types</span>
                    <span className="font-medium">{data.length}</span>
                  </div>
                )}
                <div className="flex justify-between gap-4">
                  <span className="text-muted-foreground shrink-0">Generated</span>
                  <span className="font-medium">{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Export options */}
            <div className="rounded-xl bg-card border border-border/50 p-4 sm:p-5">
              <h3 className="font-semibold mb-4">Export Options</h3>
              <div className="space-y-2">
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  className="w-full justify-start gap-3 h-11 rounded-lg border-border/50 hover:bg-secondary/50 hover:border-primary/30"
                >
                  {copied ? (
                    <>
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                      </svg>
                      Copy to Clipboard
                    </>
                  )}
                </Button>
                <Button
                  onClick={downloadMarkdown}
                  variant="outline"
                  className="w-full justify-start gap-3 h-11 rounded-lg border-border/50 hover:bg-secondary/50 hover:border-primary/30"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download .md
                </Button>
                <Button
                  onClick={downloadHTML}
                  variant="outline"
                  className="w-full justify-start gap-3 h-11 rounded-lg border-border/50 hover:bg-secondary/50 hover:border-primary/30"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                  Download .html
                </Button>
              </div>
            </div>

            {/* New document button */}
            <Link href="/documents">
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 h-11 text-muted-foreground hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Create New Document
              </Button>
            </Link>
          </div>

          {/* Document preview */}
          <div className="animate-fade-in delay-200">
            <div className="relative rounded-2xl bg-card border border-border/50 overflow-hidden">
              {/* Top accent */}
              <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              {/* Header bar */}
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 border-b border-border/50 bg-secondary/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-muted-foreground font-mono truncate">{config.filename}.md</span>
              </div>

              {/* Document content */}
              <div className="p-4 sm:p-6 md:p-8 max-h-[600px] overflow-y-auto overflow-x-hidden">
                <div className="prose prose-invert prose-sm max-w-none">
                  <div className="whitespace-pre-wrap break-words font-mono text-sm text-muted-foreground leading-relaxed">
                    {document.split("\n").map((line, i) => {
                      if (line.startsWith("# ")) {
                        return (
                          <div key={i} className="text-2xl font-bold text-foreground mb-4 font-sans">
                            {line.replace("# ", "")}
                          </div>
                        );
                      }
                      if (line.startsWith("## ")) {
                        return (
                          <div key={i} className="text-lg font-semibold text-foreground mt-6 mb-3 font-sans">
                            {line.replace("## ", "")}
                          </div>
                        );
                      }
                      if (line.startsWith("### ")) {
                        return (
                          <div key={i} className="text-base font-semibold text-foreground/90 mt-4 mb-2 font-sans">
                            {line.replace("### ", "")}
                          </div>
                        );
                      }
                      if (line.startsWith("**") && line.endsWith("**")) {
                        return (
                          <div key={i} className="text-sm font-semibold text-foreground/80 mb-2">
                            {line.replace(/\*\*/g, "")}
                          </div>
                        );
                      }
                      if (line.startsWith("- ")) {
                        return (
                          <div key={i} className="flex gap-2 ml-4 mb-1">
                            <span className="text-primary">•</span>
                            <span>{line.replace("- ", "")}</span>
                          </div>
                        );
                      }
                      if (line.startsWith("---")) {
                        return <hr key={i} className="border-border/50 my-6" />;
                      }
                      if (line.startsWith("*") && line.endsWith("*") && !line.startsWith("**")) {
                        return (
                          <div key={i} className="text-xs text-muted-foreground/60 italic mt-4">
                            {line.replace(/^\*|\*$/g, "")}
                          </div>
                        );
                      }
                      if (line.match(/^[A-Z][A-Z\s]+$/)) {
                        return (
                          <div key={i} className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2">
                            {line}
                          </div>
                        );
                      }
                      return line ? <div key={i} className="mb-2">{line}</div> : <div key={i} className="h-2" />;
                    })}
                  </div>
                </div>
              </div>
            </div>
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
