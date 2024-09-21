import { styled } from '../../styles'
import InputMask from 'react-input-mask'

export const Input = styled(InputMask, {
  width: '100%',
  padding: '20px 10px',
  borderRadius: '2.823px',
  height: '20px',
  border: '2px solid $border',
  fontSize: '16px',
  color: '$grayfont',
  '&::placeholder': {
    color: '$placeholder',
    fontWeight: '400',
    fontSize: '16px',
  },
  '&:focus': {
    outline: 'none',
  },
})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const Title = styled('span', {
  marginBottom: '5px',
  fontSize: '17px',
  fontWeight: '500',
  color: '$grayhigh',
})
