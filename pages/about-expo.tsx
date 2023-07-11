import style from '../styles/aboutExpo.module.sass'
import Image from "next/image";
import Speackers from "@/components/Speakers/Speackers";
import MembersAdditionalServices from "@/components/MembersAdditionalServices/MembersAdditionalServices";
import data from "@/data/data";
import Head from "next/head";
const AboutExpo = () => {

    return (
        <>
            <Head>
                <title>Культурная программа</title>
                <meta name="description" content="Международная специализированная выставка-продажа" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={style.main}>
                <section className={style.mainTitle}>
                    <div className={style.mainTitleBackground}>
                        <Image
                            src={'/images/about-expo.webp'}
                            alt={'О выставке'}
                            width={1600}
                            height={600}
                        />
                    </div>
                    <div className={style.mainTitleContent}>
                        <h1>Культурная программа</h1>
                        <div className={style.mainTitleContentBox}>
                        <span>
                            В программе мероприятий выставки вы найдёте лекции, мастер-классы и презентации ведущих специалистов в области медицины
                        </span>
                            <ul>
                                <li>о сохранении здоровья</li>
                                <li>правильном питании</li>
                                <li>фитотерапии</li>
                                <li>рефлексотерапии</li>
                                <li>гирудотерапии</li>
                                <li>различных видах массажей</li>
                                <li>инновационных способах лечения</li>
                                <li>нутрициологии</li>
                                <li>диетологии</li>
                                <li>а также выступления популярных фитнес-тренеров и других спикеров, экспертов ЗОЖ</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <MembersAdditionalServices info={data.membersInfo[0]}/>
                <Speackers/>
            </main>
        </>
    );
};

export default AboutExpo;