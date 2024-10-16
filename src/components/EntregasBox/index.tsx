import { Key, useEffect, useState } from 'react';
import { CardEntrega } from '../CardEntrega';
import { EntregasContainer } from './styles';
import { useAuth } from '../../contexts/AuthContext';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

interface Dado {
    Entregas: any;
    rebocadores: Rebocador[];
}
interface Rebocador {
    TempoTotal: number | string,
    TotalCarrinhos: number | string,
    carrinhos: {
        _id: string;
        PosX: number;
        PosY: number;
        Local: string;
        NomeCarrinho: string;
        entregas: Entregas[];
  
    };
}

interface Entregas {
    _id: string;
    IdCarrinho: string;
    IdUser: string;
    Partida: string;
    Destino: string;
    HoraPartida: string
    HoraEntrega: string;
    Status: string;
}

export function EntregasBox() {
    const { user } = useAuth();
    const [entregas, setEntregas] = useState<Dado[]>([]);

    useEffect(() => {
        if (user) {
            fetch(`${apiBaseUrl}/user?nome=${user.nome}`)
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        setEntregas(data[0].rebocadores[0].carrinhos);
                    }
                });
        }
    }, []);
    console.log(entregas)


    return (
        <EntregasContainer>
            {entregas.map(info => {
                const registros = info.Entregas;
                return registros.map((log: any, index: Key | null | undefined) => {
                    return (
                        <CardEntrega
                            key={index}
                            idCart={log._id}
                            titleCart={log.NomeCarrinho}
                            Partida={log.Partida}
                            Destino={log.Destino}
                            DataHora={log.HoraPartida}
                        />
                    )
                })
            })}
            
        </EntregasContainer>
    );
}
