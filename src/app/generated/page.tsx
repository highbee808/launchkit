"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getDocuments, deleteDocument, getTimeRemaining, type SavedDocument } from "@/lib/documentHistory";

const documentLabels: Record<string, string> = {
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  cookies: "Cookie Policy",
  aup: "Acceptable Use",
  refund: "Refund Policy",
  gdpr: "GDPR Checklist",
  disclaimer: "Disclaimer",
  dmca: "DMCA Policy",
  accessibility: "Accessibility",
  nda: "NDA",
  sla: "SLA",
  dpa: "DPA",
  ccpa: "CCPA Notice",
  coppa: "COPPA Policy",
  dataretention: "Data Retention",
};

export default function GeneratedPage() {
  const [documents, setDocuments] = useState<SavedDocument[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDocuments(getDocuments());

    // Refresh every minute to update time remaining
    const interval = setInterval(() => {
      setDocuments(getDocuments());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleDelete = (id: string) => {
    deleteDocument(id);
    setDocuments(getDocuments());
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 md:pb-8 overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 gradient-mesh -z-10" />

      {/* Header */}
      <div className="pt-8 sm:pt-20 pb-6 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 sm:mb-4">
            Your Documents
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Auto-expires after 24 hours
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {documents.length === 0 ? (
            /* Empty State */
            <div className="text-center py-12 sm:py-16 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-secondary/50 mb-4 sm:mb-6">
                <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">No documents yet</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                Generated documents appear here for 24 hours
              </p>
              <Link href="/documents">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 h-11 text-sm font-semibold press-scale">
                  Generate Your First Document
                </Button>
              </Link>
            </div>
          ) : (
            /* Document List */
            <div className="space-y-3 animate-fade-in">
              {documents.map((doc, index) => (
                <div
                  key={doc.id}
                  className="
                    card-premium rounded-2xl p-4 sm:p-5
                    animate-fade-in-up
                  "
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  {/* Mobile Layout */}
                  <div className="flex flex-col gap-3">
                    {/* Top Row: Badge + Time */}
                    <div className="flex items-center justify-between">
                      <span className="
                        inline-flex items-center px-2.5 py-1 rounded-lg
                        text-xs font-semibold
                        bg-primary/10 text-primary border border-primary/20
                      ">
                        {documentLabels[doc.type] || doc.type}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {getTimeRemaining(doc.createdAt)}
                      </span>
                    </div>

                    {/* Middle: Company Info */}
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground truncate">
                        {doc.companyName}
                      </h3>
                      <p className="text-sm text-muted-foreground truncate">
                        {doc.websiteUrl}
                      </p>
                    </div>

                    {/* Bottom Row: Actions */}
                    <div className="flex items-center gap-2 pt-1">
                      <Link
                        href={`/preview?company=${encodeURIComponent(doc.companyName)}&website=${encodeURIComponent(doc.websiteUrl)}&email=${encodeURIComponent(doc.email)}&type=${doc.type}&data=${doc.data.join(",")}`}
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="
                            w-full h-10 rounded-xl
                            border-border/50 bg-secondary/30
                            hover:bg-primary/10 hover:border-primary/30 hover:text-primary
                            transition-all duration-200 press-scale
                          "
                        >
                          <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          View Document
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(doc.id)}
                        className="
                          h-10 w-10 rounded-xl p-0 shrink-0
                          text-muted-foreground
                          hover:text-red-400 hover:bg-red-500/10
                          transition-all duration-200 press-scale btn-icon
                        "
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Generate More CTA */}
          {documents.length > 0 && (
            <div className="mt-6 text-center animate-fade-in delay-300">
              <Link href="/documents">
                <Button
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground press-scale"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Generate Another Document
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
