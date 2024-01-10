
import styles from "./menu.module.css";
import Link from "next/link";

const Menu = () => {
  return(
      <div className={styles.menu}>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="TOS">
                        Terms of Service
                    </Link>
                </li>
                <li>
                    <Link href="pricing">
                        Pricing
                    </Link>
                </li>
                {/*<li>*/}
                {/*    <Link href="about">*/}
                {/*        About Us*/}
                {/*    </Link>*/}
                {/*</li>*/}

                <li>
                    <Link href="contact">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
      </div>
  )
}
export default Menu;