import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/Toaster";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ThreadIt",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-slate-50 pt-16 text-slate-900 antialiased",
          inter.className,
        )}
      >
        <Providers>
          <Navbar />
          {authModal}
          <div className="container h-full w-full max-w-7xl p-6">
            {children}
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
