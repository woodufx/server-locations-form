import { CustomLabel } from '../label/CustomLabel';
import { InputWrapper, StyledInput } from './styles';
import { InputProps } from 'antd';

interface Props extends InputProps {
  label?: string;
}

export const CustomInput = ({ label, ...props }: Props) => {
  return (
    <InputWrapper>
      <CustomLabel label={label} />
      <StyledInput {...props} />
    </InputWrapper>
  );
};
