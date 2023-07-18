import { styled } from '@mui/material';

export const Searchbar = styled('input')(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  borderRadius: '5px',
  gap: '.75rem',
  height: '2.5rem',
  width: '15rem',
  outline: 'thin',
  padding: '.5rem',
  border: 'none',
  fontSize: '1rem',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  '::placeholder': {
    color: 'gray',
  },
}));
