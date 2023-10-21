import React from "react";

import "./globals.css";
export const metadata = {
  title: "GDSC VIT Chennai",
  description: "GDSC VIT Chennai",
  icons: {
    icon: "gdsc.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
