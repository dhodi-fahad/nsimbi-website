import styles from "./contact.module.css";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Nsimbi',
};
const Contact = () => {
  return (
      <div className={styles.contact}>
          <h1> Contact Us</h1>

          <h2>
              Phone
          </h2>
          <p>
              Call us at 0750964062 for immediate assistance.
          </p>

          <h2>
              Social Media
          </h2>
          <p>
              Connect with us on all major social media platforms
          </p>
          <div className={styles.socials}>
                <a href="">
                    <i className="bi bi-twitter-x"></i>
                </a>
              <a href="">
                  <i className="bi bi-instagram"></i>
              </a>

              <a href="">
                  <i className="bi bi-whatsapp"></i>
              </a>

              <a href="">
                  <i className="bi bi-envelope"></i>
              </a>
          </div>
      </div>)
}

export default Contact