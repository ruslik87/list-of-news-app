import { TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { LoginForm, LoginFormContainer } from './style';
import { Page } from '../../types/Page';
import { Storage } from '../../utils/storageService';

export const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isLoginCorrect = (username === 'admin') && (password === '12345');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoginCorrect) {
      Storage.set(username);
      navigate(Page.Profile);
    } else {
      const err = t('form.error');

      setError(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();
    const { name } = e.target;

    setError('');

    switch (name) {
      case 'username':
        setUsername(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  return (
    <LoginFormContainer>
      <LoginForm
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" align="center">
          {t('form.title')}
        </Typography>

        <TextField
          name="username"
          label={t('form.name')}
          variant="outlined"
          autoComplete="on"
          value={username}
          onChange={handleChange}
        />

        <TextField
          name="password"
          label={t('form.password')}
          variant="outlined"
          type="password"
          autoComplete="on"
          value={password}
          onChange={handleChange}
        />

        <Button
          sx={{ width: '100%' }}
          type="submit"
          variant="contained"
          color="primary"
        >
          {t('form.button')}
        </Button>

        {error && (
          <Typography sx={{ color: 'red', textAlign: 'center' }}>
            {error}
          </Typography>
        )}
      </LoginForm>
    </LoginFormContainer>
  );
};
