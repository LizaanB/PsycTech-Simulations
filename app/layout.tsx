import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "PSYC Tech Simulators",
  description:
    "Racing Simulator Container South Africa, Mobile Racing Simulator, Event Simulator Hire, Target Shooting Simulator, and simulator container rentals.",
  keywords: [
    "Racing Simulator Container South Africa",
    "Mobile Racing Simulator",
    "Event Simulator Hire",
    "Target Shooting Simulator",
    "Simulator Containers",
    "Racing Simulator Rental",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-zinc-50 text-zinc-900">
        <Nav />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">{children}</main>
      </body>
    </html>
  );
}
