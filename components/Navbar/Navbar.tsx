"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { createBucketClient } from '@cosmicjs/sdk'


const routes = [
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
  { href: "/gallery", label: "Gallery" },
  { href: "/donate", label: "Donate" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [logoData, setLogoData] = useState(null);

  useEffect(() => {
    // Fetch logo data when the component mounts
    const fetchLogoData = async () => {
      const query = {
        type: "instagram-logo",
        slug: "instagram-logo",
      };
      
      try {
        const cosmic = createBucketClient({
            bucketSlug: 'soul-sisters-production-c52519c0-9a32-11ef-9152-c3825c893765',
            readKey: 'toT4sKELwi3M0xzs4s9DXwNnWV1X64ACd8662cbH1cjMEGV79W'
          })
        let response = await cosmic.objects.findOne({
            type: "instagram-logo",
            slug: "instagram-logo"
          }).props("slug,title,metadata,type")
          .depth(1)
        console.log("API response:", response);  // Check this output in the console
        console.log("API response url:", response.object.metadata.instagram_logo.url);
        // Set the fetched data to state
        setLogoData(response.object.metadata.instagram_logo.url);
      } catch (error) {
        console.error("Error fetching logo data:", error);
      }
    };

    fetchLogoData();
  }, []);
    
  return (
        <nav className={styles.navbar}>
            <div className={styles["navbar-container"]}>
                <div className={styles.menu}>
                    {logoData && (
                        <img src={logoData} 
                        alt="Instagram Logo" 
                        className={styles["instagram-logo"]} />)}
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