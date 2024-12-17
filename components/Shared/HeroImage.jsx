"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import styles from "./HeroImage.module.css"

export default function HeroImage({title}) {
    const path = usePathname();

    let backgroundImage = path === "/about" ? "about" : "careers-location"

    return (
        <header className={styles.hero}>
            <h2>{title}</h2>
            <picture>
                <source 
                    src={`/assets/images/${backgroundImage}-hero-desktop.jpg`}
                    media="(min-width: 1110px)"
                />
                <source 
                    src={`/assets/images/${backgroundImage}-hero-tablet.jpg`}
                    media="(min-width: 768px)"
                />
                <Image
                    src={`/assets/images/${backgroundImage}-hero-mobile.jpg`}
                    fill
                    alt={path === "/about" ? "Hero background image for about page showing a road" : "Hero background image showing a highway on the careers and locations page"}
                />
            </picture>
            <div className={styles["circle-pattern"]}>
                <Image src="/assets/patterns/white-circles.svg" width={234} height={63} alt="white circles background pattern"/>
            </div>
        </header>
    )
}