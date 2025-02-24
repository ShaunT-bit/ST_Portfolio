import type { Metadata } from "next";
import {Inter, Calistoga} from "next/font/google"
import "./globals.css";
import {variance} from "@babel/types";
import {twMerge} from "tailwind-merge";

const inter = Inter({ subsets:['latin'], variable:'--font-sans'});
const calistoga =Calistoga({ subsets:['latin'], variable:'--font-serif',weight:["400"]})

export const metadata: Metadata = {
  title: "ST Portfolio",
  description: "A Simple portfolio made by shaun, made with react+ next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable,calistoga.variable,"bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
