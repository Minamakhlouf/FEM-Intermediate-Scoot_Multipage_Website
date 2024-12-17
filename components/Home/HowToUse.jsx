import styles from "./HowToUse.module.css"
import Image from "next/image"
import { Lexend_Deca } from "next/font/google"

const lexendDeca = Lexend_Deca({
    subsets: ["latin"], 
    weight: "400"
  })

export default function HowToUse({title, description, imgURL, isOverlapped}) {
    return (
        <div className={styles.grid}>
            <div className={`${styles["img-container"]} ${isOverlapped ? "" : styles.overlap}`}>
                <div className={styles.image}>
                    <Image src={imgURL} fill alt="svg icon"/>
                </div>
            </div>
            <div className={styles.text}>
                <h2>{title}</h2>
                <p className={`${lexendDeca.className}`}>{description}</p>
            </div>
        </div>
    )
}