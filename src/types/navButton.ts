import { ButtonProps } from '@mui/material/Button';
import { Link } from 'react-router-dom';

export interface NavButtonProps extends ButtonProps {
  component?: typeof Link;
  to?: string;
}
