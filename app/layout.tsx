import type { Metadata } from "next";
import { Aboreto, Alegreya } from "next/font/google";
import "./globals.css";

const aboreto = Aboreto({
  weight: "400",
  subsets: ["latin"],
});

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "InGen",
  description: "Engineering the Future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={`${aboreto.className} ${alegreya.className}`}>
        {children}
      </body>
    </html>
  );
}
