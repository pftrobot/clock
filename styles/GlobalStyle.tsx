import { css, Global } from '@emotion/react'

export const globalStyles = (
  <Global
    styles={() => css`
      html,
      body,
      body > div {
        height: 100%;
        padding: 0;
        margin: 0;
      }
      body {
        background-color: #201a5f;
      }
      h1,
      p {
        margin: 0;
      }
    `}
  />
)
