import Button from "../Shared/Button";
import styles from "./Jobs.module.css"
import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
    subsets: ["latin"],
    weight: "400"
})

export default function Jobs({title, location}) {
    return (
        <div className={styles.container}>
            <div className={styles["text-flex"]}>
                <h3>{title}</h3>
                <p className={lexendDeca.className}>{location}</p>
            </div>
            <Button message={"Apply"} href="" className={styles["jobs-button"]}/>
        </div>
    )
}