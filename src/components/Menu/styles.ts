
import { Link } from 'react-router-dom';
import { styled } from '../../styles/global';

export const MenuContainer = styled('nav', {
    display: 'flex',
    flexDirection: 'row',
    padding: '0.79rem',
    backgroundColor: '$maingreen',
    justifyContent: 'space-around',
    borderRadius: '100px',
    height: '65px',
});

export const Icon = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    color: '$darkGreen',
    cursor: 'pointer',
});

export const IconActive = styled(Icon, {
    color: '#fff',
    cursor: 'pointer',
});

export const MenuLink = styled(Link, {
    textDecoration: 'none',
    color: '$darkGreen',
    fontSize: '12px',

    [`${IconActive} &`]: {
        color: '#fff',
    },
});
