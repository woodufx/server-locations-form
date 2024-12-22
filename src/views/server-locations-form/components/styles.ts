import styled from '@emotion/styled';
import { colors, transitions } from '@styles/styleConstants';

export const LocationFormItemWrapper = styled('div')`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 2px solid ${colors.lightGray};
  transition: ${transitions.fastTransition};

  &:hover {
    border-color: ${colors.mainBlue};
  }
`;

export const FromItemLine = styled('div')`
  display: flex;
  gap: 8px 16px;
  align-items: center;
  flex-wrap: wrap;
`;

export const FormItemTitleWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FormItemTitle = styled('h1')`
  color: ${colors.labelText};
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

export const FormItemHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ServersListWrapper = styled('div')`
  min-height: 40px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Servers = styled('div')`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ServerNames = styled('span')`
  color: ${colors.labelText};
  font-size: 14px;
  font-weight: 500;
  margin-top: -2px;
`;

export const PreloaderWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
