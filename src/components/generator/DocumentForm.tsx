"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface FormData {
  companyName: string;
  websiteUrl: string;
  email: string;
  documentType: string;
  dataCollected: string[];
}

const dataTypes = [
  { id: "email", label: "Email addresses" },
  { id: "name", label: "Names" },
  { id: "phone", label: "Phone numbers" },
  { id: "address", label: "Physical addresses" },
  { id: "payment", label: "Payment information" },
  { id: "usage", label: "Usage data" },
  { id: "cookies", label: "Cookies & tracking" },
  { id: "location", label: "Location data" },
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
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-8">
        {step === 1 ? (
          <Link
            href="/documents"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back
          </Link>
        ) : (
          <button
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back
          </button>
        )}

        <div className="flex items-center gap-2">
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => {
            const displayStep = !needsDataCollection && s === 2 ? 3 : s;
            return (
              <div
                key={s}
                className={`h-2 rounded-full transition-all duration-300 ${
                  displayStep === step
                    ? "w-8 bg-primary"
                    : displayStep < step
                    ? "w-2 bg-primary/50"
                    : "w-2 bg-secondary"
                }`}
              />
            );
          })}
        </div>

        <span className="text-sm text-muted-foreground">
          Step {needsDataCollection ? step : step === 1 ? 1 : 2} of {totalSteps}
        </span>
      </div>

      {/* Form card */}
      <div className="relative rounded-2xl bg-card border border-border/50 p-8 backdrop-blur-sm">
        {/* Top accent line */}
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        {/* Document type badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm font-medium text-primary">
            {documentLabels[formData.documentType] || "Privacy Policy"}
          </span>
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold mb-2">Tell us about your business</h2>
              <p className="text-muted-foreground">We&apos;ll use this to personalize your document.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-foreground">Company Name</Label>
                <Input
                  id="companyName"
                  placeholder="Acme Inc"
                  value={formData.companyName}
                  onChange={(e) => updateField("companyName", e.target.value)}
                  className="bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20 h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="websiteUrl" className="text-foreground">Website URL</Label>
                <Input
                  id="websiteUrl"
                  placeholder="https://acme.com"
                  value={formData.websiteUrl}
                  onChange={(e) => updateField("websiteUrl", e.target.value)}
                  className="bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20 h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Contact Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="privacy@acme.com"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20 h-12"
                />
              </div>
            </div>

            <Button
              onClick={handleContinueFromStep1}
              disabled={!formData.companyName || !formData.websiteUrl}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 text-base font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
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
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold mb-2">What data do you collect?</h2>
              <p className="text-muted-foreground">Select all types of personal data your service collects.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {dataTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => toggleDataType(type.id)}
                  className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 text-left ${
                    formData.dataCollected.includes(type.id)
                      ? "bg-primary/10 border-primary/30 text-foreground"
                      : "bg-secondary/30 border-border/50 text-muted-foreground hover:bg-secondary/50 hover:border-border"
                  }`}
                >
                  <Checkbox
                    checked={formData.dataCollected.includes(type.id)}
                    className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <span className="text-sm font-medium">{type.label}</span>
                </button>
              ))}
            </div>

            <Button
              onClick={() => setStep(3)}
              disabled={formData.dataCollected.length === 0}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 text-base font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
            >
              Continue
              <svg viewBox="0 0 24 24" className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Button>
          </div>
        )}

        {/* Step 3: Review & Generate (or Step 2 for ToS) */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold mb-2">Ready to generate</h2>
              <p className="text-muted-foreground">Review your information and generate your document.</p>
            </div>

            <div className="space-y-4 p-4 rounded-xl bg-secondary/30 border border-border/50">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">Document</span>
                <span className="font-medium">{documentLabels[formData.documentType]}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">Company</span>
                <span className="font-medium">{formData.companyName}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">Website</span>
                <span className="font-medium">{formData.websiteUrl}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">Contact</span>
                <span className="font-medium">{formData.email || "Not provided"}</span>
              </div>
              {needsDataCollection && formData.dataCollected.length > 0 && (
                <div className="flex justify-between items-start py-2">
                  <span className="text-muted-foreground">Data collected</span>
                  <div className="flex flex-wrap gap-1.5 justify-end max-w-[60%]">
                    {formData.dataCollected.map((id) => (
                      <span
                        key={id}
                        className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
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
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 text-base font-semibold transition-all duration-300 hover:scale-[1.02] glow-green-sm hover:glow-green"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                <path d="M8 5.14v14l11-7z" />
              </svg>
              Generate Document
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Your document will be ready in seconds. Free to download.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
