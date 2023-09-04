import { createInstance } from 'i18next';
import { resources } from './translations';
import { initReactI18next } from 'react-i18next';

const initializeI18n = async (locale: keyof typeof resources) => {
  const instance = createInstance();
  const temp = { [locale]: resources[locale] };

  instance.use(initReactI18next);

  await instance.init({
    lng: locale,
    resources: temp,
  });
  return instance;
};

export default initializeI18n;
