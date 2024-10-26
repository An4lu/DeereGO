import { UserCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Heading } from "../../../components/Heading";
import { Title } from "../../../components/Title";
import { useAuth } from "../../../contexts/AuthContext";
import { Background, Column01, Column02, ContainerEntregas, Div, DivContainer, DivRow, DivRow02, Espaço, Infos, Linha, Map, R, Row01, Row02, Space, Text } from "./styles";
import { ButtonModal } from "../Carrinhos/styles";
import { Modal } from "../../../components/Modal";
import { MapaSlider } from "../../../components/MapaSlider/MapaSlider";

export const DashboardAdmin = () => {
    const { user } = useAuth();
    const [totalCarrinhos, setTotalCarrinhos] = useState<number>(0);
    const [rebocadoresAtivos, setRebocadoresAtivos] = useState<any[]>([]);
    const [rebocadorDestaque, setRebocadorDestaque] = useState<string>("Nenhum rebocador");
    const [setores, setSetores] = useState({
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F: 0,
        G: 0,
    });
    const [ultimasEntregas, setUltimasEntregas] = useState<any[]>([]);
    const [isRankingModalOpen, setIsRankingModalOpen] = useState(false);
    const [rankingRebocadores, setRankingRebocadores] = useState<any[]>([]);
    type RebocadorRanking = {
        nome: string;
        totalCarrinhos: number;
        tempoTotal: number;
    };


    // Fetch total de carrinhos
    useEffect(() => {
        const fetchEntregas = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/rebocador`);
                const data = await response.json();

                const total = data.reduce((acc: number, entrega: any) => acc + entrega.TotalCarrinhos, 0);
                setTotalCarrinhos(total);
            } catch (error) {
                console.error("Erro ao buscar entregas:", error);
            }
        };

        fetchEntregas();
    }, []);

    // Fetch de rebocadores ativos e encontrar o rebocador em destaque
    useEffect(() => {
        const fetchRebocadores = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user?role=rebocador`);
                const data = await response.json();

                // Filtrar apenas rebocadores ativos
                const ativos = data.filter((rebocador: any) => rebocador.Status === true);
                setRebocadoresAtivos(ativos);

                // Encontrar o rebocador com mais carrinhos entregues
                let destaque = ativos.reduce((prev: any, current: any) => {
                    const totalCarrinhosPrev = prev.rebocadores[0]?.TotalCarrinhos || 0;
                    const totalCarrinhosCurrent = current.rebocadores[0]?.TotalCarrinhos || 0;
                    return totalCarrinhosCurrent > totalCarrinhosPrev ? current : prev;
                }, ativos[0]);

                setRebocadorDestaque(destaque?.Nome || "Nenhum rebocador");

                const ranking = ativos
                    .map((rebocador: any): RebocadorRanking => ({
                        nome: rebocador.Nome,
                        totalCarrinhos: rebocador.rebocadores[0]?.TotalCarrinhos || 0,
                        tempoTotal: rebocador.rebocadores[0]?.TempoTotal || 0,
                    }))
                    .sort((a: RebocadorRanking, b: RebocadorRanking) => b.totalCarrinhos - a.totalCarrinhos || b.tempoTotal - a.tempoTotal);

                setRankingRebocadores(ranking);

            } catch (error) {
                console.error("Erro ao buscar rebocadores:", error);
            }
        };

        fetchRebocadores();
    }, []);

    // Fetch carrinhos e setores
    useEffect(() => {
        const fetchCarrinhos = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/rebocador/entrega/carrinho`);
                const data = await response.json();

                const contadorSetores = {
                    A: 0,
                    B: 0,
                    C: 0,
                    D: 0,
                    E: 0,
                    F: 0,
                    G: 0,
                };

                data.forEach((carrinho: any) => {
                    if (carrinho.Local.includes("A")) contadorSetores.A += 1;
                    if (carrinho.Local.includes("B")) contadorSetores.B += 1;
                    if (carrinho.Local.includes("C")) contadorSetores.C += 1;
                    if (carrinho.Local.includes("D")) contadorSetores.D += 1;
                    if (carrinho.Local.includes("E")) contadorSetores.E += 1;
                    if (carrinho.Local.includes("F")) contadorSetores.F += 1;
                    if (carrinho.Local.includes("G")) contadorSetores.G += 1;
                });

                setSetores(contadorSetores);
            } catch (error) {
                console.error("Erro ao buscar carrinhos:", error);
            }
        };

        fetchCarrinhos();
    }, []);

    // Função para buscar o nome do usuário por ID
    const fetchUserName = async (userId: string) => {
        try {
            const url = `${import.meta.env.VITE_API_BASE_URL}/user?id=${userId}`;
            const response = await fetch(url);
            const userData = await response.json();

            if (Array.isArray(userData) && userData.length > 0) {
                return userData[0].Nome || "Usuário desconhecido";
            }

            return "Usuário desconhecido";
        } catch (error) {
            console.error("Erro ao buscar nome do usuário:", error);
            return "Usuário desconhecido";
        }
    };

    const handleOpenRankingModal = () => {
        setIsRankingModalOpen(true);
    };

    // Função para fechar o modal de ranking
    const handleCloseRankingModal = () => {
        setIsRankingModalOpen(false);
    };

    // Função para buscar últimas entregas com o nome do usuário responsável
    useEffect(() => {
        const fetchUltimasEntregas = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/rebocador/entrega/`);
                const data = await response.json();

                // Obter os nomes dos usuários responsáveis por cada entrega
                const entregasComNomes = await Promise.all(
                    data.slice(0, 6).map(async (entrega: any) => {
                        const nomeUsuario = await fetchUserName(entrega.IdUser);
                        return {
                            ...entrega,
                            nomeUsuario,
                        };
                    })
                );

                setUltimasEntregas(entregasComNomes);
            } catch (error) {
                console.error("Erro ao buscar últimas entregas:", error);
            }
        };

        fetchUltimasEntregas();
    }, []);

    return (
        <Background>
            {user ? (
                <Heading css={{ marginBottom: '20px' }}>Olá, {user.nome}</Heading>
            ) : (
                <Heading>Olá Administrador</Heading>
            )}
            <DivContainer>
                <Div css={{ width: '20%' }}>
                    <Column01 to="/adm/mapa" >
                        <Title css={{ fontSize: '16px' }}>
                            Warehouse
                        </Title>
                        <Space>
                            <R>
                                <Text>Mercado A</Text>
                                <Infos>{setores.A}</Infos>
                            </R>
                            <R>
                                <Text>Mercado B</Text>
                                <Infos>{setores.B}</Infos>
                            </R>
                            <R>
                                <Text>Mercado C</Text>
                                <Infos>{setores.C}</Infos>
                            </R>
                            <R>
                                <Text>Mercado D</Text>
                                <Infos>{setores.D}</Infos>
                            </R>
                            <R>
                                <Text>Mercado E</Text>
                                <Infos>{setores.E}</Infos>
                            </R>
                            <R>
                                <Text>Mercado F</Text>
                                <Infos>{setores.F}</Infos>
                            </R>
                            <R>
                                <Text>Mercado G</Text>
                                <Infos>{setores.G}</Infos>
                            </R>
                        </Space>
                    </Column01>
                    <Column02 onClick={handleOpenRankingModal}>
                        <Title css={{ fontSize: '16px', padding: '10px 0' }}>
                            Rebocador em Destaque
                        </Title>
                        <Title css={{ color: '$green', fontWeight: '800', fontSize: '38px', display: 'flex', justifyContent: 'flex-end' }}>
                            {rebocadorDestaque}
                        </Title>
                    </Column02>
                </Div>
                <Div css={{ width: '80%' }}>
                    <Linha>
                        <Row01 to="/adm/carrinhos">
                            <Title css={{ padding: '8px 0', fontSize: '16px' }}>
                                Quantidade de Carros-Kit Entregues
                            </Title>
                            <Title css={{ color: '$green', fontWeight: '800', fontSize: '46px', display: 'flex', justifyContent: 'flex-end' }}>
                                {totalCarrinhos}
                            </Title>
                        </Row01>
                        <Row02 to="/adm/ajustes">
                            <DivRow>
                                <Title css={{ fontSize: '16px' }}>
                                    Rebocadores Ativos
                                </Title>
                                <Title css={{ color: '$green', fontWeight: '800', fontSize: '35px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '5px' }}>
                                    {rebocadoresAtivos.map((_, index) => (
                                        <UserCircle key={index} size={40} weight="fill" color="#028001" />
                                    ))}
                                </Title>
                            </DivRow>
                            <DivRow02 to="/adm/ajustes">
                                <Title css={{ color: '$green', fontWeight: '800', fontSize: '46px' }}>
                                    {rebocadoresAtivos.length}
                                </Title>
                            </DivRow02>
                        </Row02>
                    </Linha>
                    <Linha>
                        <Map css={{ width: "60%" }} to="/adm/mapa">
                            <MapaSlider css={{ width: '100%', height: '500px' }} />
                        </Map>
                        <ContainerEntregas css={{ overflowX: 'auto', whiteSpace: 'nowrap', width: "40%" }} to="/adm/entregas">
                            <Title css={{ fontSize: '16px' }}>
                                Últimas Entregas
                            </Title>
                            <Espaço css={{ padding: '12px 0', gap: '10px' }}>
                                {ultimasEntregas.map((entrega) => (
                                    <R css={{
                                        flexDirection: 'column',
                                        minWidth: '50%',
                                        border: '1px solid #ddd',
                                        borderRadius: '5px', padding: '10px'
                                    }} key={entrega._id}>
                                        <Text css={{ fontWeight: '600' }}>Rebocador: {entrega.nomeUsuario}</Text>
                                        <Text>Partida: {entrega.Partida}</Text>
                                        <Text>Destino: {entrega.Destino}</Text>
                                        <Text>Tempo: {entrega.Tempo}</Text>
                                        <Text>Status: {entrega.Status}</Text>
                                    </R>
                                ))}
                            </Espaço>
                        </ContainerEntregas>
                    </Linha>
                </Div>
            </DivContainer>

            <Modal isOpen={isRankingModalOpen} onClose={handleCloseRankingModal} css={{ width: '550px', padding: '30px 10px' }}>
                <Title css={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>Ranking dos Rebocadores</Title>
                <Div css={{ overflowY: 'auto', maxHeight: '450px', width: '80%' }}>
                    {rankingRebocadores.map((rebocador, index) => (
                        <DivRow css={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #ddd' }} key={index}>
                            <Text>{index + 1}. {rebocador.nome}</Text>
                            <Text>Total de Carrinhos: {rebocador.totalCarrinhos}</Text>
                            <Text>Tempo Total: {rebocador.tempoTotal} min</Text>
                        </DivRow>
                    ))}
                </Div>
                <ButtonModal onClick={handleCloseRankingModal} css={{ marginTop: '20px' }}>Fechar</ButtonModal>
            </Modal>
        </Background >
    );
};
