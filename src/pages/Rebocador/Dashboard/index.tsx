import { Buttons } from "../../../components/Buttons"
import { Cards } from "../../../components/Cards"
import { ProfileCard } from "../../../components/ProfileCard"
import { Status } from "../../../components/Status"
import { Container } from "./styles"
import { CarrinhosBox } from "../../../components/CarrinhosBox"
import { useState } from "react"
import { Modal } from "../../../components/Modal"
import { Canvas } from "../../../components/Canvas/Canvas"
import { CanvasHead } from "../../../components/Canvas/HeadCanvas"
//import { MapaRebocador } from "../../../components/MapaRebocador/MapaRebocador"

export const Dashboard = () => {
    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    const handleOpenMapModal = () => {
        setIsMapModalOpen(true);  // Garante que o modal será aberto
    };
    const handleCloseMapModal = () => {
        setIsMapModalOpen(false);  // Garante que o modal será fechado
    };
    const [carrinhosSelecionados, setCarrinhosSelecionados] = useState<string[]>([]);
    console.log('Carrinhos Selecionados',carrinhosSelecionados);

    const adicionarCarrinho = (nomeCarrinho: string) => {
        setCarrinhosSelecionados((prevCarrinhos) => {
            if (prevCarrinhos.includes(nomeCarrinho)){
                return prevCarrinhos;
            }
            return [...prevCarrinhos, nomeCarrinho];
        });
    }
    const removerCarrinho = (nomeCarrinho: string) => {
        setCarrinhosSelecionados((prevCarrinhos) => {
            return prevCarrinhos.filter((carrinho) => carrinho !== nomeCarrinho);
        });
    };

    return (
        <Container>
            <ProfileCard/>
            <Buttons/>
            <Cards/>
            {
                carrinhosSelecionados.length === 0 ?(
                    <></>
                ):(
                    <Status carrinhosSelecionados={carrinhosSelecionados}/>
                )
            }
            
            <CarrinhosBox
                adicionarCarrinho={adicionarCarrinho}
                removerCarrinho={removerCarrinho}
                carrinhosSelecionados={carrinhosSelecionados}
                openMapModal={handleOpenMapModal}
            />
            {/* <MapaRebocador/> */}
            <Modal isOpen={isMapModalOpen} onClose={handleCloseMapModal}>
                <CanvasHead
                    NomeCarrinho={'Carro 1'}
                    Local={'A1'} />
                <Canvas posX={50} posY={50} width="200" height="200" style={{ width: "100%", height: "100%" }}/>
            </Modal>
        </Container>
    )
}
