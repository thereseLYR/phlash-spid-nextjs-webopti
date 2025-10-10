import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Your Company</title>
        <meta name="description" content="Learn more about Your Company" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-4">
              Your Company is dedicated to providing exceptional services and
              solutions to our clients. With years of experience in the
              industry, we strive to deliver the highest quality products and
              maintain the trust of our customers.
            </p>
            <p className="text-lg text-gray-700">
              Our team consists of passionate professionals who are committed to
              excellence and innovation. We believe in building long-lasting
              relationships with our clients and helping them achieve their
              goals through our expertise and dedication.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
