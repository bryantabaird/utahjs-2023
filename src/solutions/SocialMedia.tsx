import { useTranslation } from "react-i18next";

const options: Intl.NumberFormatOptions = {
  notation: "compact",
  compactDisplay: "short",
  maximumFractionDigits: 1,
  minimumFractionDigits: 1,
};

const SocialMedia = () => {
  const { t, i18n } = useTranslation();
  const likes = 123_456_789;
  const locale = i18n.language;

  return (
    <section>
      <h3>{t("likes")}</h3>
      <p>{new Intl.NumberFormat(locale, options).format(likes)}</p>
    </section>
  );
};

export default SocialMedia;
