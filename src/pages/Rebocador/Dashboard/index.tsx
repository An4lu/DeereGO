import { useState } from "react";
import { Buttons } from "../../../components/Buttons";
import { Canvas } from "../../../components/Canvas/Canvas";
import { CanvasHead } from "../../../components/Canvas/HeadCanvas";
import { Cards } from "../../../components/Cards";
import { CarrinhosBox } from "../../../components/CarrinhosBox";
import { Modal } from "../../../components/Modal";
import { ProfileCard } from "../../../components/ProfileCard";
import { Status } from "../../../components/Status";
import { Container } from "./styles";

export const Dashboard = () => {
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    const [carrinhosSelecionados, setCarrinhosSelecionados] = useState<string[]>([]);

    // Funções para controle do modal
    const handleOpenMapModal = () => {
        setIsMapModalOpen(true);
    };
    const handleCloseMapModal = () => {
        setIsMapModalOpen(false);
    };

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
        setCarrinhosSelecionados([]);  // Limpa a seleção de carrinhos
    };

    return (
        <Container>
            <ProfileCard />
            <Buttons />
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
                openMapModal={handleOpenMapModal}
            />

            <Modal isOpen={isMapModalOpen} onClose={handleCloseMapModal}>
                <CanvasHead
                    NomeCarrinho={'Carro 1'}
                    Local={'A1'} />
                <Canvas posX={50} posY={50} width="200" height="200" style={{ width: "100%", height: "100%" }} />
            </Modal>
        </Container>
    );
};
