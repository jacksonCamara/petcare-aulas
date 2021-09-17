import React from "react";
import Cabecalho from "../global/cabecalho";
import { Seletor } from "./seletor";
import styles from "./styles.module.scss";

export const ServicosVeterinarios = () => {
    return (
        <section className={styles.servicosVeterinarios}>
            <div className={styles.cabecalho}>
                <Cabecalho
                    titulo="Serviços Veterinários"
                    subtitulo="Hospital e Clínica"
                />
            </div>
            <div className={styles.corpo}>
                <div className={styles.seletores}>
                    <Seletor />
                </div>
                <div className={styles.servicoVeterinario}>
                    servico veterinario
                </div>
            </div>
        </section>
    );
};
