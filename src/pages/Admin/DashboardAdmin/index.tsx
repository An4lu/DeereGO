import { Heading } from "../../../components/Heading"
import { useAuth } from "../../../contexts/AuthContext";
import { Title } from "../../../components/Title";
import { Background, Column01, Column02, ContainerEntregas, Div, DivContainer, DivRow, DivRow02, Img, Linha, Map, Row01, Row02 } from "./styles";
import { useEffect, useState } from "react";
import { UserCircle } from "@phosphor-icons/react";
import mapa from '/mapinha.png'

export const DashboardAdmin = () => {
    const { user } = useAuth();
    const [totalCarrinhos, setTotalCarrinhos] = useState<number>(0);
    const [rebocadoresAtivos, setRebocadoresAtivos] = useState<any[]>([]);

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
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user?role=rebocador`);
                const data = await response.json();

                const ativos = data.filter((rebocador: any) => rebocador.Status === true);
                setRebocadoresAtivos(ativos);
            } catch (error) {
                console.error("Erro ao buscar rebocadores:", error);
            }
        };

        fetchRebocadores();
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
                    <Column01></Column01>
                    <Column02>
                        <Title css={{ fontSize: '16px' }}>
                            Rebocador em Destaque
                        </Title>
                        <Title css={{ color: '$green', fontWeight: '800', fontSize: '32px', display: 'flex', justifyContent: 'flex-end' }}>
                            José Silva
                        </Title>
                    </Column02>
                </Div>
                <Div css={{ width: '80%' }}>
                    <Linha>
                        <Row01>
                            <Title>
                                Quantidade de Carros-Kit Entregues
                            </Title>
                            <Title css={{ color: '$green', fontWeight: '800', fontSize: '48px', display: 'flex', justifyContent: 'flex-end' }}>
                                {totalCarrinhos}
                            </Title>
                        </Row01>
                        <Row02>
                            <DivRow>
                                <Title css={{ fontSize: '16px' }}>
                                    Rebocadores Ativos
                                </Title>

                                <Title css={{ color: '$green', fontWeight: '800', fontSize: '35px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '5px' }}>
                                    {rebocadoresAtivos.map((_, index) => (
                                        <UserCircle key={index} size={55} weight="fill" color="#028001" />
                                    ))}

                                </Title>
                            </DivRow>
                            <DivRow02>
                                <Title css={{ color: '$green', fontWeight: '800', fontSize: '48px', }}>
                                    {rebocadoresAtivos.length}

                                </Title>
                            </DivRow02>
                        </Row02>
                    </Linha>
                    <Linha>
                        <Map><Img src={mapa} alt="" /></Map>
                        <ContainerEntregas></ContainerEntregas>
                    </Linha>
                </Div>
            </DivContainer>
        </Background >
    )
}
