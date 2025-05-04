import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlogSpace - Your Coding Knowledge Hub",
  description: "A modern blog platform for developers and tech enthusiasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow bg-gray-50">{children}</main>
        <footer className="bg-gray-700 text-gray-100 p-2">
          <div className="container text-center">
            <p>© {new Date().getFullYear()} BlogSpace. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
