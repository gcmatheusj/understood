import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  button {
    height: 44px;
    width: 160px;
    background-color: #002938;
    border: 0;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    margin-top: 16px;
  }
`

export const Content = styled.div`
  width: 100%;
  padding: 82px 148px 148px;
  height: 100%;
  overflow-x: scroll;

  @media (max-width: 768px) {
    padding: 60px 20px 20px;
  }

  h2 {
    font-weight: normal;
    font-size: 24px;
    text-align: center;
    margin-bottom: 36px;

    @media (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 32px;
    }
  }

  p {
    font-size: 18px;
    line-height: 29px;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 26px;
    }
  }

  & > p {
    margin-top: 16px;
  }
`
