import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About the System | Cat Distribution System</title>
        <meta
          name="description"
          content="Discover the magic behind the Cat Distribution System - where feline companions find their destined humans through cosmic intervention"
        />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-orange-600">
          Understanding the Cat Distribution System
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              The Natural Order of Feline Distribution
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The Cat Distribution System is not a company or organization -
              it&apos;s a natural phenomenon that has connected cats with their
              destined humans since time immemorial. Like rainfall or the
              changing of seasons, it operates on its own mysterious schedule,
              ensuring every cat finds its perfect home.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our role is simply to document and celebrate these cosmic
              connections, while helping people understand and trust in the
              system&apos;s perfect timing. No applications, no waiting lists -
              just pure feline destiny at work.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-orange-800">
              How It Works
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>
                  When the time is right, a cat will appear in your life -
                  through a garden visit, a chance encounter, or sometimes even
                  at your doorstep.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>
                  The system operates with 100% efficiency - no cat is ever
                  misdirected, and no worthy home goes unmatched.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span>
                  The service is completely free because you can&apos;t put a
                  price on destiny.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Our Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded">
              <blockquote className="text-gray-700 italic">
                &quot;I wasn&apos;t even looking for a cat, but one day she just
                appeared on my windowsill. Three years later, we&apos;re
                inseparable&quot;
              </blockquote>
              <p className="text-gray-600 mt-2">- Sarah, Portland</p>
            </div>
            <div className="bg-white p-4 rounded">
              <blockquote className="text-gray-700 italic">
                &quot;The system knew exactly what I needed. My cat arrived
                precisely when I was going through a tough time&quot;
              </blockquote>
              <p className="text-gray-600 mt-2">- Miguel, Austin</p>
            </div>
            <div className="bg-white p-4 rounded">
              <blockquote className="text-gray-700 italic">
                &quot;I used to be skeptical, but after experiencing it myself,
                I&apos;m a true believer in the system&quot;
              </blockquote>
              <p className="text-gray-600 mt-2">- Emma, Toronto</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
