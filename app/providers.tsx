"use client";

import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

/**
 * Client wrapper for Clerk so the server layout can remain a server component.
 * Clerk reads NEXT_PUBLIC_CLERK_FRONTEND_API automatically from env for browser usage.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
