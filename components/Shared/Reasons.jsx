"use client"
import styles from "./Reasons.module.css"
import Button from "./Button"
import Image from "next/image"
import { Lexend_Deca } from "next/font/google"
import Arrow from "./Arrow"
import { usePathname } from "next/navigation"

const lexendDeca = Lexend_Deca({
    subsets: ["latin"], 
    weight: "400"
  })

export default function Reasons({title, description, imgKeyword, circleLocation, arrowType, arrowNumber, href}) {
    const path = usePathname()
    let hasButton = path !== "/about"

    return (
        <div className={`${styles.grid} ${circleLocation === "right" ? styles["grid-1"] : styles["grid-2"]}`}>
            <div className={styles["image-container"]}>
                <Image src={`/assets/images/${imgKeyword}.jpg`} fill alt="Reason Image"/>
            </div>
            <div className={styles["pattern-container"]}>
                <div className={`${styles.circle} ${circleLocation === "right" ? styles.right : styles.left}`}></div>
                <Arrow arrowType={arrowType} arrowNumber={arrowNumber}/>
            </div>
            <div className={styles["text-container"]}>
                <div className={styles.text}>
                    <h2>{title}</h2>
                    <p className={lexendDeca.className}>{description}</p>
                    {hasButton && <Button href={href} message={"Learn More"}/>}
                </div>
            </div>
        </div>
    )
}