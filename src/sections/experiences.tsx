import { useTranslation } from "react-i18next";
import { Separator } from "../components/separator";

export function Experiences() {
  const { t } = useTranslation();

  const data = ["embala", "openport", "23games", "akasoft"];

  return (
    <>
      <Separator />
      <h2 className="font-semibold text-2xl">{t("experiences.title")}</h2>
      <div className="flex flex-col gap-4 mt-4">
        {data.reverse().map((exp) => (
          <div key={exp}>
            <h6 className="font-semibold text-xl">{exp}</h6>
            <p className="italic">{t(`experiences.${exp}.position`)}</p>
            <div className="flex gap-1 text-sm font-extralight">
              <span>{t(`experiences.${exp}.start_date`)}</span>
              <p>-</p>
              <span>{t(`experiences.${exp}.end_date`)}</span>
            </div>
            <p>{t(`experiences.${exp}.description`)}</p>
          </div>
        ))}
      </div>
    </>
  );
}
