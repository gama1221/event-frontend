"use client"; // Client-side rendering

import Link from "next/link"; // Importing Link for navigation
import { usePathname } from "next/navigation"; // Import usePathname for current path
import localFont from "next/font/local"; // Custom font loading
import "./globals.css";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();  // Get the current route using usePathname from next/navigation

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navigation Bar */}
        <nav className="bg-[#16a34a] text-white p-4">
          <ul className="flex space-x-4 justify-end">            
            <li>
              <Link
                href="/"
                className={`hover:underline hover:underline-offset-4 ${
                  pathname === "/" ? "border-b-2 border-blue-500 font-bold" : ""
                }`}  // Apply blue underline and blue text when the route is /contact
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`hover:underline hover:underline-offset-4 ${
                  pathname === "/contact" ? "border-b-2 border-blue-500 font-bold" : ""
                }`}  // Apply blue underline and blue text when the route is /contact
              >
                Contact
              </Link>
            </li>
            <li>
            <Link
              href="/product"
              className={`hover:underline hover:underline-offset-4 ${
                pathname === "/product" ? "border-b-2 border-blue-500 font-bold" : ""
              }`}
            >
              Products
            </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>

        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
