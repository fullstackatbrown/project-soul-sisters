import type { Metadata } from "next";
import { Alexandria } from 'next/font/google'
import "./globals.css";
import NavBar from "../components/Navbar/Navbar"

const alexandria = Alexandria({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Soul Sisters Movie",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alexandria.className}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
