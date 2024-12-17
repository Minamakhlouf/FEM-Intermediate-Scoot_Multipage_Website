import Image from "next/image";
import styles from "./Arrow.module.css"

export default function Arrow({arrowType, arrowNumber}) {
    return (
        <>
            <Image className={styles[`position-${arrowNumber}`]} src={`/assets/patterns/${arrowType}.svg`} width={735} height={138} alt="Arrow background pattern"/>
            <Image className={styles[`line-${arrowNumber}`]} src="/assets/patterns/line.svg" width={404} height={14} alt="line background pattern"/>    
        </>
    )
}