import styles from "./styles.module.scss";
import React from "react";

type TProps = {
    titulo: string;
};

const Titulo = ({ titulo }: TProps) => {
    return <h2 className={styles.titulo}>{titulo}</h2>;
};

export default Titulo;
