import { Check, MapPin, Question } from '@phosphor-icons/react';
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
  const { user } = useAuth();

  console.log(user);

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
    const horaPartida = new Date().toISOString();

    try {
      for (const nomeCarrinho of selectedCarrinhos) {
        const carrinho = carrinhos.find(carrinho => carrinho.NomeCarrinho === nomeCarrinho);
        if (carrinho) {
          const entregaData = {
            IdCarrinho: carrinho._id,
            IdUser: user?.id,
            Partida: carrinho.Local,
            Destino: destino,
            horaPartida: horaPartida,
            horaEntrega: " ",
            Status: true
          };

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
        }
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
          <Button onClick={finalizarEntrega}>
            Finalizar <Check weight="bold" size={16} />
          </Button>
          <p>00h:13m:23s</p>
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
