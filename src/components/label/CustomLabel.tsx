import { StyledLabel } from './styles';

interface Props {
  label?: string;
}

export const CustomLabel = ({ label }: Props) => <StyledLabel>{label ?? ''}</StyledLabel>;
