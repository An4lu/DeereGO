import { CaretCircleDown, CaretCircleUp, ShoppingCart, MapTrifold} from '@phosphor-icons/react';
import { useState } from 'react';
import {
    BodyCard,
    BodyCardShow,
    CardEntregaContainer,
    HeadCard,
    Info,
    InfoText,
    Left,
    Right,
    Linha,
    StatusText,
    TitleCard
} from './styles';
import { Button } from '../Button';
import { CanvasHead } from '../Canvas/HeadCanvas';
import { Canvas } from '../Canvas/Canvas';
import { Modal } from '../Modal';


interface CardCarrinhoProps {
    idCart: string;
    NomeCarrinho: string;
    Local: string;
    Peças: string;
    Bloco: string;
    onAdicionar: () => void;
    onRemover: () => void;
    isSelecionado: boolean;
}

export function CardCarrinho({ idCart, NomeCarrinho, Local, Peças, Bloco, onAdicionar, onRemover, isSelecionado}: CardCarrinhoProps) {

    const [isMapModalOpen, setIsMapModalOpen] = useState(false);
    // Funções para controle do modal
    const handleOpenMapModal = () => {
        setIsMapModalOpen(true);
    };
    const handleCloseMapModal = () => {
        setIsMapModalOpen(false);
    };


    const [selected, setSelected] = useState<number | null>(null);
    const i = 0;

    const toggle = (i: number) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <><CardEntregaContainer>
            <HeadCard onClick={() => toggle(i)}>
                <Left>
                    <ShoppingCart width={24} height={24} weight="bold" />
                    <TitleCard>
                        <StatusText>{NomeCarrinho}</StatusText>
                        <InfoText>{Local}</InfoText>
                    </TitleCard>
                </Left>
                <Right>
                    <MapTrifold size={32} weight="fill" onClick={handleOpenMapModal} />
                    {selected === i ? (
                        <CaretCircleUp size={32} weight="fill" />
                    ) : (
                        <CaretCircleDown size={32} weight="fill" />
                    )}
                </Right>
            </HeadCard>
            {selected === i ? (
                <BodyCardShow>
                    <Info>
                        <StatusText>id</StatusText>
                        <InfoText>{idCart}</InfoText>
                        <Linha />

                    </Info>

                    <Info>
                        <StatusText>Peças</StatusText>
                        <InfoText>{Peças}</InfoText>
                        <Linha />

                    </Info>
                    <Info>
                        <StatusText>Bloco (Layout)</StatusText>
                        <InfoText>{Bloco}</InfoText>
                        <Linha />

                    </Info>
                    {isSelecionado ? (
                        <Button type="submit" css={{ width: '100%' }} onClick={onRemover}>
                            Remover ao Carrinho
                        </Button>
                    ) : (
                        <Button type="submit" css={{ width: '100%' }} onClick={onAdicionar}>
                            Adicionar ao Carrinho
                        </Button>
                    )}

                </BodyCardShow>
            ) : (
                <BodyCard />
            )}
        </CardEntregaContainer>
        <Modal isOpen={isMapModalOpen} onClose={handleCloseMapModal}>
                <CanvasHead
                    NomeCarrinho={NomeCarrinho}
                    Local={Local} />
                <Canvas posX={100} posY={50} width="100" height="100" style={{ width: "100%", height: "100%" }} />
        </Modal></>
    );
}
