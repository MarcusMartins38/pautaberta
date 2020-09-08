import { rem } from 'polished'
import {
  Calendar as CalendarANTD,
  Avatar as AvatarANTD,
  Tooltip as TooltipANTD,
} from 'antd'
import styled, { css } from 'styled-components'

import { TypeProcessProps } from '@containers/CardActivity/types'
import { Colors, FontWheight, theme } from 'styles'

export const AllProcess = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: ${Colors.white};
  padding: 20px;
  border: 1px solid ${Colors.grey.tint200};
`

export const Title = styled.span`
  font-size: ${rem(18)};
  color: ${Colors.grey.tint400};
  font-weight: ${FontWheight[700]};
`

export const AllProcessContainer = styled.div`
  gap: 20px;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  background: ${Colors.white};
  border-radius: 8px;
`

export const CardProcess = styled.div<TypeProcessProps>`
  display: flex;
  align-items: center;
  width: 250px;
  justify-content: center;
  padding: 20px 40px 10px;
  border: ${({ type }) =>
    `1px solid ${!!type ? Colors.base[type] : Colors.grey.tint200}`};
  border-radius: 8px;
  flex-direction: column;
`

export const CardProcessTitle = styled.span<TypeProcessProps>`
  font-size: ${rem(16)};
  text-align: center;
  color: ${({ type }) => `${!!type ? Colors.base[type] : Colors.grey.tint300}`};
  font-weight: ${FontWheight[400]};
`

export const CardProcessValue = styled.span<TypeProcessProps>`
  font-size: ${rem(26)};
  color: ${({ type }) => `${!!type ? Colors.base[type] : Colors.base.black}`};
  font-weight: ${FontWheight[700]};
`

export const Center = styled.div`
  flex: 1;
  margin-top: 20px;
  display: flex;
  border-radius: 8px;
  background: ${Colors.white};
  padding: 20px;
  gap: 20px;
  border: 1px solid ${Colors.grey.tint200};
`

export const CalendarContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ActivitiesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Activities = styled.div`
  margin: 12px 0;
  height: 300px;
  overflow: auto;
`

export const Calendar = styled(CalendarANTD)`
  width: 90%;
  .ant-picker-panel {
    .ant-picker-body {
      .ant-picker-content {
        th {
          text-transform: capitalize;
          font-weight: ${FontWheight[700]};
        }
        td {
          min-width: 15px;
        }
      }
    }
  }

  .ant-picker-cell-inner {
    height: 30px;
    min-width: 30px;
  }

  .ant-picker-calendar-date-value {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
    border-radius: 25px;
    font-weight: ${FontWheight[700]};
    background: ${theme.secondaryLight};
    div {
      color: ${Colors.base.white};
    }
  }

  .ant-picker-cell-in-view.ant-picker-cell-today
    .ant-picker-cell-inner::before {
    color: ${Colors.base.white};
    border-radius: 25px;
    border: 1px solid ${theme.secondaryLight};
  }

  .ant-picker-cell:hover:not(.ant-picker-cell-selected):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end):not(.ant-picker-cell-range-hover-start):not(.ant-picker-cell-range-hover-end)
    .ant-picker-cell-inner {
    color: ${Colors.base.white};
    background: ${theme.secondaryLight};
    border-radius: 25px;
  }
`

export const Footer = styled.div`
  flex: 30;
  display: flex;
  gap: 20px;
  margin-top: 20px;
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

export const FooterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: ${Colors.white};
  padding: 20px;
  border: 1px solid ${Colors.grey.tint200};
  position: relative;
  overflow: hidden;
`

export const FooterContent = styled.div`
  height: calc(100% - 88px);
  margin-top: 48px;
  overflow-y: auto;
  position: absolute;
  left: 20px;
  width: calc(100% - 40px);
`
