import { Language } from '../../types/language';
import { LanguageButton } from '../LanguageButton';

export const LanguageSelector = () => (
  <>
    <LanguageButton language={Language.EN}>
      EN
    </LanguageButton>

    <LanguageButton language={Language.UA}>
      UA
    </LanguageButton>
  </>
);
