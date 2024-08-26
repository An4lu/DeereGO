import React, { useEffect, useState } from 'react';
import { CardEntrega } from '../CardEntrega';
import { EntregasContainer } from './styles';

interface Carro {
    id: string;
    OpStatus: string;
}

export function EntregasBox() {
    const [carros, setCarros] = useState<Carro[]>([]);

    useEffect(() => {
        fetch('https://jdu-data-api.onrender.com/rebocador')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setCarros(data);
                }
            });
    }, []);

    return (
        <EntregasContainer>
            {carros.map(carro => (
                <CardEntrega key={carro.id} idCart={carro.id} opStatus={`${carro.OpStatus}`} />
            ))}
        </EntregasContainer>
    );
}
