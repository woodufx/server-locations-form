import styled from '@emotion/styled';
import { Input } from 'antd';
import { colors } from '@styles/styleConstants';

export const InputWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const StyledInput = styled(Input)`
  border-radius: 4px;
  min-height: 40px;
  border-color: ${colors.lightGray};
  color: ${colors.labelText};
  font-size: 14px;

  & .ant-input-prefix {
    margin-inline-end: 8px;
  }

  & .ant-input {
    font-weight: 500;
  }
`;
