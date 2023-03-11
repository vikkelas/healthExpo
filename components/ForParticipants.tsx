import React from 'react';
import style from '../styles/ForParticipants.module.sass';
import Image from "next/image";
import {motion} from 'framer-motion'

const ForParticipants = () => {
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
                        <p>Цель проекта - создать регулярную выставочную площадку, где предприниматели смогут:</p>
                        <ul>
                            <li>представить свою продукцию</li>
                            <li>выйти на новые продажи</li>
                            <li>расширить сеть деловых контактов</li>
                            <li>привлечь дополнительное внимание к компании</li>
                            <li>повысить свой авторитет на рынке</li>
                        </ul>
                    </div>
                    <div className={style.participantsContainerContentImg}>
                        <Image
                            alt={'Участники Здоровья EXPO'}
                            src={'/images/participants2.webp'}
                            width={896}
                            height={489}
                        />
                    </div>
                    <motion.button
                        initial={{scale: 1}}
                        whileHover={{scale: 1.04}}
                        whileTap={{scale: 0.9}}
                    >Участвовать</motion.button>
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
                            <li> презентация продукции фирмами-производителями</li>
                            <li>встречи с авторами методик оздоровления</li>
                            <li>выступления с семинарами и презентациями спикеров, психолого, мануальщиков</li>
                            <li>выступления священнослужителей, профессоров</li>
                            <li>розыгрыши призов</li>
                        </ul>
                    </div>
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