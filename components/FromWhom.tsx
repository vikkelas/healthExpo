import Image from "next/image";
import style from '../styles/FromWhom.module.sass';

const FromWhom = () => {
    return (
        <section className={style.fromWhom}>
            <div className={style.fromWhomContainer}>
                <div className={style.fromWhomContainerTitle}>
                    <h2>Выставка «Здоровье-EXPO» собирает в одном месте лучших представителей традиционной и нетрадиционной медицины.</h2>
                </div>
                <div className={style.fromWhomContainerInfo}>
                    <h3>Здесь вы узнаете:</h3>
                    <ul className={style.fromWhomContainerInfoList}>
                        <li>о различных методах лечения</li>
                        <li>профилактике заболеваний</li>
                        <li>классических и необычных техниках массажей</li>
                        <li>здоровом образе жизни</li>
                        <li>правильном питании</li>
                        <li>рефлексо- и фитотерапии</li>
                    </ul>
                </div>
            </div>
            <div className={style.fromWhomImgDecor}>
                <Image
                    src={'/images/LeavesLong.png'}
                    alt={'Международная выставка Здоровье EXPO'}
                    width={750}
                    height={430}
                    placeholder="blur"
                    blurDataURL={'/images/LeavesLong.png'}
                />
            </div>
            <div className={style.fromWhomBoxDecor}>
                <div className={style.fromWhomBoxDecorContainer}>
                    <div className={style.fromWhomBoxDecorContainerLeaves}>
                        <Image
                            src={'/images/LeavesShort.png'}
                            alt={'Выставка для здоровья'}
                            width={544}
                            height={500}
                            placeholder="blur"
                            blurDataURL={'/images/LeavesShort.png'}
                        />
                    </div>
                    <div className={style.fromWhomBoxDecorContainerTablet}>
                        <Image
                            src={'/images/tablet.png'}
                            alt={'На выставке представлены БАДы от производителей'}
                            width={518}
                            height={520}
                            placeholder="blur"
                            blurDataURL={'/images/tablet.png'}
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FromWhom;