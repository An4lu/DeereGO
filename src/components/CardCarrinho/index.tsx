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

interface CardCarrinhoProps {
    idCart: string;
    NomeCarrinho: string;
    Local: string;
    Peças: string;
}

export function CardCarrinho({ idCart, NomeCarrinho, Local, Peças}: CardCarrinhoProps) {
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
                        <StatusText>{NomeCarrinho}</StatusText>
                        <InfoText>{Local}</InfoText>
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
                        <StatusText>id</StatusText>
                        <InfoText>{idCart}</InfoText>
                        <Linha />
                        
                    </Info>

                    <Info>
                        <StatusText>Peças</StatusText>
                        <InfoText>{Peças}</InfoText>
                        <Linha />
                        
                    </Info>
                </BodyCardShow>
            ) : (
                <BodyCard />
            )}
        </CardEntregaContainer>
    );
}
