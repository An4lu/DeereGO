import { MapPin, Check, Question } from '@phosphor-icons/react';
import {
  StatusContainer,
  Head,
  Text,
  BtnBox,
  Button,
  Bottom,
} from './styles';

export function Status() {
  return (
    <StatusContainer>
      <Head>
        <Text>
          <h3>Entrega Atual</h3>
          <p>
            Carrinhos: 002, 023, 033 <Question size={16} />
          </p>
        </Text>
        <BtnBox>
          <Button>
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
            Corredor ABC
          </p>
        </Text>
      </Bottom>
    </StatusContainer>
  );
}
