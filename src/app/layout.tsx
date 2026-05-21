import type { Metadata } from "next";
import { Inter, Rethink_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-rethink-sans",
});

export const metadata: Metadata = {
  title: "Octeters — AI-Enabled Software Platforms",
  description:
    "Octeters builds AI-enabled software platforms for operations, commerce, and marketplaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${rethinkSans.variable} h-full antialiased`}>
      <body style={{ backgroundColor: "#161616" }} className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
