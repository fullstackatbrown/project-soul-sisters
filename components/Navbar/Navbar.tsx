"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import React from 'react';
import Image from "next/image";

const routes = [
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
        <nav className={styles.navbar}>
            <div className={styles["navbar-container"]}>
                <div className={styles.menu}>
                        <Image src="/Instagram_Glyph_White.png" 
                        alt="Instagram Logo" 
                        className={styles["instagram-logo"]} 
                        width={100}
                        height={100}
                        loading="eager"
                        />
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={`${styles["nav-link"]} ${styles[pathname === route.href ? "active" : ""]}`}
                        >
                            {route.label}
                        </Link>
                    ))}
                </div>
                <Link href="/" className={styles["navbar-logo"]}>
                    Soul Sisters
                </Link>
                
            </div>
        </nav>
    );
}