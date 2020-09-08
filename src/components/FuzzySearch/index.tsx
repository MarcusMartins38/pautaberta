import { LawSuitAttributesGeneric } from '@services/lawsuit/types'
import React, { FC } from 'react'
import FuzzyHighlighter, { Highlighter } from 'react-fuzzy-highlighter'

import { List, Item } from './styles'

export interface FuzzySearchProps {
  type: string
  data: LawSuitAttributesGeneric[] | undefined
  query: string
  setValue: any
  focus: string
  setFocus: any
  withoutAdd?: boolean
}

export const FuzzySearch: FC<FuzzySearchProps> = ({
  type,
  data,
  query,
  setValue,
  focus,
  setFocus,
  withoutAdd = true,
}) => {
  const setState = (value: string) => {
    setValue((prevState: any) => {
      return {
        ...prevState,
        [type]: value,
      }
    })
    setFocus('')
  }

  return (
    <FuzzyHighlighter
      query={query}
      data={data || []}
      options={{
        shouldSort: true,
        includeMatches: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['name'],
      }}
    >
      {({ formattedResults }) => {
        return (
          <List isOpen={query?.length > 0 && focus === type}>
            {formattedResults.map((formattedResult, index) => (
              <Item
                key={index}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                onClick={() => setState(formattedResult.item.name)}
              >
                <Highlighter text={formattedResult.formatted.name || ''} />
              </Item>
            ))}
            {withoutAdd && (
              <Item
                key={999}
                onClick={() => setState(query)}
              >{`Adicionar novo ${query}`}</Item>
            )}
          </List>
        )
      }}
    </FuzzyHighlighter>
  )
}
