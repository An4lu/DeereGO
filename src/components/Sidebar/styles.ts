import { NavLink } from "react-router-dom";
import { styled } from "../../styles/global";

export const SidebarContainer = styled('div', {
    width: '300px',
    height: '100%',
});

export const LogoContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '32px',
});

export const ContentContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'flex-start',
    marginTop: '15px',
    marginLeft: '30px',
    gap: '32px',
});

export const SidebarItem = styled(NavLink, {
    fontSize: '15px',
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    color: '#333333',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 0.4s ease',
    '&:hover': {
        color: '$maingreen',
    },

    '&.active': {
        backgroundColor: '$litepurple',
        color: '$maingreen',
        border: 'none',
        borderRadius: '8px',
    },
});

export const TextLink = styled('span', {

})