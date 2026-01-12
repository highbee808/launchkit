"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { DocumentForm } from "@/components/generator/DocumentForm";

function GeneratorContent() {
  const searchParams = useSearchParams();
  const documentType = searchParams.get("type") || "privacy";

  return (
    <div className="min-h-screen py-20 px-6">
      {/* Background effects */}
      <div className="fixed inset-0 gradient-mesh -z-10" />
      <div className="fixed inset-0 noise -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Page header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Generate your{" "}
            <span className="font-display italic text-primary">document</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Fill in a few details and we&apos;ll create a professional legal document for you.
          </p>
        </div>

        {/* Form */}
        <DocumentForm documentType={documentType} />
      </div>
    </div>
  );
}

export default function GeneratePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <GeneratorContent />
    </Suspense>
  );
}
