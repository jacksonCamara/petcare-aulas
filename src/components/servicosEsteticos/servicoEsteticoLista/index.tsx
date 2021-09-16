import servicoEsteticoData from "../../../../data/servico-estetico.json";
import { ServicoEstetico } from "../servicoEstetico";
import { v4 as uuidv4 } from "uuid";
import { TIconeDuplo } from "../iconeDuplo";

export const ServicoEsteticoLista = () => {
    return (
        <>
            {servicoEsteticoData.map((servicoEstetico) => {
                return (
                    <ServicoEstetico
                        key={uuidv4()}
                        titulo={servicoEstetico.titulo}
                        descricao={servicoEstetico.descricao}
                        icone={servicoEstetico.icone as TIconeDuplo}
                    />
                );
            })}
        </>
    );
};
