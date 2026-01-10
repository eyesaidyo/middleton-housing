'use client';

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <AuthProvider>
      <Navbar />
      <main className="pt-16">{children}</main>
    </AuthProvider>
  );
} 