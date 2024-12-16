"use client";

import { useState, useEffect } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="bg-[rgb(194,219,234)]">
      <body className="w-[1760px] h-[990px] flex flex-col">
        {children}
      </body>
    </html>
  );
}
