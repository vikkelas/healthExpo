import Image from "next/image";
import style from '../styles/MainTitle.module.sass';
const MainTitle = () => {
    return (
        <article className={style.mainTitle}>
            <div className={style.mainTitleMain}>
                <div className={style.mainTitleMainImg}>
                    <Image
                        src='/images/iStock-1275820740.png'
                        placeholder="blur"
                        blurDataURL={'/images/iStock-1275820740.png'}
                        alt={'БАДы, выставка ВДНХ'}
                        width={1658}
                        height={884}/>
                </div>
                <div className={style.mainTitleMainInfo}>
                    <h2>8-10 июня 2023</h2>
                    <h1><span>Международная специализированная выставка-продажа</span>Здоровье EXPO</h1>
                    <span className={style.mainTitleMainInfoDecor}/>
                    <div className={style.mainTitleMainInfoLocation}>
                        <p>Москва</p>
                        <span/>
                        <p>Экспоцентр</p>
                    </div>
                </div>
            </div>
            <div className={style.mainTitleText}>
                <p>«Здоровье-EXPO» - место встречи представителей традиционной и нетрадиционной медицины, а также потребителей, которые активно следят за своим здоровьем.
                </p>
                <br/>
                <p>
                    Выставка ориентирована на освещение различных методов лечения, оздоровления организма и профилактики заболеваний.
                </p>
            </div>
        </article>
    );
};

export default MainTitle;