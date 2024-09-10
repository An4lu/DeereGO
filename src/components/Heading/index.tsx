import { CSS } from '@stitches/react'
import { ReactNode } from 'react'
import { Title } from './styles'

interface TitleProps {
    children: ReactNode
    css?: CSS
}

export const Heading = ({ children, css }: TitleProps) => {
    return <Title css={css}>{children}</Title>
}
