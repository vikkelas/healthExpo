import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import data from "@/data/data";
import { v4 as uuidv4 } from 'uuid'
import style from './VideoSwiper.module.sass'
import {Navigation, Pagination} from "swiper";

const VideoSwiper = () => {
    const {videoLink} = data
    return (
        <div className={style.videoLink}>
            <h2>Видео с наших мероприятий</h2>
            <div className={style.videoLinkContainer}>
                <div
                    id={'prevBtnVideo'}
                    className={style.videoLinkContainerBtn}>
                    <svg width="98" height="30" viewBox="0 0 98 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.761829 15.3157L26.0746 29.1937L25.4369 0.333267L0.761829 15.3157ZM97.1831 10.6847L23.2011 12.3193L23.3116 17.3181L97.2935 15.6835L97.1831 10.6847Z" fill="#093719"/>
                    </svg>
                </div>
                <Swiper
                    spaceBetween={10}
                    navigation={{
                        nextEl: '#nextBtnVideo',
                        prevEl: '#prevBtnVideo'
                    }}
                    pagination={{
                        type: "bullets"
                    }}
                    modules={[Navigation, Pagination]}
                    slidesPerView={2}
                    className={style.videoLinkContainerSwiper}
                >
                    {videoLink.map(item=>{
                        return(
                            <SwiperSlide
                                className={style.videoLinkContainerSwiperSlide}
                                key={uuidv4()}
                            >
                                <iframe width="560" height="315" src={item.link}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div
                    id={'nextBtnVideo'}
                    className={style.videoLinkContainerBtn}>
                    <svg width="98" height="30" viewBox="0 0 98 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M97.4857 15.6255L72.6548 0.902681L72.3199 29.7683L97.4857 15.6255ZM0.96318 17.0057L74.9582 17.8643L75.0162 12.8646L1.02119 12.006L0.96318 17.0057Z" fill="#093719"/>
                    </svg>
                </div>
            </div>

        </div>
    );
};

export default VideoSwiper;