import React from 'react';
import style from './MembersServices.module.sass';
import {v4 as uuidv4} from 'uuid';
import Image from "next/image";
import {motion} from "framer-motion";
import {useDispatch} from "react-redux";
import {ModalType, openModal} from "@/store/reducer/modalSlice";

const MembersServices = () => {
    const dispatch = useDispatch()
    const textArray = [
        'показ рекламных объявлений о продукции или услуге',
        'размещение информации о вас на сайте и в социальных сетях',
        'проведение мастер-классов и выступлений спикеров',
        'презентация своей продукции и услуг в культурно-деловой программе,',
        'изготовление баннеров и флаеров для участия на выставке'
    ]
    return (
        <section className={style.services}>
            <div className={style.servicesDecor}>
                <Image
                    src={'/images/LeavesLong.png'}
                    alt={'decor'}
                    width={600}
                    height={310}
                />
            </div>
            <div className={style.servicesContainer}>
                <div className={style.servicesContainerBox}>
                    <h1>Наши услуги для участников</h1>
                    <ul className={style.servicesContainerBoxList}>
                        {textArray.map(item=>
                            <li
                                className={style.servicesContainerBoxListItem}
                                key={uuidv4()}>
                                {item}
                            </li>)}
                    </ul>
                    <motion.button
                        onClick={()=>dispatch(openModal(ModalType.PARTICIPANTS))}
                        initial={{scale: 1}}
                        whileHover={{scale: 1.04}}
                        whileTap={{scale: 0.9}}
                        className={style.servicesContainerBoxBtn}
                    >Участвовать!</motion.button>
                </div>
            </div>
            {/*<div className={style.servicesDecorDown}>*/}
            {/*    <Image*/}
            {/*        src={'/images/members/23.png'}*/}
            {/*        width={400}*/}
            {/*        height={250}*/}
            {/*        alt={'decor'}*/}
            {/*    />*/}
            {/*</div>*/}
        </section>
    );
};

export default MembersServices;