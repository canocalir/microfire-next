import Link from "next/link";
import { useRouter } from "next/router";
import {GrLanguage} from "react-icons/gr"
import { LanguageSwitcherContainer } from "./LanguageSwitcher.styled";

export default function LanguageSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );

  return (
    <LanguageSwitcherContainer>
      <GrLanguage/>
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <span key={"locale-" + locale}>
            <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <p>{locale === "en" ? "EN" : locale === "tr" ? "TR" : null}</p>
            </Link>
          </span>
        );
      })}
    </LanguageSwitcherContainer>
  );
}
