import { ArrowsClockwise, Plus } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Heading } from "../../../components/Heading";
import { Background, ContainerReb, Div, DivInfos, IconWrapper, Linha, Span } from "./styles";
import { ButtonModal, DivH } from "../Ajustes/styles";
import { Modal } from "../../../components/Modal";
import { InputForms } from "../../../components/InputForms";
import { Select } from "../../../components/Select";
import { z } from "zod";

const carSchema = z.object({
    Peças: z.string(),
    Local: z.enum(["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4", "D1", "D2", "D3", "D4"]),
    Capacidade: z.enum(["Cheio", "Vazio"]),
    Manutenção: z.enum(["Operando", "Parado"]),
});

export const Carrinhos = () => {
    const [carrinhos, setCarrinhos] = useState<any[]>([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [, setIsCreateModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setFormData({
            Peças: '',
            Local: 'A1',
            Capacidade: 'Cheio',
            Manutenção: 'Operando',
            Status: true,
        });
        setFormErrors({});
    };

    const handleCloseCreateModal = () => {
        setIsCreateModalOpen(false);
        setFormData({
            Peças: '',
            Local: 'A1',
            Capacidade: 'Cheio',
            Manutenção: 'Operando',
            Status: true,
        });
        setFormErrors({});
    };

    const [formErrors, setFormErrors] = useState<any>({});

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

    const localOptions = [
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
    ];

    const capacityOptions = [
        { label: 'Cheio', value: 'Cheio' },
        { label: 'Vazio', value: 'Vazio' },
    ];

    const operationOptions = [
        { label: 'Operando', value: 'Operando' },
        { label: 'Parado', value: 'Parado' },
    ];

    const [formData, setFormData] = useState({
        Peças: '',
        Local: 'A1',
        Capacidade: 'Cheio',
        Manutenção: 'Operando',
        Status: true,
    });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleLocalChange = (newLocal: string) => {
        setFormData((prev) => ({ ...prev, Local: newLocal }));
    };

    const handleCapacityChange = (newCapacity: string) => {
        setFormData((prev) => ({ ...prev, Capacidade: newCapacity }));
    };

    const handleOperationChange = (newOperation: string) => {
        setFormData((prev) => ({ ...prev, Manutenção: newOperation }));
    };

    const onSubmitCreate = async () => {
        try {
            const parsedData = carSchema.parse(formData);

            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/rebocador/entrega/carrinho`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(parsedData),
            });

            if (response.ok) {
                fetchCarrinhos();
                handleCloseCreateModal();
            } else {
                console.error("Erro ao criar carrinho");
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
                <Modal css={{ padding: '20px 25px' }} isOpen={isModalOpen} onClose={handleCloseModal}>
                    <Heading css={{ color: '$maingreen', padding: '10px 0px' }}>Criar Carrinho</Heading>
                    <Div>
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
                            options={localOptions}
                            value={formData.Local}
                            onChange={handleLocalChange}
                        />
                        {formErrors?.Local && <p>{formErrors.Local?._errors?.[0]}</p>}

                        <Select
                            title="Capacidade"
                            options={capacityOptions}
                            value={formData.Capacidade}
                            onChange={handleCapacityChange}
                        />
                        {formErrors?.Capacidade && <p>{formErrors.Capacidade?._errors?.[0]}</p>}

                        <Select
                            title="Manutenção"
                            options={operationOptions}
                            value={formData.Manutenção}
                            onChange={handleOperationChange}
                        />
                    </Div>
                    <Div css={{ display: 'flex', flexDirection: 'row', margin: '25px 0px 5px 0px', gap: '20px' }}>
                        <ButtonModal css={{ width: '75px' }} onClick={onSubmitCreate}>Criar</ButtonModal>
                        <ButtonModal css={{ width: '75px', color: '$maingreen', backgroundColor: 'white' }} onClick={handleCloseModal}>Fechar</ButtonModal>
                    </Div>
                </Modal>
            </Heading>
            <Div>
                <Linha css={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                    gap: '35px',
                    marginTop: '20px'
                }}>
                    {carrinhos.map((carrinho) => (
                        <ContainerReb key={carrinho._id}
                            css={{
                                display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '30px', gap: '25px', border: '1px solid #ccc', borderRadius: '8px'
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
                        </ContainerReb>
                    ))}
                </Linha>
            </Div>
        </Background>
    );
};
