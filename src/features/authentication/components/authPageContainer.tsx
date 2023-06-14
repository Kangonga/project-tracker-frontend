import { images } from '@app/assets';
import { styled } from '@mui/material';

// eslint-disable-next-line no-empty-pattern
export const AuthPageContainer = styled('div')(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: `url(${images.trianglesBG})`,
  backgroundPosition: 'center',
  backgroundSize: '100dvw 100dvh',
  width: '100dvw',
  height: '100dvh',
}));
