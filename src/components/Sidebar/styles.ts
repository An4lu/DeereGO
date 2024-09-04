import { NavLink } from "react-router-dom";
import { styled } from "../../styles/global";

export const SidebarContainer = styled('div', {
    marginLeft: '48px',
    marginTop: '0px',
    width: '296px',
    height: '100%',
});

export const LogoContainer = styled('div', {
    padding: '16px',
    display: 'flex',
    justifyContent: 'center',
});

export const ContentContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
    paddingTop: '16px',
});

export const SidebarItem = styled(NavLink, {
    fontSize: '18px',
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    color: '#333333',
    cursor: 'pointer',
    textDecoration: 'none',

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