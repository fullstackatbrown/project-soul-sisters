"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { createBucketClient } from '@cosmicjs/sdk';
import React from 'react';


const routes = [
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
  { href: "/gallery", label: "Gallery" },
  { href: "/donate", label: "Donate" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
        <nav className={styles.navbar}>
            <div className={styles["navbar-container"]}>
                <div className={styles.menu}>
                        <img src="/Instagram_Glyph_White.png" 
                        alt="Instagram Logo" 
                        className={styles["instagram-logo"]} />
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