import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Innovate AI | Transforming Tomorrow</title>
        <meta
          name="description"
          content="Innovate AI - Pioneering the future of artificial intelligence solutions for businesses"
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-5xl font-bold mb-6">
                Revolutionizing Business with AI
              </h1>
              <p className="text-xl mb-8 max-w-2xl font-medium">
                Empowering businesses to thrive in the digital age through
                cutting-edge artificial intelligence solutions.
              </p>
              <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Innovate AI?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Smart Solutions
                  </h3>
                  <p className="text-gray-700">
                    Leverage our advanced AI algorithms to optimize your
                    business processes and decision-making.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Real-Time Analytics
                  </h3>
                  <p className="text-gray-700">
                    Get instant insights with our real-time data analysis and
                    predictive modeling capabilities.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Seamless Integration
                  </h3>
                  <p className="text-gray-700">
                    Effortlessly integrate our AI solutions with your existing
                    systems and workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Join the hundreds of businesses already leveraging our AI
                solutions to stay ahead of the competition.
              </p>
              <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
