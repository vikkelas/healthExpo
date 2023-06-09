import Head from 'next/head'
import MainTitle from "@/components/MainTitle";
import FromWhom from "@/components/FromWhom";
import ThematicSection from "@/components/ThematicSection";
import ForParticipants from "@/components/ForParticipants";
import PavilionInfo from "@/components/PavilionInfo";
import HowToGetTo from "@/components/HowToGetTo";
import Advertising from "@/components/Advertising";

export default function Home() {

  return (
    <>
      <Head>
        <title>Здоровье-EXPO</title>
        <meta name="description" content="Международная специализированная выставка-продажа" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <MainTitle/>
          <FromWhom/>
          <ThematicSection/>
          <ForParticipants/>
          <PavilionInfo/>
          <Advertising/>
          <HowToGetTo title={'Место проведения'}/>
      </main>
    </>
  )
}
