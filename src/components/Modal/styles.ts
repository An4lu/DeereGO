import { styled } from "../../styles/global";

export const ModalBackground = styled('div', {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
});

export const ModalContent = styled('div', {
    backgroundColor: '$white',
    padding: '20 30px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    maxHeight: '80vh',
    overflowY: 'auto',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
});
