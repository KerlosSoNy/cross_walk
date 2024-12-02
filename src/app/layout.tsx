import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CrossWalk",
  description: "Transform your brand's online presence with our expert digital marketing services. From SEO and social media management to content creation and targeted advertising, we deliver strategies that drive traffic, boost engagement, and increase conversions. Partner with us to grow your business in the digital age.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ymYfjvSdKiU-l4BrhY98KgFhOGRcRpehbUUsIKvpaW8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased !overflow-x-hidden bg-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
