import React from 'react';
import { Container, Input, Title } from './styles';
import { CSS } from '@stitches/react';

interface MaskedInputProps {
  mask?: string;
  type: string;
  title?: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  css?: CSS;
}

export const MaskedInput: React.FC<MaskedInputProps> = ({
  mask,
  type,
  title,
  name,
  value,
  onChange,
  placeholder,
  css,
}) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Input
        css={css}
        mask={mask}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Container>
  );
};
