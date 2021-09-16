import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import { SizeProp } from "@fortawesome/fontawesome-svg-core";

type TProps = {
    size: SizeProp;
};

export const IconeFlechaEsquerda = ({ size }: TProps) => {
    return (
        <FontAwesomeIcon
            icon={faChevronLeft}
            className={styles.icone}
            size={size}
        />
    );
};

export const IconeFlechaDireita = ({ size }: TProps) => {
    return (
        <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.icone}
            size={size}
        />
    );
};
