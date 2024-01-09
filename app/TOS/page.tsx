import styles from "./tos.module.css";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Nsimbi',
};
const Page = ( ) => {
    return (
        <div className={styles.tos}>
            <h1>
                Terms Of Service
            </h1>
            <ul>
                <li>
                    <h4> 1. Service Description</h4>
                    <p>Our service facilitates shopping on behalf of clients based on their
                    submitted shopping lists. We operate as an intermediary between clients
                        and local markets to procure requested items.</p>
                </li>

                <li>
                    <h4>2. Shopping Execution</h4>
                    <p>
                        Upon receiving a shopping request, we will endeavor to fulfill it
                        promptly and accurately. However, availability of specific items
                        may vary and could impact the completion of the entire list.
                    </p>
                </li>

                <li>
                    <h4>
                        3. Communication
                    </h4>
                    <p>
                        We will maintain communication with clients throughout the shopping
                        process for clarification purposes. Clients are encouraged to provide
                        accurate and detailed shopping lists to avoid confusion.
                    </p>
                </li>

                <li>
                    <h4>
                        4. Pricing and Payments
                    </h4>
                    <p>
                        Clients will be billed for the total cost of items purchased, plus
                        any applicable service and delivery fees. All charges will be communicated
                        and agreed upon before finalizing the purchase.
                    </p>
                </li>

                <li>
                    <h4>
                        5. Delivery and Pick-Up
                    </h4>
                    <p>
                        Clients can choose between pick-up or delivery options. Delivery charges,
                        if applicable, will be communicated upfront. Once the shopping is ready,
                        clients will be notified for collection or delivery arrangements.
                    </p>
                </li>

                <li>
                    <h4>
                        6. Quality Assurance
                    </h4>
                    <p>
                        We strive to ensure the quality and freshness of purchased items. However,
                        certain factors beyond our control (e.g., market availability, perish-ability)
                        may impact the quality of items upon delivery or pick-up.
                    </p>
                </li>

                <li>
                    <h4>
                        7. Cancellation and Refunds
                    </h4>
                    <p>
                        Cancellation requests must be made within a specified time frame before the scheduled
                        shopping time. Refunds, if applicable, will be processed as per our refund policy,
                        outlined separately.
                    </p>
                </li>

                <li>
                    <h4>
                        8. Liability Limitation
                    </h4>
                    <p>
                        We take utmost care in shopping for clients, but we cannot be held liable for any issues
                        arising from the quality, availability, or condition of purchased items.

                    </p>
                </li>

                <li>
                    <h4>
                        9. Privacy Policy
                    </h4>
                    <p>
                        We respect client privacy and handle personal information in accordance with our privacy
                        policy. Client information is securely stored and used only for service-related purposes.
                    </p>
                </li>

                <li>
                    <h4>
                        10. Modification of Terms
                    </h4>
                    <p>
                        These terms may be updated or modified from time to time. Clients will be notified of
                        any changes to ensure transparency.
                    </p>
                </li>
            </ul>

            <p className={styles.conclude}>
                By using our service, clients agree to abide by these terms and conditions. If you have any
                questions or concerns, please contact us for clarification before using our service.
            </p>
        </div>
    )
}

export default Page