import { Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Paper sx={{ p: 3, m: 5 }}>
      <Typography variant="h4" sx={{ pb: 3 }}>
        {t('home.title')}
      </Typography>
      <Typography variant="h6" sx={{ pb: 3 }}>
        {t('home.description')}
      </Typography>
    </Paper>
  );
};
