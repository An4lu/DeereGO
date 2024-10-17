import { UserCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Heading } from "../../../components/Heading";
import { Title } from "../../../components/Title";
import { useAuth } from "../../../contexts/AuthContext";
import { Background, Column01, Column02, ContainerEntregas, Div, DivContainer, DivRow, DivRow02, Img, Infos, Linha, Map, R, Row01, Row02, Space, Text } from "./styles";
import mapa from '/mapa-2.png';

export const DashboardAdmin = () => {
    const { user } = useAuth();
    const [totalCarrinhos, setTotalCarrinhos] = useState<number>(0);
    const [rebocadoresAtivos, setRebocadoresAtivos] = useState<any[]>([]);
    const [setores, setSetores] = useState({
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F: 0,
        G: 0,
    });
    const [ultimasEntregas, setUltimasEntregas] = useState<any[]>([]); // Estado para armazenar as últimas entregas

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


    useEffect(() => {
        const fetchRebocadores = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user?Role=rebocador`);
                const data = await response.json();

                const ativos = data.filter((rebocador: any) => rebocador.Status === true);
                setRebocadoresAtivos(ativos);
            } catch (error) {
                console.error("Erro ao buscar rebocadores:", error);
            }
        };

        fetchRebocadores();
    }, []);

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
                    if (carrinho.Local.toLowerCase().includes("a")) contadorSetores.A += 1;
                    if (carrinho.Local.toLowerCase().includes("b")) contadorSetores.B += 1;
                    if (carrinho.Local.toLowerCase().includes("c")) contadorSetores.C += 1;
                    if (carrinho.Local.toLowerCase().includes("d")) contadorSetores.D += 1;
                    if (carrinho.Local.toLowerCase().includes("e")) contadorSetores.E += 1;
                    if (carrinho.Local.toLowerCase().includes("f")) contadorSetores.F += 1;
                    if (carrinho.Local.toLowerCase().includes("g")) contadorSetores.G += 1;
                });

                setSetores(contadorSetores);
            } catch (error) {
                console.error("Erro ao buscar carrinhos:", error);
            }
        };

        fetchCarrinhos();
    }, []);

    // Fetch últimas entregas
    useEffect(() => {
        const fetchUltimasEntregas = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/rebocador/entrega`);
                const data = await response.json();
                setUltimasEntregas(data.slice(0, 6)); // Limitando a 6 entregas
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
                <Div css={{ width: '25%' }}>
                    <Column01 to="/adm/mapa">
                        <Title css={{ fontSize: '16px' }}>
                            Setores / Warehouse
                        </Title>
                        <Space>
                            <R>
                                <Text>Setor A</Text>
                                <Infos>{setores.A}</Infos>
                            </R>
                            <R>
                                <Text>Setor B</Text>
                                <Infos>{setores.B}</Infos>
                            </R>
                            <R>
                                <Text>Setor C</Text>
                                <Infos>{setores.C}</Infos>
                            </R>
                            <R>
                                <Text>Setor D</Text>
                                <Infos>{setores.D}</Infos>
                            </R>
                            <R>
                                <Text>Setor E</Text>
                                <Infos>{setores.E}</Infos>
                            </R>
                            <R>
                                <Text>Setor F</Text>
                                <Infos>{setores.F}</Infos>
                            </R>
                            <R>
                                <Text>Setor G</Text>
                                <Infos>{setores.G}</Infos>
                            </R>
                        </Space>
                    </Column01>
                    <Column02>
                        <Title css={{ fontSize: '16px' }}>
                            Rebocador em Destaque
                        </Title>
                        <Title css={{ color: '$green', fontWeight: '800', fontSize: '32px', display: 'flex', justifyContent: 'flex-end' }}>
                            José Silva
                        </Title>
                    </Column02>
                </Div>
                <Div css={{ width: '75%' }}>
                    <Linha>
                        <Row01 to="/adm/carrinhos">
                            <Title>
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
                        <Map>
                            <Img src={mapa} alt="" />
                        </Map>
                        <ContainerEntregas>
                            <Title css={{ fontSize: '16px' }}>
                                Últimas Entregas
                            </Title>
                            <Space css={{}}>
                                {ultimasEntregas.map((entrega) => (
                                    <R key={entrega._id}>
                                        <Text>{entrega._id}</Text>
                                    </R>
                                ))}
                            </Space>
                        </ContainerEntregas>
                    </Linha>
                </Div>
            </DivContainer>
        </Background>
    );
};
