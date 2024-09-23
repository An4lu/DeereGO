import { useEffect, useState } from "react";
import { Heading } from "../../../components/Heading";
import { useAuth } from "../../../contexts/AuthContext";
import { Background, ButtonModal, ContainerReb, Div, DivGestor, DivH, DivInfos, DivX, Img, Linha } from "./styles";
import admin from "/admin.jpeg";
import { ArrowsClockwise, Plus, X } from "@phosphor-icons/react";
import { IconWrapper } from "../Carrinhos/styles";
import { Modal } from "../../../components/Modal";

export const Ajustes = () => {
    const { user } = useAuth();
    const [rebocadores, setRebocadores] = useState<any[]>([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deleteRebocadorId, setDeleteRebocadorId] = useState<string | null>(null);

    const handleOpenCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    const handleCloseCreateModal = () => {
        setIsCreateModalOpen(false);
    };

    const handleOpenDeleteModal = (id: string) => {
        setDeleteRebocadorId(id);
        setIsDeleteModalOpen(true);
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModalOpen(false);
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

    const onDelete = async () => {
        if (!deleteRebocadorId) return;
        try {
            await fetch(`${import.meta.env.VITE_API_BASE_URL}/user/${deleteRebocadorId}`, {
                method: 'DELETE',
            });

            setRebocadores((prev) => prev.filter((rebocador) => rebocador._id !== deleteRebocadorId));
            handleCloseDeleteModal();
        } catch (error) {
            console.error("Erro ao deletar rebocador:", error);
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
                <Heading css={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', justifyContent: 'space-between', marginBottom: '-40px', fontSize: '22px', fontWeight: '600', margin: '25px 0' }}>
                    <DivH>
                        Rebocadores
                        <IconWrapper isSpinning={isFetching}>
                            <ArrowsClockwise weight="bold" size={18} onClick={fetchRebocadores} />
                        </IconWrapper>
                    </DivH>
                    <ButtonModal onClick={handleOpenCreateModal}>
                        <Plus size={20} weight="bold" />
                        Criar
                    </ButtonModal>
                    <Modal isOpen={isCreateModalOpen} onClose={handleCloseCreateModal}>
                        <ButtonModal onClick={handleCloseCreateModal}>Fechar</ButtonModal>
                    </Modal>
                </Heading>
                <Linha isGrid >
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
                            >
                                <Div css={{ gap: '15px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Img
                                        css={{ width: '80px', height: '80px', borderRadius: '50%' }}
                                        src={admin}
                                        alt={rebocador.Nome}
                                    />
                                    <Div css={{ display: 'flex', }}>
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
                                </Div>
                                <DivInfos css={{
                                    position: 'relative',
                                    top: '-30px',
                                    right: '-10px',
                                }} onClick={(e) => {
                                    e.stopPropagation();
                                    handleOpenDeleteModal(rebocador._id);
                                }}>
                                    <X size={20} weight="bold" />
                                </DivInfos>
                            </ContainerReb>
                        ))}
                </Linha>
                <Modal isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
                    <p>Tem certeza que deseja deletar este rebocador?</p>
                    <ButtonModal onClick={onDelete}>Deletar</ButtonModal>
                    <ButtonModal onClick={handleCloseDeleteModal}>Cancelar</ButtonModal>
                </Modal>
            </Div>
        </Background>
    );
};
