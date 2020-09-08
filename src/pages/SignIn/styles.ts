import styled from 'styled-components'
import { Link as LinkComponent } from 'react-router-dom'

import { Button as ButtonComponent } from 'components'
import { Colors } from 'styles'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    135deg,
    rgba(49, 215, 219, 1),
    rgba(21, 100, 122, 1)
  );
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  width: 40%;
  min-width: 350px;
  max-width: 450px;
  padding: 40px 60px;
  border-radius: 12px;

  > img {
    width: 200px;
    height: 120px;
    object-fit: contain;
    margin-bottom: 50px;
    cursor: pointer;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`

export const Input = styled.input`
  width: 100%;
  color: white;
  background-color: transparent !important;
  border: none;
  padding: 0 16px;
  height: 100%;
  font-size: 16px;

  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`

export const Button = styled(ButtonComponent)`
  margin-top: 30px;
`

export const LinkWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 20px;
  margin-top: 60px;

  border-top: 1px solid ${Colors.space.tint400};
  width: 100%;
`

export const Link = styled(LinkComponent)`
  color: ${Colors.space.tint900};
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;

  > span {
    font-weight: normal;
    color: ${Colors.space.tint600};
  }
`
