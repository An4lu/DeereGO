import { keyframes, styled } from "../../styles/global"

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const Container = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  zIndex: 9999,

  '& img': {
    animation: `${rotate} 2s linear infinite`,
    width: '70px',
  },
})
