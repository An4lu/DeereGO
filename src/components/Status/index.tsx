import { MapPin, Check, Question } from '@phosphor-icons/react';
import {
  StatusContainer,
  Head,
  Text,
  BtnBox,
  Button,
  Bottom,
} from './styles';
import { useEffect, useState } from "react";
import { useAuth } from '../../contexts/AuthContext';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

interface StatusProps {
  carrinhosSelecionados: string[];
}
interface Carro {
  _id: string;
  NomeCarrinho: string;
  Local: string;
  Peças: string;
  Bloco: string;
}

export function Status({carrinhosSelecionados}: StatusProps) {
  const { user } = useAuth();
  console.log(user)

  const [carrinhos, setCarrinhos] = useState<Carro[]>([]);
  
  useEffect(() => {
      fetch(`${apiBaseUrl}/rebocador/entrega/carrinho`)
          .then(response => response.json())
          .then(data => {
              if (data) {
                   setCarrinhos(data);
              }
          });
  }, []);
  console.log(carrinhos);

  // Finalizar entrega
  const finalizarEntrega = async () => {
    const destino = 'Centro de Trabalho';
    const horaPartida = new Date().toISOString();

    try {
      for (const nomeCarrinho of carrinhosSelecionados){
        const carrinho = carrinhos.find(carrinho => carrinho.NomeCarrinho === nomeCarrinho);
        if (carrinho){
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
          }	else {
            console.error('Erro ao realizar entrega:', response.statusText);
          }
      }
    }
  } catch (error) {
    console.error('Erro ao realizar entrega:', error)
  }
};
  


  return (
    <StatusContainer>
      <Head>
        <Text>
          <h3>Entrega Atual</h3>
          <p>
            Carrinhos: {carrinhosSelecionados.join(', ')} <Question size={16} />
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
