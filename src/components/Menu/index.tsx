import { House, Package, User, Power } from '@phosphor-icons/react';
import { Option, MenuContainer } from './styles';
import { useAuth } from '../../contexts/AuthContext';


export function Menu() {
    const { logout } = useAuth();
    return (
        <MenuContainer>
            <Option to={`/rebocador/home`}>
                <House size={38} weight="fill" />
                Home
            </Option>
            <Option to={`/rebocador/entregas`}>
                <Package size={38} weight="fill" />
                Entregas
            </Option>
            <Option to={`/rebocador/perfil`}>
                <User size={38} weight="fill" />
                Perfil
            </Option>
            <Option onClick={logout} to={'/'}>
                <Power size={30} weight='fill' />
                Sair
            </Option>
        </MenuContainer>
    );
}
