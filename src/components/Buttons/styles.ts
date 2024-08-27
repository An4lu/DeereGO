import { styled } from "../../styles/global";

export const ButtonContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem',
});

export const Button = styled('button', {
    border: 'none',
    backgroundColor: '$white',
    padding: '0.5rem 1rem',
    fontWeight: '700',
    borderRadius: '20px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.6rem',
    gap: '0.5rem',
    cursor: 'pointer',
});