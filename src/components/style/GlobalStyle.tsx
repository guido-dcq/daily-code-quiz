import { ReactElement } from "react";
import { css, Global, Theme, useTheme } from "@emotion/react";
import emotionReset from "emotion-reset";
import "@fontsource/raleway/700.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/500.css";

const GlobalStyle = (): ReactElement => {
  const theme: Theme = useTheme();

  return (
    <>
      <Global
        styles={css`
          ${emotionReset}

          html {
            font-size: 14px;
            font-family: ${theme.font.fontFamilyMain};
          }

          #root,
          html,
          body {
            height: 100%;
          }

          body {
            top: 0;
            left: 0;
            position: absolute;
            width: 100%;
            margin: 0;
            line-height: 1.5;
            color: ${theme.colors.text.primary};
          }

          p {
            font-weight: ${theme.font.fontWeights.regular};
            font-size: ${theme.font.fontSizes.body};
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            background: none;
            margin-top: 0;
            margin-bottom: 0.6em;
            font-weight: ${theme.font.fontWeights.bold};
            font-family: ${theme.font.fontFamilySecondary};
            color: ${theme.colors.text.primary};
          }

          h1 {
            font-size: ${theme.font.fontSizes.h1};
          }

          h2 {
            font-size: ${theme.font.fontSizes.h2};
          }

          h3 {
            font-size: ${theme.font.fontSizes.h3};
          }

          h4 {
            font-size: ${theme.font.fontSizes.h4};
          }

          span {
            font-size: ${theme.font.fontSizes.caption};
          }
        `}
      />
    </>
  );
};

export default GlobalStyle;
