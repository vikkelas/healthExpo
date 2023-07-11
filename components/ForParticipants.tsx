import React from 'react';
import style from '../styles/ForParticipants.module.sass';
import Image from "next/image";
import {motion} from 'framer-motion'
import {useDispatch} from "react-redux";
import {ModalType, openModal} from "@/store/reducer/modalSlice";

const ForParticipants = () => {
    const dispatch = useDispatch()
    return (
        <section className={style.participants}>
            <motion.span
                whileInView={{scale: 1}}
                initial={{scale: 0.5}}
                transition={{delay: 0.2, duration: 0.6}}
                className={style.participantsDecor}/>
            <div className={style.participantsContainer}>
                <div className={style.participantsContainerContent}>
                    <div className={style.participantsContainerContentTitle}>
                        <h1>Участникам</h1>
                        <span/>
                    </div>
                    <div className={style.participantsContainerContentMain}>
                        <p>На выставке «Здоровье-EXPO» производители, представители торговли и спикеры смогут:</p>
                        <ul>
                            <li>представить свою продукцию</li>
                            <li>выйти на новые продажи</li>
                            <li>расширить сеть деловых контактов</li>
                            <li>привлечь дополнительное внимание к компании</li>
                            <li>повысить свой авторитет на рынке</li>
                            <li>презентация своей продукции и услуг, в культурно-деловой программе</li>
                            <li>заключение контрактов с новыми торговыми сетями и онлайн магазинами.
                            </li>
                        </ul>
                        <p>Размещение информации о товарах и услугах участников в соцсетях.</p>
                    </div>
                    <motion.button
                        onClick={()=>dispatch(openModal(ModalType.PARTICIPANTS))}
                        initial={{scale: 1}}
                        whileHover={{scale: 1.04}}
                        whileTap={{scale: 0.9}}
                    >Участвовать</motion.button>
                    <div className={style.participantsContainerContentImg}>
                        <Image
                            alt={'Участники Здоровья EXPO'}
                            src={'/images/participants2.webp'}
                            width={896}
                            height={489}
                        />
                    </div>
                </div>
                <div className={style.participantsContainerContent}>
                    <div className={style.participantsContainerContentImg}>
                        <Image
                            src={'/images/participants1.webp'}
                            alt={'Посетители Здоровье EXPO'}
                            width={896}
                            height={400}
                        />
                    </div>
                    <div className={style.participantsContainerContentTitle}>
                        <h1>Посетителям</h1>
                        <span/>
                    </div>
                    <div className={style.participantsContainerContentMain}>
                        <ul>
                            <li>продажа товаров и услуг для здорового образа жизни</li>
                            <li>презентация продукции фирмами-производителями</li>
                            <li>встречи с авторами методик оздоровления</li>
                            <li>знакомство с разными техниками массажей</li>
                            <li>Выступления с семинарами и презентациями спикеров, психологов, мануальщиков</li>
                            <li>выступления священнослужителей</li>
                            <li>розыгрыши призов</li>
                        </ul>
                    </div>
                    <motion.button
                        onClick={()=>dispatch(openModal(ModalType.DEFAULT))}
                        initial={{scale: 1}}
                        whileHover={{scale: 1.04}}
                        whileTap={{scale: 0.9}}
                    >Получить приглашение</motion.button>
                </div>
            </div>
            <span className={style.participantsDecorFooter}>expo</span>
            <div className={style.participantsDecorLeaves}>
                <Image
                    src={'/images/LeavesLong.png'}
                    alt={'Травы здоровья'}
                    width={667}
                    height={336}
                />
            </div>
        </section>
    );
};

export default ForParticipants;