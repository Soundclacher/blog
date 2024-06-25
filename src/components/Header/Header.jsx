import React from "react";
import Menu from "../Menu/Menu";
import styles from "./Header.module.css";
import Search from "../Search/Search";

const Header = () => {
    return (
        <div className={styles.header}>
            <Menu />
        </div>

    );
}

export default Header;