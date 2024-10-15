"use client";

import { useState, useEffect } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isResized, setIsResized] = useState(false);

  const handleWindowResize = () => {
    let ratio = 1;
    if (window.innerWidth / window.innerHeight > 1.78) {
      // 세로가 더 길어져서 짤릴 때
      ratio = (window.innerHeight * 1920) / 1080 / 1920;
    } else {
      ratio = window.innerWidth < 1920 ? window.innerWidth / 1920 : 1;
    }
    // ratio = (Math.floor(ratio * 10) / 10).toFixed(1);
    const left = (window.innerWidth - 1920 * ratio) / 2;
    document.body.style.position = "fixed";
    document.body.style.left = left + "px";
    document.body.style.transformOrigin = "0% 0%";
    document.body.style.transform = `scale(${ratio})`;
    document.body.style.overflow = "hidden";

    setIsResized(true);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <html lang="ko" className="bg-[rgb(194,219,234)]">
      <body className="w-[1920px] h-[1080px] mx-auto flex flex-col">
        {isResized ? children : null}
      </body>
    </html>
  );
}
