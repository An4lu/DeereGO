import { styled } from '@stitches/react';

export const Fundo = styled('div', {
    backgroundImage: "url('/public/fundo.png')",
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

export const Centro = styled('div', {
    height: '570px',
    width: '500px',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '20px',
    display: 'flex',

})