import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Dynamically load the client-only quotes component (no SSR) to avoid
// hydration mismatches when the client fetches data.
const QuotesClient = dynamic(() => import("../components/QuotesClient"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat Distribution System | Your Destined Feline Friend</title>
        <meta
          name="description"
          content="Experience the magic of the Cat Distribution System - where cats find their way to their destined humans, completely free and efficiently delivered."
        />
      </Head>

      {/* QOTD Banner (always appears) */}
      <div className="bg-blue-500 text-white p-4 text-center min-h-24 flex flex-col items-center justify-center">
        <QuotesClient mode={"banner"} />
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-20">
        <div className="flex items-center flex-wrap">
          {/* Images without dimensions causing layout shifts */}
          <Image
            src={`https://cataas.com/cat?${new Date().getTime()}`}
            className="object-contain mx-auto my-4 rounded-lg shadow-lg w-64 h-64"
            priority
            height={200}
            width={200}
            alt={"Random cat image"}
            unoptimized
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

      {/* also always appears */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-gray-700 text-center py-12">
        <div style={{ minHeight: "100px" }} className="min-h-24">
          <QuotesClient mode={"list"} />
        </div>
      </div>

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
