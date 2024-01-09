"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Order from "@/components/order";


export default function Home() {

    return (
        <div className={styles.page}>

            <div className={styles.hero}>
                <Order/>
                <div>
                    <Image className={styles.image} src={"/Hero.svg"} width={800} height={300} priority alt="Nsimbi Shopping Hero Image"/>
                </div>
            </div>

            <h1>How it works.</h1>
            <div className={styles.card}>
                <h3>
                    Step 2
                </h3>
                <h2>
                    Pick Your Market
                </h2>
                <p>Select the specific market for your shopping.</p>
            </div>

        </div>
    )
}
