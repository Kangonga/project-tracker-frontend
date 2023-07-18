import { styled } from '@mui/material';

export const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#E9CBE9',
  gap: '.5rem',
  padding: '.75rem',
  width: '10rem',
  borderRadius: '10px',
  alignItems: 'flex-start',
  [theme.breakpoints.up('md')]: {
    width: '15rem',
  },
  [theme.breakpoints.down('md')]: {
    width: '10rem',
  },
  [theme.breakpoints.down('sm')]: {
    width: '10rem',
  },

  '.smalltext': {
    fontSize: '.9rem',
    paddingLeft: '.1rem',
    color: '#363036',
  },
  '.bigtext': {
    fontSize: '1.5rem',
    paddingLeft: '.1rem',
  },
}));
