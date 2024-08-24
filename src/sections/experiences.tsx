import { useTranslation } from "react-i18next";
import { Separator } from "../components/separator";

export function Experiences() {
  const { t } = useTranslation();

  const data = ["embala", "openport", "23games", "akasoft"];

  return (
    <>
      <Separator />
      <p className="font-semibold">{t("experiences.title")}</p>
      <ul>
        {data.map((exp) => (
          <li key={exp}>{t(`experiences.${exp}.position`)}</li>
        ))}
      </ul>
    </>
  );
}
