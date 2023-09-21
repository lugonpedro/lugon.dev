import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

type Props = {};

export default function Page404({}: Props) {
  const { t } = useTranslation("");

  return (
    <div className="flex items-center justify-center flex-col h-screen w-screen bg-background text-pearl">
      <h1 className="text-8xl">404</h1>
      <p className="text-xl mb-4">{t("error.text")}</p>
      <Link href="/" className="button">
        {t("error.button")}
      </Link>
    </div>
  );
}
