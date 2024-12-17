import styles from "./Value.module.css"; 
import Image from "next/image";

export default function Value({number, image, title, description}) {
    return (
        <div className={styles.container}>
            <div className={styles["image-grid"]}>
                <div className={styles.image}>
                    <Image src={`/assets/images/${image}.jpg`} fill alt={`${title} image`}/>
                </div>
                <div className={styles.number}>
                    {number}
                </div>
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
