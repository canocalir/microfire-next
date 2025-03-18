import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Specs from "@/components/Specs/Specs";
import { MainContainer } from "@/styles/global.styled";
import Video from "@/components/Video/Video";
import Usage from "@/components/Usage/Usage";
import Form from "@/components/Form/Form";
import Footer from "@/components/Footer/Footer";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    const handleRouteChangeComplete = () => {
      const scrollPosition = sessionStorage.getItem("scrollPosition");
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
      }
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>{t('root.title')}</title>
        <meta name="description" content={t('root.desc') || ''} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <MainContainer>
        <Hero />
        <Specs />
        <Usage />
        <Video />
        <Form />
        <Footer />
      </MainContainer>
    </>
  );
}


export async function getStaticProps({ locale = "default" }:any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
