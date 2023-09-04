import { useState } from "react";
import { useTranslation } from "react-i18next";

const options: Intl.RelativeTimeFormatOptions = {
  style: "long",
};

const RelativeTime = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const futureDays = 36;
  const pastDays = futureDays * -1;

  const [unit, setUnit] = useState<Intl.RelativeTimeFormatUnit>("days");

  return (
    <section>
      <h3>{t("relative-time")}</h3>
      <p>
        {new Intl.RelativeTimeFormat(locale, options).format(pastDays, unit)}
      </p>
      <p>
        {new Intl.RelativeTimeFormat(locale, options).format(futureDays, unit)}
      </p>
      <button onClick={() => setUnit("days")}>Days</button>
      <button onClick={() => setUnit("hours")}>Hours</button>
      <button onClick={() => setUnit("years")}>Years</button>
    </section>
  );
};

export default RelativeTime;
