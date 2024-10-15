import { useState, useEffect} from 'react';
import { CaretCircleUp, CaretCircleDown } from '@phosphor-icons/react';
import {
  ContainerInfo,
  HeadInfo,
  IconeProfile,
  BodyCard,
  BodyCardShow,
  Info,
  Linha,
  InfoTitle,
  InfoValue
} from './styles';
import { useAuth } from '../../contexts/AuthContext';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

interface Dado {
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

  };
}

export function Record() {
  const { user } = useAuth();
  const [dados, setDados] = useState<Dado[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      fetch(`${apiBaseUrl}/user?nome=${user.nome}`)
        .then(response => response.json())
        .then(data => {
          if (data && data.length > 0) {
            setDados(data);
            console.log(data);
          }
        })
        .catch(error => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [user]);

  const hasRebocadores = dados.length > 0 && dados[0].rebocadores.length > 0;

  const userTempoTotal = hasRebocadores ? dados[0].rebocadores[0].TempoTotal : 'N/A';
  const userTotalCarrinhos = hasRebocadores ? dados[0].rebocadores[0].TotalCarrinhos : 'N/A';


  const [selected, setSelected] = useState<boolean>(false);
  const toggle = () => {
    setSelected(prev => !prev);
  };

  return (
    <ContainerInfo>
      <HeadInfo onClick= {toggle}>
        <h3>Informações</h3>
        <IconeProfile rotated={selected}>
          {selected ? (
            <CaretCircleUp size={32} weight="fill" />
          ) : (
            <CaretCircleDown size={32} weight="fill" />
          )}
        </IconeProfile>
      </HeadInfo>
      {selected ? (
        isLoading ? (
          <BodyCardShow>
            <InfoTitle>Carregando Dados</InfoTitle>
          </BodyCardShow>
        ) : (
        <BodyCardShow>
          <Info>
            <InfoTitle>Fábrica</InfoTitle>
            <InfoValue>{user?.fabrica}</InfoValue>
            <Linha />
          </Info>
          <Info>
            <InfoTitle>Tempo Total</InfoTitle>
            <InfoValue>{userTempoTotal}</InfoValue>
            <Linha />
          </Info>
          <Info>
            <InfoTitle>Total de Carrinhos</InfoTitle>
            <InfoValue>{userTotalCarrinhos}</InfoValue>
            <Linha />
          </Info>
        </BodyCardShow>
        )
      ) : (
        <BodyCard />
      )}
    </ContainerInfo>
  );
}
