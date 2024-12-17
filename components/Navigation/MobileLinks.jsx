"use client"
import { useState } from "react"
import Image from "next/image";
import styles from "./MobileLinks.module.css"
import Portal from "./Portal";
import Button from "../Shared/Button";

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
                            <li>About</li>
                            <li>Location</li>
                            <li>Careers</li>
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