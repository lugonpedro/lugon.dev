import { useTranslation } from "react-i18next";
import { Separator } from "../components/separator";

export function Projects() {
  const { t } = useTranslation();

  const data = [
    "historiaonline",
    "acclivity",
    "menthorize",
    "iape",
    "neverest",
    "espiraledu",
  ];

  return (
    <>
      <Separator />
      <p className="font-semibold">{t("projects.title")}</p>
      <ul>
        {data.map((proj) => (
          <li key={proj}>{t(`projects.${proj}`)}</li>
        ))}
      </ul>
    </>
  );
}
