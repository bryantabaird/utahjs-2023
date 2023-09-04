import React from 'react';
import { useTranslation } from 'react-i18next';

const options: Intl.ListFormatOptions = {
  type: 'disjunction',
};

const ListItems = () => {
  const { t, i18n } = useTranslation();
  const items1 = ['dog'];
  const items2 = ['dog', 'cat'];
  const items3 = ['dog', 'cat', 'turtle'];
  const lang = i18n.language;

  const makeList = (items: string[]) => {
    const words = [...items];
    let formattedPhrase = '';
    if (words.length === 0) {
      formattedPhrase = '';
    } else if (words.length === 1) {
      formattedPhrase = words[0];
    } else if (words.length === 2) {
      formattedPhrase = words.join(` and `);
    } else {
      words[words.length - 1] = `and ${words[words.length - 1]}`;
      formattedPhrase = words.join(', ');
    }
    // return formattedPhrase;
    return new Intl.ListFormat(lang, { type: 'conjunction' }).format(items);
  };

  return (
    <article className="last:border last:border-blue-500 last:rounded last:p-4">
      <h2 className="font-semibold text-xl">List Items</h2>
      <ul>
        <li className="text-l mb-2">{makeList(items1)}</li>
        <li className="text-l mb-2">{makeList(items2)}</li>
        <li className="text-l mb-2">{makeList(items3)}</li>
        <li className="text-l mb-2">{makeList(items2)}</li>
        <li className="text-l mb-2">{makeList(items3)}</li>
      </ul>
    </article>
  );
};

export default ListItems;
