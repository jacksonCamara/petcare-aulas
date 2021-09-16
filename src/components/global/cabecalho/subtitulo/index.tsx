import styles from "./styles.module.scss";

type TProps = {
    subtitulo: string;
};

const Subtitulo = ({ subtitulo }: TProps) => {
    return <p className={styles.subtitulo}>{subtitulo}</p>;
};

export default Subtitulo;
