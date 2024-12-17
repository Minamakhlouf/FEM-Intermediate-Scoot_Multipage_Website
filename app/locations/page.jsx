import HeroImage from "@/components/Shared/HeroImage"
import styles from "./page.module.css"
import Image from "next/image"
import Button from "@/components/Shared/Button"
import { Lexend_Deca } from "next/font/google"

const lexendDeca = Lexend_Deca({
    subsets: ["latin"],
    weight: "400"
})

export const metadata = {
    title: "Scoot Locations | Find a Scooter Near You",
    description: "Find Scoot scooter rental locations near you. Explore our network of convenient, eco-friendly scooter hubs in major cities worldwide.",
};

export default function Locations() {
    return (
        <main>
            <HeroImage title="Locations"/>
            <section className={styles.map}>
                <div className={styles.shell}>
                    <div className={styles["map-container"]}>
                        <picture>
                            <source
                                srcSet="/assets/images/world-map-desktop.png"
                                media="(min-width: 1110px)"
                            />
                            <source
                                srcSet="/assets/images/world-map-tablet.png"
                                media="(min-width: 768px)"
                            />
                            <Image
                                src="/assets/images/world-map-mobile.png"
                                alt="World Map"
                                fill
                            />
                        </picture>
                        <div className={`${styles["city-1"]}`}><div className={styles.city}>New York</div></div>
                        <div className={`${styles["city-2"]}`}><div className={styles.city}>London</div></div>
                        <div className={`${styles["city-3"]}`}><div className={styles.city}>Yokohama</div></div>
                        <div className={`${styles["city-4"]}`}><div className={styles.city}>Jakarta</div></div>
                    </div>
                </div>
                <div className={styles["city-name-flex"]}>
                    <div className={styles.city}>New York</div>
                    <div className={styles.city}>London</div>
                    <div className={styles.city}>Jakarta</div>
                    <div className={styles.city}>Yokohama</div>
                </div>
            </section>
            <section className={styles["not-there"]}>
                <h2>Your City Not Listed?</h2>
                <p className={lexendDeca.className}>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
                <Button href="" message="Message us"/>
            </section>
        </main>
    )
}