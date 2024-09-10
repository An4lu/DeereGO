import { useEffect, useState } from 'react';
import { CardEntrega } from '../CardEntrega';
import { EntregasContainer } from './styles';

interface Carro {
    _id: string;
    Status: string;
    Partida: string;
    Destino: string;
    DataHora: string;

}

export function EntregasBox() {
    const [entregas, setEntregas] = useState<Carro[]>([]);

    useEffect(() => {
        fetch('https://deerego-back.onrender.com/rebocador/entrega')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setEntregas(data);
                }
            });
    }, []);

    return (
        <EntregasContainer>
            {entregas.map(entrega => (
                <CardEntrega key={entrega._id} idCart={entrega._id} opStatus={`${entrega.Status}`} Partida={entrega.Partida} Destino={entrega.Destino} DataHora={entrega.DataHora} />
            ))}
        </EntregasContainer>
    );
}
