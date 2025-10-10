import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us | Your Company</title>
        <meta name="description" content="Get in touch with Your Company" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow container mx-auto px-6 py-12">
          <h1 className="mb-8">Contact Us</h1>
          <div className="max-w-lg">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
