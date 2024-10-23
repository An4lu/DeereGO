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

interface Entregas {
  _id: string;
  IdCarrinho: string[];
  IdUser: string;
  Partida: string;
  Destino: string;
  HoraPartida: string;
  HoraEntrega: string;
  Tempo: string;
  Status: string;
}

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

function calcularTempoDeCriacao(dataCriacao: Date) {

  const now = new Date();  // Data atual
  const diffInMs = now.getTime() - dataCriacao.getTime(); // Diferença em milissegundos
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // Diferença em dias

  if (diffInDays < 30) {
      return `${diffInDays} dia(s)`;
  } else if (diffInDays < 365) {
      const diffInMonths = Math.floor(diffInDays / 30); // Aproximando meses
      return `${diffInMonths} mês(es)`;
  } else {
      const diffInYears = Math.floor(diffInDays / 365);
      return `${diffInYears} ano(s)`;
  }
}

export function Record() {
  const { user } = useAuth();
  const [dados, setDados] = useState<Dado[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [entregas, setEntregas] = useState<Entregas[]>([]);
    useEffect(() => {
        fetch(`${apiBaseUrl}/rebocador/entrega`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setEntregas(data.filter((data: Entregas) => data.IdUser === user?.id));
                }
            });
    }, []);

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

  console.log(dados);


  const [selected, setSelected] = useState<boolean>(false);
  const toggle = () => {
    setSelected(prev => !prev);
  };
  const tempoDeCriacao = user?.dataCriacao
        ? calcularTempoDeCriacao(new Date(user.dataCriacao))
        : 'Data não disponível';

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
            <InfoValue>{user?.rebocadores?.[0]?.TempoTotal ?? 'N/A'}</InfoValue>
            <Linha />
          </Info>
          <Info>
            <InfoTitle>Entregas Realizadas</InfoTitle>
            <InfoValue>{entregas.length ?? 'N/A'}</InfoValue>
            <Linha />
          </Info>
          <Info>
            <InfoTitle>Experiência</InfoTitle>
            <InfoValue>{tempoDeCriacao}</InfoValue>
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
