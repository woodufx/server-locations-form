import { Global, css } from '@emotion/react';
import { mainFont } from './styleConstants';

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none !important;
          margin: 0;
        }

        input[type='number'] {
          -moz-appearance: textfield !important;
        }
      }

      body,
      button {
        margin: 0;
        padding: 0;
        ${mainFont};
      }
    `}
  />
);
