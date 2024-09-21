import { useEffect, useState } from "react";
import { Heading } from "../../../components/Heading";
import { useAuth } from "../../../contexts/AuthContext";
import { Background, ButtonModal, ContainerReb, Div, DivGestor, DivH, DivInfos, Img, Linha } from "./styles";
import admin from "/admin.jpeg";
import { ArrowsClockwise, Plus } from "@phosphor-icons/react";
import { IconWrapper } from "../Carrinhos/styles";
import { Modal } from "../../../components/Modal";

export const Ajustes = () => {
    const { user } = useAuth();
    const [rebocadores, setRebocadores] = useState<any[]>([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const fetchRebocadores = async () => {
        setIsFetching(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user?role=rebocador`);
            const data = await response.json();

            setRebocadores(data);
        } catch (error) {
            console.error("Erro ao buscar rebocadores:", error);
        } finally {
            setIsFetching(false);
        }
    };

    useEffect(() => {
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
                <Heading css={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', justifyContent: 'space-between', marginBottom: '-40px', fontSize: '22px', fontWeight: '600' }}>
                    <DivH>
                        Rebocadores
                        <IconWrapper isSpinning={isFetching}>
                            <ArrowsClockwise weight="bold" size={18} onClick={fetchRebocadores} />
                        </IconWrapper>
                    </DivH>
                    <ButtonModal onClick={handleOpenModal}>
                        <Plus size={20} weight="bold" />
                        Criar
                    </ButtonModal>
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                        <ButtonModal onClick={handleCloseModal}>Fechar</ButtonModal>
                    </Modal>
                </Heading>
                <Linha isGrid>
                    {rebocadores
                        .sort((a, b) => {
                            if (b.Status !== a.Status) {
                                return Number(b.Status) - Number(a.Status);
                            }
                            return a.Nome.localeCompare(b.Nome);
                        })
                        .map((rebocador) => (
                            <ContainerReb
                                key={rebocador._id}
                                css={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    padding: '20px',
                                    gap: '12px',
                                    border: '1px solid #ccc',
                                    borderRadius: '8px',
                                }}
                            >
                                <Img
                                    css={{ width: '80px', height: '80px', borderRadius: '50%' }}
                                    src={admin}
                                    alt={rebocador.Nome}
                                />
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
    );
};
