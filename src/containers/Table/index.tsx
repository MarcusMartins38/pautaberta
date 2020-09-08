import React, { FC, useEffect, useState, FormEvent } from 'react'
import moment from 'moment'
import { GiMoneyStack } from 'react-icons/gi'
import {
  RiCalendarCheckLine,
  RiHandCoinLine,
  RiMore2Fill,
} from 'react-icons/ri'

import { LawSuitService, LawSuitServiceProps } from '@services/lawsuit'

import { TableProps } from './types'

import { Colors, theme } from 'styles'

import {
  Table,
  TableBody,
  TableBodyTd,
  TableBodyTr,
  TableHeader,
  TableHeaderTh,
  TableHeaderTr,
  Title,
  Description,
  Label,
  TableFooter,
  TableFooterTr,
  TableFooterTd,
  Menu,
  MenuItem,
  Dropdown,
  Tooltip,
  Pagination,
} from './styles'
import { useHistory } from 'react-router-dom'
import api from '@services/api'

export const TableContainer: FC<TableProps> = ({
  backgroundType = true,
  buttonQuickActions = true,
  columns,
  data = [],
  ...props
}) => {
  const history = useHistory()

  function getFromNow(date: string) {
    return `Atualizado ${moment(date).fromNow()}`
  }

  function getDate(date: string) {
    return moment(date).format('DD/MM/YYYY')
  }

  function getHours(date: string) {
    return moment(date).format('hh:mm A')
  }

  function handleRow(id: number) {
    history.push(`/processos/${id}`)
  }

  function handleQuickActions(id: number, key: number, e: FormEvent) {
    e.stopPropagation()

    switch (key) {
      case 1:
        history.push(`/processos/${id}/costs`)
        break
      case 2:
        history.push(`/processos/${id}/deadlines`)
        break
      case 3:
        history.push(`/processos/${id}/fees`)
        break
    }
  }

  const menu = (
    <Menu>
      <MenuItem key="1">
        <GiMoneyStack size={20} style={{ marginRight: 10 }} />
        Custas do Processo
      </MenuItem>
      <MenuItem key="2">
        <RiCalendarCheckLine size={20} style={{ marginRight: 10 }} />
        Prazos do processo
      </MenuItem>
      <MenuItem key="3">
        <RiHandCoinLine size={20} style={{ marginRight: 10 }} />
        Honorários
      </MenuItem>
    </Menu>
  )

  return (
    <>
      <Table {...props}>
        <TableHeader>
          <TableHeaderTr>
            {columns?.map((column) => (
              <TableHeaderTh
                textAlign={column.key === 'label' ? 'center' : 'start'}
                key={column.key}
              >
                {column.title}
              </TableHeaderTh>
            ))}
            {buttonQuickActions && (
              <TableHeaderTh textAlign="center">Ações Rápidas</TableHeaderTh>
            )}
            <TableHeaderTh key="last" last></TableHeaderTh>
          </TableHeaderTr>
        </TableHeader>

        <TableBody>
          {data.map((row) => (
            <TableBodyTr key={row.id} onClick={() => handleRow(row.id)}>
              <TableBodyTd>
                <Title>{row.process_number}</Title>
                <Description>{getFromNow(row.distribution)}</Description>
              </TableBodyTd>
              <TableBodyTd>{row.client.name}</TableBodyTd>

              <TableBodyTd>
                <Title>{getDate(row.created_at)}</Title>
                <Description>{getHours(row.created_at)}</Description>
              </TableBodyTd>

              <TableBodyTd textAlign={backgroundType ? 'center' : ''}>
                <Label
                  type={row.label?.key ?? 'info'}
                  backgroundType={backgroundType}
                >
                  {row.label?.name ?? 'info'}
                </Label>
              </TableBodyTd>

              {buttonQuickActions && (
                <TableBodyTd textAlign="center">
                  <Tooltip title="Custas" color={theme.secondaryLight}>
                    <GiMoneyStack
                      size={20}
                      style={{ margin: '0 3px' }}
                      onClick={(e) => handleQuickActions(row.id, 1, e)}
                    />
                  </Tooltip>
                  <Tooltip title="Prazos" color={theme.secondaryLight}>
                    <RiCalendarCheckLine
                      size={20}
                      style={{ margin: '0 3px' }}
                      onClick={(e) => handleQuickActions(row.id, 2, e)}
                    />
                  </Tooltip>
                  <Tooltip title="Honorários" color={theme.secondaryLight}>
                    <RiHandCoinLine
                      size={20}
                      style={{ margin: '0 3px' }}
                      onClick={(e) => handleQuickActions(row.id, 3, e)}
                    />
                  </Tooltip>
                </TableBodyTd>
              )}

              <TableBodyTd textAlign="end">
                <Dropdown overlay={menu}>
                  <RiMore2Fill size={20} />
                </Dropdown>
              </TableBodyTd>
            </TableBodyTr>
          ))}
        </TableBody>
        <TableFooter>
          <TableBodyTr>
            <TableFooterTd>
              <Pagination simple defaultCurrent={1} total={500} />
            </TableFooterTd>
          </TableBodyTr>
        </TableFooter>
      </Table>
    </>
  )
}
