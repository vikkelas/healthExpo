import React from 'react';
import style from './MembersTitle.module.sass';
import Image from "next/image";
const MembersTitle = () => {
    return (
        <section className={style.members}>
            <div className={style.membersContainer}>
                <div className={style.membersContainerText}>
                    <div className={style.membersContainerTextTitle}>
                        <h1>Приглашаем представителей торговли</h1>
                        <span/>
                    </div>
                    <ul className={style.membersContainerTextList}>
                        <li className={style.membersContainerTextListItem}>
                            <span className={style.membersContainerTextListItemDecor}/>
                            <p>Производителей</p>
                        </li>
                        <li className={style.membersContainerTextListItem}>
                            <span className={style.membersContainerTextListItemDecor}/>
                            <p>Дистрибьюторов</p>
                        </li>
                        <li className={style.membersContainerTextListItem}>
                            <span className={style.membersContainerTextListItemDecor}/>
                            <p>Представителей <br/>оптово-розничной торговли</p>
                        </li>
                    </ul>
                </div>
                <div className={style.membersContainerImage}>
                    <Image
                        src={'/images/membersTitle.png'}
                        width={783}
                        height={557}
                        alt={'Посетителям'}
                    />
                </div>
            </div>
        </section>
    );
};

export default MembersTitle;