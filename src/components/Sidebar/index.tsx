import { HouseSimple, MapTrifold, Toolbox, UserCircle } from '@phosphor-icons/react';
import { ContentContainer, LogoContainer, SidebarContainer, SidebarItem } from './styles';

export function Sidebar() {
    return (
        <SidebarContainer>
            <LogoContainer>
                <img src='Logo-DeereGo.svg' alt='Logo' />
            </LogoContainer>
            <ContentContainer>
                <SidebarItem>
                    <HouseSimple size={30} weight='fill' />
                    <a href='#'>VISÃO GERAL</a>
                </SidebarItem>
                <SidebarItem>
                    <MapTrifold size={30} weight='fill' />
                    <a href='#'>MAPA</a>
                </SidebarItem>
                <SidebarItem>
                    <Toolbox size={30} weight='fill' />
                    <a href='#'>CARRO-KITS</a>
                </SidebarItem>
                <SidebarItem>
                    <UserCircle size={30} weight='fill' />
                    <a href='#'>PERFIL</a>
                </SidebarItem>
            </ContentContainer>
        </SidebarContainer>
    );
}