import { PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'

import * as S from './Modal.styles'

import { CloseIcon } from 'assets/icons/CloseIcon'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  ariaLabelledby?: string
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  ariaLabelledby
}: PropsWithChildren<ModalProps>) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <S.Wrapper className="modal" data-testid="modal-overlay" onClick={onClose}>
      <S.Content
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal={isOpen}
        aria-labelledby={ariaLabelledby}
      >
        <button
          data-testid="close-modal"
          type="button"
          tabIndex={0}
          onClick={onClose}
        >
          <CloseIcon />
        </button>
        {children}
      </S.Content>
    </S.Wrapper>,
    document.body
  )
}
