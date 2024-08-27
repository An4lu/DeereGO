import { House, Package, User } from '@phosphor-icons/react';
import { Option, MenuContainer } from './styles';

export function Menu() {
    return (
        <MenuContainer>
            <Option to={`/rebocador/home`}>
                <House size={38} weight="fill" />
                Home
            </Option>
            <Option to={`/rebocador/perfil`}>
                <User size={38} weight="fill" />
                Perfil
            </Option>
            <Option  to={`/rebocador/entregas`}>
                <Package size={38} weight="fill" />
                Entregas
            </Option>
        </MenuContainer>
    );
}
