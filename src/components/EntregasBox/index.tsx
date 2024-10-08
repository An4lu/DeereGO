import { useEffect, useState } from 'react';
import { CardEntrega } from '../CardEntrega';
import { EntregasContainer } from './styles';

interface Carro {
    _id: string;
    Status: string;
    Partida: string;
    Destino: string;
    DataHora: string;
    tempoInicio?: number; // Adicione esta propriedade para armazenar o tempo de início
}

export function EntregasBox() {
    const [entregas, setEntregas] = useState<Carro[]>([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/rebocador/entrega`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setEntregas(data);
                }
            });
    }, []);

    const iniciarEntrega = async (id: string) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/rebocador/entrega/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, status: 'iniciar', tempoInicio: Date.now() }),
            });

            if (!response.ok) {
                throw new Error('Erro ao iniciar a entrega.');
            }

            const updatedEntrega = entregas.map((entrega) =>
                entrega._id === id ? { ...entrega, tempoInicio: Date.now(), Status: 'Em andamento' } : entrega
            );

            setEntregas(updatedEntrega);
            console.log(`Entrega do carro ${id} iniciada.`);

        } catch (error) {
            console.error('Erro ao iniciar a entrega:', error);
        }
    };

    const concluirEntrega = async (id: string) => {
        try {
            const entrega = entregas.find((carro) => carro._id === id);

            if (!entrega || !entrega.tempoInicio) {
                console.error('Entrega não encontrada ou ainda não iniciada.');
                return;
            }

            const tempoTotal = Date.now() - entrega.tempoInicio;

            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/rebocador/entrega/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, status: 'concluir', tempoTotal }),
            });

            if (!response.ok) {
                throw new Error('Erro ao concluir a entrega.');
            }

            setEntregas(entregas.filter((entrega) => entrega._id !== id));
            console.log(`Entrega do carro ${id} concluída em ${tempoTotal / 1000} segundos.`);

        } catch (error) {
            console.error('Erro ao concluir a entrega:', error);
        }
    };

    return (
        <EntregasContainer>
            {entregas.map(entrega => (
                <CardEntrega 
                    key={entrega._id} 
                    idCart={entrega._id} 
                    opStatus={entrega.Status} 
                    Partida={entrega.Partida} 
                    Destino={entrega.Destino} 
                    DataHora={entrega.DataHora} // Passando o DataHora atualizado
                    onIniciarEntrega={iniciarEntrega} 
                    onConcluirEntrega={concluirEntrega}
                />
            ))}
        </EntregasContainer>
    );
}
