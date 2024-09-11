import { useEffect, useState } from "react";
import { Heading } from "../../../components/Heading"
import { useAuth } from "../../../contexts/AuthContext";
import { Background, ContainerReb, Div, DivGestor, DivInfos, Img, Linha } from "./styles"
import admin from "/admin.jpeg"


export const Ajustes = () => {
    const { user } = useAuth();
    const [rebocadores, setRebocadores] = useState<any[]>([]);

    useEffect(() => {
        const fetchRebocadores = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user?Role=rebocador`);
                const data = await response.json();

                setRebocadores(data);
            } catch (error) {
                console.error("Erro ao buscar rebocadores:", error);
            }
        };

        fetchRebocadores();
    }, []);


    return (
        <Background>
            <Heading css={{ marginBottom: '25px' }}>Administrador</Heading>
            <Div>
                <Linha>
                    <DivGestor>
                        <Img src={admin} alt="" />
                        <Div css={{ gap: '3px' }}>
                            <DivInfos css={{ fontWeight: '800', fontSize: '26px' }}>{user?.nome}</DivInfos>
                            <DivInfos>{user?.email}</DivInfos>
                        </Div>
                    </DivGestor>
                </Linha>
                <Heading css={{ marginBottom: '-40px', fontSize: '22px', fontWeight: '600' }}>Rebocadores</Heading>
                <Linha css={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '45px',
                    marginTop: '20px'
                }}>
                    {rebocadores
                        .sort((a, b) => Number(b.Status) - Number(a.Status))
                        .map((rebocador) => (
                            <ContainerReb key={rebocador._id}
                                css={{
                                    display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '20px', gap: '12px', border: '1px solid #ccc', borderRadius: '8px'
                                }}>
                                <Img css={{ width: '80px', height: '80px', borderRadius: '50%' }} src={admin} alt="" />
                                <Div css={{ gap: '2px' }}>
                                    <DivInfos css={{ fontWeight: '700', fontSize: '14px' }}>
                                        {rebocador.Nome}
                                    </DivInfos>
                                    <DivInfos css={{ fontWeight: '700', fontSize: '12px' }}>
                                        {rebocador.Email}
                                    </DivInfos>
                                    <DivInfos css={{ fontWeight: '500', fontSize: '14px' }}>
                                        {rebocador.Status ? 'Ativo' : 'Inativo'}
                                    </DivInfos>
                                </Div>
                            </ContainerReb>
                        ))}
                </Linha>
            </Div>
        </Background >
    )
}
