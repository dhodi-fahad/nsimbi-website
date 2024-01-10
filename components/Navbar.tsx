import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';
import React from "react";
interface NavbarProps {
    toggleMenu: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ toggleMenu }) => {
    return (
        <div className={styles.nav}>
            <button className={styles.menu_btn} onClick={toggleMenu}>
                Menu +
            </button>
            <div className={styles.logo_section}>
                <Link href="/">
                    <Image
                        className={styles.logo}
                        src="/logo.svg"
                        alt="Nsimbi Logo"
                        width={24}
                        height={24}
                        priority
                    />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
