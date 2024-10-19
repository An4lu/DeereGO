import { styled } from "../../styles";


export const EntregasContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    borderRadius: '25px',
    width: '100%',
    gap: '1rem',
    backgroundColor: '#fff',
    margin: '1rem 0',
});

export const ContainerH3 = styled('h3', {
    color: '$maingreen',
    fontSize: '1.5rem',
    fontFamily: '$poppins',
    fontWeight: 'semibold',
    textAlign: 'left',
    borderBottom: '2px solid $yellow',
    margin: '0',
});
