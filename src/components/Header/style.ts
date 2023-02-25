import { Button } from '@mui/material';
import { styled } from '@mui/system';

import { NavButtonProps } from '../../types/navButton';

export const NavButton = styled(Button)<NavButtonProps>({
  color: 'inherit',
  marginRight: '10px',
});
