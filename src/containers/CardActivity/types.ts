export interface TypeProcessProps {
  type?: string
}

export interface MinProcessProps {
  min?: boolean
}

export interface CardActivityProps extends TypeProcessProps, MinProcessProps {
  title: string
  time?: string
  description?: string
  date?: string
  contrast?: string
}
