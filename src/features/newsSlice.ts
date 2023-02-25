import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { News } from '../types/news';

export interface NewsState {
  news: News[],
  isLoading: {
    initNews: boolean,
    addNews: boolean,
  },
  hasError: boolean,
}

const initialState: NewsState = {
  news: [],
  isLoading: {
    initNews: false,
    addNews: false,
  },
  hasError: false,
};

const fetchNews = async (page = 1) => {
  const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const initNews = createAsyncThunk(
  'news/initNews',
  fetchNews,
);

export const addNews = createAsyncThunk(
  'news/addNews',
  fetchNews,
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    deleteNews(state, action: PayloadAction<number>) {
      state.news = state.news.filter(oneNews => oneNews.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initNews.pending, (state) => {
        state.isLoading.initNews = true;
      })
      .addCase(initNews.fulfilled, (state, action: PayloadAction<News[]>) => {
        state.isLoading.initNews = false;
        state.hasError = false;
        state.news = action.payload;
      })
      .addCase(initNews.rejected, (state) => {
        state.isLoading.initNews = false;
        state.hasError = true;
      })
      .addCase(addNews.pending, (state) => {
        state.isLoading.addNews = true;
      })
      .addCase(addNews.fulfilled, (state, action: PayloadAction<News[]>) => {
        state.isLoading.addNews = false;
        state.hasError = false;
        state.news.push(...action.payload);
      })
      .addCase(addNews.rejected, (state) => {
        state.isLoading.addNews = false;
        state.hasError = true;
      });
  },
});

export const { deleteNews } = newsSlice.actions;
export default newsSlice.reducer;
