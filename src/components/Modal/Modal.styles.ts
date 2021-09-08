import styled from 'styled-components'

export const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  position: relative;
  background: #fff;
  border-radius: 4px;
  max-width: 834px;
  width: 100%;
  max-height: 540px;
  height: 100%;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.15);
  margin: 20px;

  @media (max-width: 768px) {
    max-width: inherit;
    width: 100%;
    max-height: inherit;
    height: 100%;
    margin: 0;
    border-radius: 0;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    border: 0;
    padding: 32px;
    cursor: pointer;

    @media (max-width: 768px) {
      padding: 20px;
    }
  }
`
