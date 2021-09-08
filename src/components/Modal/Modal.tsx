import { PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'

import * as S from './Modal.styles'

import { CloseIcon } from 'assets/icons/CloseIcon'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const Modal = ({
  isOpen,
  onClose,
  children
}: PropsWithChildren<ModalProps>) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <S.Wrapper className="modal" data-testid="modal-overlay" onClick={onClose}>
      <S.Content onClick={(e) => e.stopPropagation()}>
        <button data-testid="close-modal" type="button" onClick={onClose}>
          <CloseIcon />
        </button>
        {children}
      </S.Content>
    </S.Wrapper>,
    document.body
  )
}
