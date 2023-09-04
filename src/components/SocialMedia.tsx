import React from 'react';
import { useTranslation } from 'react-i18next';

const options: Intl.NumberFormatOptions = {
  notation: 'compact',
  compactDisplay: 'short',
  maximumFractionDigits: 1,
};

const SocialMedia = () => {
  const { t, i18n } = useTranslation();
  const likes = 12_300_000;
  const locale = i18n.language;

  function nFormatter(num: number, digits: number) {
    const lookup = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'k' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'B' },
      { value: 1e12, symbol: 'T' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    const item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0';

    // return new Intl.NumberFormat(locale, options).format(num);
  }

  return (
    <article className="last:border last:border-blue-500 last:rounded last:p-4">
      <h2 className="font-semibold text-xl">Likes</h2>
      <ul>
        <li className="text-l mb-2">{nFormatter(likes, 2)}</li>
      </ul>
    </article>
  );
};

export default SocialMedia;
