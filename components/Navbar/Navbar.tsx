"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

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