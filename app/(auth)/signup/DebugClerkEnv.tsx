"use client";

import React from "react";

export default function DebugClerkEnv() {
  return (
    <div style={{ marginBottom: 12 }}>
      <strong>DEBUG:</strong> NEXT_PUBLIC_CLERK_FRONTEND_API =
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {typeof window !== "undefined"
          ? process.env.NEXT_PUBLIC_CLERK_FRONTEND_API
          : "server"}
      </pre>
    </div>
  );
}
