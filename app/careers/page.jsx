import styles from "./page.module.css"
import HeroImage from "@/components/Shared/HeroImage"
import Reasons from "@/components/Shared/Reasons"
import Value from "@/components/Shared/Value"
import reasons from "@/data/reasons"
import values from "@/data/value"
import jobs from "@/data/jobs"
import Jobs from "@/components/Careers/Jobs"

export const metadata = {
    title: "Careers at Scoot | Join Our Growing Team",
    description: "Looking for a career in urban mobility? Scoot is hiring! Explore exciting opportunities to join our team and help shape the future of city travel.",
};

export default function Careers() {
    return (
        <main>
            <HeroImage title={"Careers"}/>
            <section className={styles.reasons}> 
                {reasons.careers.map(reason => { return <Reasons key={reason.title} {...reason}/>})}
            </section>
            <section className={styles.values}>
                <h2></h2>
                <div className={styles.flex}>
                    {values.map(value => {return <Value key={value.title} {...value}/>})}
                </div>
            </section>
            <section className={styles.careers}>
                {jobs.map((job, index) => { return <Jobs key={`${job.title}${index}`} {...job} />})}
            </section>
        </main>
    )
}