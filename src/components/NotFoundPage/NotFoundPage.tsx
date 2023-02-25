import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { NotFoundPageContainer } from './style';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <NotFoundPageContainer>
      <Typography
        variant="h2"
        component="h2"
        color="coral"
        align="center"
      >
        404
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        align="center"
      >
        {t('pageNotFound')}
      </Typography>
    </NotFoundPageContainer>
  );
};
