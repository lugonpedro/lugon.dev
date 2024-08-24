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
      <ul className="grid grid-cols-4 mt-4 gap-4 md:grid-cols-8 xl:grid-cols-12">
        {data.map((skill) => (
          <img
            key={skill}
            src={`/skills/${skill}.svg`}
            title={skill}
            className="w-full h-full bg-primary/20 p-1 rounded-full hover:bg-primary duration-500"
          />
        ))}
      </ul>
    </>
  );
}
