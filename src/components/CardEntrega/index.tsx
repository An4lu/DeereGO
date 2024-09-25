import { CaretCircleDown, CaretCircleUp, ShoppingCart } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';
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
    TitleCard,
    ActionButton
} from './styles';

interface CardEntregaProps {
    idCart: string;
    opStatus: string;
    Partida: string;
    Destino: string;
    DataHora: string; // DataHora agora representa o tempo total formatado em mm:ss
    onIniciarEntrega: (id: string) => void;
    onConcluirEntrega: (id: string) => void;
}

export function CardEntrega({ idCart, opStatus, Partida, Destino, onIniciarEntrega, onConcluirEntrega }: CardEntregaProps) {
    const [selected, setSelected] = useState<number | null>(null);
    const [emEntrega, setEmEntrega] = useState(false);
    const [tempoDecorrido, setTempoDecorrido] = useState(0); // Tempo decorrido em segundos
    const [tempoTotal, setTempoTotal] = useState(0); // Tempo total após a conclusão
    const i = 0;

    const toggle = (i: number) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    const handleIniciarEntrega = () => {
        setEmEntrega(true);
        setTempoDecorrido(0); // Reseta o tempo decorrido
        setTempoTotal(0); // Reseta o tempo total ao iniciar uma nova entrega
        onIniciarEntrega(idCart);
    };

    const handleConcluirEntrega = () => {
        setEmEntrega(false);
        setTempoTotal(tempoDecorrido); // Armazena o tempo total
        onConcluirEntrega(idCart);
    };

    // Efeito para atualizar o tempo decorrido enquanto a entrega estiver em andamento
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (emEntrega) {
            interval = setInterval(() => {
                setTempoDecorrido((prev) => prev + 1); // Incrementa o tempo decorrido a cada segundo
            }, 1000);
        }

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar ou parar a entrega
    }, [emEntrega]);

    // Formata o tempo em mm:ss
    const formatarTempo = (tempo: number) => {
        const minutos = Math.floor(tempo / 60);
        const segundos = tempo % 60;
        return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
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
                        <InfoText>
                            {emEntrega ? formatarTempo(tempoDecorrido) : formatarTempo(tempoTotal)}
                        </InfoText> {/* Mostra mm:ss enquanto em entrega ou tempo total após conclusão */}
                        <Linha />
                    </Info>

                    {emEntrega ? (
                        <ActionButton onClick={handleConcluirEntrega}>Concluir Entrega</ActionButton>
                    ) : (
                        <ActionButton onClick={handleIniciarEntrega}>Iniciar Entrega</ActionButton>
                    )}
                </BodyCardShow>
            ) : (
                <BodyCard />
            )}
        </CardEntregaContainer>
    );
}
