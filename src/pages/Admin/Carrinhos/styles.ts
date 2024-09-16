import { styled } from "../../../styles/global";

export const Background = styled('div', {
    height: '100%',
    margin: '60px',
});

export const Div = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '45px',
});

export const Linha = styled('div', {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
});

export const ContainerReb = styled('div', {
    width: '100%',
    height: 'auto',
    backgroundColor: '$white',
    borderRadius: '20px',
    cursor: 'pointer',
});

export const DivInfos = styled('div', {
    display: 'flex',
    fontWeight: '600',
    fontSize: '16px',
    gap: '5px',
    color: '$graymain'
});

export const Img = styled('img', {
    width: '120px',
    height: '120px',
});

export const Span = styled('span', {
    fontWeight: '500',
    fontSize: '14px',
})