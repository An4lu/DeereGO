import { styled } from "../../styles";

export const ContainerInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#191C1A',
    padding: '1rem',
    gap: '1rem',
    borderRadius: '25px',
    margin: '1rem 0',
    color: '#fff',
});

export const HeadInfo = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
});

export const IconeProfile = styled('div', {
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.6s ease',

    variants: {
        rotated: {
            true: {
                transform: 'rotate(0deg)',
            },
            false: {
                transform: 'rotate(180deg)',
            },
        },
    },
});

export const BodyCard = styled('div', {
    display: 'none',
    transition: 'height 0.5s ease, opacity 0.5s ease',
});

export const BodyCardShow = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    gap: '1rem',
});

export const Info = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: '0.5rem',
});

export const Linha = styled('div', {
    border: 'dashed 1px $yellow',
    width: '100%',
    height: 0,
});

export const InfoTitle = styled('p', {
    fontWeight: 'semibold',
    fontSize: '1.2rem',
    color: '$white',
    textAlign: 'center',
});

export const InfoValue = styled('p', {
    fontWeight: 'bold',
    color: '$titlegreen',
});
