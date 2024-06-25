import React from "react";
import MenuItems from "./MenuItems/MenuItems";
import styles from  "./Menu.module.css";

const Menu = () => {
    return (
        <div className={styles.navblock}>
            <MenuItems/>
        </div>
    );
}

export default Menu;