import { Box, styled } from '@mui/material';

export const LoginFormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '10rem',
});

export const LoginForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '30px',
  width: '390px',
  padding: '3rem',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0px 5px 20px 0px rgba(0,0,0,0.2)',
  '& > *': {
    marginBottom: '2rem',
    width: '100%',
  },
});
