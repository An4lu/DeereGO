import { useEffect, useState } from 'react';
import { CardCarrinho } from '../CardCarrinho';
import { EntregasContainer, ContainerH3} from './styles';
import { useAuth } from '../../contexts/AuthContext';

interface Dado {
    rebocadores: Rebocador[];
}
interface Rebocador {
    PosX: number;
    PosY: number;
    Quadrante: string;
}
interface Carro {
    _id: string;
    NomeCarrinho: string;
    Local: string;
    Peças: string;
    Bloco: string;
    StatusCapacidade: string;
    PosX : number;
    PosY : number;
}

interface CarrinhosBoxProps {
    adicionarCarrinho: (nomeCarrinho: string) => void;
    removerCarrinho: (nomeCarrinho: string) => void;
    carrinhosSelecionados: string[];
}
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;


export function CarrinhosBox({adicionarCarrinho, removerCarrinho, carrinhosSelecionados}: CarrinhosBoxProps) {
    const { user } = useAuth();
    const [carrinhos, setCarrinhos] = useState<Carro[]>([]);
    const [userData, setUserData] = useState<Dado | null>(null);
    

    useEffect(() => {
        fetch(`${apiBaseUrl}/rebocador/entrega/carrinho`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setCarrinhos(data);
                }
            });
    }, []);

    useEffect(() => {
        fetch(`${apiBaseUrl}/user?id=${user?.id}`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setUserData(data[0]);
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
                        StatusCapacidade={carrinho.StatusCapacidade}
                        PosX={carrinho.PosX}
                        PosY={carrinho.PosY}
                        PosXRebocador={userData && userData.rebocadores[0].Quadrante === carrinho.Local ? userData.rebocadores[0].PosX : 0}
                        PosYRebocador={userData && userData.rebocadores[0].Quadrante === carrinho.Local ? userData.rebocadores[0].PosY : 0}
                        onAdicionar={() => adicionarCarrinho(carrinho.NomeCarrinho)}
                        onRemover={() => removerCarrinho(carrinho.NomeCarrinho)}
                        isSelecionado={carrinhosSelecionados.includes(carrinho.NomeCarrinho)}
                    />
                ))}
        </EntregasContainer>
    );
}
