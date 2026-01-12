"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormData {
  companyName: string;
  websiteUrl: string;
  email: string;
  documentType: string;
  dataCollected: string[];
}

const dataTypes = [
  { id: "email", label: "Email addresses", icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" },
  { id: "name", label: "Names", icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" },
  { id: "phone", label: "Phone numbers", icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" },
  { id: "address", label: "Addresses", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
  { id: "payment", label: "Payment info", icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" },
  { id: "usage", label: "Usage data", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
  { id: "cookies", label: "Cookies", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  { id: "location", label: "Location", icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" },
];

interface DocumentFormProps {
  documentType?: string;
}

export function DocumentForm({ documentType = "privacy" }: DocumentFormProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    websiteUrl: "",
    email: "",
    documentType,
    dataCollected: [],
  });

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleDataType = (id: string) => {
    const current = formData.dataCollected;
    const updated = current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id];
    updateField("dataCollected", updated);
  };

  const needsDataCollection = formData.documentType === "privacy" || formData.documentType === "cookies";
  const totalSteps = needsDataCollection ? 3 : 2;

  const handleGenerate = () => {
    const params = new URLSearchParams({
      company: formData.companyName,
      website: formData.websiteUrl,
      email: formData.email,
      type: formData.documentType,
      data: formData.dataCollected.join(","),
    });
    router.push(`/preview?${params.toString()}`);
  };

  const handleContinueFromStep1 = () => {
    if (needsDataCollection) {
      setStep(2);
    } else {
      setStep(3);
    }
  };

  const documentLabels: Record<string, string> = {
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookies: "Cookie Policy",
    aup: "Acceptable Use Policy",
    refund: "Refund Policy",
    gdpr: "GDPR Checklist",
    disclaimer: "Disclaimer",
    dmca: "DMCA Policy",
    accessibility: "Accessibility Statement",
    nda: "NDA",
    sla: "SLA",
    dpa: "Data Processing Agreement",
    ccpa: "CCPA Notice",
    coppa: "COPPA Policy",
    dataretention: "Data Retention Policy",
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 sm:px-0">
      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        {step === 1 ? (
          <Link
            href="/documents"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors press-scale"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <span className="text-sm font-medium">Back</span>
          </Link>
        ) : (
          <button
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors press-scale"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <span className="text-sm font-medium">Back</span>
          </button>
        )}

        {/* Step Pills */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => {
            const displayStep = !needsDataCollection && s === 2 ? 3 : s;
            const isActive = displayStep === step;
            const isCompleted = displayStep < step;
            return (
              <div
                key={s}
                className={`
                  h-1.5 rounded-full transition-all duration-300
                  ${isActive ? "w-6 bg-primary" : isCompleted ? "w-1.5 bg-primary/60" : "w-1.5 bg-secondary"}
                `}
              />
            );
          })}
        </div>

        <span className="text-xs text-muted-foreground tabular-nums">
          {needsDataCollection ? step : step === 1 ? 1 : 2}/{totalSteps}
        </span>
      </div>

      {/* Form card */}
      <div className="relative card-premium rounded-2xl sm:rounded-3xl p-5 sm:p-8 overflow-hidden">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

        {/* Document type badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5 sm:mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-primary">
            {documentLabels[formData.documentType] || "Privacy Policy"}
          </span>
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="space-y-5 sm:space-y-6 animate-fade-in">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Tell us about your business</h2>
              <p className="text-sm text-muted-foreground">We&apos;ll personalize your document.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-sm text-foreground">Company Name</Label>
                <Input
                  id="companyName"
                  placeholder="Acme Inc"
                  value={formData.companyName}
                  onChange={(e) => updateField("companyName", e.target.value)}
                  className="bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20 h-12 rounded-xl text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="websiteUrl" className="text-sm text-foreground">Website URL</Label>
                <Input
                  id="websiteUrl"
                  placeholder="https://acme.com"
                  value={formData.websiteUrl}
                  onChange={(e) => updateField("websiteUrl", e.target.value)}
                  className="bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20 h-12 rounded-xl text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-foreground">
                  Contact Email <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="privacy@acme.com"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20 h-12 rounded-xl text-base"
                />
              </div>
            </div>

            <Button
              onClick={handleContinueFromStep1}
              disabled={!formData.companyName || !formData.websiteUrl}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-12 text-base font-semibold transition-all duration-300 press-scale disabled:opacity-50"
            >
              Continue
              <svg viewBox="0 0 24 24" className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Button>
          </div>
        )}

        {/* Step 2: Data Collection (only for privacy/cookies) */}
        {step === 2 && needsDataCollection && (
          <div className="space-y-5 sm:space-y-6 animate-fade-in">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">What data do you collect?</h2>
              <p className="text-sm text-muted-foreground">Select all that apply.</p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {dataTypes.map((type) => {
                const isSelected = formData.dataCollected.includes(type.id);
                return (
                  <button
                    key={type.id}
                    onClick={() => toggleDataType(type.id)}
                    className={`
                      flex items-center gap-2.5 p-3 sm:p-4 rounded-xl border
                      transition-all duration-200 text-left press-scale
                      ${isSelected
                        ? "bg-primary/10 border-primary/30 text-foreground"
                        : "bg-secondary/20 border-border/50 text-muted-foreground hover:bg-secondary/40 hover:border-border"
                      }
                    `}
                  >
                    {/* Checkbox indicator */}
                    <div className={`
                      w-5 h-5 rounded-md border-2 shrink-0
                      flex items-center justify-center
                      transition-all duration-200
                      ${isSelected
                        ? "bg-primary border-primary"
                        : "border-muted-foreground/30"
                      }
                    `}>
                      {isSelected && (
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm font-medium leading-tight">{type.label}</span>
                  </button>
                );
              })}
            </div>

            <Button
              onClick={() => setStep(3)}
              disabled={formData.dataCollected.length === 0}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-12 text-base font-semibold transition-all duration-300 press-scale disabled:opacity-50"
            >
              Continue
              <svg viewBox="0 0 24 24" className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Button>
          </div>
        )}

        {/* Step 3: Review & Generate */}
        {step === 3 && (
          <div className="space-y-5 sm:space-y-6 animate-fade-in">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Ready to generate</h2>
              <p className="text-sm text-muted-foreground">Review your information.</p>
            </div>

            {/* Review Card */}
            <div className="space-y-0 rounded-xl bg-secondary/20 border border-border/50 overflow-hidden">
              <div className="flex justify-between items-center gap-4 px-4 py-3 border-b border-border/30">
                <span className="text-sm text-muted-foreground shrink-0">Document</span>
                <span className="text-sm font-medium truncate">{documentLabels[formData.documentType]}</span>
              </div>
              <div className="flex justify-between items-center gap-4 px-4 py-3 border-b border-border/30">
                <span className="text-sm text-muted-foreground shrink-0">Company</span>
                <span className="text-sm font-medium truncate">{formData.companyName}</span>
              </div>
              <div className="flex justify-between items-center gap-4 px-4 py-3 border-b border-border/30">
                <span className="text-sm text-muted-foreground shrink-0">Website</span>
                <span className="text-sm font-medium truncate">{formData.websiteUrl}</span>
              </div>
              <div className="flex justify-between items-center gap-4 px-4 py-3 border-b border-border/30">
                <span className="text-sm text-muted-foreground shrink-0">Email</span>
                <span className="text-sm font-medium truncate">{formData.email || "Not provided"}</span>
              </div>
              {needsDataCollection && formData.dataCollected.length > 0 && (
                <div className="px-4 py-3">
                  <span className="text-sm text-muted-foreground block mb-2">Data collected</span>
                  <div className="flex flex-wrap gap-1.5">
                    {formData.dataCollected.map((id) => (
                      <span
                        key={id}
                        className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {dataTypes.find((t) => t.id === id)?.label}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Button
              onClick={handleGenerate}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-12 text-base font-semibold transition-all duration-300 press-scale"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                <path d="M8 5.14v14l11-7z" />
              </svg>
              Generate Document
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Ready in seconds. Free to download.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
