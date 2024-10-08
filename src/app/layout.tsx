import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "WhatPass",
  description: "Manage your passwords",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
