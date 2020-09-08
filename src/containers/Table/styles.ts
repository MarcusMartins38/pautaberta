import styled from 'styled-components'
import {
  Menu as MenuANTD,
  Dropdown as DropdownANTD,
  Tooltip as TooltipANTD,
  Pagination as PaginationANTD,
} from 'antd'
import { rem } from 'polished'
import { Colors, FontWheight, theme } from 'styles'
import { TdProps, LabelProps } from './types'

export const Table = styled.table`
  width: 100%;
  background-color: ${Colors.base.white};
  padding: 20px;
  border-radius: 8px;
  table-layout: auto;
  margin-top: 20px;
  box-shadow: 0 0px 7px 0 ${theme.boxShadow};
`

export const TableHeader = styled.thead`
  border-bottom: 1px solid ${Colors.grey.tint200};
`

export const TableHeaderTr = styled.tr``

export const TableHeaderTh = styled.th<TdProps>`
  width: ${({ last }) => (last ? '10px' : '100px')};
  padding: 20px;
  font-size: ${rem(16)};
  color: ${Colors.grey.tint300};
  font-weight: ${FontWheight[600]};
  text-align: ${({ textAlign }) => (!!textAlign ? textAlign : 'start')};
`

export const TableBody = styled.tbody``

export const TableBodyTr = styled.tr`
  border-bottom: 1px solid ${Colors.grey.tint200};
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: ${Colors.space.tint100};
    cursor: pointer;
  }
`

export const TableBodyTd = styled.td<TdProps>`
  padding: 20px;
  font-size: ${rem(16)};
  color: ${Colors.grey.tint400};
  font-weight: ${FontWheight[600]};
  text-align: ${({ textAlign }) => (!!textAlign ? textAlign : 'start')};
  text-align: ${({ textAlign }) =>
    !!textAlign ? `-webkit-${textAlign}` : '-webkit-start'};
`

export const Title = styled.td`
  font-size: ${rem(16)};
  color: ${Colors.grey.tint400};
  font-weight: ${FontWheight[600]};
`

export const Description = styled.span`
  font-size: ${rem(14)};
  color: ${Colors.grey.tint300};
  font-weight: ${FontWheight[500]};
`

export const Label = styled.div<LabelProps>`
  width: min-content;
  padding: 3px 10px;
  background-color: ${({ type, backgroundType }) =>
    backgroundType ? (!!type ? Colors.base[type] : Colors.base.info) : 'none'};
  /* color: ${Colors.base.white}; */
  color: ${({ type, backgroundType }) =>
    backgroundType
      ? Colors.base.white
      : !!type
      ? Colors.base[type]
      : Colors.base.info};

  font-size: ${rem(14)};
  font-weight: ${FontWheight[700]};
  border-radius: 8px;
  text-transform: uppercase;
`

export const TableFooter = styled.tfoot``

export const TableFooterTr = styled.tr``

export const TableFooterTd = styled.td.attrs(() => ({
  colSpan: 6,
}))`
  text-align: end;
  padding: 20px;
`

export const Menu = styled(MenuANTD)`
  padding: 0 !important;
  border-radius: 8px !important;

  .ant-dropdown-menu-item:hover {
    color: ${theme.secondaryLight};
  }

  .ant-dropdown-menu-item:first-child:hover {
    border-top-left-radius: 8px !important;
    border-top-right-radius: 8px !important;
  }

  .ant-dropdown-menu-item:last-child:hover {
    border-bottom-left-radius: 8px !important;
    border-bottom-right-radius: 8px !important;
  }
`

export const MenuItem = styled(MenuANTD.Item)`
  display: flex;
`

export const Dropdown = styled(DropdownANTD)`
  cursor: pointer;
`

export const Tooltip = styled(TooltipANTD)``

export const Pagination = styled(PaginationANTD)`
  input {
    border-radius: 8px;
  }
`
