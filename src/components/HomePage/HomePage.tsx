import { Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Paper sx={{ p: 3, m: 3 }}>
      <Typography variant="h4" sx={{ mb: '1rem' }}>
        {t('home.title')}
      </Typography>
      <Typography variant="h6" sx={{ mb: '1rem' }}>
        {t('home.description')}
      </Typography>
    </Paper>
  );
};
