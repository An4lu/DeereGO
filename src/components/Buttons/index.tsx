import { ShoppingCartSimple, Trophy } from '@phosphor-icons/react';
import { ButtonMetas, ButtonEntrega, ButtonContainer } from './styles';

export function Buttons() {
    return (
        <ButtonContainer>
            <ButtonMetas>
                <Trophy weight="light" width={20} height={20} />
                Metas
            </ButtonMetas>
            <ButtonEntrega>
                <ShoppingCartSimple weight="light" width={20} height={22} />
                Iniciar Entrega
            </ButtonEntrega>
        </ButtonContainer>
    );
}