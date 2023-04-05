import style from '../styles/Visitors.module.sass';
import Image from "next/image";
import {v4 as uuidv4} from "uuid";
import data from "@/data/data";
import MembersAdditionalServices from "@/components/MembersAdditionalServices/MembersAdditionalServices";
import {motion} from "framer-motion";

const Visitors = () => {
    const {aboutExpo} = data
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
                                <h2>Что вы увидите на выставке </h2>
                                <p>На выставке примут участие фирмы-производители и официальные представители из разных стран. Будут представлены товары и услуги для здорового образа жизни:
                                </p>
                                <ul>
                                    <li>Натуральные лекарственные препараты, гомеопатия, БАДы.</li>
                                    <li>Технологии сохранения красоты и здоровья без лекарств.</li>
                                    <li>Системы здорового питания, особые продукты и рецепты.</li>
                                    <li>Товары и  услуги для здорового образа жизни.</li>
                                    <li>Оздоровительные центры и санаторно-курортное лечение.</li>
                                    <li>Натуральная косметика и средства гигиены.</li>
                                    <li>Восточная медицина, различные техники массажа.</li>
                                    <li>Изделия и одежда из натуральных материалов.</li>
                                    <li>Центры эстетической медицины и спа.</li>
                                    <li>Медицинские приборы для использования дома, ортопедия.</li>
                                    <li>Органические и био-продукты питания.</li>
                                    <li>Товары для здоровья детей.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.visitorsThem}>
                <h2>Тематические разделы выставки:</h2>
                <div className={style.visitorsThemList}>
                    {aboutExpo.map(item=>{
                        return(
                            <div
                                key={uuidv4()}
                                className={style.visitorsThemListItem}>
                                <div className={style.visitorsThemListItemImg}>
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
            </section>
            <MembersAdditionalServices info={data.membersInfo[0]}/>
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
                            <h3>В программе мероприятий выставки вы найдёте лекции, мастер-классы и презентации ведущих специалистов в области медицины</h3>
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
                            <motion.button
                                initial={{scale: 1}}
                                whileHover={{scale: 1.04}}
                                whileTap={{scale: 0.9}}
                            >Получить приглашение</motion.button>
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