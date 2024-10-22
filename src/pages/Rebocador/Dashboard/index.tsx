import { useState } from "react";
import { Buttons } from "../../../components/Buttons";
import { Cards } from "../../../components/Cards";
import { CarrinhosBox } from "../../../components/CarrinhosBox";
import { ProfileCard } from "../../../components/ProfileCard";
import { Status } from "../../../components/Status";
import { Container } from "./styles";

export const Dashboard = () => {
    const [carrinhosSelecionados, setCarrinhosSelecionados] = useState<string[]>([]);
    

    // Adicionar um carrinho à lista de selecionados
    const adicionarCarrinho = (nomeCarrinho: string) => {
        setCarrinhosSelecionados((prevCarrinhos) => {
            if (prevCarrinhos.includes(nomeCarrinho)) {
                return prevCarrinhos;
            }
            return [...prevCarrinhos, nomeCarrinho];
        });
    };

    // Remover um carrinho da lista de selecionados
    const removerCarrinho = (nomeCarrinho: string) => {
        setCarrinhosSelecionados((prevCarrinhos) => {
            return prevCarrinhos.filter((carrinho) => carrinho !== nomeCarrinho);
        });
    };

    // Função para fechar o Status (limpar a seleção de carrinhos)
    const fecharStatus = () => {
        setCarrinhosSelecionados([]);
    };

    

    return (
        <Container>
            <ProfileCard />
            <Buttons/>
            <Cards />
            {
                carrinhosSelecionados.length > 0 && (
                    <Status
                        carrinhosSelecionados={carrinhosSelecionados}
                        onClose={fecharStatus}
                    />
                )
            }

            <CarrinhosBox
                adicionarCarrinho={adicionarCarrinho}
                removerCarrinho={removerCarrinho}
                carrinhosSelecionados={carrinhosSelecionados}
            />

            
        </Container>
    );
};
