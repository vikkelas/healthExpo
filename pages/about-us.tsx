import style from '../styles/AbouUs.module.sass';
import Image from "next/image";
import {v4 as uuidv4} from 'uuid';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";
import data from "@/data/data";
const AboutUs = () => {
    const {pastEvent} = data;
    return (
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
                       <h1>О компании «ЮрБрус»:</h1>
                       <div className={style.mainTitleContainerInfoText}>
                           <p>Выставочная компания  «ЮрБрус» -  начала свою деятельность в 2007 г. За более чем 15 лет работы компания проделала стремительный путь развития. Коллектив  приобрёл практический опыт организации выставочно-ярмарочных мероприятий, в том числе и международного уровня.</p>
                           <p>Мы успешно работали на таких известных площадках Москвы, как ВДНХ, Сокольнический выставочный центр, Тишинская площадь, Арбат и торговые центры.   </p>
                       </div>
                       <button>Наши выставки</button>
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
                        {pastEvent.map((item)=>{
                            return(
                                <SwiperSlide
                                    key={uuidv4()}
                                    className={style.mainPastEventsContainerSwiperSlide}

                                >
                                    <Image
                                        src={`/images/pastEvent/${item.nameFile}`}
                                        alt={'Здоровье EXPO'}
                                        width={500}
                                        height={250}
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
            <section>

            </section>
        </main>
    );
};

export default AboutUs;