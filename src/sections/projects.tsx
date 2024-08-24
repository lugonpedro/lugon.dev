import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation();

  return <div>{t("about.text")}</div>;
}
