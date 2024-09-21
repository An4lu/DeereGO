import { ArrowsClockwise, Plus } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Heading } from "../../../components/Heading";
import { Background, ContainerReb, Div, DivInfos, IconWrapper, Linha, Span } from "./styles";
import { ButtonModal, DivH } from "../Ajustes/styles";
import { Modal } from "../../../components/Modal";

export const Carrinhos = () => {
    const [carrinhos, setCarrinhos] = useState<any[]>([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
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
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <ButtonModal onClick={handleCloseModal}>Fechar</ButtonModal>
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
