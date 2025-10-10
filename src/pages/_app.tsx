import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Merriweather } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${merriweather.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
