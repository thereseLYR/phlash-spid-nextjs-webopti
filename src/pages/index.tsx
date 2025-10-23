import Head from "next/head";
import { useEffect, useState } from "react";
import { ApiResponse } from "./api/quotes";
import Link from "next/link";

// Function to fetch wisdom from multiple sources
const fetchWisdom = async (): Promise<string[]> => {
  try {
    // Fetch all quotes through our API route which handles CORS
    const response = await fetch("/api/quotes");
    const data: ApiResponse = await response.json();

    // Mix and transform the responses into "cosmic cat wisdom"
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
};

export default function Home() {
  const [quotes, setQuotes] = useState<string[]>([]);
  const [showBanner, setShowBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadQuotes = async () => {
      setIsLoading(true);

      const initialWisdom = await fetchWisdom();
      setQuotes(initialWisdom);

      setIsLoading(false);
      setShowBanner(true); // Banner appears after content loads
    };

    loadQuotes();
  }, []);

  return (
    <>
      <Head>
        <title>Cat Distribution System | Your Destined Feline Friend</title>
        <meta
          name="description"
          content="Experience the magic of the Cat Distribution System - where cats find their way to their destined humans, completely free and efficiently delivered."
        />
      </Head>

      {/* QOTD Banner */}
      {showBanner && (
        <div className="bg-blue-500 text-white p-4 text-center">
          🐱 Quote of the Day 🐱
          <div>{quotes[0]}</div>
          <div>{quotes[4]}</div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-20">
        <div className="flex items-center flex-wrap">
          {/* Images without dimensions causing layout shifts */}
          <img
            src={"https://cataas.com/cat/gif"}
            className="object-contain mx-auto my-4 rounded-lg shadow-lg w-64 h-64"
          />
        </div>

        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">The Cat Will Find You</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-medium">
            Trust in the mysterious ways of the Cat Distribution System. When
            the time is right, your feline friend will appear - it&apos;s
            nature&apos;s most efficient delivery service.
          </p>
          <Link
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-block"
            href="/about-us"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Trust the Cat Distribution System?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Fast & Efficient Delivery
              </h3>
              <p className="text-gray-700">
                Our cats have an uncanny ability to appear exactly when
                they&apos;re meant to. No waiting lists, no complicated forms -
                just cosmic timing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                100% Free Service
              </h3>
              <p className="text-gray-700">
                The best things in life are free. The Cat Distribution System
                operates on love, destiny, and the occasional treat - never your
                wallet.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Long-term Fulfillment
              </h3>
              <p className="text-gray-700">
                When a cat chooses you, it&apos;s for life. Our satisfaction
                rate is purr-fect, with countless happy matches made through
                cosmic intervention.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Be Chosen?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            No sign-ups needed. No forms to fill. Just keep your heart and door
            open - your destined feline friend is already on their way.
          </p>
          <Link href="/about-us">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {showBanner && (
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-gray-700 text-center py-12">
          <div style={{ minHeight: "100px" }}>
            {quotes.map((quote, index) => (
              <p key={index} className="mb-2 animate-fade-in">
                {quote}
              </p>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
