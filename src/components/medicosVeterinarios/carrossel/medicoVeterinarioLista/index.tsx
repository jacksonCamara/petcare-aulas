import React from "react";
import MedicoVeterinario from "../medicoVeterinario";
import styles from "./styles.module.scss";
import medicoVeterinarioLista from "../../../../../data/medico-veterinario-data.json";
import { v4 as uuidv4 } from "uuid";

const MedicoVeterinarioLista = () => {
    return (
        <div className={styles.medicoVeterinarioLista}>
            {medicoVeterinarioLista.map((medico) => {
                return (
                    <MedicoVeterinario
                        key={uuidv4()}
                        nome={medico.nome}
                        profissao={medico.profissao}
                        imagem={medico.imagem}
                    />
                );
            })}
        </div>
    );
};

export default MedicoVeterinarioLista;
