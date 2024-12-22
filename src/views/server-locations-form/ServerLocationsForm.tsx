import { observer } from 'mobx-react-lite';
import { storeContext } from '@/store';
import { useContext, useEffect, useRef } from 'react';
import { LocationFormItem } from './components/LocationFormItem';
import { CustomButton } from '@components/button/CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import { ButtonsWrapper, ServerLocationsFormWrapper } from './styles';
import { Preloader } from './components/Preloader';

export const ServerLocationsForm = observer(() => {
  const store = useContext(storeContext);

  const elementRef = useRef<HTMLDivElement | null>(null);

  const maxTestLocationsLength = store.locations.length * store.envs.length;

  const handleAddLocation = async () => {
    await store.addEmptyLocation();

    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSaveData = () => {
    const logData = Object.values(store.testLocations).map((test) => ({
      locationId: test.location.locationID ?? '',
      envId: test.environment.envID ?? '',
      hint: test.hint ?? '',
    }));

    console.log(logData);
  };

  useEffect(() => {
    if (!store.isLoaded) {
      store.fetchData();
    }
  }, [store]);

  if (!store.isLoaded) {
    return <Preloader />;
  }

  return (
    <ServerLocationsFormWrapper>
      {Object.values(store.testLocations).map((location, index) => (
        <LocationFormItem
          key={location.id}
          index={index}
          id={location.id}
          ref={index === Object.values(store.testLocations).length - 1 ? elementRef : undefined}
        />
      ))}
      <ButtonsWrapper>
        <CustomButton
          variant='solid'
          icon={<FontAwesomeIcon icon={faSave} size='2x' />}
          onClick={handleSaveData}
        >
          Сохранить данные
        </CustomButton>
        <CustomButton
          variant='outlined'
          icon={<FontAwesomeIcon icon={faPlus} size='2x' />}
          disabled={Object.values(store.testLocations).length >= maxTestLocationsLength}
          onClick={handleAddLocation}
        >
          Добавить тестовую локацию
        </CustomButton>
      </ButtonsWrapper>
    </ServerLocationsFormWrapper>
  );
});
