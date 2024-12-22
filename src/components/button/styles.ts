import styled from '@emotion/styled';
import { Button } from 'antd';
import { transitions } from '../../styles/styleConstants';

export const StyledButton = styled(Button)`
  border-radius: 4px;
  min-height: 40px;
  font-weight: 500;
`;

export const StyledIconButton = styled('button')`
  cursor: pointer;
  border: none;
  background: transparent;
  transition: ${transitions.fastTransition};

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
    filter: grayscale(1);
  }

  &:active svg {
    filter: hue-rotate(20deg);
    opacity: 1;
  }

  &:hover:not(:active) svg {
    opacity: 0.8;
  }

  & svg {
    transition: ${transitions.fastTransition};
  }
`;
