import { ConfigProvider, SelectProps } from 'antd';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { EmptyContent, SelectSuffix, SelectWrapper, StyledSelect } from './styles';
import { colors } from '../../styles/styleConstants';
import { useState } from 'react';
import { CustomLabel } from '../label/CustomLabel';

const customizeRenderEmpty = () => <EmptyContent>Нет данных</EmptyContent>;

export const CustomSelect = ({ placeholder, ...props }: SelectProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ConfigProvider renderEmpty={customizeRenderEmpty}>
      <SelectWrapper>
        {placeholder && <CustomLabel label={placeholder as string} />}
        <StyledSelect
          suffixIcon={
            <SelectSuffix
              icon={faCaretDown}
              color={colors.labelText}
              isSelectOpen={isDropdownOpen}
              size='lg'
            />
          }
          onDropdownVisibleChange={setDropdownOpen}
          placeholder={'Выберите вариант'}
          {...props}
        />
      </SelectWrapper>
    </ConfigProvider>
  );
};
