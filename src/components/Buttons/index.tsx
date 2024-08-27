import { ShoppingCartSimple, Trophy } from '@phosphor-icons/react';
import { Button, ButtonContainer } from './styles';

export function Buttons() {
    return (
        <ButtonContainer>
            <Button>
                <Trophy weight="light" width={20} height={20} />
                Metas
            </Button>
            <Button>
                <ShoppingCartSimple weight="light" width={20} height={22} />
                Iniciar Entrega
            </Button>
        </ButtonContainer>
    );
}