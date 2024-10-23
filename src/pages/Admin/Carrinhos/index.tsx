import { ArrowsClockwise, Plus, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Heading } from "../../../components/Heading";
import { Background, ContainerReb, Div, DivInfos, IconWrapper, Linha, Span } from "./styles";
import { ButtonDelete, ButtonModal, DivH } from "../Ajustes/styles";
import { Modal } from "../../../components/Modal";
import { InputForms } from "../../../components/InputForms";
import { Select } from "../../../components/Select";
import { z } from "zod";

const carSchema = z.object({
    NomeCarrinho: z.string().min(1, { message: "Nome do carrinho é obrigatório" }),
    Peças: z.string(),
    Local: z.enum(["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4"]),
    Bloco: z.string(),
    StatusCapacidade: z.enum(["Cheio", "Vazio"]),
    StatusManutenção: z.enum(["Operando", "Parado"]),
});

export const Carrinhos = () => {
    const [carrinhos, setCarrinhos] = useState<any[]>([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deleteCarrinhoId, setDeleteCarrinhoId] = useState<string | null>(null);
    const [formErrors, setFormErrors] = useState<any>({});
    const [formData, setFormData] = useState({
        NomeCarrinho: '',
        Peças: '',
        Local: 'A1',
        Bloco: '',
        StatusCapacidade: 'Cheio',
        StatusManutenção: 'Operando',
    });
    const [isEditMode, setIsEditMode] = useState(false); // Define o modo de criação ou edição
    const [editCarrinhoId, setEditCarrinhoId] = useState<string | null>(null); // Armazena o ID do carrinho em edição

    const handleOpenModal = () => {
        setIsEditMode(false); // Define o modo de criação
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setFormData({
            NomeCarrinho: '',
            Peças: '',
            Local: 'A1',
            Bloco: '',
            StatusCapacidade: 'Cheio',
            StatusManutenção: 'Operando',
        });
        setFormErrors({});
        setEditCarrinhoId(null); // Reseta o ID de edição
    };

    const handleOpenDeleteModal = (id: string) => {
        setDeleteCarrinhoId(id);
        setIsDeleteModalOpen(true);
    };

    const handleCloseDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    const handleDeleteCarrinho = async () => {
        if (!deleteCarrinhoId) return;
        try {
            await fetch(`${import.meta.env.VITE_API_BASE_URL}/rebocador/entrega/carrinho/${deleteCarrinhoId}`, {
                method: 'DELETE',
            });

            setCarrinhos((prev) => prev.filter((carrinho) => carrinho._id !== deleteCarrinhoId));
            handleCloseDeleteModal();
        } catch (error) {
            console.error("Erro ao deletar carrinho:", error);
        }
    };

    const fetchCarrinhos = async () => {
        setIsFetching(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/rebocador/entrega/carrinho`);
            const data = await response.json();
            setCarrinhos(data);
        } catch (error) {
            console.error("Erro ao buscar carrinhos:", error);
        } finally {
            setIsFetching(false);
        }
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleLocalChange = (newLocal: string) => {
        setFormData((prev) => ({ ...prev, Local: newLocal }));
    };

    const handleCapacityChange = (newCapacity: string) => {
        setFormData((prev) => ({ ...prev, StatusCapacidade: newCapacity }));
    };

    const handleOperationChange = (newOperation: string) => {
        setFormData((prev) => ({ ...prev, StatusManutenção: newOperation }));
    };

    const handleOpenEditModal = (carrinho: any) => {
        setFormData({
            NomeCarrinho: carrinho.NomeCarrinho,
            Peças: carrinho.Peças,
            Local: carrinho.Local,
            Bloco: carrinho.Bloco,
            StatusCapacidade: carrinho.StatusCapacidade,
            StatusManutenção: carrinho.StatusManutenção,
        });
        setEditCarrinhoId(carrinho._id); // Define o ID do carrinho em edição
        setIsEditMode(true); // Define o modo de edição
        setIsModalOpen(true);
    };

    const onSubmitCreateOrUpdate = async () => {
        try {
            const parsedData = carSchema.parse(formData);
            if (isEditMode && editCarrinhoId) {
                // Atualiza o carrinho existente
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/rebocador/entrega/carrinho/${editCarrinhoId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(parsedData),
                });

                if (response.ok) {
                    fetchCarrinhos();
                    handleCloseModal();
                } else {
                    console.error("Erro ao atualizar carrinho");
                }
            } else {
                // Cria um novo carrinho
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/rebocador/entrega/carrinho`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(parsedData),
                });

                if (response.ok) {
                    fetchCarrinhos();
                    handleCloseModal();
                } else {
                    console.error("Erro ao criar carrinho");
                }
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

    useEffect(() => {
        fetchCarrinhos();
    }, []);

    return (
        <Background>
            <Heading css={{ marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', justifyContent: 'space-between' }}>
                <DivH>
                    Carros-Kit
                    <IconWrapper isSpinning={isFetching}>
                        <ArrowsClockwise weight="bold" size={18} onClick={fetchCarrinhos} />
                    </IconWrapper>
                </DivH>
                <ButtonModal onClick={handleOpenModal}>
                    <Plus size={20} weight="bold" />
                    Criar
                </ButtonModal>
            </Heading>

            <Div>
                <Linha css={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                    gap: '35px',
                    margin: '15px 0 50px 0'
                }}>
                    {carrinhos.map((carrinho) => (
                        <ContainerReb
                            key={carrinho._id}
                            onClick={() => handleOpenEditModal(carrinho)} // Abre o modal para edição
                            css={{
                                display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: '30px', gap: '25px', border: '1px solid #ccc', borderRadius: '8px', justifyContent: 'space-between'
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
                            <DivInfos css={{
                                position: 'relative',
                                cursor: 'pointer'
                            }} onClick={(e) => {
                                e.stopPropagation();
                                handleOpenDeleteModal(carrinho._id);
                            }}>
                                <X size={20} weight="bold" />
                            </DivInfos>
                        </ContainerReb>
                    ))}
                </Linha>

                <Modal css={{ padding: '20px 30px', width: '450px' }} isOpen={isModalOpen} onClose={handleCloseModal}>
                    <Heading css={{ color: '$maingreen', padding: '10px 0px' }}>{isEditMode ? 'Alterar Carrinho' : 'Criar Carrinho'}</Heading>
                    <Div css={{ width: '100%' }}>
                        <InputForms
                            title="Nome do Carrinho"
                            type="text"
                            name="NomeCarrinho"
                            value={formData.NomeCarrinho}
                            onChange={handleFormChange}
                        />
                        {formErrors?.NomeCarrinho && <p>{formErrors.NomeCarrinho?._errors?.[0]}</p>}

                        <InputForms
                            title="Peças"
                            type="text"
                            name="Peças"
                            value={formData.Peças}
                            onChange={handleFormChange}
                        />
                        {formErrors?.Peças && <p>{formErrors.Peças?._errors?.[0]}</p>}

                        <Select
                            title="Local"
                            options={[
                                { label: 'A1', value: 'A1' },
                                { label: 'A2', value: 'A2' },
                                { label: 'A3', value: 'A3' },
                                { label: 'A4', value: 'A4' },
                                { label: 'B1', value: 'B1' },
                                { label: 'B2', value: 'B2' },
                                { label: 'B3', value: 'B3' },
                                { label: 'B4', value: 'B4' },
                                { label: 'C1', value: 'C1' },
                                { label: 'C2', value: 'C2' },
                                { label: 'C3', value: 'C3' },
                                { label: 'C4', value: 'C4' },
                                { label: 'D1', value: 'D1' },
                                { label: 'D2', value: 'D2' },
                                { label: 'D3', value: 'D3' },
                                { label: 'D4', value: 'D4' },
                            ]}
                            value={formData.Local}
                            onChange={handleLocalChange}
                        />
                        {formErrors?.Local && <p>{formErrors.Local?._errors?.[0]}</p>}

                        <InputForms
                            title="Bloco"
                            type="text"
                            name="Bloco"
                            value={formData.Bloco}
                            onChange={handleFormChange}
                        />
                        {formErrors?.Bloco && <p>{formErrors.Bloco?._errors?.[0]}</p>}

                        <Select
                            title="Status de Capacidade"
                            options={[
                                { label: 'Cheio', value: 'Cheio' },
                                { label: 'Vazio', value: 'Vazio' },
                            ]}
                            value={formData.StatusCapacidade}
                            onChange={handleCapacityChange}
                        />
                        {formErrors?.StatusCapacidade && <p>{formErrors.StatusCapacidade?._errors?.[0]}</p>}

                        <Select
                            title="Status de Manutenção"
                            options={[
                                { label: 'Operando', value: 'Operando' },
                                { label: 'Parado', value: 'Parado' },
                            ]}
                            value={formData.StatusManutenção}
                            onChange={handleOperationChange}
                        />
                    </Div>

                    <Div css={{ display: 'flex', flexDirection: 'row', margin: '25px 0px 5px 0px', gap: '20px' }}>
                        <ButtonModal onClick={onSubmitCreateOrUpdate} css={{ width: '75px' }}>
                            {isEditMode ? 'Alterar' : 'Criar'}
                        </ButtonModal>
                        <ButtonModal css={{ width: '75px', color: '$maingreen', backgroundColor: 'white' }} onClick={handleCloseModal}>Fechar</ButtonModal>
                    </Div>
                </Modal>

                <Modal css={{ width: '450px', padding: '20px', display: 'flex', gap: '12px' }} isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
                    <p>Tem certeza que deseja deletar este carrinho?</p>
                    <Div css={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '10px' }}>
                        <ButtonModal onClick={handleCloseDeleteModal} css={{ backgroundColor: 'white', color: '$maingreen' }}>Cancelar</ButtonModal>
                        <ButtonDelete onClick={handleDeleteCarrinho}>Deletar</ButtonDelete>
                    </Div>
                </Modal>
            </Div>
        </Background>
    );
};
