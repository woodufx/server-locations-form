import { css } from '@emotion/react';

export const mainFont = css`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const colors = {
  mainBlue: 'rgb(72, 151, 255)',
  basicTextGray: 'rgba(144, 144, 144, 1)',
  lightGray: 'rgba(237, 237, 237, 1)',
  labelText: 'rgba(33, 33, 33, 0.8)',
  white: 'rgba(255, 255, 255, 1)',
  error: 'rgb(255, 46, 10)',
};

export const transitions = {
  mediumTransition: 'all 0.5s ease 0s',
  fastTransition: 'all 0.2s ease 0s',
  lowTransition: 'all 0.8s ease 0s',
};
