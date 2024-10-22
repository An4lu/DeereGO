import { Trophy } from '@phosphor-icons/react';
import { ButtonMetas, ButtonContainer } from './styles';



export function Buttons() {
    return (
        <ButtonContainer>
            <ButtonMetas>
                <Trophy weight="light" width={20} height={20} />
                Metas
            </ButtonMetas>
        </ButtonContainer>
    );
}