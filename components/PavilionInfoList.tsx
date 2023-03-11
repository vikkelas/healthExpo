import React from 'react';
import {PavilionInfo} from "@/data/data";
import {v4 as uuidv4} from 'uuid';
import Image from "next/image";
import style from '../styles/PavilionInfoList.module.sass'
interface PropsData {
    data: PavilionInfo[]
}

const PavilionInfoList = (props: PropsData) => {
    return (
        <ul className={style.pavilionList}>
            {props.data.map((item)=>{
                return (
                    <li
                        className={style.pavilionListItem}
                        key={uuidv4()}>
                        <h3 className={style.pavilionListItemTitle}>{item.title}</h3>
                        <div className={style.pavilionListItemInfo}>
                            <p>Площадь: <span>{item.area} м</span></p>
                            <p>Вместимость:</p>
                            <p>до <span>{item.humans} чел</span></p>
                        </div>
                        <div className={style.pavilionListItemBox}>
                            <div className={style.pavilionListItemBoxIcon}>
                                <Image
                                    src={'/images/icon12.svg'}
                                    alt={'Место проведения выставки'}
                                    width={100}
                                    height={90}
                                />
                            </div>
                            <div className={style.pavilionListItemBoxIcon}>
                                <Image
                                    src={'/images/icon13.svg'}
                                    alt={'Место проведения выставки'}
                                    width={100}
                                    height={90}
                                />
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
};

export default PavilionInfoList;