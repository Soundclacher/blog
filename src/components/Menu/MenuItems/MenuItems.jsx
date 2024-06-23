import React from "react";
import { Link } from "react-router-dom";
import styles from "./MenuItems.module.css";

const MenuItems = () => {

    return (
        <div className={styles.menu} >
            <Link className={styles.link} to={'/'}>
                Home
            </Link>
            <Link className={styles.link} to={'/about'}>
                About
            </Link>
            <Link className={styles.link} to={'/faq'}>
                FAQ
            </Link>        
        </div>
    );
}

export default MenuItems;