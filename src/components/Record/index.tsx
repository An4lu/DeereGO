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
