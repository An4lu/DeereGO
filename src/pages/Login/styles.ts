import { styled } from "../../styles/global"

export const Fundo = styled('div', {
    backgroundImage: "url('/fundo.png')",
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
    height: '450px',
    width: '500px',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '55px',
    justifyContent: 'center',
})

export const Inputs = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '35px',
    width: '100%',
})

export const DivButton = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
})

export const Image = styled('img', {
    width: '34px',
})

export const Title = styled('h1', {
    position: 'absolute',
    top: '-24px',          // Ajusta a posição do texto em relação à div pai
    left: '185px',
    color: 'white',       // Cor do texto
    fontSize: '44px',
    fontWeight: '600',    // Tamanho do texto
    zIndex: 1,
})