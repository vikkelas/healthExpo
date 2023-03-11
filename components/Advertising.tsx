import style from  '../styles/Advertising.module.sass';
import Image from "next/image";

const Advertising = () => {
    return (
        <section className={style.advertising}>
            <div className={style.advertisingBackground}>
                <Image
                    src={'/images/reklama.webp'}
                    alt={'Реклама'}
                    width={1920}
                    height={800}
                />
            </div>
            <div className={style.advertisingContent}>
                <h2>Размещение рекламы</h2>
                <div className={style.advertisingContentInfo}>
                    <p>Бесплатное размещение информации о ваших товарах и услугах </p>
                    <button>Участвовать!</button>
                </div>
                <div className={style.advertisingContentIcons}>
                    <div className={style.advertisingContentIconsItem}>
                        <div className={style.advertisingContentIconsItemImg}>
                            <Image
                                src={'/images/vkontakteAdd.png'}
                                alt={'Здоровье EXPO реклама'}
                                width={165}
                                height={165}
                            />
                        </div>
                        <span>Социальная сеть ВКонтакте</span>
                    </div>
                    <div className={style.advertisingContentIconsItem}>
                        <div className={style.advertisingContentIconsItemImg}>
                            <Image
                                src={'/images/partnersAdd.png'}
                                alt={'Здоровье EXPO партнерам'}
                                width={165}
                                height={165}
                            />
                        </div>
                        <span>Сайты партнеров мероприятия</span>
                    </div>
                    <div className={style.advertisingContentIconsItem}>
                        <div className={style.advertisingContentIconsItemImg}>
                            <Image
                                src={'/images/audio-volume-2.png'}
                                alt={'Здоровье EXPO реклама в соц сетях'}
                                width={165}
                                height={165}
                            />
                        </div>
                        <span>Звуковая реклама на территории ВДНХ</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advertising;