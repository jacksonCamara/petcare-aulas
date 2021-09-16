import styles from "./styles.module.scss";
import Image from "next/image";

type TImage = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

type TProps = {
    nome: string;
    profissao: string;
    imagem: TImage;
};

const MedicoVeterinario = ({ nome, profissao, imagem }: TProps) => {
    return (
        <div>
            <Image
                src={imagem.src}
                alt={imagem.alt}
                width={imagem.width}
                height={imagem.height}
                layout="responsive"
            />
            <p className={styles.nome}>{nome}</p>
            <p className={styles.profissao}>{profissao}</p>
        </div>
    );
};

export default MedicoVeterinario;
