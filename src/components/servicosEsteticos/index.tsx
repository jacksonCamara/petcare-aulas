import React from "react";
import Cabecalho from "../global/cabecalho";
import styles from "./styles.module.scss";
import Image from "next/image";
import cachorroYorkshire from "../../../public/assets/cachorro-yorkshire.jpg";
import { ServicoEsteticoLista } from "./servicoEsteticoLista";

const ServicosEsteticos = () => {
    return (
        <section className={styles.servicosEsteticos}>
            <div className={styles.cabecalho}>
                <Cabecalho titulo="Serviços Estéticos" subtitulo="PetShop" />
            </div>
            <div className={styles.corpo}>
                <ServicoEsteticoLista />

                <div className={styles.imagem}>
                    <Image
                        src={cachorroYorkshire}
                        alt="Cachorro Yorkshire"
                        layout="responsive"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicosEsteticos;
