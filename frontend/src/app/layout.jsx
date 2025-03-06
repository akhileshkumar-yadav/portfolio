'use client';
// import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./navbar";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 to-gray-900">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
