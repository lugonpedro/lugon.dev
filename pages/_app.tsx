import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { appWithI18Next, useSyncLanguage } from "ni18n";
import { ni18nConfig } from "@/ni18n.config";

function App({ Component, pageProps }: AppProps) {
  const locale: any =
    typeof window !== "undefined" && window.localStorage.getItem("MY_LANGUAGE");

  useSyncLanguage(locale);

  return <Component {...pageProps} />;
}

export default appWithI18Next(App, ni18nConfig);
