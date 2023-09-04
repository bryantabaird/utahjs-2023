import React from 'react';
import { useTranslation } from 'react-i18next';

// const longDateTimeOptions: Intl.DateTimeFormatOptions = {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   hour: 'numeric',
//   minute: 'numeric',
//   weekday: 'long',
//   hour12: true,
// };

// const shortDateTimeOptions: Intl.DateTimeFormatOptions = {};

enum Weekday {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

function formatAMPM(date: Date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

const DateTime = () => {
  const { t, i18n } = useTranslation();
  const now = new Date();

  const getLongDate = (date: Date) => {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const amPm = formatAMPM(date);
    return `${Weekday[day]}, ${Month[month]} ${day}, ${year} at ${amPm}`;

    // return new Intl.DateTimeFormat(i18n.language, longDateTimeOptions).format(date);
  };

  const getShortenedDate = (date: Date) => {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${Month[month]} ${day}, ${year}`;

    // return new Intl.DateTimeFormat(i18n.language, shortDateTimeOptions).format(date);
  };

  return (
    <article className="last:border last:border-blue-500 last:rounded last:p-4">
      <h2 className="font-semibold text-xl">Date</h2>
      <ul>
        <li className="text-l mb-2">{getLongDate(now)}</li>
        <li className="text-l mb-2">{getShortenedDate(now)}</li>
      </ul>
    </article>
  );
};

export default DateTime;
