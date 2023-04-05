import React from 'react';
import style from './MembersSpeak.module.sass';
import data from "@/data/data";
import Image from "next/image";
import {v4 as uuidv4} from 'uuid';
const MembersSpeak = () => {
    const {members} = data;
    return (
        <section className={style.speak}>
            <ul className={style.speakList}>
                {members.map(item=>{
                    return (
                        <li className={style.speakListItem} key={uuidv4()}>
                            <div className={style.speakListItemImg}>
                                <Image
                                    src={`/images/members/${item.imgName}`}
                                    width={128}
                                    height={128}
                                    alt={'иконки тем'}
                                />
                            </div>
                            <span>{item.text}</span>
                        </li>
                    )
                })}
            </ul>
            <div className={style.speakInfo}>
                <div className={style.speakInfoTitle}>
                    <h1>Приглашаем спикеров</h1>
                    <span/>
                </div>
                <p>Выступление в рамках программы выставки привлечёт внимание к вашей организации, повысит ваш авторитет и узнаваемость среди потенциальных потребителей.</p>
                <div className={style.speakInfoImg}>
                    <Image
                        width={294}
                        height={294}
                        alt={'Speaker'}
                        src={'/images/members/speak.jpeg'}
                    />
                </div>
            </div>
        </section>
    );
};

export default MembersSpeak;