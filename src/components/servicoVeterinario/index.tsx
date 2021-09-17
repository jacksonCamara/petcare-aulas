import styles from "./styles.module.scss";

export const ServicosVeterinarios = () => {
    return (
        <section className={styles.servicosVeterinarios}>
            <div className={styles.cabecalho}>cabecalho</div>
            <div className={styles.corpo}>
                <div className={styles.seletores}>seletores</div>
                <div className={styles.servicoVeterinario}>
                    servico veterinario
                </div>
            </div>
        </section>
    );
};
