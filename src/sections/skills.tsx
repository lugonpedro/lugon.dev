import { useTranslation } from "react-i18next";
import { Separator } from "../components/separator";

export function Skills() {
  const { t } = useTranslation();

  const data = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "Tailwind",
    "Sass",
    "Node.js",
    "Nest.js",
    "Jest",
    "Java",
    "Spring",
    "MySQL",
    "PostgresSQL",
    "MongoDB",
    "AWS",
    "Firebase",
    "GCP",
    "Docker",
    "GitHub",
    "RabbitMQ",
  ];

  return (
    <>
      <Separator />
      <h2 className="font-semibold text-2xl">{t("skills.title")}</h2>
      <ul className="grid grid-cols-4 mt-4 gap-1 md:grid-cols-8 xl:grid-cols-12">
        {data.map((skill) => (
          <div className="w-full h-full max-w-16 mx-auto bg-primary/20 p-4 rounded-full hover:bg-primary duration-500">
            <img key={skill} src={`/skills/${skill}.svg`} title={skill} />
          </div>
        ))}
      </ul>
    </>
  );
}
