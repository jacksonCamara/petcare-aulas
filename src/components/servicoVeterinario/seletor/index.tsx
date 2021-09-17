import React from "react";
import styles from "./styles.module.scss";

export const Seletor = () => {
    return (
        <div className={styles.seletor}>
            <a className={styles.link}>Cuidados médicos</a>
            <div className={styles.barra} />
        </div>
    );
};
