import { forwardRef, useContext, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { DefaultOptionType } from 'antd/es/select';
import {
  FormItemHeader,
  FormItemTitle,
  FormItemTitleWrapper,
  FromItemLine,
  LocationFormItemWrapper,
} from './styles';
import { colors } from '@styles/styleConstants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faLocation, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faEnvira } from '@fortawesome/free-brands-svg-icons';
import { CustomSelect } from '@components/select/CustomSelect';
import { ServersList } from './ServersList';
import { CustomInput } from '@components/input/CustomInput';
import { IconButton } from '@components/button/IconButton';
import { storeContext } from '@/store';

interface Props {
  index: number;
  id: string;
}

export const LocationFormItem = observer(
  forwardRef<HTMLDivElement, Props>(({ index, id }, ref) => {
    const store = useContext(storeContext);

    const locationOptions: DefaultOptionType[] = useMemo(() => {
      //Создаем Map, где ключ - айди location, значение - количество уже выбранных сред
      const locationsMap = Object.values(store.testLocations).reduce((map, testLocation) => {
        const locationID = testLocation.location?.locationID;
        const envID = testLocation.environment?.envID;
        if (!!locationID && !!envID) {
          map.set(locationID, (map.get(locationID) || 0) + 1);
        }
        return map;
      }, new Map<number, number>());

      return store.locations
        .filter((location) => locationsMap.get(location.locationID) !== store.envs.length)
        .map((location) => ({
          label: location.name,
          value: location.locationID,
        }));
    }, [store.locations, store.envs, toJS(store.testLocations)]);

    const envOptions: DefaultOptionType[] = useMemo(() => {
      const currentTestLocation = store.testLocations[id];
      const selectedEnvIdsForCurrentLocation = new Set(
        Object.values(store.testLocations)
          .filter(
            (testLocation) =>
              testLocation.location.locationID === currentTestLocation.location.locationID,
          )
          .map((testLocation) => testLocation.environment?.envID),
      );

      return store.envs
        .filter((env) => !selectedEnvIdsForCurrentLocation.has(env.envID))
        .map((env) => ({ label: env.name, value: env.envID }));
    }, [store.envs, store.locations, toJS(store.testLocations)]);

    const availableServers: string[] = useMemo(() => {
      const testLocation = store.testLocations[id];
      return store.servers
        .filter(
          (server) =>
            server.envID === testLocation?.environment?.envID &&
            server.locationID === testLocation?.location.locationID,
        )
        .map((server) => server.name);
    }, [id, store.servers, toJS(store.testLocations)]);

    const handleSelectLocation = (locationID: number) => {
      store.setTestLocationLocation(id, { locationID, name: '' });
    };

    const handleSelectEnv = (option: DefaultOptionType) => {
      if (option.value)
        store.setTestLocationEnv(id, { envID: +option.value, name: option.label as string });
    };

    const handleChangeHint = (value: string) => {
      store.setTestLocationHint(id, value);
    };

    const handleDeleteLocation = () => {
      store.deleteTestLocation(id);
    };

    return (
      <LocationFormItemWrapper ref={ref}>
        <FormItemHeader>
          <FormItemTitleWrapper>
            <FontAwesomeIcon icon={faLocation} size='lg' color={colors.labelText} />
            <FormItemTitle>{`Тестовая локация ${index + 1}`}</FormItemTitle>
          </FormItemTitleWrapper>
          <IconButton
            icon={faTrashCan}
            color={colors.error}
            isDisabled={Object.values(store.testLocations).length <= 1}
            onClick={handleDeleteLocation}
          />
        </FormItemHeader>
        <FromItemLine>
          <CustomSelect
            placeholder='Локация'
            prefix={<FontAwesomeIcon icon={faLocationDot} size='1x' color={colors.labelText} />}
            onChange={handleSelectLocation}
            options={locationOptions}
          />
          <CustomSelect
            placeholder='Среда'
            prefix={<FontAwesomeIcon icon={faEnvira} size='1x' color={colors.labelText} />}
            options={envOptions}
            value={store.testLocations[id]?.environment.name}
            disabled={!store.testLocations[id]?.location.locationID}
            labelInValue
            onChange={handleSelectEnv}
          />
          <ServersList
            servers={availableServers}
            isServersVisible={
              !!store.testLocations[id].environment.envID &&
              !!store.testLocations[id].location.locationID
            }
          />
        </FromItemLine>
        <FromItemLine>
          <CustomInput
            label='Подсказка'
            placeholder='Комментарий по локации'
            prefix={<FontAwesomeIcon icon={faQuestion} size='1x' color={colors.labelText} />}
            onBlur={(e) => handleChangeHint(e.target.value)}
          />
        </FromItemLine>
      </LocationFormItemWrapper>
    );
  }),
);
