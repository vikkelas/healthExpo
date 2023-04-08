import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import style from '../styles/PavilionGallery.module.sass';
import Image from "next/image";
import {Autoplay} from "swiper";
const PavilionGallery = () => {
    return (
        <div className={style.container}>
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 2000,
                }}
                className={style.containerSwiper}
                spaceBetween={30}
                slidesPerView={3}
            >
                <SwiperSlide className={style.containerSwiperSlider}>
                    <Image
                        src={'/images/carousel/4.jpg'}
                        alt={'Павильон ВДНХ'}
                        width={400}
                        height={300}/>
                </SwiperSlide>
                <SwiperSlide className={style.containerSwiperSlider}>
                    <Image
                        src={'/images/carousel/5.jpg'}
                        alt={'Павильон ВДНХ'}
                        width={400}
                        height={300}/>
                </SwiperSlide>
                <SwiperSlide className={style.containerSwiperSlider}>
                    <Image
                        src={'/images/carousel/6.jpg'}
                        alt={'Павильон ВДНХ'}
                        width={400}
                        height={300}/>
                </SwiperSlide>
                <SwiperSlide className={style.containerSwiperSlider}>
                    <Image
                        src={'/images/carousel/7.jpg'}
                        alt={'Павильон ВДНХ'}
                        width={400}
                        height={300}/>
                </SwiperSlide>
                <SwiperSlide className={style.containerSwiperSlider}>
                    <Image
                        src={'/images/carousel/8.jpg'}
                        alt={'Павильон ВДНХ'}
                        width={400}
                        height={300}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default PavilionGallery;