import { CardEntrega } from '../CardEntrega';
import { EntregasContainer } from './styles';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect, useState } from 'react';

interface Entregas {
    _id: string;
    IdCarrinho: string;
    IdUser: string;
    Partida: string;
    Destino: string;
    HoraPartida: string;
    HoraEntrega: string;
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
    
    const getNomeCarrinho = (idCarrinho: string) => {
        const carrinho = carrinhos.find(carrinho => carrinho._id === idCarrinho);
        return carrinho? carrinho.NomeCarrinho : 'Carrinho';
    };


    return (
        <EntregasContainer>
            {entregas
                .filter(entrega => entrega.IdUser === user?.id)
                .map(entrega => (
                    <CardEntrega
                        key={entrega._id}
                        idCart={entrega.IdCarrinho}
                        titleCart={getNomeCarrinho(entrega.IdCarrinho)}
                        Partida={entrega.Partida}
                        Destino={entrega.Destino}
                        DataHora={entrega.HoraEntrega}
                    />
                ))}
        </EntregasContainer>
    );
}
