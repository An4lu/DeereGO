import React, { useState } from 'react';
import { Container, DropdownContainer, DropdownOption, DropdownSelected, TextDesc } from './styles';

interface Option {
  label: string;
  value: string;
}

interface SelectCustomProps {
  title: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export const Select: React.FC<SelectCustomProps> = ({ title, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <Container>
      <TextDesc>{title}</TextDesc>
      <DropdownSelected onClick={() => setIsOpen(!isOpen)}>{options.find(option => option.value === value)?.label || 'Selecione uma opção'}</DropdownSelected>
      {isOpen && (
        <DropdownContainer>
          {options.map((option) => (
            <DropdownOption
              key={option.value}
              onClick={() => handleSelect(option.value)}
              selected={option.value === value}
            >
              {option.label}
            </DropdownOption>
          ))}
        </DropdownContainer>
      )}
    </Container>
  );
};
