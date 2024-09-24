import { keyframes } from "@stitches/react";
import { styled } from "../../../styles";

export const Background = styled('div', {
    height: '100%',
    margin: '60px',
});

export const Div = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '45px',
});

export const ButtonModal = styled('button', {
    display: 'flex',
    alignItems: 'center',
    height: '30px',
    justifyItems: 'center',
    gap: '5px',
    fontWeight: '600',
    fontSize: '16px',
    padding: '4px 10px',
    color: '$white',
    borderRadius: '30px',
    backgroundColor: '$green',
    style: 'none',
    cursor: 'pointer',
    letterSpacing: '0',
    border: 'none',
    transition: 'all 0.3s ease-out',
    '&:hover': {
        color: '$green',
        backgroundColor: '$white',
        transform: 'scale(1.02)',
    },
})

export const Linha = styled('div', {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
});

export const ContainerReb = styled('div', {
    width: '100%',
    height: 'auto',
    backgroundColor: '$white',
    borderRadius: '20px',
    cursor: 'pointer',
});

export const DivInfos = styled('div', {
    display: 'flex',
    alignItems: 'center',
    fontWeight: '600',
    fontSize: '16px',
    gap: '5px',
    color: '$graymain',
});

export const Img = styled('img', {
    width: '120px',
    height: '120px',
});

export const Span = styled('span', {
    fontWeight: '500',
    fontSize: '14px',
})

export const spin = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
});

export const IconWrapper = styled('div', {
    cursor: 'pointer',
    variants: {
        isSpinning: {
            true: {
                animation: `${spin} 1s linear infinite`,
            },
            false: {
                animation: 'none',
            },
        },
    },
});