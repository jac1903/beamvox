import { useTranslation } from 'react-i18next';
import * as en from './content';
import * as es from './es';

export function useContent() {
  const { i18n } = useTranslation();
  const locale = i18n.language;
  
  // If the current language is Spanish, return the Spanish bundle
  if (locale.startsWith('es')) {
    return es;
  }
  
  // Otherwise return the English bundle
  return en;
}
