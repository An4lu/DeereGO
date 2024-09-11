import { NotePencil, X } from '@phosphor-icons/react'
import { Heading } from '../Heading'
import {
  Overlay,
  Dialog,
  ContainerModal,
  Painel,
  Div,
  Linha,
  LinhaButton,
  InputContainer,
  InputNome,
  InputInfosCliente,
  ContainersLeft,
  ContainersRight,
  Span,
  ButtonEdit,
  ButtonCancel,
} from './styles'
import { Input } from '../Input'
import { MaskedInput } from '../MaskedInput'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ModalRebocador: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay onClick={onClose}>
      <Dialog onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <ContainerModal>
          <Painel>
            <Linha>
              <Div>
                <Heading
                  css={{
                    fontSize: '28px',
                    fontWeight: '700',
                  }}
                >
                  Editar Informações
                </Heading>
              </Div>
              <Div css={{ cursor: 'pointer' }}>
                <X size={35} color="#B6B6B6" onClick={onClose} />
              </Div>
            </Linha>
            <InputContainer>
              <InputNome css={{ marginTop: '28px' }}>
                <Span>Nome Completo</Span>
                <Input
                  value="Texto Padrão"
                  type={'text'}
                  css={{ padding: '26px 14px', color: '$input' }}
                ></Input>
              </InputNome>
              <InputInfosCliente>
                <ContainersLeft>
                  <InputNome>
                    <Span>CPF</Span>
                    <MaskedInput
                      mask="999.999.999-99"
                      type="text"
                      placeholder="Informe seu CPF"
                      css={{ padding: '26px 14px', color: '$input' }}
                    />
                  </InputNome>
                  <InputNome>
                    <Span>E-mail</Span>
                    <Input
                      value="ricardolemosm@gmail.com"
                      css={{ padding: '26px 14px', color: '$input' }}
                      type={'email'}
                    ></Input>
                  </InputNome>
                </ContainersLeft>
                <ContainersRight>
                  <InputNome>
                    <Span>RG</Span>
                    <MaskedInput
                      mask="99.999.999-9"
                      type="text"
                      placeholder="Informe seu RG"
                      css={{ padding: '26px 14px', color: '$input' }}
                    />
                  </InputNome>
                  <InputNome>
                    <Span>Senha</Span>
                    <Input
                      type={'password'}
                      placeholder={'Digite sua senha'}
                      css={{ padding: '26px 14px', color: '$input' }}
                    />
                  </InputNome>
                </ContainersRight>
              </InputInfosCliente>
            </InputContainer>
            <LinhaButton>
              <ButtonCancel
                css={{ background: 'rgba(220, 220, 220, 1)' }}
                onClick={onClose}
              >
                Cancelar
              </ButtonCancel>
              <ButtonEdit>
                <NotePencil size={22} color="#FFFFFF" />
                Editar
              </ButtonEdit>
            </LinhaButton>
          </Painel>
        </ContainerModal>
      </Dialog>
    </Overlay>
  )
}
