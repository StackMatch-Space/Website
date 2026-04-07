import type { Metadata } from "next";
import { Onest, Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StackMatch - Stop Applying. Start Interviewing.",
  description:
    "StackMatch applies to the right engineering jobs so you can focus on interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${urbanist.variable} ${onest.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
