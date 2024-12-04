import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Raleway} from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"

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

const raleWay = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
  variable: "--font-rale-way",
});

export const metadata: Metadata = {
  title: "ProVision Innovations",
  description: "Official website for ProVision Innovations",
  icons: {icon: "/images/Logo.png"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleWay.variable} antialiased`}
      >
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}
