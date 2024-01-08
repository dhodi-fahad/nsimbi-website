"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";
import {InputForm} from "@/components/input";

import {useState} from "react";

const options = ['Option 1', 'Option 2', 'Option 3'];
export default function Home() {

    return (
        <main className={styles.main}>

            <nav className={styles.nav}>
                <Image
                    className={styles.logo}
                    src="/nsimbi.svg"
                    alt="Nsimbi Logo"
                    width={180}
                    height={18}
                    priority
                />

                <div className={styles.links}>
                    <Link href="terms-of-service" >
                        Terms of Service
                    </Link>

                    <Link href="pricing" >
                        Pricing
                    </Link>

                    <Link href="about-us" >
                        About Us
                    </Link>

                </div>




                <Link className={styles.contact} href="contact-us">
                    Contact Us
                </Link>


            </nav>

            {/*<div className={styles.wrapper}>*/}

            <div className={styles.start}>

                <h1>
                    Flexible grocery shopping and delivery
                </h1>
                <p>Find a the shop, market or supermarket from your local market.</p>

                <InputForm />

            </div>

            {/*<div className={styles.imagewrapper}>*/}
            {/*  <Image*/}
            {/*      src="/grocery.jpg"*/}
            {/*      alt="Grocery Shopping"*/}
            {/*      width={1000}*/}
            {/*      height={600}*/}
            {/*      priority*/}
            {/*  />*/}


            {/*</div>*/}
            {/*</div>*/}


            {/*<div className={styles.works}>*/}

            {/*  <h1>How it works.</h1>*/}

            {/*  <div className={styles.grid}>*/}

            {/*    <div*/}
            {/*        // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
            {/*        className={styles.card}*/}
            {/*        // target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*      <h3>*/}
            {/*        Step 1*/}
            {/*      </h3>*/}
            {/*      <h2>*/}
            {/*        Select Your Town*/}
            {/*      </h2>*/}
            {/*      <p>Choose the town where the market is situated.</p>*/}
            {/*    </div>*/}

            {/*    <div*/}
            {/*        // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
            {/*        className={styles.card}*/}
            {/*        // target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*      <h3>*/}
            {/*        Step 2*/}
            {/*      </h3>*/}
            {/*      <h2>*/}
            {/*        Pick Your Market*/}
            {/*      </h2>*/}
            {/*      <p>Select the specific market for your shopping.</p>*/}
            {/*    </div>*/}

            {/*    <div*/}
            {/*        // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
            {/*        className={styles.card}*/}
            {/*        // target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*      <h3>*/}
            {/*        Step 3*/}
            {/*      </h3>*/}
            {/*      <h2>*/}
            {/*        List Your Items*/}
            {/*      </h2>*/}
            {/*      <p>Create your shopping list with all the items you need.</p>*/}
            {/*    </div>*/}

            {/*    <div*/}
            {/*        // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
            {/*        className={styles.card}*/}
            {/*        // target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*      <h3>*/}
            {/*        Step 4*/}
            {/*      </h3>*/}
            {/*      <h2>*/}
            {/*        Submit Your Request*/}
            {/*      </h2>*/}
            {/*      <p>Send us these details, and our team will handle the shopping for you.</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}


        </main>
    )
}
