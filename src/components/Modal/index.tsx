import { ReactNode } from 'react';
import { ModalBackground, ModalContent } from './styles';
import { CSS } from '@stitches/react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    css?: CSS;
}

export function Modal({ isOpen, onClose, children, css }: ModalProps) {
    if (!isOpen) return null;

    return (
        <ModalBackground onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()} css={css}>
                {children}
            </ModalContent>
        </ModalBackground>
    );
}
