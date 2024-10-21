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
    PosX: number;
    PosY: number;
    onAdicionar: () => void;
    onRemover: () => void;
    isSelecionado: boolean;
}

export function CardCarrinho({ idCart, NomeCarrinho, Local, Peças, Bloco, PosX, PosY, onAdicionar, onRemover, isSelecionado}: CardCarrinhoProps) {

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

    interface ImageMap {
        [key: string]: string;
    }

    const imageMap: ImageMap = {
        A1: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533103/SAQ1_sh1gdl.png',
        A2: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533103/SAQ2_kqqocj.png',
        A3: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533103/SAQ3_pclm0n.png',
        A4: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533104/SAQ4_yqjxtk.png',
        B1: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533104/SBQ1_rq63ec.png',
        B2: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533104/SBQ2_ak04cv.png',
        B3: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533104/SBQ3_jnoyd6.png',
        B4: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533105/SBQ4_qghfse.png',
        C1: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533103/SCQ1_vwmdjo.png',
        C2: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533103/SCQ2_kyugwk.png',
        C3: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533104/SCQ3_swpgis.png',
        C4: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533711/SCQ4_jrhth0.png',
        D1: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533776/SDQ1_nrn444.png',
        D2: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533778/SDQ2_szkty0.png',
        D3: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533778/SDQ3_kouvmx.png',
        D4: 'https://res.cloudinary.com/dkircdiyj/image/upload/v1729533105/SDQ4_immuh9.png',
    };
    return (
        <><CardEntregaContainer>
            <HeadCard >
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
                        <CaretCircleUp size={32} weight="fill" onClick={() => toggle(i)}/>
                    ) : (
                        <CaretCircleDown size={32} weight="fill" onClick={() => toggle(i)}/>
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
                <Canvas posX={PosX} posY={PosY} width="400" height="400" style={{backgroundImage: `url(${imageMap[Local]})` }} />
        </Modal></>
    );
}
