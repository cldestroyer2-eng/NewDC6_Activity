import "./globals.css";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clarke David Murcia | Activity 6",
  description: "A personal site built with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-slate-100 font-sans text-slate-900 antialiased">
        <header className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white shadow-lg shadow-indigo-950/10">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex max-w-5xl flex-col gap-5 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8"
          >
      
            <div className="flex items-center gap-2 text-sm font-medium">
              <Link
                href="/"
                className="rounded-lg px-4 py-2 text-indigo-100 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Home   
              </Link>
              <Link
                href="/about"
                className="rounded-lg px-4 py-2 text-indigo-100 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              > 
                  About 
              </Link>
              <Link
                href="/projects"
                className="rounded-lg bg-white px-4 py-2 text-indigo-950 shadow-sm transition hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Projects
              </Link>
            </div>
          </nav>
        </header>
        <div className="flex-1">{children}</div>
        
      </body>
    </html>
  );
}

