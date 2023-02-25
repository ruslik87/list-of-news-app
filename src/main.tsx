import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  HashRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';

import { App } from './App';
import { store } from './app/store';
import { HomePage } from './components/HomePage';
import { Login } from './components/Login';
import { NewsPage } from './components/NewsPage';
import { NotFoundPage } from './components/NotFoundPage';
import { ProfilePage } from './components/ProfilePage';
import { Page } from './types/Page';

import './utils/i18n/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path={Page.Home} element={<App />}>
            <Route path="home" element={<Navigate to={Page.Home} replace />} />
            <Route path={Page.Home} element={<HomePage />} />
            <Route path={Page.News} element={<NewsPage />} />
            <Route path={Page.Profile} element={<ProfilePage />} />
            <Route path={Page.Login} element={<Login />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </Suspense>,
);
