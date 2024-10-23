import { CardEntrega } from '../CardEntrega';
import { EntregasContainer } from './styles';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect, useState } from 'react';
import { ContainerH3 } from '../CarrinhosBox/styles';

interface Entregas {
    _id: string;
    IdCarrinho: string[];
    IdUser: string;
    Partida: string;
    Destino: string;
    HoraPartida: string;
    HoraEntrega: string;
    Tempo: string;
    Status: string;
}
interface Carro {
    _id: string;
    NomeCarrinho: string;
    Local: string;
    Peças: string;
    Bloco: string;
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export function EntregasBox() {
    const { user } = useAuth();
    
    const [entregas, setEntregas] = useState<Entregas[]>([]);
    const [carrinhos, setCarrinhos] = useState<Carro[]>([]);

    const formatarData = (data: string): string => {
        return new Date(data).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    };

    useEffect(() => {
        fetch(`${apiBaseUrl}/rebocador/entrega`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setEntregas(data);
                }
            });
    }, []);

    useEffect(() => {
        fetch(`${apiBaseUrl}/rebocador/entrega/carrinho`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setCarrinhos(data);
                }
            });
    }, []);
    const getNomeCarrinho = (idCarrinho: string[]) => {
        if (!idCarrinho || idCarrinho.length === 0) {
            return 'Carrinho';
        };

        const nomesCarrinhos = idCarrinho.map(id => {
            const carrinho = carrinhos.find(carrinho => carrinho._id === id);
            return carrinho ? carrinho.NomeCarrinho : 'Carrinho';
        });

        return nomesCarrinhos.join(', ');
    };


    return (
        <EntregasContainer>
            <ContainerH3>Registro de Entregas</ContainerH3>
            {entregas
                .filter(entrega => entrega.IdUser === user?.id)
                .map(entrega => (
                    <CardEntrega
                        key={entrega._id}
                        idCart={entrega.IdCarrinho.join(', ')}
                        titleCart={getNomeCarrinho(entrega.IdCarrinho)}
                        Partida={entrega.Partida}
                        Destino={entrega.Destino}
                        DataHora={formatarData(entrega.HoraEntrega)}
                        Tempo={entrega.Tempo}
                    />
                ))}
        </EntregasContainer>
    );
}
