import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/Navbar/Navbar"

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
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
