import { CSS } from '@stitches/react'
import { Container, DropdownH, FieldInput, ForHelper, TextDesc } from './styles'
import { ReactElement } from 'react'

interface PropInput extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string
  css?: CSS
  placeholder?: string
  title?: string
  icon?: ReactElement
  hoverText?: string
  value?: string | number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  readOnly?: boolean
}

export const InputForms: React.FC<PropInput> = ({
  type,
  css,
  placeholder,
  title,
  icon,
  hoverText,
  value,
  onChange,
  onClick,
  onFocus,
  onBlur,
  readOnly,
  ...rest
}: PropInput) => {
  return (
    <Container>
      <ForHelper>
        <TextDesc>{title}</TextDesc>
        {icon && hoverText && (
          <DropdownH.Root>
            <DropdownH.Trigger asChild>{icon}</DropdownH.Trigger>
            <DropdownH.Portal>
              <DropdownH.Content side="right">
                {hoverText}
                <DropdownH.HoverArrow />
              </DropdownH.Content>
            </DropdownH.Portal>
          </DropdownH.Root>
        )}
      </ForHelper>
      <FieldInput
        css={css}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readOnly}
        {...rest}
      />
    </Container>
  )
}