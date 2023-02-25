import { makeStyles } from '@material-ui/core';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

import { NavButtonProps } from '../../types/navButton';

export const NavButton = styled(Button)<NavButtonProps>({
  color: 'inherit',
  marginRight: '10px',
});

export const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  button: {
    color: '#fff',
    marginRight: theme.spacing(1),
  },
}));
