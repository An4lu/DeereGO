import { HouseSimple, MapTrifold, Package, Power, Toolbox, UserCircle } from '@phosphor-icons/react';
import { useAuth } from '../../contexts/AuthContext';
import { ContentContainer, Div, LogoContainer, SidebarButton, SidebarContainer, SidebarItem, TextLink } from './styles';
import logoimg from '/logofull.svg';

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
                        <HouseSimple size={28} weight='fill' />
                        <TextLink>VISÃO GERAL</TextLink>
                    </SidebarItem>
                    <SidebarItem to='/adm/mapa'>
                        <MapTrifold size={28} weight='fill' />
                        <TextLink>MAPA</TextLink>
                    </SidebarItem>
                    <SidebarItem to='/adm/carrinhos'>
                        <Toolbox size={28} weight='fill' />
                        <TextLink>CARRO-KITS</TextLink>
                    </SidebarItem>
                    <SidebarItem to='/adm/entregas'>
                        <Package size={28} weight='fill' />
                        <TextLink>Entregas</TextLink>
                    </SidebarItem>
                    <SidebarItem to='/adm/ajustes'>
                        <UserCircle size={28} weight='fill' />
                        <TextLink>AJUSTES</TextLink>
                    </SidebarItem>
                    <SidebarButton onClick={logout}>
                        <Power size={28} weight='fill' />
                        <TextLink>SAIR</TextLink>
                    </SidebarButton>
                </ContentContainer>
            </Div>
        </SidebarContainer >
    );
}