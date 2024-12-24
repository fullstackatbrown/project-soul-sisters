"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { Menu, X } from 'lucide-react';

const routes = [
    { href: "/about", label: "About" },
    { href: "/news", label: "News" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <button className={styles["menu-toggle"]} onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}>
                <div className={styles["navbar-container"]}>
                    <div className={styles.menu}>
                        <a href="https://www.instagram.com/soul_sisters2025/" target="_blank" rel="noreferrer noopener">
                            <Image src="/Instagram_Glyph_White.png"
                                alt="Instagram Logo"
                                className={styles["instagram-logo"]}
                                width={100}
                                height={100}
                                loading="eager"
                            />
                        </a>
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={`${styles["nav-link"]} ${pathname === route.href ? styles.active : ""}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {route.label}
                            </Link>
                        ))}
                    </div>
                    <Link href="/" className={styles["navbar-logo"]} onClick={() => setIsMenuOpen(false)}>
                        Soul Sisters
                    </Link>
                </div>
            </nav>
        </>
    );
}