import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { StyledIconButton } from './styles';
import { colors } from '@styles/styleConstants';

interface Props {
  icon: IconProp;
  color?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const IconButton = ({ icon, color = colors.mainBlue, isDisabled, onClick }: Props) => {
  const handleClick = () => {
    if (isDisabled) return;
    onClick?.();
  };

  return (
    <StyledIconButton placeholder='Кнопка' disabled={isDisabled} onClick={handleClick}>
      <FontAwesomeIcon icon={icon} size='2x' color={color} />
    </StyledIconButton>
  );
};
