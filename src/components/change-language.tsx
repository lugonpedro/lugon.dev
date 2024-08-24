import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

export function ChangeLanguage() {
  const { i18n } = useTranslation();

  const selectedLang =
    "text-primary/20 decoration-solid decoration-main pointer-events-none";

  return (
    <div className="flex gap-4 justify-end">
      <a
        onClick={() => changeLanguage("pt-BR")}
        className={i18n.language === "pt-BR" ? selectedLang : "cursor-pointer"}
      >
        pt
      </a>
      <a
        onClick={() => changeLanguage("en")}
        className={i18n.language === "en" ? selectedLang : "cursor-pointer"}
      >
        en
      </a>
    </div>
  );
}
