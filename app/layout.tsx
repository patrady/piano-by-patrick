import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patrick Brady | Piano",
  description:
    "Live piano performance for weddings, liturgical services, and special events in Nashville, TN. Book Patrick Brady for your most memorable moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full flex-col bg-[#faf9f7] text-stone-900 antialiased">
        <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-[#faf9f7]/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold tracking-tight hover:text-amber-800 transition-colors"
            >
              <span className="text-amber-800">♪</span>
              Patrick Brady Piano
            </Link>
            <nav className="flex gap-8 text-sm font-medium text-stone-600">
              <Link
                href="/"
                className="hover:text-stone-900 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-stone-900 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-stone-900 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-stone-200 bg-stone-50 py-10 mt-20">
          <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm font-medium text-stone-600">
              <span className="text-amber-800">♪</span> Patrick Brady Piano
              — Nashville, TN
            </p>
            <div className="flex gap-6 text-sm text-stone-500">
              <Link href="/about" className="hover:text-stone-700 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-stone-700 transition-colors">Book a Performance</Link>
            </div>
            <p className="text-sm text-stone-400">
              © {new Date().getFullYear()} Patrick Brady Piano
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
