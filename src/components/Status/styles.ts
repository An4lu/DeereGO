import { styled } from '@stitches/react';

export const StatusContainer = styled('div', {
    backgroundColor: '#191C1A',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: '12px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
});

export const Head = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const Text = styled('div', {
    h3: {
        margin: 0,
        fontSize: '1rem',
    },
    p: {
        fontSize: '0.7rem',
        fontWeight: 600,
        margin: 0,
    },
});

export const BtnBox = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const Button = styled('button', {
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    gap: '0.2rem',
    border: 'none',
    color: '#fff',
    backgroundColor: '#028001',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '0.8rem',
    borderRadius: '2rem',
    padding: '0.5rem 1rem',
});

export const Bottom = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});
