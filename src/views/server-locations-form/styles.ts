import styled from '@emotion/styled';

export const ServerLocationsFormWrapper = styled('div')`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
`;

export const ButtonsWrapper = styled('div')`
  width: 100%;
  padding-block: 8px 32px;
  display: flex;
  gap: 8px 32px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

export const ButtonWrapper = styled('div')`
  width: 100%;
`;
