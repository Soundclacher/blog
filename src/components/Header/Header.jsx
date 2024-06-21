import React from "react";
import Menu from "../Menu/Menu";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <Menu/>
        </div>
    );
}

export default Header;