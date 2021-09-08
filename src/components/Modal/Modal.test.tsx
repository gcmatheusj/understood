import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { Modal } from './Modal'

describe('<Modal />', () => {
  it('should render modal content', () => {
    const handleClose = jest.fn()

    const { getByTestId } = render(
      <Modal isOpen={true} onClose={handleClose}>
        <h1>Hello Modal</h1>
      </Modal>
    )

    expect(
      screen.getByRole('heading', { name: /hello modal/i })
    ).toBeInTheDocument()

    fireEvent.click(getByTestId(/close-modal/i))

    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('should not render modal content', () => {
    const handleClose = jest.fn()

    render(
      <Modal isOpen={false} onClose={handleClose}>
        <h1>Hello Modal</h1>
      </Modal>
    )

    expect(screen.queryByText(/Hello Modal/i)).not.toBeInTheDocument()
  })

  it('should call handleClose when click outside the modal', () => {
    const handleClose = jest.fn()

    const { getByTestId } = render(
      <Modal isOpen={true} onClose={handleClose}>
        <h1>Hello Modal</h1>
      </Modal>
    )

    fireEvent.click(getByTestId(/modal-overlay/i))

    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})
