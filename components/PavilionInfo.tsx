import React from 'react';
import Image from "next/image";
import style from '../styles/PavilionInfo.module.sass';
import {motion} from "framer-motion";
import PavilionInfoList from "@/components/PavilionInfoList";
import data from '../data/data';
import PavilionGallery from "@/components/PavilionGallery";

const PavilionInfo = () => {
    return (
        <section className={style.pavilionInfo}>
            <div className={style.pavilionInfoHeader}>
                <motion.div
                    initial={{
                        opacity: 0,
                        transform: 'translate(0, -50%)',
                        left: -500}}
                    whileInView={{left: 0, opacity: 1}}
                    transition={{delay: 0.6, duration: 0.6,}}
                    className={style.pavilionInfoHeaderInfo}>
                    <div className={style.pavilionInfoHeaderInfoTitle}>
                        <h2>Экспоцентр Москва</h2>
                        <span/>
                    </div>
                    <div className={style.pavilionInfoHeaderInfoContent}>
                        <p className={style.pavilionInfoHeaderInfoContentFirst}>1 этаж</p>
                        <p className={style.pavilionInfoHeaderInfoContentAny}>Общая площадь: <span>1114 м</span></p>
                        <p className={style.pavilionInfoHeaderInfoContentAny}>Высота потолков: <span>5 м</span></p>
                    </div>
                </motion.div>
                <div className={style.pavilionInfoHeaderImage}>
                    <Image
                        src={'/images/pavilion.jpg'}
                        alt={'Проведение выставки Здоровье-EXPO'}
                        width={1200}
                        height={850}
                    />
                </div>
                <motion.div
                    initial={{scale: 1}}
                    animate={{scale: 1.1}}
                    transition={{duration: 1, repeatType: 'reverse', repeat: Infinity}}
                    className={style.pavilionInfoHeaderArrow}>
                    <div className={style.pavilionInfoHeaderArrowBox}>
                        <svg width="30" height="97" viewBox="0 0 30 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 97L29.4338 72H0.566243L15 97ZM12.5 0.5V74.5H17.5V0.5H12.5Z" fill="white"/>
                        </svg>
                    </div>
                </motion.div>
                <span className={style.pavilionInfoHeaderDecorLine}/>
            </div>
            <PavilionInfoList data={data.pavilionInfo}/>
            <PavilionGallery/>
        </section>
    );
};

export default PavilionInfo;