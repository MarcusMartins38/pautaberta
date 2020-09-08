import styled from 'styled-components'

export const Container = styled.div`
  max-width: 664px;
  max-height: 53px;

  width: 100%;
  height: 100%;
  padding: 8px 4px;

  margin-bottom: 34px;

  border-radius: 8px;
  border: 1px solid gray;

  position: relative;

  span {
    position: absolute;
    right: 0;
    top: 0;

    margin-right: 8px;

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
        display: inline-block;

        max-width: 300px;
        min-width: 150px;
        width: 100%;

        z-index: 1;
        background-color: #ebebeb;

        padding: 8px;
        border-radius: 8px;

        position: absolute;

        transform: translate(-10%, -100%);
      }
    }
  }
`

export const Input = styled.input`
  width: 100%;
  height: 100%;

  padding: 8px 4px;

  border: 0;
`
