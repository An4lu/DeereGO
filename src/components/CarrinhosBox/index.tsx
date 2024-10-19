import { useEffect, useState } from 'react';
import { CardCarrinho } from '../CardCarrinho';
import { EntregasContainer } from './styles';
import { useAuth } from '../../contexts/AuthContext';

interface Carro {
    _id: string;
    NomeCarrinho: string;
    Local: string;
    Peças: string;
    Bloco: string;
}

export function CarrinhosBox() {
    const { user } = useAuth();
    const [carrinhos, setCarrinhos] = useState<Carro[]>([]);

    useEffect(() => {
        fetch('https://deerego-back.onrender.com/rebocador/entrega/carrinho')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setCarrinhos(data);
                }
            });
    }, []);

    return (
        <EntregasContainer>
            {carrinhos
                .filter(carrinho => carrinho.Bloco === user?.blocokit)
                .map(carrinho => (
                    <CardCarrinho 
                        key={carrinho._id}
                        idCart={carrinho._id}
                        NomeCarrinho={`${carrinho.NomeCarrinho}`}
                        Local={carrinho.Local}
                        Peças={carrinho.Peças}
                    />
                ))}
        </EntregasContainer>
    );
}
