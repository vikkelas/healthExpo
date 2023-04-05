import style from '../styles/aboutExpo.module.sass'
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";
const AboutExpo = () => {

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
                    <h1>Культурная программа</h1>
                    <div className={style.mainTitleContentBox}>
                        <span>
                            В программе мероприятий выставки вы найдёте лекции, мастер-классы и презентации ведущих специалистов в области медицины
                        </span>
                        <ul>
                            <li>о сохранении здоровья</li>
                            <li>правильном питании</li>
                            <li>фитотерапии</li>
                            <li>рефлексотерапии</li>
                            <li>гирудотерапии</li>
                            <li>различных видах массажей</li>
                            <li>инновационных способах лечения</li>
                            <li>нутрициологии</li>
                            <li>диетологии</li>
                            <li>а также выступления популярных фитнес-тренеров и других спикеров, экспертов ЗОЖ</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={style.mainSale}>
                <div className={style.mainSaleContainer}>
                    <h2>Акция «Уход за здоровьем»</h2>
                    <div className={style.mainSaleContainerContent}>
                        <div className={style.mainSaleContainerContentImage}>
                            <Image
                                src={'/images/visitors/6.webp'}
                                alt={'Акция проверь здоровье'}
                                width={600}
                                height={700}
                            />
                        </div>
                        <div className={style.mainSaleContainerContentText}>
                            <p>В рамках выставки состоится акция «Уход за здоровьем», в ходе которой посетители смогут пройти бесплатную диагностику состояния организма, получить консультации по профилактике заболеваний, основам правильного питания, навыкам двигательной активности.
                            </p>
                            <motion.button
                                initial={{scale: 1}}
                                whileHover={{scale: 1.04}}
                                whileTap={{scale: 0.9}}
                            >
                                <Link href={'/visitors'}>
                                    Посетить
                                </Link>
                            </motion.button>
                            <div className={style.mainSaleContainerContentTextIcon}>
                                <Image
                                    src={'/images/visitors/listMed.png'}
                                    alt={'список'}
                                    width={150}
                                    height={150}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutExpo;