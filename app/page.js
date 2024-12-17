import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Shared/Button";
import data from "@/data/how-to-use"
import reasons from "@/data/reasons";
import HowToUse from "@/components/Home/HowToUse";
import { Lexend_Deca } from "next/font/google";
import Reasons from "@/components/Shared/Reasons";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"], 
  weight: "400"
})


export const metadata = {
  title: "Scoot | Affordable and Reliable Scooter Rentals",
  description: "Discover the easiest way to get around with Scoot. Affordable, eco-friendly scooter rentals for city travelers and commuters. Join the ride today!",
};

export default function Home() {
  const homeReasons = reasons.home; 

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>
            Scooter sharing made simple
          </h1>
          <div className={styles.text}>
            <p className={lexendDeca.className}>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you&apos;re away!</p>
            <Button href="#download" message="Get Scootin"/>
            <div className={styles["orange-line"]}></div>
          </div>
        </div>
        <div className={styles["img-container"]}>
          <Image className={styles.arrow} src="/assets/patterns/right-arrow.svg" width={447} height={137} alt="Right arrow background pattern"/> 
          <Image className={styles.circles} src="/assets/patterns/white-circles.svg" width={234} height={63} alt="White Circles background pattern"/> 
        </div>
        <picture>
          <source
            srcSet="/assets/images/home-hero-desktop.jpg"
            media="(min-width: 1110px)"
          />
          <source
            srcSet="/assets/images/home-hero-desktop.jpg"
            media="(min-width: 768px)"
          />
          <Image
            src="/assets/images/home-hero-mobile.jpg"
            alt="Hero image showing our scooters in the background"
            fill
          />
        </picture>
      </section>
      <section className={styles["how-to-use"]}>
        <div className={styles.flex}>
          {data.map((component) => <HowToUse key={component.title} {...component}/>)}
          <div className={styles.line}></div>
        </div>
      </section>
      <section className={styles.reasons}>
        {homeReasons.map(reason => { return <Reasons key={reason.title} {...reason}/>})}
      </section>
    </main>
  );
}
