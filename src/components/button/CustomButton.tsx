import { StyledButton } from './styles';
import { ButtonProps } from 'antd';

export const CustomButton = (props: ButtonProps) => {
  return <StyledButton color='primary' {...props} />;
};
