import styles from "./pricing.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing | Nsimbi',
};
const Pricing = () => {
    return (
        <div className={styles.pricing}>
            <h1>
                Pricing
            </h1>

            <ul>
                <li>
                    <h4>
                        Service Fee
                    </h4>
                    <p>
                        We charge a flat rate of 3000 UGX for every order placed.
                    </p>
                </li>

                <li>
                    <h4>
                        Delivery Fee
                    </h4>
                    <p>
                        For delivery requests, separate delivery fees will apply based
                        on the location. These fees will be communicated to you
                        depending on your delivery address.
                    </p>
                </li>
                <li>
                    <h4>
                        Cost of Items
                    </h4>
                    <p>
                        Once the shopping is completed, we will communicate
                        the total cost of the items purchased.
                    </p>
                </li>
                <li>
                    <h4>
                        Payment Channels
                    </h4>
                    <p>
                        Details regarding payment channels will be communicated
                        to you separately. We offer various secure payment
                        options for your convenience.
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Pricing;