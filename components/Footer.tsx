import Image from "next/image";
import Link from "next/link";
import style from '../styles/Footer.module.sass';
const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.footerContainerHeader}>
                    <Link href={'/'} className={style.footerContainerHeaderLogo}>
                        <Image
                            width={200}
                            height={60}
                            src={'/images/Zdorovie-EXPO 2.png'}
                            alt={'Здоровье EXPO'}/>
                    </Link>
                    <nav className={style.footerContainerHeaderMenu}>
                        <ul>
                            <li>
                                <Link href={'/'}>
                                    Главная
                                </Link>
                            </li>
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
                            <li>
                                <Link href={'/contacts'}>
                                    Наши партнеры
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={style.footerContainerHeaderSecLogo}>
                        <Image
                           width={200}
                           height={200}
                           alt={'проэкспо'}
                           src={'/images/proexpologo.jpg'}
                        />
                    </div>
                    <div className={style.footerContainerHeaderSocial}>
                        <Link
                            target="_blank"
                            className={style.footerContainerHeaderSocialLink}
                            href={'https://vk.com/festivalyarmarka'}>
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
                            href={'https://wa.me/79260501033'}>
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

                <div className={style.footerContainerFooter}>
                    <p>© 2023 Здоровье-EXPO 15–17 июня 2023</p>
                    <p>Выставочная компания ООО «ЮРБРУС» 2007-2023</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;