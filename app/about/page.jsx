import reasons from "@/data/reasons"
import values from "@/data/value";
import faqs from "@/data/faq";
import Reasons from "@/components/Shared/Reasons"
import HeroImage from "@/components/Shared/HeroImage";
import styles from "./page.module.css"
import Value from "@/components/Shared/Value";
import FAQ from "@/components/About/FAQ";

export const metadata = {
    title: "About Scoot | Our Mission to Revolutionize Urban Travel",
    description: "Learn more about Scoot and our mission to revolutionize urban transportation. Discover how we’re making city travel eco-friendly, affordable, and fun.",
  };

export default function About() {
    const aboutReasons = reasons.about; 

    return (
        <main>
            <HeroImage title={"About"}/>
            <section className={styles.reasons}>
                {aboutReasons.map(reason => { return <Reasons key={reason.title} {...reason}/>})}
            </section>
            <section className={styles.values}>
                <h2>Our Values</h2>
                <div className={styles.flex}>
                    {values.map(value => {return <Value key={value.title} {...value}/>})}
                </div>
            </section>
            <section className={styles.faq}>
                <h2>FAQs</h2>
                <div className={styles["faq-container"]}>
                    <h3>How it works</h3>
                    <div className={styles["faq-flex"]}>
                        {faqs.howItWorks.map(faq => {return <FAQ key={faq.question} faq={faq}/>})}
                    </div>
                </div>
                <div className={styles["faq-container"]}>
                    <h3>Safe Driving</h3>
                    <div className={styles["faq-flex"]}>
                        {faqs.safeDriving.map(faq => {return <FAQ key={faq.question} faq={faq}/>})}
                    </div>
                </div>
            </section>
        </main>
    )
}