import { useTranslation } from "react-i18next";

const dateTimeOptions: Intl.DateTimeFormatOptions = {
  year: "2-digit",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  weekday: "long",
  hour12: true,
};

const DateTime = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const now = new Date();

  return (
    <section>
      <h3>{t("date")}</h3>
      <p>{new Intl.DateTimeFormat(locale, dateTimeOptions).format(now)}</p>
    </section>
  );
};

export default DateTime;
