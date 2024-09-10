import { CSS } from '@stitches/react'
import { ReactNode } from 'react'
import { Text } from './styles'

interface TitleProps {
    children: ReactNode
    css?: CSS
}

export const Title = ({ children, css }: TitleProps) => {
    return <Text css={css}>{children}</Text>
}
