import { styled } from "../../styles";

export const LogotipoDiv = styled('div', {
    display: 'none',
});

export const CanvasComponent = styled('canvas', {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    border: '4px solid $green',
    borderRadius: '1rem',
    width: '100%',
    height: '100%',
});

export const HeadCanvas = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    borderBottom: '4px solid $yellow',
    padding: '1rem',
    width: '95%',

});
export const NomeH2 = styled('h2', {
    color: '$maingreen',
    fontSize: '2rem',
    fontFamily: '$poppins',
    fontWeight: 'semibold',
    textAlign: 'center',
    margin: '0',
});
export const LocalH2 = styled('h2', {
    color: '$white',
    fontSize: '2rem',
    fontFamily: '$poppins',
    fontWeight: 'semibold',
    textAlign: 'center',
    margin: '0',
});

export const CircleLocal = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$maingreen',
    padding: '0.5rem 1rem',
    borderRadius: '50%',
});
