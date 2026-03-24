import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueMontreal = localFont({
  src: [
    {
      path: "./fonts/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
});

const stackSans = localFont({
  src: "./fonts/StackSansNotch-VariableFont_wght.ttf",
  variable: "--font-stack-sans",
});

export const metadata: Metadata = {
  title: "Biblio — Your Digital Reading App",
  description: "Your one stop application for all your digital reading needs",
};

import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueMontreal.variable} ${stackSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
