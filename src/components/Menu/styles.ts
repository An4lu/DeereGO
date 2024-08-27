
import { NavLink } from 'react-router-dom';
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

export const Option = styled(NavLink, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    color: '$darkGreen',
    fontSize: '12px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    '&.active': {
        color: '$white',
        border: 'none',
    },
    '&:hover': {
        color: '$white',
    },
});

