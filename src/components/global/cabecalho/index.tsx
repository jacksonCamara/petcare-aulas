import React from "react";
import Titulo from "./titulo";
import Barra from "./barra";
import Subtitulo from "./subtitulo";
import styles from "./styles.module.scss";

type TProps = {
    titulo: string;
    subtitulo: string;
};

const Cabecalho = ({ titulo, subtitulo }: TProps) => {
    return (
        <header className={styles.cabecalho}>
            <Titulo titulo={titulo} />

            <div className={styles.wrapper}>
                <Barra />
                <Subtitulo subtitulo={subtitulo} />
                <Barra />
            </div>
        </header>
    );
};

export default Cabecalho;
