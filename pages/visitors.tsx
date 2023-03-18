import style from '../styles/Visitors.module.sass';
import Image from "next/image";

const Visitors = () => {
    return (
        <main className={style.visitors}>
            <section className={style.visitorsTitle}>
                <div className={style.visitorsTitleBackground}>
                    <Image
                        src={'/images/visitors.webp'}
                        alt={'Здоровое питание для посетителей'}
                        width={1200}
                        height={600}
                    />
                </div>
                <div className={style.visitorsTitleContainer}>
                    <div className={style.visitorsTitleContainerContent}>
                        <h1>Посетителям</h1>
                        <div className={style.visitorsTitleContainerContentMain}>
                            <div className={style.visitorsTitleContainerContentMainText}>
                                <h2>Чем будет полезна выставка</h2>
                                <p>На выставке примут участие фирмы-производители и официальные представители из разных стран. Будут представлены товары и услуги для здорового образа жизни:
                                </p>
                                <ul>
                                    <li>продукты для здорового питания, </li>
                                    <li>натуральные лекарственные средства, БАДы,</li>
                                    <li>гомеопатия,</li>
                                    <li>натуральная косметика, </li>
                                    <li>одежда из натуральных тканей,</li>
                                    <li>товары для здоровья детей,</li>
                                    <li>ортопедические изделия,</li>
                                    <li>медтехника для использования в домашних условиях,</li>
                                    <li>средства традиционной восточной медицины, </li>
                                    <li>техники различных массажей, </li>
                                    <li>технические средства для ухода за собой</li>
                                    <li>и прочая продукция для укрепления здоровья.</li>
                                </ul>
                            </div>
                            <div className={style.visitorsTitleContainerContentMainDecor}>
                                <div className={style.visitorsTitleContainerContentMainDecorImg}>
                                    <Image
                                        src={'/images/flags.webp'}
                                        alt={'Производители разных стран'}
                                        width={600}
                                        height={400}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.visitorsProgram}>
                <h2>А также в программе выставки: </h2>
                <div className={style.visitorsProgramContainer}>
                    <ul className={style.visitorsProgramContainerList}>
                        <li>презентации продукции фирмами–производителями, </li>
                        <li>встречи с авторами методик оздоровления, </li>
                        <li>демонстрация упражнений естественного оздоровления, </li>
                        <li>розыгрыши призов.</li>
                    </ul>
                    <button className={style.visitorsProgramContainerBtn}>Посетить</button>
                    <div className={style.visitorsProgramContainerDecor}>
                        <div className={style.visitorsProgramContainerDecorImage}>
                            <Image
                                src={'/images/visitors/1.webp'}
                                alt={'для посетителей'}
                                width={400}
                                height={300}
                            />
                        </div>
                        <div className={style.visitorsProgramContainerDecorImage}>
                            <Image
                                src={'/images/visitors/2.webp'}
                                alt={'для посетителей'}
                                width={400}
                                height={300}
                            />
                        </div>
                        <div className={style.visitorsProgramContainerDecorImage}>
                            <Image
                                src={'/images/visitors/3.webp'}
                                alt={'для посетителей'}
                                width={400}
                                height={300}
                            />
                        </div>
                        <div className={style.visitorsProgramContainerDecorImage}>
                            <Image
                                src={'/images/visitors/4.webp'}
                                alt={'для посетителей'}
                                width={400}
                                height={300}
                            />
                        </div>
                    </div>
                </div>

            </section>
            <section className={style.visitorsSale}>
                <div className={style.visitorsSaleContainer}>
                    <h2>Акция «Уход за здоровьем»</h2>
                    <div className={style.visitorsSaleContainerContent}>
                        <div className={style.visitorsSaleContainerContentImage}>
                            <Image
                                src={'/images/visitors/6.webp'}
                                alt={'Акция проверь здоровье'}
                                width={600}
                                height={700}
                            />
                        </div>
                        <div className={style.visitorsSaleContainerContentText}>
                            <p>В рамках выставки состоится акция «Уход за здоровьем», в ходе которой посетители смогут пройти бесплатную диагностику состояния организма, получить консультации по профилактике заболеваний, основам правильного питания, навыкам двигательной активности.
                            </p>
                            <button>Посетить</button>
                            <div className={style.visitorsSaleContainerContentTextIcon}>
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
            <section className={style.visitorsSpacer}>
                <div className={style.visitorsSpacerContainer}>
                    <h2>Выступления спикеров</h2>
                    <div className={style.visitorsSpacerContainerContent}>
                        <div className={style.visitorsSpacerContainerContentText}>
                            <h3>А также вы сможете посетить лекции:</h3>
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
                            <div className={style.visitorsSpacerContainerContentTextIcon}>
                                <Image
                                    src={'/images/visitors/iconSpeac.png'}
                                    alt={'Спикеры'}
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <button>Посетить</button>
                        </div>
                        <div className={style.visitorsSpacerContainerContentImage}>
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
        </main>
    );
};

export default Visitors;