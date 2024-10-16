import { CardEntrega } from '../CardEntrega';
import { EntregasContainer } from './styles';
import { useAuth } from '../../contexts/AuthContext';


export function EntregasBox() {
    const { user } = useAuth();
    console.log('response user context: ',user)


    return (
        <EntregasContainer>
            {user?.rebocadores?.[0]?.carrinhos?.entregas?.map((entrega) => {
                const nomeCarrinho = user?.rebocadores?.[0]?.carrinhos?.NomeCarrinho || 'Carro-Kit'
                return (
                    <CardEntrega
                        key={entrega._id}
                        idCart={entrega.IdCarrinho}
                        titleCart={nomeCarrinho}
                        Partida={entrega.Partida}
                        Destino={entrega.Destino}
                        DataHora={entrega.HoraEntrega}
                    />
                );
            },)}
        </EntregasContainer>
    );
}
