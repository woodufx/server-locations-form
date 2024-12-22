import { Spin } from 'antd';
import { PreloaderWrapper } from './styles';

export const Preloader = () => (
  <PreloaderWrapper>
    <Spin size='large' />
  </PreloaderWrapper>
);
