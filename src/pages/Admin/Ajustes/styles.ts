import { styled } from "../../../styles/global";


export const Background = styled('div', {
    height: '100%',
    margin: '60px',
})

export const Div = styled('div', {
    display: 'flex',
    flexDirection: 'column',
})

export const Linha = styled('div', {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',

})

export const DivGestor = styled('div', {
    width: '100%',
    height: '210px',
    backgroundColor: '$white',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    padding: '35px',
})

export const ContainerReb = styled('div', {})

export const DivInfos = styled('div', {
    fontWeight: '600',
    fontSize: '18px',
})

export const Img = styled('img', {
    width: '140px',
    height: '140px',
    objectFit: 'cover',
    borderRadius: '50%',
})