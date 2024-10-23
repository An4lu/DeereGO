import { ArrowsClockwise, Plus, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Heading } from "../../../components/Heading";
import { InputForms } from "../../../components/InputForms";
import { Modal } from "../../../components/Modal";
import { Select } from "../../../components/Select";
import { useAuth } from "../../../contexts/AuthContext";
import { IconWrapper } from "../Carrinhos/styles";
import { Background, ButtonDelete, ButtonModal, ContainerReb, Div, DivGestor, DivH, DivInfos, Img, Linha } from "./styles";
import adminImage from "/admin.jpeg";

const userSchema = z.object({
    Nome: z.string().min(2, { message: "Nome é obrigatório" }),
    Senha: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
    Email: z.string().email({ message: "Email inválido" }),
    Role: z.enum(["admin", "rebocador"]),
    Fabrica: z.string(),
    BlocoKit: z.string(),
    Telefone: z.string().min(8, { message: "Telefone inválido" }),
    Status: z.boolean(),
});

export const Ajustes = () => {
    const { user } = useAuth();
    const [rebocadores, setRebocadores] = useState<any[]>([]);
    const [administradores, setAdministradores] = useState<any[]>([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deleteUserId, setDeleteUserId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        Nome: '',
        Senha: '',
        Email: '',
        Role: 'rebocador',
        Fabrica: '',
        BlocoKit: '',
        Telefone: '',
        Status: true,
    });
    const [formErrors, setFormErrors] = useState<any>({});

    const handleOpenCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    const handleCloseCreateModal = () => {
        setIsCreateModalOpen(false);
        setFormData({
            Nome: '',
            Senha: '',
            Email: '',
            Role: 'rebocador',
            Fabrica: '',
            BlocoKit: '',
            Telefone: '',
            Status: true,
        });
        setFormErrors({});
    };

    const handleOpenDeleteModal = (id: string) => {
        setDeleteUserId(id);
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

    const fetchAdministradores = async () => {
        setIsFetching(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user?role=admin`);
            const data = await response.json();
            setAdministradores(data);
        } catch (error) {
            console.error("Erro ao buscar administradores:", error);
        } finally {
            setIsFetching(false);
        }
    };

    const onDelete = async () => {
        if (!deleteUserId) return;
        try {
            await fetch(`${import.meta.env.VITE_API_BASE_URL}/user/${deleteUserId}`, {
                method: 'DELETE',
            });

            setRebocadores((prev) => prev.filter((rebocador) => rebocador._id !== deleteUserId));
            setAdministradores((prev) => prev.filter((admin) => admin._id !== deleteUserId));
            handleCloseDeleteModal();
        } catch (error) {
            console.error("Erro ao deletar usuário:", error);
        }
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === 'Nome') {
            const nome = value.toLowerCase().replace(/\s+/g, '');
            generateEmail(nome);
        }

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const generateEmail = (nome: string) => {
        const baseEmail = `${nome}@deerego.com`;
        let email = baseEmail;
        let counter = 1;
        let existingUsers = [...rebocadores, ...administradores];

        while (existingUsers.some((user) => user.Email === email)) {
            email = `${nome}${counter}@deerego.com`;
            counter++;
        }

        setFormData((prev) => ({ ...prev, Email: email }));
    };

    const onSubmitCreate = async () => {
        try {
            const parsedData = userSchema.parse(formData);
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(parsedData),
            });

            if (response.ok) {
                fetchRebocadores();
                fetchAdministradores();
                handleCloseCreateModal();
            } else {
                console.error("Erro ao criar usuário");
            }
        } catch (error: any) {
            if (error instanceof z.ZodError) {
                const errors = error.format();
                setFormErrors(errors);
            } else {
                console.error("Erro desconhecido", error);
            }
        }
    };

    const handleOpenEditModal = (userData: any) => {
        setFormData({
            Nome: userData.Nome,
            Senha: '',
            Email: userData.Email,
            Role: userData.Role,
            Fabrica: userData.Fabrica,
            BlocoKit: userData.BlocoKit,
            Telefone: userData.Telefone,
            Status: userData.Status,
        });
        setIsCreateModalOpen(true);
    };

    const roleOptions = [
        { label: 'Admin', value: 'admin' },
        { label: 'Rebocador', value: 'rebocador' },
    ];

    useEffect(() => {
        fetchRebocadores();
        fetchAdministradores();
    }, []);

    return (
        <Background>
            <Div>
                <Linha>
                    <DivGestor>
                        <Img src={adminImage} alt="" />
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
                </Heading>

                <Linha isGrid>
                    {rebocadores.map((rebocador) => (
                        <ContainerReb key={rebocador._id} onClick={() => handleOpenEditModal(rebocador)}>
                            <Div css={{ gap: '15px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Img
                                    css={{ width: '80px', height: '80px', borderRadius: '50%' }}
                                    src={adminImage}
                                    alt={rebocador.Nome}
                                />
                                <Div css={{ display: 'flex' }}>
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
                            <DivInfos css={{ position: 'relative' }} onClick={() => handleOpenDeleteModal(rebocador._id)}>
                                <X size={20} weight="bold" />
                            </DivInfos>
                        </ContainerReb>
                    ))}
                </Linha>

                <Heading css={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', justifyContent: 'space-between', marginBottom: '-40px', fontSize: '22px', fontWeight: '600', margin: '25px 0' }}>
                    <DivH>
                        Administradores
                        <IconWrapper isSpinning={isFetching}>
                            <ArrowsClockwise weight="bold" size={18} onClick={fetchAdministradores} />
                        </IconWrapper>
                    </DivH>
                </Heading>

                <Linha isGrid>
                    {administradores.map((admin) => (
                        <ContainerReb key={admin._id} onClick={() => handleOpenEditModal(admin)}>
                            <Div css={{ gap: '15px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Img
                                    css={{ width: '80px', height: '80px', borderRadius: '50%' }}
                                    src={adminImage}
                                    alt={admin.Nome}
                                />
                                <Div css={{ display: 'flex' }}>
                                    <DivInfos css={{ fontWeight: '700', fontSize: '14px' }}>
                                        {admin.Nome}
                                    </DivInfos>
                                    <DivInfos css={{ fontWeight: '700', fontSize: '12px' }}>
                                        {admin.Email}
                                    </DivInfos>
                                    <DivInfos css={{ fontWeight: '500', fontSize: '14px' }}>
                                        {admin.Status ? 'Ativo' : 'Inativo'}
                                    </DivInfos>
                                </Div>
                            </Div>
                            <DivInfos css={{ position: 'relative' }} onClick={() => handleOpenDeleteModal(admin._id)}>
                                <X size={20} weight="bold" />
                            </DivInfos>
                        </ContainerReb>
                    ))}
                </Linha>

                <Modal css={{ padding: '20px 40px', width: '450px' }} isOpen={isCreateModalOpen} onClose={handleCloseCreateModal}>
                    <Heading css={{ color: '$maingreen', padding: '10px 0px' }}>{formData.Nome ? 'Alterar Usuário' : 'Criar Usuário'}</Heading>
                    <Div css={{ width: '100%' }}>
                        <InputForms
                            title="Nome"
                            type="text"
                            name="Nome"
                            value={formData.Nome}
                            onChange={handleFormChange}
                            css={{ marginBottom: '10px' }}
                        />
                        {formErrors?.Nome && <p>{formErrors.Nome?._errors?.[0]}</p>}

                        <InputForms
                            title="Email"
                            type="email"
                            name="Email"
                            value={formData.Email}
                            readOnly
                            css={{ marginBottom: '10px' }}
                        />
                        {formErrors?.Email && <p>{formErrors.Email?._errors?.[0]}</p>}

                        <InputForms
                            title="Senha"
                            type="password"
                            name="Senha"
                            value={formData.Senha}
                            onChange={handleFormChange}
                            css={{ marginBottom: '10px' }}
                        />
                        {formErrors?.Senha && <p>{formErrors.Senha?._errors?.[0]}</p>}

                        <InputForms
                            title="Telefone"
                            type="text"
                            name="Telefone"
                            value={formData.Telefone}
                            onChange={handleFormChange}
                            css={{ marginBottom: '10px' }}
                        />
                        {formErrors?.Telefone && <p>{formErrors.Telefone?._errors?.[0]}</p>}

                        <InputForms
                            title="Fabrica"
                            type="text"
                            name="Fabrica"
                            value={formData.Fabrica}
                            onChange={handleFormChange}
                            css={{ marginBottom: '10px' }}
                        />
                        {formErrors?.Fabrica && <p>{formErrors.Fabrica?._errors?.[0]}</p>}
                        <InputForms
                            title="BlocoKit"
                            type="text"
                            name="BlocoKit"
                            value={formData.BlocoKit}
                            onChange={handleFormChange}
                            css={{ marginBottom: '10px' }}
                        />
                        {formErrors?.BlocoKit && <p>{formErrors.BlocoKit?._errors?.[0]}</p>}
                        <Select
                            title="Cargo"
                            options={roleOptions}
                            value={formData.Role}
                            onChange={(newRole) => setFormData((prev) => ({ ...prev, Role: newRole }))}
                        />
                        {formErrors?.Role && <p>{formErrors.Role?._errors?.[0]}</p>}

                        <Div css={{ display: 'flex', flexDirection: 'row', margin: '25px 0px 5px 0px', gap: '20px' }}>
                            <ButtonModal css={{ width: '75px' }}>
                                {formData.Nome ? 'Alterar' : 'Criar'}
                            </ButtonModal>
                            <ButtonModal css={{ width: '75px', color: '$maingreen', backgroundColor: 'white' }} onClick={handleCloseCreateModal}>Fechar</ButtonModal>
                        </Div>
                    </Div>
                </Modal>

                <Modal css={{ padding: '20px' }} isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
                    <p>Tem certeza que deseja deletar este usuário?</p>
                    <Div css={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '10px' }}>
                        <ButtonDelete onClick={onDelete}>Deletar</ButtonDelete>
                        <ButtonModal onClick={handleCloseDeleteModal}>Cancelar</ButtonModal>
                    </Div>
                </Modal>
            </Div>
        </Background>
    );
};
