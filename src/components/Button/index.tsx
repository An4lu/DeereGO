import { CSS } from '@stitches/react'
import { ContButton, DivImg } from './styles'
import { ReactNode, MouseEventHandler } from 'react'

interface ButtonProps {
  type: string
  css?: CSS
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  style?: React.CSSProperties
}

export const Button = ({
  type,
  disabled,
  css,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <ContButton
      css={css}
      type={type as 'button' | 'submit' | 'reset'}
      onClick={onClick}
      disabled={disabled}
    >
      <DivImg>{children}</DivImg>
    </ContButton>
  )
}
