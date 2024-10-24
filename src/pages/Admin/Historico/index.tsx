import { useEffect, useState } from "react";
import { ArrowsClockwise } from "@phosphor-icons/react";
import { Heading } from "../../../components/Heading";
import { Background, ContainerReb, Div, DivInfos, IconWrapper, Linha, Span } from "./styles";
import { useAuth } from "../../../contexts/AuthContext";
import { DivH } from "../Ajustes/styles";
import { Modal } from "../../../components/Modal"; // Importando o componente Modal

// Função para buscar o nome do usuário
const fetchUserName = async (userId: string) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user?id=${userId}`);
        const userData = await response.json();
        return userData[0]?.Nome || "Usuário desconhecido";
    } catch (error) {
        console.error("Erro ao buscar nome do usuário:", error);
        return "Usuário desconhecido";
    }
};

export const Historico = () => {
    const { user } = useAuth();
    const [historico, setHistorico] = useState<any[]>([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEntrega, setSelectedEntrega] = useState<any>(null); // Estado para a entrega selecionada

    // Função para buscar o histórico de entregas
    const fetchHistorico = async () => {
        setIsFetching(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/rebocador/entrega`);
            const data = await response.json();

            // Obter os nomes dos rebocadores responsáveis
            const historicoComNomes = await Promise.all(
                data.map(async (entrega: any) => {
                    const nomeRebocador = await fetchUserName(entrega.IdUser);
                    return { ...entrega, nomeRebocador };
                })
            );

            setHistorico(historicoComNomes);
        } catch (error) {
            console.error("Erro ao buscar histórico:", error);
        } finally {
            setIsFetching(false);
        }
    };

    // Função para abrir o modal com os detalhes da entrega
    const handleOpenModal = (entrega: any) => {
        setSelectedEntrega(entrega); // Define a entrega selecionada
        setIsModalOpen(true); // Abre o modal
    };

    // Função para fechar o modal
    const handleCloseModal = () => {
        setSelectedEntrega(null); // Limpa a entrega selecionada
        setIsModalOpen(false); // Fecha o modal
    };

    useEffect(() => {
        fetchHistorico();
    }, []);

    return (
        <Background>
            <Heading css={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', justifyContent: 'space-between' }}>
                <DivH>
                    Histórico de Entregas
                    <IconWrapper isSpinning={isFetching}>
                        <ArrowsClockwise weight="bold" size={22} onClick={fetchHistorico} />
                    </IconWrapper>
                </DivH>
            </Heading>

            <Div>
                <Linha css={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                    gap: '35px',
                    margin: '15px 0 50px 0'
                }}>
                    {historico.map((entrega) => (
                        <ContainerReb
                            key={entrega._id}
                            onClick={() => handleOpenModal(entrega)} // Abre o modal ao clicar na entrega
                            css={{
                                display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: '20px 30px', gap: '25px', border: '1px solid #ccc', borderRadius: '8px', justifyContent: 'space-between'
                            }}>
                            <Div css={{ gap: '2px' }}>
                                <DivInfos css={{ fontWeight: '700', margin: '8px 0', fontSize: '20px' }}>
                                    Rebocador: {entrega.nomeRebocador}
                                </DivInfos>
                                <DivInfos css={{ fontWeight: '600' }}>
                                    Partida: <Span>{entrega.Partida}</Span>
                                </DivInfos>
                                <DivInfos css={{ fontWeight: '600' }}>
                                    Destino: <Span>{entrega.Destino}</Span>
                                </DivInfos>
                                <DivInfos css={{ fontWeight: '600' }}>
                                    Tempo de Entrega: <Span>{entrega.Tempo}</Span>
                                </DivInfos>
                                <DivInfos css={{ fontWeight: '600' }}>
                                    Status: <Span>{entrega.Status}</Span>
                                </DivInfos>
                                <DivInfos css={{ fontWeight: '600' }}>
                                    Carrinhos: <Span>{entrega.IdCarrinho.join(", ")}</Span>
                                </DivInfos>
                            </Div>
                        </ContainerReb>
                    ))}
                </Linha>
            </Div>

            {selectedEntrega && (
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} css={{ padding: '20px 30px', width: '500px' }}>
                    <Heading css={{ margin: '20px 10px', color: '$graymain' }}>Detalhes da Entrega</Heading>
                    <Div>
                        <DivInfos css={{ fontWeight: '600' }}>
                            Rebocador: <Span>{selectedEntrega.nomeRebocador}</Span>
                        </DivInfos>
                        <DivInfos css={{ fontWeight: '600' }}>
                            Partida: <Span>{selectedEntrega.Partida}</Span>
                        </DivInfos>
                        <DivInfos css={{ fontWeight: '600' }}>
                            Destino: <Span>{selectedEntrega.Destino}</Span>
                        </DivInfos>
                        <DivInfos css={{ fontWeight: '600' }}>
                            Tempo de Entrega: <Span>{selectedEntrega.Tempo}</Span>
                        </DivInfos>
                        <DivInfos css={{ fontWeight: '600' }}>
                            Status: <Span>{selectedEntrega.Status}</Span>
                        </DivInfos>
                        <DivInfos css={{ fontWeight: '600' }}>
                            Carrinhos: <Span>{selectedEntrega.IdCarrinho.join(", ")}</Span>
                        </DivInfos>
                    </Div>
                </Modal>
            )}
        </Background>
    );
};
