import { House, Package, User } from '@phosphor-icons/react';
import { Icon, IconActive, MenuContainer, MenuLink } from './styles';

export function Menu() {
    return (
        <MenuContainer>
            <IconActive>
                <House size={38} weight="fill" />
                <MenuLink to={`/rebocador`}>Home</MenuLink>
            </IconActive>
            <Icon>
                <User size={38} weight="fill" />
                <MenuLink to={`/rebocador/perfil`}>Perfil</MenuLink>
            </Icon>
            <Icon>
                <Package size={38} weight="fill" />
                <MenuLink to={`/rebocador/entregas`}>Entregas</MenuLink>
            </Icon>
        </MenuContainer>
    );
}
