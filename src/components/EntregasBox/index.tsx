import { CardEntrega } from '../CardEntrega';
import { EntregasContainer } from './styles';
import { useAuth } from '../../contexts/AuthContext';


export function EntregasBox() {
    const { user } = useAuth();
    console.log('response user context - Entregas: ',user?.rebocadores?.[0]?.carrinhos)

    user?.rebocadores?.map((rebocador) => {
        const carrinho = rebocador.carrinhos;
        if (carrinho?.entregas) {
            carrinho.entregas.map((entrega: any) => {
                console.log('response entregas - Entregas: ', entrega);
                return (
                    <CardEntrega
                        key={entrega._id}
                        idCart={entrega.IdCarrinho}
                        titleCart={carrinho.NomeCarrinho}
                        Partida={entrega.Partida}
                        Destino={entrega.Destino}
                        DataHora={entrega.HoraEntrega}
                    />
                )
            });
        }
    })


    return (
        <EntregasContainer>
            {user?.rebocadores?.flatMap((rebocador) => {
                const carrinho = rebocador.carrinhos;
                if (carrinho?.entregas) {
                    return carrinho.entregas.map((entrega: any) => (
                        <CardEntrega
                            key={entrega._id}
                            idCart={entrega.IdCarrinho}
                            titleCart={carrinho.NomeCarrinho}
                            Partida={entrega.Partida}
                            Destino={entrega.Destino}
                            DataHora={entrega.HoraEntrega}
                        />
                    ));
                }
                return [];
            })}
        </EntregasContainer>
    );
}
