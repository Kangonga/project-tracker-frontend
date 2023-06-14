import { styled } from '@mui/material';

export const InputBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '1rem',
  width: '100%',
  '.icon': {
    color: '#4747E3',
  },
  '.input': {
    color: 'black',
    width: '100%',
  },
}));
