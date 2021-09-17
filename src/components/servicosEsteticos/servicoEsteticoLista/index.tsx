import servicoEsteticoData from "../../../../data/servico-estetico.json";
import { ServicoEstetico } from "../servicoEstetico";
import { v4 as uuidv4 } from "uuid";
import { TIconeDuplo } from "../iconeDuplo";

export const ServicoEsteticoLista = () => {
    return (
        <>
            {servicoEsteticoData.map((servicoEstetico, indice) => {
                return (
                    <ServicoEstetico
                        key={uuidv4()}
                        titulo={servicoEstetico.titulo}
                        descricao={servicoEstetico.descricao}
                        icone={servicoEstetico.icone as TIconeDuplo}
                        alinhamento={indice % 2 === 0 ? "direita" : "esquerda"}
                    />
                );
            })}
        </>
    );
};
