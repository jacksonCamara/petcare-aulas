import { IconeDuplo, TIconeDuplo } from "../iconeDuplo";
import styles from "./styles.module.scss";

type TProps = {
    titulo: string;
    descricao: string;
    icone: TIconeDuplo;
    alinhamento: "esquerda" | "direita";
};

export const ServicoEstetico = ({
    titulo,
    descricao,
    icone,
    alinhamento,
}: TProps) => {
    return (
        <div className={styles.servicoEstetico}>
            <div
                className={`${styles.cabecalho}
                    ${
                        alinhamento === "esquerda"
                            ? styles.cabecalhoEsquerda
                            : ""
                    }
                    `}
            >
                <h3 className={styles.titulo}>{titulo}</h3>
                <div>
                    <IconeDuplo prefix={icone.prefix} name={icone.name} />
                </div>
            </div>
            <p
                className={`${styles.descricao}
                    ${
                        alinhamento === "esquerda"
                            ? styles.descricaoEsquerda
                            : ""
                    }
                    `}
            >
                {descricao}
            </p>
        </div>
    );
};
