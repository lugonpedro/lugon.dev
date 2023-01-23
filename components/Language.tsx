import React from "react";
import { useTranslation } from "react-i18next";

import "/node_modules/flag-icons/css/flag-icons.min.css";

type Props = {};

export default function Language({}: Props) {
  const { i18n } = useTranslation();
  const [ptSelected, setPtSelected] = React.useState<boolean>(false);

  React.useEffect(() => {
    const item = localStorage.getItem("MY_LANGUAGE");

    if (!item || (item && item === "pt")) {
      setPtSelected(true);
    } else {
      setPtSelected(false);
    }
  }, []);

  const changeLanguage = (i18n: any, language: string) => {
    window.localStorage.setItem("MY_LANGUAGE", language);
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex gap-4 relative">
      <span
        className={`fi fi-br text-2xl hover:cursor-pointer duration-300 rounded-sm md:text-3xl ${
          ptSelected ? "" : "languageSelected"
        }`}
        onClick={() => {
          changeLanguage(i18n, "pt");
          setPtSelected(true);
        }}
      />
      <span
        className={`fi fi-us text-2xl hover:cursor-pointer duration-300 rounded-sm md:text-3xl ${
          ptSelected ? "languageSelected" : ""
        }`}
        onClick={() => {
          changeLanguage(i18n, "en");
          setPtSelected(false);
        }}
      />
    </div>
  );
}
