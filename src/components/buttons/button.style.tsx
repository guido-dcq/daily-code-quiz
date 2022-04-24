import { css, SerializedStyles, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { variant } from "styled-system";

export const colorVariants = (
  theme: Theme
): {
  default: SerializedStyles;
  borderless: SerializedStyles;
  primary: SerializedStyles;
  secondary: SerializedStyles;
} => ({
  default: css`
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray[400]};
    &:hover {
      background-color: ${theme.colors.gray[100]};
    }
    &:active {
      background-color: ${theme.colors.gray[100]};
    }
  `,
  borderless: css`
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.white};
    border: 1px solid transparent;
    & * {
      color: ${theme.colors.text.primary};
    }
    &:hover {
      background-color: ${theme.colors.gray[100]};
    }
    &:active {
      background-color: ${theme.colors.gray[100]};
    }
  `,
  primary: css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary.default};
    border: 1px solid transparent;
    color: ${theme.colors.white};
    & * {
      color: ${theme.colors.white};
    }
    svg {
      fill: ${theme.colors.white};
    }
    &:hover {
      background-color: ${theme.colors.primary.dark};
    }
    &:active {
      background-color: ${theme.colors.primary.dark};
    }
  `,
  secondary: css`
    color: ${theme.colors.text.secondary};
    background-color: ${theme.colors.white};
    border: 1px solid transparent;
    & * {
      stroke: ${theme.colors.text.secondary};
    }
    &:hover {
      background-color: ${theme.colors.gray[100]};
    }
    &:active {
      background-color: ${theme.colors.gray[100]};
    }
  `,
});

export const disabledVariants = (
  theme: Theme
): {
  default: SerializedStyles;
  borderless: SerializedStyles;
  primary: SerializedStyles;
  secondary: SerializedStyles;
} => ({
  default: css`
    cursor: default;
    border: 1px solid ${theme.colors.gray[400]};
    background-color: ${theme.colors.gray[100]};
    text-decoration: none;
    color: ${theme.colors.text.secondary};
  `,
  borderless: css`
    cursor: default;
    color: ${theme.colors.text.secondary};
    background-color: ${theme.colors.gray[100]};
    border: 1px solid transparent;
    & * {
      color: ${theme.colors.text.primary};
    }
  `,
  primary: css`
    cursor: default;
    border: 1px ${theme.colors.primary.dark} solid;
    background-color: ${theme.colors.primary.dark};
    color: ${theme.colors.white};
    text-decoration: none;
    svg {
      fill: ${theme.colors.white};
    }
    & * {
      color: ${theme.colors.white};
    }
  `,
  secondary: css`
    cursor: default;
    color: ${theme.colors.text.secondary};
    background-color: ${theme.colors.gray[100]};
    border: 1px solid transparent;
    & * {
      color: ${theme.colors.text.primary};
    }
  `,
});

const sizeVariants = (theme: Theme) => ({
  small: css`
    font-size: ${theme.font.fontSizes.caption};
    svg {
      width: 15px;
      max-height: 15px;
    }
    &.button__default {
      padding: 7px 10px;
    }
    .button__wrapper {
      padding: 7px 10px;
    }
    .button__loader-wrapper {
      margin-top: 1px;
    }
  `,
  normal: css`
    font-size: ${theme.font.fontSizes.body};
    svg {
      width: 16px;
      max-height: 16px;
    }
    &.button__default {
      padding: 9px 25px;
    }
    .button__wrapper {
      padding: 9px 25px;
    }
  `,
  large: css`
    font-size: ${theme.font.fontSizes.h3};
    svg {
      width: 21px;
      max-height: 21px;
    }
    &.button__default {
      padding: 15px 30px;
    }
    .button__wrapper {
      padding: 15px 30px;
    }
  `,
  compact: css`
    font-size: ${theme.font.fontSizes.body};
    svg {
      width: 16px;
      max-height: 16px;
    }
    &.button__default {
      padding: 7px 10px;
    }
    .button__wrapper {
      padding: 7px 10px;
    }
  `,
});

interface ButtonProps {
  size?: "small" | "normal" | "large" | "compact";
  variant?: "default" | "borderless" | "primary" | "secondary";
  disabled: boolean;
}

export const Button = styled.button<ButtonProps>`
  text-decoration: none;
  font-weight: ${({ theme }) => theme.font.fontWeights.semiBold};
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.1s ease;
  cursor: pointer;
  text-align: center;
  align-items: center;
  padding: 13px 20px;

  &.button__default {
    display: flex;
  }

  &.button__loading {
    position: relative;
    display: inline-flex;
    padding: 0;
  }

  .button__wrapper {
    border-radius: 5px;
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .button__icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button__loader-wrapper {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Color variants */
  ${({ theme, disabled }) =>
    disabled
      ? variant({
          variants: disabledVariants(theme),
        })
      : variant({
          variants: colorVariants(theme),
        })}

  /* Size variants */
  ${({ theme }) =>
    variant({
      prop: "size",
      variants: sizeVariants(theme),
    })}

  &:focus {
    outline: 0;
  }

  svg {
    margin-right: 5px;
  }
`;
