import { styled } from '@mui/material';

export const PersonalDetails = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  justifyContent: 'center',
  color: '#0C0E1E',
  '.names': {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  '.name': {
    fontSize: '1.2rem',
  },
  '.email': {
    fontSize: '1rem',
    color: 'gray',
  },
}));
