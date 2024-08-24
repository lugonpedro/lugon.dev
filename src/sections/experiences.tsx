import { useTranslation } from "react-i18next";

export function Experiences() {
  const { t } = useTranslation();

  return <div>{t("about.text")}</div>;
}
