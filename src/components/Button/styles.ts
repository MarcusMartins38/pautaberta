import { darken, rem, rgba, shade, tint } from 'polished'
import styled, { css } from 'styled-components'
import { ifProp, switchProp } from 'styled-tools'
import { Colors } from 'styles'

import { ButtonProps } from '.'

export const Container = styled.button<ButtonProps>`
  align-items: center;
  border-style: solid;
  border-width: 1px;
  color: ${Colors.base.white};
  cursor: pointer;
  display: flex;
  font-weight: bold;
  justify-content: center;
  outline: 0;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.2s ease;

  span {
    display: flex;
  }

  > svg + span {
    margin-left: ${rem(6)};
  }

  > span + svg {
    margin-left: ${rem(6)};
  }

  ${switchProp('size', {
    icon: css`
      padding: ${rem(4)};
    `,
    mini: css`
      font-size: ${rem(12)};
      padding: ${rem(4)} ${rem(8)};
    `,
    small: css`
      font-size: ${rem(14)};
      padding: ${rem(4)} ${rem(12)};
    `,
    medium: css`
      font-size: ${rem(16)};
      padding: ${rem(8)} ${rem(18)};
    `,
    large: css`
      font-size: ${rem(18)};
      padding: ${rem(10)} ${rem(24)};
    `,
  })}

  ${switchProp('shape', {
    square: css`
      border-radius: ${rem(2)};
    `,
    circle: css`
      border-radius: 50%;
    `,
    rounded: css`
      border-radius: ${rem(10)};
    `,
    pill: css`
      border-radius: ${rem(24)};
    `,
  })}

  ${switchProp('variant', {
    primary: css`
      background-color: ${Colors.base.primary.tint700};
      border-color: ${shade(0.2, Colors.base.primary.tint700)};

      &:hover:not(:disabled) {
        background-color: ${tint(0.2, Colors.base.primary.tint700)};
      }

      &:active:not(:disabled) {
        background-color: ${darken(0.05, Colors.base.primary.tint700)};
      }
    `,
    secondary: css`
      background-color: ${Colors.base.secondary.tint700};
      border-color: ${shade(0.2, Colors.base.secondary.tint700)};

      &:hover:not(:disabled) {
        background-color: ${tint(0.2, Colors.base.secondary.tint700)};
      }

      &:active:not(:disabled) {
        background-color: ${darken(0.05, Colors.base.secondary.tint700)};
      }
    `,
    warning: css`
      background-color: ${Colors.yellow.tint700};
      border-color: ${shade(0.2, Colors.yellow.tint700)};
      color: ${Colors.base.white};

      &:hover:not(:disabled) {
        background-color: ${tint(0.2, Colors.yellow.tint700)};
      }

      &:active:not(:disabled) {
        background-color: ${darken(0.05, Colors.yellow.tint700)};
      }
    `,
    info: css`
      background-color: ${Colors.base.info};
      border-color: ${shade(0.2, Colors.base.info)};

      &:hover:not(:disabled) {
        background-color: ${tint(0.2, Colors.base.info)};
      }

      &:active:not(:disabled) {
        background-color: ${darken(0.05, Colors.base.info)};
      }
    `,
    facebook: css`
      background-color: ${Colors.base.facebook};
      border-color: ${shade(0.2, Colors.base.facebook)};

      &:hover:not(:disabled) {
        background-color: ${tint(0.2, Colors.base.facebook)};
      }

      &:active:not(:disabled) {
        background-color: ${darken(0.05, Colors.base.facebook)};
      }
    `,
    ghost: css`
      background-color: ${Colors.space.tint100};
      border-color: ${shade(0.2, Colors.space.tint100)};
      color: ${Colors.space.tint800};

      &:hover:not(:disabled) {
        background-color: ${tint(0.2, Colors.space.tint200)};
      }

      &:active:not(:disabled) {
        background-color: ${darken(0.05, Colors.space.tint200)};
      }
    `,
    link: css`
      background-color: transparent;
      border-color: transparent;
      color: ${Colors.grey.tint300};
      padding: ${rem(8)};

      &:hover:not(:disabled) {
        color: ${tint(0.2, Colors.space.tint800)};
      }

      &:active:not(:disabled) {
        color: ${darken(0.05, Colors.space.tint800)};
      }
    `,
  })}

  &:focus:not(:disabled) {
    box-shadow: 0 0 0 ${rem(4)} ${rgba(Colors.base.black, 0.2)};
  };

  ${ifProp(
    { disabled: true },
    css`
      background-color: ${Colors.space.tint500};
      border-color: ${Colors.space.tint500};
      color: ${Colors.base.white};
      cursor: not-allowed;
    `,
  )}

  ${ifProp(
    'full',
    css`
      width: 100%;
    `,
  )}
`
