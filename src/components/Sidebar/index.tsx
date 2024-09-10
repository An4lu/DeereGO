import { HouseSimple, MapTrifold, Power, Toolbox, UserCircle } from '@phosphor-icons/react';
import { ContentContainer, Div, LogoContainer, SidebarButton, SidebarContainer, SidebarItem, TextLink } from './styles';
import logoimg from '/logofull.svg'
import { useNavigate } from 'react-router';

export function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userData');
        localStorage.removeItem('authToken');

        navigate('/');
    };


    return (
        <SidebarContainer>
            <LogoContainer>
                <img src={logoimg} alt='Logo' />
            </LogoContainer>
            <Div>
                <ContentContainer>
                    <SidebarItem to='/adm/home'>
                        <HouseSimple size={30} weight='fill' />
                        <TextLink>VISÃO GERAL</TextLink>
                    </SidebarItem>
                    <SidebarItem to='/'>
                        <MapTrifold size={30} weight='fill' />
                        <TextLink>MAPA</TextLink>
                    </SidebarItem>
                    <SidebarItem to='/'>
                        <Toolbox size={30} weight='fill' />
                        <TextLink>CARRO-KITS</TextLink>
                    </SidebarItem>
                    <SidebarItem to='/'>
                        <UserCircle size={30} weight='fill' />
                        <TextLink>AJUSTES</TextLink>
                    </SidebarItem>
                </ContentContainer>
                <SidebarButton onClick={handleLogout}>
                    <Power size={30} weight='fill' />
                    <TextLink>SAIR</TextLink>
                </SidebarButton>
            </Div>
        </SidebarContainer >
    );
}