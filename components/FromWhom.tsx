import Image from "next/image";
import data, {DataFile} from "../data/data";
import { v4 as uuidv4 } from 'uuid';
import style from '../styles/FromWhom.module.sass';

const FromWhom = () => {
    const dataFile:DataFile = data;
    return (
        <section className={style.fromWhom}>
            <div className={style.fromWhomContainer}>
                <div className={style.fromWhomContainerTitle}>
                    <h2>Для кого</h2>
                    <p>Она будет интересна как специалистам в области медицины, фармакологии, косметологии, так и посетителям, неравнодушным к своему здоровью и красоте.</p>
                </div>
                <ul className={style.fromWhomContainerList}>
                    {dataFile.fromWhom.map(item=>{
                        return (
                            <li
                                className={style.fromWhomContainerListItem}
                                key={uuidv4()}>
                                <div className={style.fromWhomContainerListItemIcon}>
                                    <Image
                                        width={125}
                                        height={125}
                                        src={item.imgUrl}
                                        alt={item.alt}
                                    />
                                </div>
                                <p>{item.title}</p>
                            </li>
                        )
                    })}
                </ul>
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