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

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Microfire - Otomatik Yangın Söndürücü</title>
        <meta name="description" content="Yangın çıkmasını beklemeyin MicroFire Sticker ile hemen önleminizi alın. Otomatik Yangın Söndürücü MicroFire; alevi algıladığında hemen aktive olarak yangını hızla söndürür." />
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
