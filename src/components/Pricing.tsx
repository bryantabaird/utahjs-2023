import React from 'react';
import { useTranslation } from 'react-i18next';

const options: Intl.NumberFormatOptions = {
  style: 'currency',
  minimumFractionDigits: 2,
  currencySign: 'accounting',
  useGrouping: false,
};

const accountingOptions: Intl.NumberFormatOptions = {
  style: 'currency',
  minimumFractionDigits: 2,
  currencySign: 'accounting',
};

const Pricing = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const getPrice = (price: number, currency: string) => {
    return `${currency === 'USD' ? '$' : '£'}${price}`;
    // return new Intl.NumberFormat(lang, { ...options, currency }).format(price);
  };

  const getAccountingPrice = (price: number, currency: string) => {
    const getNegativeAccountingPrice = `(${price})`;
    return `${currency === 'USD' ? '$' : '£'}${price > 0 ? price : getNegativeAccountingPrice}`;
    // return new Intl.NumberFormat(lang, { ...accountingOptions, currency }).format(price);
  };

  return (
    <article className="last:border last:border-blue-500 last:rounded last:p-4">
      <h2 className="font-semibold text-xl">Price</h2>
      <ul>
        <li className="text-l mb-2">{getPrice(199.99, 'GDP')}</li>
        <li className="text-l mb-2">{getAccountingPrice(-2499.99, 'USD')}</li>
      </ul>
    </article>
  );
};

export default Pricing;
