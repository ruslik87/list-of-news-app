import {
  Button, Typography, CircularProgress, Box,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { initNews, addNews } from '../../features/newsSlice';
import { Loader } from '../Loader';
import { News } from '../News';

export const NewsPage = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const { isLoading, hasError } = useAppSelector(state => state.news);

  useEffect(() => {
    if (page === 1) {
      dispatch(initNews());

      return;
    }

    dispatch(addNews(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" gutterBottom>
        {t('news.title')}
      </Typography>

      {isLoading.initNews ? (
        <Loader />
      ) : (
        <>
          <News />

          {hasError ? (
            <Typography
              variant="h5"
              align="center"
              color="error"
            >
              {t('error')}
            </Typography>
          ) : (
            <Button
              sx={{ width: '12rem' }}
              variant="contained"
              color="primary"
              onClick={handleLoadMore}
              disabled={isLoading.addNews}
            >
              {isLoading.addNews ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                t('news.downloadButton')
              )}
            </Button>
          )}
        </>
      )}
    </Box>
  );
};
