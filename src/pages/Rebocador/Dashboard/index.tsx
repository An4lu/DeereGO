import { Buttons } from "../../../components/Buttons"
import { Cards } from "../../../components/Cards"
import { ProfileCard } from "../../../components/ProfileCard"
import { Status } from "../../../components/Status"
import { Container } from "./styles"
import { CarrinhosBox } from "../../../components/CarrinhosBox"
import { useState } from "react"
//import { MapaRebocador } from "../../../components/MapaRebocador/MapaRebocador"

export const Dashboard = () => {
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
            />
            {/* <MapaRebocador/> */}
        </Container>
    )
}
