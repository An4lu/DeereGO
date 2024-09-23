import { styled } from "../../../styles"


export const Background = styled('div', {
    height: '100%',
    margin: '60px',
})

export const Div = styled('div', {
    display: 'flex',
    flexDirection: 'column',
})

export const ButtonModal = styled('button', {
    display: 'flex',
    alignItems: 'center',
    height: '30px',
    justifyItems: 'center',
    gap: '5px',
    fontWeight: '600',
    fontSize: '16px',
    padding: '4px 10px',
    color: '$white',
    borderRadius: '30px',
    backgroundColor: '$green',
    style: 'none',
    cursor: 'pointer',
    letterSpacing: '0',
    border: 'none',
    transition: 'all 0.3s ease-out',
    '&:hover': {
        color: '$green',
        backgroundColor: '$white',
        transform: 'scale(1.02)',
    },
})

export const ButtonDelete = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    gap: '5px',
    fontWeight: '600',
    fontSize: '16px',
    padding: '4px 10px',
    color: '$white',
    borderRadius: '30px',
    backgroundColor: '$red',
    style: 'none',
    cursor: 'pointer',
    letterSpacing: '0',
    border: 'none',
    transition: 'all 0.3s ease-out',
    '&:hover': {
        color: '$red',
        backgroundColor: '$white',
        transform: 'scale(1.02)',
    },
})

export const DivH = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px'
})

export const Linha = styled('div', {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',

    variants: {
        isGrid: {
            true: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '45px',
                marginTop: '20px',
            },
        },
    },
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
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '20px',
    gap: '12px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    justifyContent: 'space-between',
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