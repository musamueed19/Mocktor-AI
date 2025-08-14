// Root Layout of Application
// FOnts, MetaData

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mocktor AI - AI Mock Interview",
  description: "Mocktor AI - NextGen AI Mock Interview Partner",
};

// font setup
const outfit = Outfit({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
