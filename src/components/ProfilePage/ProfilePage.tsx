import { Typography, Paper, Button } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Page } from '../../types/Page';
import { Storage } from '../../utils/storageService';

export const ProfilePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isAuthenticated = Storage.get();

  useEffect(() => {
    if (isAuthenticated) {
      return;
    }

    navigate(Page.Home);
  }, []);

  const handleLogout = () => {
    Storage.clear();
    navigate(Page.Home);
  };

  return (
    <Paper sx={{ p: 3, m: 5 }}>
      <Typography variant="h4" gutterBottom>
        {t('profile.title')}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {t('profile.name')}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {t('profile.email')}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {t('profile.role')}
      </Typography>
      <Button
        sx={{ mt: '3rem' }}
        variant="contained"
        color="secondary"
        onClick={handleLogout}
      >
        {t('profile.logout')}
      </Button>
    </Paper>
  );
};
