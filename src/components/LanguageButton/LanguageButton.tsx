import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

type Props = {
  language: string,
  children: string,
};

export const LanguageButton: React.FC<Props> = ({ language, children }) => {
  const { i18n } = useTranslation();

  const handleChangeLanguages = () => {
    i18n.changeLanguage(language);
  };

  return (
    <Button
      sx={{ mr: '1rem' }}
      color="secondary"
      variant={
        i18n.language === language
          ? 'contained'
          : 'outlined'
      }
      onClick={handleChangeLanguages}
    >
      {children}
    </Button>
  );
};
