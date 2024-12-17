"use client"
import { usePathname } from "next/navigation"
import Link from "next/link";
import styles from "./NavLinks.module.css"


export default function NavLinks() {
    const path = usePathname(); 
    
    return (
        <ul className={styles.container}>
            <li ><Link href="/about" className={path === "/about" ? styles.active : ""}>About</Link></li>
            <li><Link href="/locations" className={path === "/locations" ? styles.active : ""}>Location</Link></li>
            <li><Link href="/careers" className={path === "/careers" ? styles.active : ""}>Careers</Link></li>
        </ul>
    )
}