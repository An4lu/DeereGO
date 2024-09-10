import { CaretCircleDown, CaretCircleUp, ShoppingCart } from '@phosphor-icons/react';
import { useState } from 'react';
import {
    BodyCard,
    BodyCardShow,
    CardEntregaContainer,
    HeadCard,
    Info,
    InfoText,
    Left,
    Linha,
    StatusText,
    TitleCard
} from './styles';

interface CardEntregaProps {
    idCart: string;
    opStatus: string;
    Partida: string;
    Destino: string;
    DataHora: string;
}

export function CardEntrega({ idCart, opStatus, Partida, Destino, DataHora }: CardEntregaProps) {
    const [selected, setSelected] = useState<number | null>(null);
    const i = 0;

    const toggle = (i: number) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <CardEntregaContainer>
            <HeadCard onClick={() => toggle(i)}>
                <Left>
                    <ShoppingCart width={24} height={24} weight="bold" />
                    <TitleCard>
                        <StatusText>{opStatus}</StatusText>
                        <InfoText>{idCart}</InfoText>
                    </TitleCard>
                </Left>
                {selected === i ? (
                    <CaretCircleUp size={32} weight="fill" />
                ) : (
                    <CaretCircleDown size={32} weight="fill" />
                )}
            </HeadCard>
            {selected === i ? (
                <BodyCardShow>
                    <Info>
                        <StatusText>Partida</StatusText>
                        <InfoText>{Partida}</InfoText>
                        <Linha />
                        
                    </Info>

                    <Info>
                        <StatusText>Destino</StatusText>
                        <InfoText>{Destino}</InfoText>
                        <Linha />
                        
                    </Info>
                    <Info>
                        <StatusText>Horário</StatusText>
                        <InfoText>{DataHora}</InfoText>
                        <Linha />
                        
                    </Info>
                </BodyCardShow>
            ) : (
                <BodyCard />
            )}
        </CardEntregaContainer>
    );
}
