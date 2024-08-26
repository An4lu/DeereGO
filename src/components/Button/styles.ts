import { styled } from "../../styles/global"


export const ContButton = styled('button', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$green',
    color: '$fontgreen',
    fontSize: '21px',
    fontWeight: '700',
    width: '100%',
    height: '52px',
    border: '2px solid $green',
    borderRadius: '10px',
    cursor: 'pointer',
    letterSpacing: '0',
    transition: 'all 0.3s ease-out',
    '&:hover': {
        transform: 'scale(1.01)',
    },
})

export const DivImg = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '2px',
})