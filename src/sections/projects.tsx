import { useTranslation } from "react-i18next";
import { Separator } from "../components/separator";

export function Projects() {
  const { t } = useTranslation();

  const data = ["iape", "neverest", "espiraledu"];

  return (
    <>
      <Separator />
      <h2 className="font-semibold text-2xl">{t("projects.title")}</h2>
      <ul className="flex flex-col gap-4 mt-4">
        {data.map((proj) => (
          <li key={proj}>
            <span className="font-semibold text-xl">{proj}:</span>{" "}
            {t(`projects.${proj}`)}
          </li>
        ))}
      </ul>
    </>
  );
}
