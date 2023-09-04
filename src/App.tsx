import React, { useEffect, useState } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from 'i18next';
import DateTime from './components/DateTime';
import Pricing from './components/Pricing';
import SocialMedia from './components/SocialMedia';
import RelativeTime from './components/RelativeTime';
import ListFormat from './components/ListFormat';
import initializeI18n from './i18n/initializeI18n';

function App() {
  const [instances, setInstances] = useState<(typeof i18n)[]>([]);

  useEffect(() => {
    async function initialize() {
      const instances = await Promise.all([
        await initializeI18n('en'),
        await initializeI18n('es'),
        await initializeI18n('fr'),
      ]);
      setInstances(instances);
    }

    initialize();
  }, []);

  return (
    <main className="flex bg-slate-800 items-center">
      {instances.map((instance) => (
        <I18nextProvider key={instance.language} i18n={instance}>
          <section className="h-screen flex flex-col w-100 gap-4 p-4 rounded-2xl bg-slate-100 m-4">
            <Title />
            <div className="flex flex-col gap-4">
              <DateTime />
              <Pricing />
              <SocialMedia />
              <RelativeTime />
              <ListFormat />
            </div>
          </section>
        </I18nextProvider>
      ))}
    </main>
  );
}

const Title = () => {
  const { t } = useTranslation();
  return <h2 className="text-3xl font-bold mb-6">{t('welcome')}</h2>;
};

export default App;
