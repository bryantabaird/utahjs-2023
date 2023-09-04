import { useState } from "react";
import { useTranslation } from "react-i18next";

const options: Intl.NumberFormatOptions = {
  style: "currency",
  minimumFractionDigits: 2,
  currencySign: "accounting",
};

const Pricing = () => {
  const { t, i18n } = useTranslation();
  const price = -199.99;
  const [currency, setCurrency] = useState("USD");
  const lang = i18n.language;

  return (
    <section>
      <h3>{t("price")}</h3>
      <p>
        {new Intl.NumberFormat(lang, { ...options, currency }).format(price)}
      </p>
      <button onClick={() => setCurrency("USD")}>USD</button>
      <button onClick={() => setCurrency("GBP")}>GBP</button>
    </section>
  );
};

export default Pricing;
