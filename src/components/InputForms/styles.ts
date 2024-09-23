
import * as DropdownHelper from '@radix-ui/react-hover-card'
import { styled } from '../../styles'

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '6px',
})

export const FieldInput = styled('input', {
    width: '100%',
    padding: '15px 8px',
    borderRadius: '10px',
    height: '15px',
    border: '2px solid $grayfont',
    fontSize: '14px',
    color: '$grayfont',
    backgroundColor: 'transparent',
    '&::placeholder': {
        color: '$maingreen',
        fontWeight: '400',
        fontSize: '14px',
    },
    '&:focus': {
        outline: 'none',
        borderColor: '$maingreen',
    },
})

export const TextDesc = styled('span', {
    fontSize: '14px',
    fontWeight: '500',
    color: '$grayfont',
})

export const ForHelper = styled('div', {
    display: 'flex',
    flexDirection: 'row',
})

const Trigger = styled(DropdownHelper.Trigger, {
    cursor: 'pointer',
})

const Content = styled(DropdownHelper.Content, {
    cursor: 'pointer',
    borderRadius: 4,
    padding: 4.5,
    color: '$gray200',
    fontSize: 13,
    backgroundColor: 'white',
    boxShadow: 'rgba(0.2, 0, 0.2, 0.2) 0px 1px 4px',
})

const HoverArrow = styled(DropdownHelper.Arrow, {
    fill: 'white',
})

const Root = styled(DropdownHelper.Root, {})
const Portal = styled(DropdownHelper.Portal, {})

export const DropdownH = {
    Root,
    Trigger,
    HoverArrow,
    Portal,
    Content,
}

export const HelperCard = styled(DropdownHelper.Content, {
    backgroundColor: '#ffffff',
    width: '217px',
    height: '165px',
    cursor: 'pointer',
    borderRadius: '4px',
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
})