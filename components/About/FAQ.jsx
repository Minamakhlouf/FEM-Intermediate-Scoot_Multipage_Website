"use client"
import { useState} from "react"
import styles from "./FAQ.module.css"
import { Lexend_Deca } from "next/font/google"

const lexendDeca = Lexend_Deca({
    subsets: ["latin"], 
    weight: "400"
})

export default function FAQ({faq}) {
    const [questionActive, setQuestionActive] = useState(false)

    const questionActiveHandler = () => {
        setQuestionActive(!questionActive); 
    }

    return (
        <div className={styles.container}>
            <button 
                className={styles["question-flex"]} 
                onClick={questionActiveHandler}
                aria-expanded={questionActive}
                aria-controls={`faq-answer-${faq.question}`}
                id={`faq-question-${faq.question}`}
            >
                <p>{faq.question}</p>
                <svg
                    className={questionActive ? styles.active : ""}
                    height="16px"
                    width="16px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
                        fill="#fcb72b"
                    />
                </svg>            
            </button>
            <div 
                className={`${styles.answer} ${questionActive ? styles["is-active"] : ""}`}
                id={`faq-answer-${faq.question}`}
                aria-labelledby={`faq-question-${faq.question}`}
                aria-hidden={!questionActive}
            >
                <p className={lexendDeca.className}>{faq.answer}</p>
            </div>
        </div>
    )
}