import { useEffect, useState } from "react";
import { Heading } from "../../../components/Heading";
import { Background, ContainerReb, Div, DivInfos, Linha, Span } from "./styles";

export const Carrinhos = () => {
    const [carrinhos, setCarrinhos] = useState<any[]>([]);

    useEffect(() => {
        const fetchCarrinhos = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/rebocador/entrega/carrinho`);
                const data = await response.json();
                setCarrinhos(data);
            } catch (error) {
                console.error("Erro ao buscar carrinhos:", error);
            }
        };

        fetchCarrinhos();
    }, []);

    return (
        <Background>
            <Heading css={{ marginBottom: '20px' }}>Carros-Kit</Heading>
            <Div>
                <Linha css={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                    gap: '35px',
                    marginTop: '20px'
                }}>
                    {carrinhos.map((carrinho) => (
                        <ContainerReb key={carrinho._id}
                            css={{
                                display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '30px', gap: '25px', border: '1px solid #ccc', borderRadius: '8px'
                            }}>

                            <Div css={{ gap: '2px' }}>
                                <DivInfos css={{ fontWeight: '700', margin: '8px 0', fontSize: '20px' }}>
                                    {carrinho.NomeCarrinho}
                                </DivInfos>
                                <DivInfos css={{ fontWeight: '600' }}>
                                    Peças: <Span>{carrinho.Peças}</Span>
                                </DivInfos>
                                <DivInfos css={{ fontWeight: '600' }}>
                                    Local: <Span> {carrinho.Local}</Span>
                                </DivInfos>
                                <DivInfos css={{ fontWeight: '600' }}>
                                    Status de Capacidade:
                                    <Span css={{ color: carrinho.StatusCapacidade === 'Cheio' ? '#C81010' : '#028001' }}>
                                        {carrinho.StatusCapacidade}
                                    </Span>
                                </DivInfos>
                                <DivInfos css={{ fontWeight: '600' }}>
                                    Status de Manutenção: <Span>{carrinho.StatusManutenção}</Span>
                                </DivInfos>
                            </Div>
                        </ContainerReb>
                    ))}
                </Linha>
            </Div>
        </Background>
    );
};
