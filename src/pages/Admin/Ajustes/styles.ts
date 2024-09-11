import { styled } from "../../../styles/global";


export const Background = styled('div', {
    height: '100%',
    margin: '60px',
})

export const Div = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '45px',
})

export const Linha = styled('div', {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',

})

export const DivGestor = styled('div', {
    width: '100%',
    height: '180px',
    backgroundColor: '$white',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    padding: '30px',
    cursor: 'pointer',
})

export const ContainerReb = styled('div', {
    width: '100%',
    height: '120px',
    backgroundColor: '$white',
    borderRadius: '20px',
    cursor: 'pointer',
})

export const DivInfos = styled('div', {
    fontWeight: '600',
    fontSize: '18px',
})

export const Img = styled('img', {
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '50%',
})