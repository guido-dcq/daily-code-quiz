import { ReactElement } from "react";
import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";
import "@fontsource/raleway/700.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/500.css";

const GlobalStyle = (): ReactElement => {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}

          html {
            font-size: 14px;
            font-family: "Inter", sans-serif;
          }

          body {
            top: 0;
            left: 0;
            position: absolute;
            width: 100%;
            margin: 0;
            line-height: 1.5;
            color: #1a202c;
          }

          p {
            font-weight: 300;
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
            font-weight: 700;
            font-family: "Raleway", sans-serif;
            color: #111;
          }

          h1 {
            font-size: 2.29rem;
          }

          h2 {
            font-size: 1.71rem;
          }

          h3 {
            font-size: 1.43rem;
          }

          h4 {
            font-size: 1.28rem;
          }
        `}
      />
    </>
  );
};

export default GlobalStyle;
