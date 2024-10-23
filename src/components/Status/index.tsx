import { Check, MapPin, Question, ShoppingCartSimple} from '@phosphor-icons/react';
import { useEffect, useState } from "react";
import { useAuth } from '../../contexts/AuthContext';
import {
  Bottom,
  BtnBox,
  Button,
  Head,
  StatusContainer,
  Text,
} from './styles';
import { ButtonEntrega } from '../Buttons/styles';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

interface StatusProps {
  carrinhosSelecionados: string[];
  onClose: () => void;
}
interface Carro {
  _id: string;
  NomeCarrinho: string;
  Local: string;
  Peças: string;
  Bloco: string;
}

export function Status({ carrinhosSelecionados, onClose }: StatusProps) {
  const [carrinhos, setCarrinhos] = useState<Carro[]>([]);
  const [selectedCarrinhos, setSelectedCarrinhos] = useState<string[]>([]);

  const [emEntrega, setEmEntrega] = useState(false);
  const [tempoDecorrido, setTempoDecorrido] = useState(0); // Tempo decorrido em segundos
  const [tempoTotal, setTempoTotal] = useState(0); // Tempo total após a conclusão
  const [horaPartida, setHoraPartida] = useState('');

  const handleIniciarEntrega = () => {
    setEmEntrega(true);
    setTempoDecorrido(0); // Reseta o tempo decorrido
    setTempoTotal(0); // Reseta o tempo total ao iniciar uma nova entrega
    setHoraPartida(new Date().toISOString()); // Reseta a hora de partida ao iniciar uma nova entrega
  };

  const handleConcluirEntrega = () => {
    setEmEntrega(false);
    setTempoTotal(tempoDecorrido); // Armazena o tempo total
    console.log('Tempo total:', formatarTempo(tempoTotal));
    finalizarEntrega();
  };

  // Efeito para atualizar o tempo decorrido enquanto a entrega estiver em andamento
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (emEntrega) {
        interval = setInterval(() => {
            setTempoDecorrido((prev) => prev + 1); // Incrementa o tempo decorrido a cada segundo
        }, 1000);
    }

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar ou parar a entrega
  }, [emEntrega]);

  const { user } = useAuth();

  console.log(user);
  console.log('Tempo', tempoDecorrido)

  const formatarTempo = (tempo: number) => {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return `${minutos.toString().padStart(2, '0')}m:${segundos.toString().padStart(2, '0')}s`;
  };

  useEffect(() => {
    fetch(`${apiBaseUrl}/rebocador/entrega/carrinho`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          setCarrinhos(data);
        }
      });
  }, []);

  // Atualizar selectedCarrinhos quando carrinhosSelecionados mudar
  useEffect(() => {
    setSelectedCarrinhos(carrinhosSelecionados);
  }, [carrinhosSelecionados]);

  console.log(carrinhos);

  const reiniciarComponente = () => {
    setSelectedCarrinhos([]); // Limpar seleção de carrinhos
  };

  const finalizarEntrega = async () => {
    const destino = 'Centro de Trabalho';
    const horaEntrega = new Date().toISOString();

    try {
      const carrinhosEnvolvidos = selectedCarrinhos.map(nomeCarrinho => {
        return carrinhos.find(carrinho => carrinho.NomeCarrinho === nomeCarrinho);
      }).filter(Boolean) as Carro[];
      const entregaData = {
        IdCarrinho: carrinhosEnvolvidos.map(carrinho => carrinho._id),
        IdUser: user?.id,
        Partida: carrinhosEnvolvidos.map(carrinho => carrinho.Local).join(', '),
        Destino: destino,
        HoraPartida: horaPartida,
        HoraEntrega: horaEntrega,
        Tempo : formatarTempo(tempoDecorrido),
        Status: 'Concluído'
      };
      console.log('Entrega:', entregaData);

      // Fazer o post
      const response = await fetch(`${apiBaseUrl}/rebocador/entrega`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entregaData)
      });

      if (response.ok) {
        console.log('Entrega realizada com sucesso!');
      } else {
        console.error('Erro ao realizar entrega:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao realizar entrega:', error);
    }
    // Limpar os carrinhos selecionados e reiniciar o componente
    reiniciarComponente();
    onClose(); // Fechar o componente após a entrega
  };

  return (
    <StatusContainer>
      <Head>
        <Text>
          <h3>Entrega Atual</h3>
          <p>
            Carrinhos: {selectedCarrinhos.join(', ')} <Question size={16} />
          </p>
        </Text>
        <BtnBox>
          {emEntrega ? (
            <Button onClick={handleConcluirEntrega}>
              Finalizar <Check weight="bold" size={16} />
            </Button> 
          ) : (
            <ButtonEntrega onClick={handleIniciarEntrega}>
              <ShoppingCartSimple weight="light" width={20} height={22}  />
              Iniciar Entrega
            </ButtonEntrega>
          )}
          <p>{emEntrega ? formatarTempo(tempoDecorrido) : formatarTempo(tempoTotal)}</p>
        </BtnBox>
      </Head>
      <Bottom>
        <Text>
          <h3>Enviar Para</h3>
          <p>
            <MapPin size={16} />
            Centro de Trabalho
          </p>
        </Text>
      </Bottom>
    </StatusContainer>
  );
}
