import style from '../styles/AbouUs.module.sass';
import {GetServerSideProps, NextPage} from "next";
import Image from "next/image";
import {v4 as uuidv4} from 'uuid';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay,  Navigation} from "swiper";
import GallerySwiper from "@/components/GallerySwiper/GallerySwiper";
import Head from "next/head";
import React from "react";

export const getServerSideProps:GetServerSideProps = async () => {
    const responsePhoto = await fetch('http://localhost:3000/api/gallery');
    const responseBanners = await fetch('http://localhost:3000/api/banners');
    const gallery = await responsePhoto.json()
    const banners = await responseBanners.json()
    return {
        props: {
            gallery,
            banners
        }
    }
}

interface Props {
    gallery: { namePhoto:string[]; }
    banners: { nameBanners: string [];}
}

const AboutUs:NextPage<Props> = (props) => {
    return (
        <>
            <Head>
                <title>О компании</title>
                <meta name="description" content="Международная специализированная выставка-продажа" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={style.main}>
                <section className={style.mainTitle}>
                    <div className={style.mainTitleBackground}>
                        <Image
                            src={'/images/298-min.webp'}
                            alt={'О компании'}
                            width={1920}
                            height={960}
                        />
                    </div>
                    <div className={style.mainTitleContainer}>
                        <div className={style.mainTitleContainerInfo}>
                            <h1>Компания «ПроЭкспо»</h1>
                            <div className={style.mainTitleContainerInfoText}>
                                <p>Выставочная компания  «ПроЭкспо» начала свою деятельность в 2007 г. За более чем 15 лет работы компания проделала стремительный путь развития. Коллектив  приобрёл практический опыт организации выставочно-ярмарочных мероприятий, в том числе и международного уровня.
                                </p>
                                <p>Мы успешно работали на таких известных площадках Москвы, как ВДНХ, Сокольнический выставочный центр, Тишинская площадь дом 1, «Шоу-рум уникальных вещей» на Старом Арбате и в различных торговых центрах.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className={style.mainDecor}>
                    <span className={style.mainDecorLine}/>
                </div>
                <section className={style.mainPastEvents}>
                    <h2>Прошедшие мероприятия</h2>
                    <div className={style.mainPastEventsContainer}>
                        <div
                            id={'prevBtnEvent'}
                            className={style.mainPastEventsContainerBtn}>
                            <svg width="98" height="30" viewBox="0 0 98 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.761829 15.3157L26.0746 29.1937L25.4369 0.333267L0.761829 15.3157ZM97.1831 10.6847L23.2011 12.3193L23.3116 17.3181L97.2935 15.6835L97.1831 10.6847Z" fill="#093719"/>
                            </svg>
                        </div>
                        <Swiper
                            navigation={{
                                nextEl: '#nextBtnEvent',
                                prevEl: '#prevBtnEvent'
                            }}
                            autoplay={{delay: 2000}}
                            slidesPerView={3}
                            spaceBetween={50}
                            modules={[Navigation, Autoplay]}
                            className={style.mainPastEventsContainerSwiper}>
                            {props.banners.nameBanners.map((item)=>{
                                return(
                                    <SwiperSlide
                                        key={uuidv4()}
                                        className={style.mainPastEventsContainerSwiperSlide}
                                    >
                                        <Image
                                            priority
                                            quality={70}
                                            src={`/images/pastEvent/${item}`}
                                            alt={'Здоровье EXPO'}
                                            width={1200}
                                            height={1200}
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <div
                            id={'nextBtnEvent'}
                            className={style.mainPastEventsContainerBtn}>
                            <svg width="98" height="30" viewBox="0 0 98 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M97.4857 15.6255L72.6548 0.902681L72.3199 29.7683L97.4857 15.6255ZM0.96318 17.0057L74.9582 17.8643L75.0162 12.8646L1.02119 12.006L0.96318 17.0057Z" fill="#093719"/>
                            </svg>
                        </div>
                    </div>
                </section>
                <section className={style.mainGallery}>
                    <div className={style.mainGalleryContainer}>
                        <div className={style.mainGalleryContainerInfo}>
                            <div className={style.mainGalleryContainerInfoItem}>
                                <div className={style.mainGalleryContainerInfoItemImage}>
                                    <Image
                                        src={'/images/about-us/close-up-of-pen-with-tablet-on-the-table-min.jpg'}
                                        alt={'Партнеры Здоровье EXPO'}
                                        width={600}
                                        height={400}
                                    />
                                </div>
                                <p>За годы работы мы выстроили долгосрочные доверительные отношения с экспонентами.</p>
                            </div>
                            <div className={style.mainGalleryContainerInfoItem}>
                                <div className={style.mainGalleryContainerInfoItemImage}>
                                    <Image
                                        src={'/images/about-us/business-team-meeting-boardroom-min.jpg'}
                                        alt={'Партнеры Здоровье EXPO'}
                                        width={600}
                                        height={400}
                                    />
                                </div>
                                <p>В «ПроЭкспо» своя команда маркетологов, что позволяет максимально быстро развивать наш проект и повышать общую узнаваемость.</p>
                            </div>
                        </div>
                    </div>
                    <GallerySwiper data={props.gallery}/>
                </section>

            </main>
        </>

    );
};

export default AboutUs;