import styled from 'styled-components'

export const Container = styled.div`
  max-width: 664px;

  width: 100%;
  height: 100%;
  padding: 8px 4px;

  margin-bottom: 34px;

  border-radius: 8px;

  position: relative;

  span {
    position: absolute;
    right: 0;
    top: 0;

    margin-right: 8px;
    margin-top: 8px;

    box-shadow: 0px 1px 1px black;
    border-radius: 50%;

    width: 18px;
    height: 18px;

    text-align: center;

    p {
      display: none;
    }

    &:hover {
      p {
        display: block;

        max-width: 300px;
        min-width: 150px;
        width: 100%;

        z-index: 1;
        background-color: #ebebeb;

        padding: 8px;
        border-radius: 8px;

        position: absolute;

        transform: translate(-10%, -150%);
      }
    }
  }
`

export const TextArea = styled.textarea`
  width: 664px;
  height: 279px;

  margin-bottom: 24px;
`
