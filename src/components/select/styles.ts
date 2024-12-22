import styled from '@emotion/styled';
import { Select } from 'antd';
import { colors, transitions } from '@styles/styleConstants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const EmptyContent = styled('span')`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: 400;
  color: ${colors.labelText};
`;

export const SelectWrapper = styled('div')`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const StyledSelect = styled(Select)`
  min-height: 40px;
  min-width: 200px;

  & .ant-select-selector {
    border-radius: 4px;

    & .ant-select-prefix {
      margin-inline-end: 8px;
    }
  }

  & .ant-select-selection-wrap {
    font-weight: 500;
  }

  & .ant-select-selection-wrap::after {
    padding-inline-end: 8px;
  }

  & input {
    font-weight: 500;
  }

  &.ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector {
    border-color: ${colors.lightGray};
  }
`;

export const SelectSuffix = styled(FontAwesomeIcon, {
  shouldForwardProp: (prop) => !['isSelectOpen'].includes(prop),
})<{ isSelectOpen: boolean }>`
  transform: ${(props) => (props.isSelectOpen ? 'scaleY(-1)' : 'scaleY(1)')};
  transition: ${transitions.fastTransition};
`;
