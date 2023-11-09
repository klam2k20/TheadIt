"use client";

import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up")
    ? children
    : null;
}
