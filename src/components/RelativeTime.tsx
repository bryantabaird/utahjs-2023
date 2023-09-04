import React from 'react';
import { useTranslation } from 'react-i18next';

const narrowOptions: Intl.RelativeTimeFormatOptions = {
  style: 'narrow',
};

const shortOptions: Intl.RelativeTimeFormatOptions = {
  style: 'short',
};

const longOptions: Intl.RelativeTimeFormatOptions = {
  style: 'long',
};

const RelativeTime = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;

  const getNarrowRelativeTime = (days: number) => {
    return `${Math.floor(days / 7)}w ${days % 7}d ago`;
    // return new Intl.RelativeTimeFormat(locale, narrowOptions).format(days, 'day');
  };

  const getShortRelativeTime = (days: number) => {
    return `${Math.floor(days / 7)} weeks and ${days % 7} days ago`;
    // return new Intl.RelativeTimeFormat(locale, shortOptions).format(days, 'day');
  };

  const getLongRelativeTime = (days: number) => {
    return `${Math.floor(days / 7)} weeks and ${days % 7} days ago`;
    // return new Intl.RelativeTimeFormat(locale, longOptions).format(days, 'quarters');
  };

  return (
    <article className="last:border last:border-blue-500 last:rounded last:p-4">
      <h2 className="font-semibold text-xl">{t('relative-time')}</h2>
      <ul>
        <li className="text-l mb-2">{getNarrowRelativeTime(-24)}</li>
        <li className="text-l mb-2">{getShortRelativeTime(0)}</li>
        <li className="text-l mb-2">{getLongRelativeTime(976)}</li>
      </ul>
    </article>
  );
};

export default RelativeTime;
