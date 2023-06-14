import { styled } from '@mui/material';

export const LoginForm = styled('form')(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  gap: '.75rem',
  margin: 'auto',
  minHeight: '60vh',
  paddingBottom: '1rem',
  '.header': {
    color: 'blue',
    fontSize: '2rem',
    textAlign: 'center',
  },
  '.forgotPassword': {
    textAlign: 'right',
    fontSize: '.9rem',
    textDecoration: 'underline',
    textDecorationColor: 'lightblue',
    padding: '.5rem',
    '&:hover': {
      cursor: 'pointer',
      color: 'blue',
    },
  },
  '.submit': {
    width: '50%',
    margin: 'auto',
    backgroundColor: 'lightblue',
    color: 'black',
  },
  [theme.breakpoints.up('lg')]: {
    width: '50%',
  },
  [theme.breakpoints.down('lg')]: {
    width: '60%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '90%',
  },
}));
