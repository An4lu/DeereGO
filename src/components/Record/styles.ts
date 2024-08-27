import { styled } from '@stitches/react';

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
    backgroundColor: '$maingreen',
    color: '#fff',
});

export const BodyCard = styled('div', {
    display: 'none',
});

export const BodyCardShow = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
});

export const Info = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: '0.5rem',
});

export const Linha = styled('div', {
    border: 'dashed 1px #fff',
    width: '100%',
    height: 0,
});
