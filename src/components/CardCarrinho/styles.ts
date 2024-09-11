import { styled } from "../../styles/global";


export const CardEntregaContainer = styled('div', {
    backgroundColor: '$white',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderRadius: '25px',
    border: '1px solid $green',
});

export const HeadCard = styled('div', {
    color: '$green',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
});

export const Left = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '0.5rem',
});

export const TitleCard = styled('div', {
    display: 'flex',
    flexDirection: 'column',
});

export const Linha = styled('div', {
    height: '1px',
    border: '1px solid $green',
    width: '100%',
});

export const BodyCard = styled('div', {
    height: '0',
    overflow: 'hidden',
    transition: 'all 1s cubic-bezier(0,1,0,1)',
});

export const BodyCardShow = styled(BodyCard, {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    padding: '0.45rem',
    transition: 'all 1s cubic-bezier(0,1,0,1)',
});

export const Info = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '0.5rem',
    marginBottom: '0.5rem',
});

export const StatusText = styled('h2', {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '$darkGreen',
});

export const InfoText = styled('p', {
    fontSize: '0.6rem',
    color: '$lightGreen',
    fontWeight: '500',
});
