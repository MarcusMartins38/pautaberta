import { LawSuitServiceProps } from '@services/lawsuit'

export interface TableProps {
  columns: ColumnProps[]
  data: LawSuitServiceProps[] | undefined
  buttonQuickActions?: boolean
  backgroundType?: boolean
}

export interface ColumnProps {
  key: string
  title: string
}

export interface LabelProps {
  type: string
  backgroundType?: boolean
}

export interface TdProps {
  textAlign?: string
  last?: boolean
}
