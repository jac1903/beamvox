import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// This automatically handles the /beamvox/ subpath on GitHub Pages
const basePath = import.meta.env.BASE_URL || '/';

i18n
  .use(Backend)       // Loads translation files from /public/locales/
  .use(LanguageDetector) // Detects browser language or saved preference
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',          // If language not found, use English
    supportedLngs: ['en', 'es'], // Only allow English and Spanish
    detection: {
      order: ['navigator', 'localStorage', 'htmlTag'],
      caches: ['localStorage'], // Remembers the user's choice
    },
    backend: {
      // This points to your JSON files: /beamvox/locales/en/translation.json
      loadPath: `${basePath}locales/{{lng}}/translation.json`,
    },
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
  });

export default i18n;
