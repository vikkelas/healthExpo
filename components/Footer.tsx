import Image from "next/image";
import Link from "next/link";
import style from '../styles/Footer.module.sass';
const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.footerContainerHeader}>
                    <div className={style.footerContainerHeaderLogo}>
                        <Image
                            width={200}
                            height={60}
                            src={'/images/Zdorovie-EXPO 1.png'}
                            alt={'Здоровье EXPO'}/>
                    </div>
                    <nav className={style.footerContainerHeaderMenu}>
                        <ul>
                            <li>
                                <Link href={'/about-us'}>
                                    О компании
                                </Link>
                            </li>
                            <li>
                                <Link href={'/about-expo'}>
                                    Культурная программа
                                </Link>
                            </li>
                            <li>
                                <Link href={'/visitors'}>
                                    Посетителям
                                </Link>
                            </li>
                            <li>
                                <Link href={'/members'}>
                                    Участникам
                                </Link>
                            </li>
                            <li>
                                <Link href={'/contacts'}>
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={style.footerContainerHeaderSocial}>
                        <Link
                            target="_blank"
                            className={style.footerContainerHeaderSocialLink}
                            href={'https://vk.ru'}>
                            <div className={style.footerContainerHeaderSocialLinkIcon}>
                                <Image
                                    src={'/images/vk.png'}
                                    alt={'Вконтакте'}
                                    width={96}
                                    height={96}
                                />
                            </div>
                            <span>ВКонтакте</span>
                        </Link>
                        <Link
                            target="_blank"
                            className={style.footerContainerHeaderSocialLink}
                            href={'https://wa.me/'}>
                            <div className={style.footerContainerHeaderSocialLinkIcon}>
                                <Image
                                    src={'/images/whatsapp.png'}
                                    alt={'whatsapp'}
                                    width={96}
                                    height={96}
                                />
                            </div>
                            <span>WhatsApp</span>
                        </Link>
                    </div>
                </div>
                <p className={style.footerContainerMain}>
                    На Здоровье-EXPO будет проводиться фото и видео съёмка для публикации материалов на сайте и в социальных сетях выставки. Посещая мероприятие, Вы автоматически даёте свое согласие на произведение фото и видеосъемки организаторами выставки при ее проведении, обработку полученных материалов, а также публикацию таких фото и видеоматериалов в указанных целях
                </p>
                <div className={style.footerContainerFooter}>
                    <p>© 2023 Здоровье-EXPO 10–18 мая 2023</p>
                    <p>Выставочная компания ООО «ЮРБРУС» 2007-2023</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;