import type { Ni18nOptions } from "ni18n";

const supportedLngs = ["pt", "en"];

export const ni18nConfig: Ni18nOptions = {
  fallbackLng: supportedLngs,
  supportedLngs,
  ns: ["translate"],
  react: {
    useSuspense: false,
  },
};
