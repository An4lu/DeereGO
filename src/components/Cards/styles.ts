import { styled } from "../../styles/global";


export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: '1rem',
    marginTop: '1rem',
    marginBottom: '1rem',
});

export const Card = styled('div', {
    backgroundColor: '#FFFFFF',
    padding: '10px',
    gap: '2px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
});

export const CardTitle = styled('h3', {
    fontSize: '0.8rem',
    fontWeight: 600,
    textAlign: 'center',
});

export const CardText = styled('p', {
    fontSize: '0.7rem',
});
