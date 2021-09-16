import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    library,
    IconPrefix,
    IconName,
} from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

export type TIconeDuplo = {
    prefix: IconPrefix;
    name: IconName;
};

export function IconeDuplo({ prefix, name }: TIconeDuplo) {
    return (
        <div className={["fa-stack", "fa-2x", styles.iconeDuplo].join(" ")}>
            <FontAwesomeIcon
                icon={["fas", "circle"]}
                className={["fa-stack-2x", styles.iconeCirculo].join(" ")}
            />
            <FontAwesomeIcon
                icon={[prefix, name]}
                className={["fa-stack-1x", styles.icone].join(" ")}
            />
        </div>
    );
}
