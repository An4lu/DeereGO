import { useEffect, useState } from "react";
import { Heading } from "../../../components/Heading";
import { Background, Div, Linha, ContainerReb, DivInfos, Img } from "./styles";

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
                {/* Layout de grid para os carrinhos */}
                <Linha css={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '45px',
                    marginTop: '20px'
                }}>
                    {carrinhos.map((carrinho) => (
                        <ContainerReb key={carrinho._id}
                            css={{
                                display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '20px', gap: '30px', border: '1px solid #ccc', borderRadius: '8px'
                            }}>
                            <Img css={{ width: '80px', height: '80px', }} src="/forklift.png" alt={carrinho.NomeCarrinho} />
                            <Div css={{ gap: '2px' }}>
                                <DivInfos css={{ fontWeight: '700', fontSize: '15px' }}>
                                    {carrinho.NomeCarrinho} {/* Nome do carrinho */}
                                </DivInfos>
                                <DivInfos css={{ fontWeight: '600', fontSize: '14px' }}>
                                    Peças: {carrinho.Peças} {/* Peças transportadas */}
                                </DivInfos>
                                <DivInfos css={{ fontWeight: '600', fontSize: '14px' }}>
                                    Local: {carrinho.Local} {/* Localização do carrinho */}
                                </DivInfos>
                                <DivInfos css={{ fontWeight: '600', fontSize: '14px' }}>
                                    Status de Capacidade: {carrinho.StatusCapacidade} {/* Status de capacidade */}
                                </DivInfos>
                                <DivInfos css={{ fontWeight: '600', fontSize: '14px' }}>
                                    Status de Manutenção: {carrinho.StatusManutenção} {/* Status de manutenção */}
                                </DivInfos>
                            </Div>
                        </ContainerReb>
                    ))}
                </Linha>
            </Div>
        </Background>
    );
};
