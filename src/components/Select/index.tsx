import React from 'react';
import { Container, TextDesc } from './styles';
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
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};
