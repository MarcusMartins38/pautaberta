import styled from 'styled-components'
import { rem } from 'polished'
import { headerBg, headerPattern } from 'assets/images'

export const Page = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  background: url(${headerBg}) center bottom/cover no-repeat;
  width: 100%;
  padding-top: 85px;
  position: relative;

  &:before {
    width: 100%;
    height: 100%;
    background: url(${headerPattern});
    opacity: 0.2;
    z-index: 0;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const Title = styled.h1`
  font-size: ${rem(18)};
`
