import { ServerNames, Servers, ServersListWrapper } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { colors } from '@styles/styleConstants';
import { CustomLabel } from '@components/label/CustomLabel';

interface Props {
  servers: string[];
  isServersVisible?: boolean;
}

export const ServersList = ({ servers, isServersVisible = true }: Props) => {
  const getEmptyText = (): string => (isServersVisible ? 'Нет доступных серверов' : '-');

  return (
    <ServersListWrapper>
      <CustomLabel label='Серверы' />
      <Servers>
        <FontAwesomeIcon icon={faServer} size='1x' color={colors.labelText} />
        <ServerNames>{servers.length ? servers.join(', ') : getEmptyText()}</ServerNames>
      </Servers>
    </ServersListWrapper>
  );
};
