import { HouseSimple, MapTrifold, Power, Toolbox, UserCircle } from '@phosphor-icons/react';
import { ContentContainer, Div, LogoContainer, SidebarButton, SidebarContainer, SidebarItem, TextLink } from './styles';
import logoimg from '/logofull.svg'
import { useAuth } from '../../contexts/AuthContext';

export function Sidebar() {
    const { logout } = useAuth();

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
                <SidebarButton onClick={logout}>
                    <Power size={30} weight='fill' />
                    <TextLink>SAIR</TextLink>
                </SidebarButton>
            </Div>
        </SidebarContainer >
    );
}