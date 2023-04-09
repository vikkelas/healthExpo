import React from 'react';
import style from "./Speakers.module.sass";
import Image from "next/image";
import {motion} from "framer-motion";
import {changeModal} from "@/store/reducer/modalSlice";
import {useDispatch} from "react-redux";

const Speakers = () => {
    const dispatch = useDispatch()
    return (
        <section className={style.spacer}>
            <div className={style.spacerContainer}>
                <h2>Выступления спикеров</h2>
                <div className={style.spacerContainerContent}>
                    <div className={style.spacerContainerContentText}>
                        <h3>В программе мероприятий выставки вы найдёте лекции, мастер-классы и презентации ведущих специалистов в области медицины</h3>
                        <ul>
                            <li>о сохранении здоровья, </li>
                            <li>правильном питании,</li>
                            <li>фитотерапии,</li>
                            <li>рефлексотерапии, </li>
                            <li>гирудотерапии,</li>
                            <li>различных видах массажей,</li>
                            <li>инновационных способах лечения,</li>
                            <li>нутрициологии,</li>
                            <li>диетологии,</li>
                            <li>а также выступления популярных фитнес-тренеров и других спикеров, экспертов ЗОЖ.
                            </li>
                        </ul>
                        <div className={style.spacerContainerContentTextIcon}>
                            <Image
                                src={'/images/visitors/iconSpeac.png'}
                                alt={'Спикеры'}
                                width={150}
                                height={150}
                            />
                        </div>
                        <motion.button
                            onClick={()=>dispatch(changeModal(true))}
                            initial={{scale: 1}}
                            whileHover={{scale: 1.04}}
                            whileTap={{scale: 0.9}}
                        >Получить приглашение</motion.button>
                    </div>
                    <div className={style.spacerContainerContentImage}>
                        <Image
                            src={'/images/visitors/5.webp'}
                            alt={'Посетителям'}
                            width={600}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Speakers;