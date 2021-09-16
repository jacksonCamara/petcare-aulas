import React from "react";
import Cabecalho from "../global/cabecalho";
import Carrossel from "./carrossel";
import styles from "./styles.module.scss";
const MedicosVeterinarios = () => {
    return (
        <section className={styles.medicosVeterinarios}>
            <div className={styles.cabecalho}>
                <Cabecalho
                    titulo="Médicos Veterinários"
                    subtitulo="Equipe"
                ></Cabecalho>
            </div>
            <div className={styles.carrossel}>
                <Carrossel />
            </div>
        </section>
    );
};

export default MedicosVeterinarios;
