import React from 'react';
import { Container, TextDesc, SelectField } from './styles'; // importando os estilos
import { CSS } from '@stitches/react';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  title: string;
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  css?: CSS;
}

export const Select: React.FC<SelectProps> = ({ title, options, value, onChange, css }) => {
  return (
    <Container css={css}>
      <TextDesc>{title}</TextDesc>
      <SelectField value={value} onChange={onChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectField>
    </Container>
  );
};
