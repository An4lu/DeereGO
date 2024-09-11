import { styled } from "../../styles/global"

export const Overlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 980,
})

export const Dialog = styled('div', {
  backgroundColor: '$white',
  borderRadius: '3px',
  minHeight: '200px',
  width: '750px',
  height: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  padding: '35px 10px',
})

export const ContainerModal = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100%',

  padding: '5px 45px',
})

export const Painel = styled('div', {
  width: '100%',
  height: '100%',
})

export const Div = styled('div', {
  display: 'flex',
  gap: '10px',
})

export const Conteúdo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  width: '100%',
})

export const Linha = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  justifyContent: 'space-between',
})

export const Titulo = styled('span', {
  color: '$grayfont',
  fontWeight: '400',
  fontSize: '26px',
})

export const TitleCheck = styled('span', {
  fontSize: '13px',
  color: '$purplemain',
  textDecoration: 'underline',
})

export const Span = styled('span', {
  fontSize: '20px',
  color: '$grayfont',
  fontWeight: '400',
})

export const InputContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  height: '100%',
})

export const InputNome = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
})

export const InputInfosCliente = styled('div', {
  display: 'flex',
  gap: '25px',
})

export const ContainersLeft = styled('div', {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

export const ContainersRight = styled('div', {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})
export const LinhaButton = styled('div', {
  display: 'flex',
  marginTop: '25px',

  alignItems: 'center',
  justifyContent: 'space-between',
})

export const ButtonEdit = styled('div', {
  color: '#FFFFFF',
  background: '$buttonPurple',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  padding: '12px 50px',
  fontSize: '18px',
  fontWeight: '700',
  cursor: 'pointer',
  gap: '5px',
  transition: 'all 0.5s',
  '&:hover': {
    transform: 'scale(1.01)',
    letterSpacing: '0.5px',
  },
})

export const ButtonCancel = styled('div', {
  color: '#FFFFFF',
  background: '$buttonPurple',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  padding: '12px 36px',
  fontSize: '18px',
  fontWeight: '700',
  gap: '5px',
  transition: 'all 0.5s',
  cursor: 'pointer',
  '&:hover': {
    background: '$buttonPurple',
    transform: 'scale(1.01)',
    letterSpacing: '0.5px',
  },
})
