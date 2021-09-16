import { IconeDuplo, TIconeDuplo } from "../iconeDuplo";
import styles from "./styles.module.scss";

type TProps = {
    titulo: string;
    descricao: string;
    icone: TIconeDuplo;
};

export const ServicoEstetico = ({ titulo, descricao, icone }: TProps) => {
    return (
        <div className={styles.servicoEstetico}>
            <div className={styles.cabecalho}>
                <h3 className={styles.titulo}>{titulo}</h3>
                <div>
                    <IconeDuplo prefix={icone.prefix} name={icone.name} />
                </div>
            </div>
            <p className={styles.descricao}>{descricao}</p>
        </div>
    );
};
