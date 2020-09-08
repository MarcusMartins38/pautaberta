import styled from 'styled-components'
import { rem } from 'polished'
import { Colors, FontWheight, theme } from 'styles'

import { LabelProps } from '@containers/Table/types'

export const Container = styled.div`
  background-color: ${Colors.base.white};
  border-radius: 8px;
  padding: 60px;
  border: 1px solid ${Colors.grey.tint200};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Title = styled.span`
  font-size: ${rem(18)};
  color: ${Colors.grey.tint500};
  font-weight: ${FontWheight[700]};
`

export const Description = styled.span`
  font-size: ${rem(22)};
  color: ${Colors.grey.tint400};
  font-weight: ${FontWheight[700]};
`

export const Label = styled.div<LabelProps>`
  width: min-content;
  padding: 3px 10px;
  background-color: ${({ type }) =>
    !!type ? Colors.base[type] : Colors.base.info};
  color: ${Colors.base.white};
  font-size: ${rem(14)};
  font-weight: ${FontWheight[600]};
  border-radius: 8px;
  text-transform: uppercase;
`

export const Activities = styled.div`
  margin: 12px 0;
  height: 224px;
  overflow: auto;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SeeAll = styled.span`
  font-size: ${rem(14)};
  color: ${theme.secondaryLight};
  font-weight: ${FontWheight[700]};
`

export const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;

  border-radius: 8px;
  border: 1px solid ${Colors.grey.tint200};
`

export const Center = styled.div`
  flex: 1;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  background: ${Colors.white};
  gap: 20px;

  #first_bigger {
    min-width: 60%;
    margin-right: 15px;
  }
`
export const Footer = styled.div`
  flex: 1;
  margin-top: 20px;

  display: flex;
  flex-direction: column;

  background: ${Colors.white};
  gap: 20px;
`

export const ActivitiesDivContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  .style_only_container {
    margin-right: 20px;
    max-width: 33%;

    &:last-child {
      max-width: none;
      min-width: 39%;
      margin-right: 0;
    }
  }
`

export const Button = styled.button`
  width: 100%;
  height: 60px;
  font-size: ${rem(14)};
  color: ${({ back }: { back?: boolean }) =>
    back ? theme.secondaryLight : Colors.base.white};
  font-weight: ${FontWheight[700]};
  border: 0;
  outline: none;
  background-color: ${({ back }: { back?: boolean }) =>
    back ? Colors.base.white : theme.secondaryLight};
  border: ${({ back }: { back?: boolean }) =>
    back ? `1px solid ${Colors.grey.tint100}` : 'none'};
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: ${({ back }: { back?: boolean }) =>
      back ? theme.secondaryLight : theme.secondaryHover};
    color: ${({ back }: { back?: boolean }) => back && Colors.base.white};
  }
`
