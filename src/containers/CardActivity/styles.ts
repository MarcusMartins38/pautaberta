import styled, { css } from 'styled-components'
import { rem } from 'polished'

import { Colors, FontWheight } from 'styles'

import { MinProcessProps, TypeProcessProps } from './types'

type CardActivitieProps = TypeProcessProps & MinProcessProps

export const Container = styled.div<CardActivitieProps>`
  width: ${({ min }) => (min ? '100%' : '95%')};
  max-width: 500px;
  height: ${({ min }) => (min ? '40px' : '80px')};
  border: ${({ type, min }) =>
    !!type && min
      ? `1px solid ${Colors.base[type]}`
      : `1px solid ${Colors.grey.tint200}`};
  border-radius: 8px;
  position: relative;
  padding: 10px 15px;
  display: flex;
  flex-direction: ${({ min }) => !min && 'column'};
  align-items: flex-start;
  justify-content: ${({ min }) => (min ? 'space-between' : 'flex-start')};

  :not(:first-child) {
    margin-top: 20px;
  }

  ${({ min, type }) =>
    !min &&
    css`
      :before {
        content: '';
        width: 8px;
        height: 100%;
        background-color: ${!!type ? Colors.base[type] : Colors.grey.tint200};

        left: 0;
        display: block;
        position: absolute;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        top: 0;
      }
    `};
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`
export const Title = styled.span`
  font-size: ${rem(16)};
  color: ${Colors.base.black};
  font-weight: ${FontWheight[600]};
`

export const Date = styled.span`
  font-size: ${rem(14)};
  color: ${Colors.grey.tint400};
  font-weight: ${FontWheight[500]};

  min-width: 44%;
  text-align: center;
`

export const Time = styled.span`
  font-size: ${rem(14)};
  color: ${Colors.grey.tint400};
  font-weight: ${FontWheight[500]};
`

export const Description = styled.span`
  font-size: ${rem(14)};
  color: ${Colors.grey.tint400};
  font-weight: ${FontWheight[500]};
`

export const Contrast = styled.h1<CardActivitieProps>`
  font-size: ${rem(18)};
  color: ${Colors.grey.tint400};
  font-weight: ${FontWheight[600]};
  margin-top: 4px;

  ${({ min, type }) =>
    !min &&
    css`
      color: ${!!type ? Colors.base[type] : Colors.grey.tint400};
    `};
`
