import style from '../styles/aboutExpo.module.sass'
import Image from "next/image";
import {motion} from "framer-motion";
import {changeModal} from "@/store/reducer/modalSlice";
import {useDispatch} from "react-redux";
import Speackers from "@/components/Speakers/Speackers";
import SaleHealth from "@/components/SaleHealth/SaleHealth";
import MembersAdditionalServices from "@/components/MembersAdditionalServices/MembersAdditionalServices";
import data from "@/data/data";
const AboutExpo = () => {

    const dispatch = useDispatch()
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
            <MembersAdditionalServices info={data.membersInfo[0]}/>
            <Speackers/>
        </main>
    );
};

export default AboutExpo;