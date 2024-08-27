import { useState } from 'react';
import { CaretCircleUp, CaretCircleDown } from '@phosphor-icons/react';
import {
  ContainerInfo,
  HeadInfo,
  IconeProfile,
  BodyCard,
  BodyCardShow,
  Info,
  Linha
} from './styles';

export function Record() {
  const [selected, setSelected] = useState<number | null>(null);
  const i = 0;

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <ContainerInfo>
      <HeadInfo onClick={() => toggle(i)}>
        <h3>Informações</h3>
        <IconeProfile>
          {selected === i ? (
            <CaretCircleUp size={32} weight="fill" />
          ) : (
            <CaretCircleDown size={32} weight="fill" />
          )}
        </IconeProfile>
      </HeadInfo>
      {selected === i ? (
        <BodyCardShow>
          <Info>
            <p>Status</p>
            <Linha />
            <p>20</p>
          </Info>
          <Info>
            <p>Status</p>
            <Linha />
            <p>20</p>
          </Info>
          <Info>
            <p>Status</p>
            <Linha />
            <p>20</p>
          </Info>
        </BodyCardShow>
      ) : (
        <BodyCard />
      )}
    </ContainerInfo>
  );
}
