import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimationEnter } from "../animations/enter";
import { ChangeLanguage } from "../components/change-language";

export function Header() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div>
        <AnimationEnter delay={0.5}>
          <ChangeLanguage />
          <h1 className="font-semibold">Pedro Lugon</h1>
        </AnimationEnter>
        <AnimationEnter delay={0.75}>
          <p>{t("about.text")}</p>
        </AnimationEnter>
        <AnimationEnter delay={1}>
          <div className="flex gap-4 mt-4 justify-center">
            <a href="mailto:pedrolugonm@gmail.com">
              <MailIcon />
            </a>
            <a href="https://linkedin.com/in/lugonpedro">
              <LinkedinIcon />
            </a>
            <a href="https://github.com/lugonpedro">
              <GithubIcon />
            </a>
          </div>
        </AnimationEnter>
      </div>
    </div>
  );
}
