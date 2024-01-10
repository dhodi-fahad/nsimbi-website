import styles from "./styles.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Nsimbi',
};
const Page = () => {
    return (
        <div className={styles.about}>
            <h1>About Us</h1>
            <p>
                Welcome to Nsimbi! Founded by Dhodi Fahad Kinene,
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                we're your go-to platform for hassle-free shopping.
                At Nsimbi, we bridge the gap between your shopping needs and local markets.
                Our mission is to make your shopping experience effortless—simply submit your
                shopping list, choose your market, and relax while our dedicated team takes care of the
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                rest. Whether it's for pick-up or delivery, count on Nsimbi to fulfill your shopping needs
                with care and efficiency. Your satisfaction is our priority.
            </p>
        </div>
    )
}

export default Page;