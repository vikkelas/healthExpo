import style from '../styles/Visitors.module.sass';
import Image from "next/image";
import {v4 as uuidv4} from "uuid";
import data from "@/data/data";
import MembersAdditionalServices from "@/components/MembersAdditionalServices/MembersAdditionalServices";
import Speackers from "@/components/Speakers/Speackers";
import SaleHealth from "@/components/SaleHealth/SaleHealth";
import Head from "next/head";
import React from "react";

const Visitors = () => {
    const {aboutExpo} = data
    return (
        <>
            <Head>
                <title>Посетителям</title>
                <meta name="description" content="Международная специализированная выставка-продажа" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={style.visitors}>
                <section className={style.visitorsTitle}>
                    <div className={style.visitorsTitleBackground}>
                        <Image
                            src={'/images/visitors.webp'}
                            alt={'Здоровое питание для посетителей'}
                            width={1200}
                            height={600}
                        />
                    </div>
                    <div className={style.visitorsTitleContainer}>
                        <div className={style.visitorsTitleContainerContent}>
                            <h1>Посетителям</h1>
                        </div>
                    </div>
                </section>
                <section className={style.visitorsThem}>
                    <h2>Тематические разделы выставки:</h2>
                    <div className={style.visitorsThemList}>
                        {aboutExpo.map(item=>{
                            return(
                                <div
                                    key={uuidv4()}
                                    className={style.visitorsThemListItem}>
                                    <div className={style.visitorsThemListItemImg}>
                                        <Image
                                            src={`/images/icons-about-expo/${item.iconName}`}
                                            alt={'icon'}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <span>{item.title}</span>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <MembersAdditionalServices info={data.membersInfo[0]}/>
                <SaleHealth/>
                <Speackers/>
            </main>
        </>
    );
};

export default Visitors;