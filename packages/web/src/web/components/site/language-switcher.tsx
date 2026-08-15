import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-medium text-ink hover:text-ink-strong transition-colors"
    >
      {i18n.language === 'en' ? '🇪🇸 Español' : '🇬🇧 English'}
    </button>
  );
}
