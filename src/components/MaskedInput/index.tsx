import React from 'react'
import { Container, Input, Title } from './styles'
import { CSS } from '@stitches/react'

interface MaskedInputProps {
  mask: string
  type: string
  title?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  css?: CSS
}

export const MaskedInput: React.FC<MaskedInputProps> = ({
  mask,
  type,
  title,
  value,
  onChange,
  placeholder,
  css,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Input
        css={css}
        mask={mask}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Container>
  )
}
