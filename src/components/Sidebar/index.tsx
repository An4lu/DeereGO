import { HouseSimple, MapTrifold, Toolbox, UserCircle } from '@phosphor-icons/react';
import { ContentContainer, LogoContainer, SidebarContainer, SidebarItem, TextLink } from './styles';
import logoimg from '/logofull.svg'

export function Sidebar() {
    return (
        <SidebarContainer>
            <LogoContainer>
                <img src={logoimg} alt='Logo' />
            </LogoContainer>
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
                    <TextLink>PERFIL</TextLink>
                </SidebarItem>
            </ContentContainer>
        </SidebarContainer>
    );
}