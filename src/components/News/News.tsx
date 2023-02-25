import { Button, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { NewsCard } from './style';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteNews } from '../../features/newsSlice';

export const News = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { news } = useAppSelector(state => state.news);

  const handleDelete = (id: number) => {
    dispatch(deleteNews(id));
  };

  return (
    <Grid
      sx={{ pt: '2rem', pb: '3rem' }}
      container
      spacing={3}
      alignItems="stretch"
    >
      {news.map((item) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={item.id}
        >
          <NewsCard>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body1">{item.body}</Typography>
            <Button
              sx={{ mt: 'auto', color: 'coral' }}
              color="secondary"
              onClick={() => handleDelete(item.id)}
            >
              {t('news.deleteButton')}
            </Button>
          </NewsCard>
        </Grid>
      ))}
    </Grid>
  );
};
