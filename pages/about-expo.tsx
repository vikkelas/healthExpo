import style from '../styles/aboutExpo.module.sass'
import Image from "next/image";
import data from "@/data/data";
import {v4 as uuidv4} from 'uuid';

const AboutExpo = () => {
    const {aboutExpo} = data
    return (
        <main className={style.main}>
            <section className={style.mainTitle}>
                <div className={style.mainTitleBackground}>
                    <Image
                        src={'/images/about-expo.webp'}
                        alt={'О выставке'}
                        width={1600}
                        height={600}
                    />
                </div>
                <div className={style.mainTitleContent}>
                    <h1>О выставке</h1>
                    <div className={style.mainTitleContentBox}>
                        <span>
                            Выставка «Здоровье-EXPO» собирает в одном месте лучших представителей традиционной и нетрадиционной медицины.
                        </span>
                        <h2>Здесь вы узнаете о:</h2>
                        <ul>
                            <li>различных методах лечения,</li>
                            <li>профилактике заболеваний</li>
                            <li>классических и необычных техниках массажей,</li>
                            <li>здоровом образе жизни,</li>
                            <li>правильном питании,</li>
                            <li>рефлексо- и фитотерапии.</li>
                        </ul>
                    </div>
                </div>

            </section>
            <section className={style.mainThem}>
                <h2>Тематические разделы выставки:</h2>
                <div className={style.mainThemList}>
                    {aboutExpo.map(item=>{
                        return(
                            <div
                                key={uuidv4()}
                                className={style.mainThemListItem}>
                                <div className={style.mainThemListItemImg}>
                                    <Image
                                        src={`/images/icons-about-expo/${item.iconName}`}
                                        alt={'icon'}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <span>{item.title}</span>
                            </div>
                        )
                    })}
                </div>
                <button className={style.mainThemBtn}>Посетить выставку</button>
            </section>
        </main>
    );
};

export default AboutExpo;