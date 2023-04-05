import React, {useEffect, useRef, useState} from 'react';
import style from "./GallerySwiper.module.sass";
import Image from "next/image";
import {v4 as uuidv4} from "uuid";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import SwiperClass from "swiper/types/swiper-class";
import {NextPage} from "next";
import {Swiper, SwiperSlide } from "swiper/react";

interface PropsGallery {
    data: { namePhoto:string[] }
}
const GallerySwiper:NextPage<PropsGallery> = (props) => {
    const [openModalSlider, setOpenModalSlider] = useState(false)
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
    const [firstSwiper, setFirstSwiper] = useState<SwiperClass>();
    const [secondSwiper, setSecondSwiper] = useState<SwiperClass>();
    const swiper1Ref = useRef<React.MutableRefObject<null>>(null);
    const swiper2Ref = useRef();

    useEffect(() => {
        if (swiper1Ref.current !== null) {
            // @ts-ignore
            swiper1Ref.current.controller.control = swiper2Ref.current;
        }
    }, []);

    return (
        <div className={style.mainImages}>
            <h2>Галерея наших мероприятий</h2>
            <div className={style.mainImagesWrapper}>
                <div
                    id={'prevBtnImages'}
                    className={style.mainImagesWrapperBtnPrev}>
                    <svg width="98" height="30" viewBox="0 0 98 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.761829 15.3157L26.0746 29.1937L25.4369 0.333267L0.761829 15.3157ZM97.1831 10.6847L23.2011 12.3193L23.3116 17.3181L97.2935 15.6835L97.1831 10.6847Z" fill="#093719"/>
                    </svg>
                </div>
                <Swiper
                    controller={{ control: firstSwiper }}
                    navigation={{
                        prevEl: '#prevBtnImages',
                        nextEl: '#nextBtnImages'
                    }}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={30}
                    slidesPerView={4}
                    watchSlidesProgress={true}
                    freeMode={true}
                    modules={[Navigation, Thumbs, FreeMode]}
                    className={style.mainImagesWrapperSlider}
                >
                    {props.data.namePhoto.map((item)=>{
                        return(
                            <SwiperSlide
                                className={style.mainImagesWrapperSliderSlide}
                                key={uuidv4()}
                                onClick={()=>setOpenModalSlider(true)}
                            >
                                <Image
                                    src={`/images/gallery/${item}`}
                                    alt={'Наши фото'}
                                    width={600}
                                    height={400}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div
                    className={style.mainImagesWrapperBtnNext}
                    id={'nextBtnImages'}
                >
                    <svg width="98" height="30" viewBox="0 0 98 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M97.4857 15.6255L72.6548 0.902681L72.3199 29.7683L97.4857 15.6255ZM0.96318 17.0057L74.9582 17.8643L75.0162 12.8646L1.02119 12.006L0.96318 17.0057Z" fill="#093719"/>
                    </svg>
                </div>
            </div>
            <div className={openModalSlider?style.mainImagesModal:style.mainImagesModalNo }>
                <div
                    onClick={()=>setOpenModalSlider(false)}
                    className={style.mainImagesModalClose}>
                    <Image
                        src={'/images/close.png'}
                        alt={'close'}
                        width={35}
                        height={35}
                    />
                </div>
                <div
                    id={'prevBtnImagesBig'}
                    className={style.mainImagesModalBtnPrev}>
                    <svg width="98" height="30" viewBox="0 0 98 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.761829 15.3157L26.0746 29.1937L25.4369 0.333267L0.761829 15.3157ZM97.1831 10.6847L23.2011 12.3193L23.3116 17.3181L97.2935 15.6835L97.1831 10.6847Z" fill="#093719"/>
                    </svg>
                </div>
                <Swiper
                    onSwiper={(swiper) => {
                        if (swiper1Ref.current !== null) {
                            // @ts-ignore
                            swiper1Ref.current = swiper;
                        }
                    }}
                    thumbs={{
                        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                    }}
                    modules={[Navigation, Thumbs, FreeMode]}
                    navigation={{
                        prevEl: '#prevBtnImagesBig',
                        nextEl: '#nextBtnImagesBig'
                    }}
                    className={style.mainImagesModalSwiper}>
                    {props.data.namePhoto.map(item=>{
                        return(
                            <SwiperSlide
                                key={uuidv4()}
                                className={style.mainImagesModalSwiperSlide}
                            >
                                <Image
                                    src={`/images/gallery/${item}`}
                                    alt={'Здоровье EXPO'}
                                    width={500}
                                    height={250}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div
                    className={style.mainImagesModalBtnNext}
                    id={'nextBtnImagesBig'}
                >
                    <svg width="98" height="30" viewBox="0 0 98 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M97.4857 15.6255L72.6548 0.902681L72.3199 29.7683L97.4857 15.6255ZM0.96318 17.0057L74.9582 17.8643L75.0162 12.8646L1.02119 12.006L0.96318 17.0057Z" fill="#093719"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default GallerySwiper;