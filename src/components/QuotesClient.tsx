"use client";
import React, { Suspense } from "react";
import { ApiResponse } from "../pages/api/quotes";

// Client-only fetch + Suspense resource.
async function fetchWisdom(): Promise<string[]> {
  try {
    const response = await fetch("/api/quotes");
    const data: ApiResponse = await response.json();

    const quotes = [
      ...(data.zenQuotes?.slice(0, 2) || []).map((q) => `Cat Wisdom: ${q.q}`),
      ...(data.catData?.data?.slice(0, 2) || []).map((f) => f.fact),
      ...(data.adviceData?.slips?.slice(0, 1) || []).map(
        (s) => `Cosmic Truth: ${s.advice}`
      ),
    ];

    return quotes;
  } catch (error) {
    console.error("Error fetching wisdom:", error);
    return [];
  }
}

// Minimal Suspense resource helper for beginners.
// Pass a promise factory (or a promise) and call `.read()` inside a component.
function createResource<T>(promiseFactory: () => Promise<T>) {
  let status: "pending" | "success" | "error" = "pending";
  let value: T | any;

  const suspender = promiseFactory().then(
    (res) => {
      status = "success";
      value = res;
    },
    (err) => {
      status = "error";
      value = err;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw value;
      return value as T;
    },
  };
}

// Module-scoped resource so multiple component instances share the same fetch
const quotesResource = createResource(() => fetchWisdom());

function QuotesBanner({ resource }: { resource: { read: () => string[] } }) {
  const quotes = resource.read();

  return (
    <>
      <div>🐱 Quote of the Day 🐱</div>
      <div>{quotes[0] ?? ""}</div>
      <div>{quotes[4] ?? ""}</div>
    </>
  );
}

function QuotesList({ resource }: { resource: { read: () => string[] } }) {
  const quotes = resource.read();

  return (
    <>
      {quotes.map((quote: string, index: number) => (
        <p key={index} className="mb-2 animate-fade-in">
          {quote}
        </p>
      ))}
    </>
  );
}

export default function QuotesClient({ mode }: { mode: "banner" | "list" }) {
  if (mode === "banner") {
    return (
      <Suspense fallback={<div>Loading quotes...</div>}>
        <QuotesBanner resource={quotesResource} />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<div>Loading quotes...</div>}>
      <QuotesList resource={quotesResource} />
    </Suspense>
  );
}
