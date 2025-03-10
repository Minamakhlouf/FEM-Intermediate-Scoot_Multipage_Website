"use client"
import { useState } from "react"
import Image from "next/image";
import styles from "./MobileLinks.module.css"
import Portal from "./Portal";
import Button from "../Shared/Button";
import Link from "next/link";

export default function MobileLinks() {
    const [linksShown, setLinksShown] = useState(false); 
    const mobileLinksHandler = () => {
        setLinksShown(!linksShown); 
    }

    return (
        <>
            <button onClick={mobileLinksHandler} className={styles["btn-container"]}>
                {
                    linksShown ?  
                    <Image src="/assets/icons/close.svg" width={18} height={18} alt="close icon"/> : 
                    <Image src="/assets/icons/hamburger.svg" width={20} height={16} alt="hamburger icon"/>
                }
            </button>
            <Portal>
                <div className={`${styles.modal} ${linksShown ? styles.active : ""}`}>
                    <div className={`${styles["link-container"]} ${linksShown ? styles.active : ""}`}>
                        <ul>
                            <Link href="/about">About</Link>
                            <Link href="/locations">Location</Link>
                            <Link href="/careers">Careers</Link>
                        </ul>
                        <div onClick={mobileLinksHandler}>
                            <Button href="#download" message="Get Scootin" className={styles.btn}/> 
                        </div>
                    </div>
                </div>
            </Portal>
        </>
    )
}