import { useEffect, useState } from 'react';
import { CardCarrinho } from '../CardCarrinho';
import { EntregasContainer, ContainerH3} from './styles';
import { useAuth } from '../../contexts/AuthContext';


interface Carro {
    _id: string;
    NomeCarrinho: string;
    Local: string;
    Peças: string;
    Bloco: string;
}

interface CarrinhosBoxProps {
    adicionarCarrinho: (nomeCarrinho: string) => void;
    removerCarrinho: (nomeCarrinho: string) => void;
    carrinhosSelecionados: string[];
}

export function CarrinhosBox({adicionarCarrinho, removerCarrinho, carrinhosSelecionados}: CarrinhosBoxProps) {
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
            <ContainerH3>Carrinhos Disponíveis</ContainerH3>
            {carrinhos
                .filter(carrinho => carrinho.Bloco === user?.blocokit)
                .map(carrinho => (
                    <CardCarrinho 
                        key={carrinho._id}
                        idCart={carrinho._id}
                        NomeCarrinho={`${carrinho.NomeCarrinho}`}
                        Local={carrinho.Local}
                        Peças={carrinho.Peças}
                        Bloco={carrinho.Bloco}
                        onAdicionar={() => adicionarCarrinho(carrinho.NomeCarrinho)}
                        onRemover={() => removerCarrinho(carrinho.NomeCarrinho)}
                        isSelecionado={carrinhosSelecionados.includes(carrinho.NomeCarrinho)}
                    />
                ))}
        </EntregasContainer>
    );
}
