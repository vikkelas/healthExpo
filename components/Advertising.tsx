import style from  '../styles/Advertising.module.sass';
import Image from "next/image";
import {motion} from "framer-motion";
import React from "react";
import {ModalType, openModal} from "@/store/reducer/modalSlice";
import {useDispatch} from "react-redux";

const Advertising = () => {
    const dispatch = useDispatch();
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
                    <ul className={style.advertisingContentInfoList}>
                        <li className={style.advertisingContentInfoListItem}>Яндекс директ</li>
                        <li className={style.advertisingContentInfoListItem}>Таргетированная реклама</li>
                        <li className={style.advertisingContentInfoListItem}>Наружная реклама </li>
                        <li className={style.advertisingContentInfoListItem}>Флаеры</li>
                        <li className={style.advertisingContentInfoListItem}>Тв реклама</li>
                        <li className={style.advertisingContentInfoListItem}>В группах, сообществах</li>
                        <li className={style.advertisingContentInfoListItem}>Социальные сети</li>
                        <li className={style.advertisingContentInfoListItem}>Смс Маркетинг</li>
                        <li className={style.advertisingContentInfoListItem}>Звуковая реклама компании во время выставки.</li>
                    </ul>
                    <motion.button
                        onClick={()=>dispatch(openModal(ModalType.PARTICIPANTS))}
                        initial={{scale: 1}}
                        whileHover={{scale: 1.04}}
                        whileTap={{scale: 0.9}}
                    >Участвовать!</motion.button>
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
                </div>
            </div>
        </section>
    );
};

export default Advertising;