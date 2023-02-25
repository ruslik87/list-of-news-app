import { AppBar, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { NavButton } from './style';
import { Page } from '../../types/Page';
import { Storage } from '../../utils/storageService';
import { LanguageSelector } from '../LanguageSelector';

export const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isAuthenticated = Storage.get();

  const handleLogout = () => {
    Storage.clear();
    navigate(Page.Home);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h5"
          sx={{ flexGrow: '1' }}
        >
          {t('appTitle')}
        </Typography>

        <NavButton
          component={RouterLink}
          to={Page.Home}
        >
          {t('home.linkTitle')}
        </NavButton>

        <NavButton
          component={RouterLink}
          to={Page.News}
        >
          {t('news.linkTitle')}
        </NavButton>

        {isAuthenticated && (
          <>
            <NavButton
              component={RouterLink}
              to={Page.Profile}
            >
              {t('profile.linkTitle')}
            </NavButton>

            <NavButton
              onClick={handleLogout}
            >
              {t('logout')}
            </NavButton>
          </>
        )}

        {!isAuthenticated && (
          <NavButton
            component={RouterLink}
            to={Page.Login}
          >
            {t('login')}
          </NavButton>
        )}
        <LanguageSelector />
      </Toolbar>
    </AppBar>
  );
};
