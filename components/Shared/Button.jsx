"use client"; 
import Link from "next/link";
import styles from "./Button.module.css"
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
    subsets: ["latin"], 
    weight: ["400", "700"]
})

export default function Button ({message, href, className}) {
    const voidButtonHandler = (e) => {
        if (href === "") {
            e.preventDefault(); 
        }
    }

    return (
        <Link onClick={voidButtonHandler} href={href} className={`${styles.button} ${spaceMono.className} ${className ? className : styles["btn-width"]}`}>
            {message}
        </Link>
    )
}