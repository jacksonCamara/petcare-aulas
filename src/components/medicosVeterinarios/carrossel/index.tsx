import React from "react";
import { IconeFlechaDireita, IconeFlechaEsquerda } from "./iconeFlecha";
import MedicoVeterinarioLista from "./medicoVeterinarioLista";
import styles from "./styles.module.scss";

const Carrossel = () => {
    return (
        <div className={styles.carrossel}>
            <div className={styles.icone}>
                <IconeFlechaEsquerda size="1x" />
            </div>
            <MedicoVeterinarioLista />
            <div className={styles.icone}>
                <IconeFlechaDireita size="1x" />
            </div>
        </div>
    );
};

export default Carrossel;
