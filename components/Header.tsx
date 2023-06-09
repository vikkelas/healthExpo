import Image from "next/image";
import Link from "next/link";
import style from '../styles/header.module.sass'
import {useRouter} from "next/router";
import React, {useCallback, useEffect, useState} from "react";
import {motion} from 'framer-motion';
import Banner from "@/components/Banner/Banner";
import * as Scroll from 'react-scroll';

const Header = () => {
    const ScrollLink = Scroll.Link
    const [bannerStatus, setBannerStatus] = useState<boolean>(true)
    const [activePage, setActivePage] = useState<string>('')
    const router = useRouter();
    const changeActivePage = useCallback(()=>{
        setActivePage(router.pathname.slice(1))
    },[router])
    useEffect(()=>{
        changeActivePage()
    },[changeActivePage])
    return (
        <header id={'header'} className={style.header}>
            {bannerStatus&&<Banner setBanner={setBannerStatus}/>}
            <ScrollLink to="header" >
                <motion.div
                    initial={{scale: 1}}
                    animate={{scale: 1.1}}
                    transition={{duration: 1, repeatType: 'reverse', repeat: Infinity}}
                    className={style.headerArrowUp}>
                    <svg width="30" height="97" viewBox="0 0 30 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 0L0.566243 25L29.4338 25L15 0ZM17.5 96.5L17.5 22.5H12.5L12.5 96.5H17.5Z" fill="white"/>
                    </svg>
                </motion.div>
            </ScrollLink>

            <div className={style.headerContainer}>
                <Link
                    href={'/'}
                    className={style.headerContainerLogo}>
                    <Image
                        width={143}
                        height={72}
                        placeholder="blur"
                        blurDataURL={'/images/Zdorovie-EXPO 1.png'}
                        src='/images/Zdorovie-EXPO 1.png'
                        alt={'Здоровье EXPO выставка'}
                    />
                </Link>
                <nav className={style.headerContainerNav}>
                    <ul className={style.headerContainerNavList}>
                        <motion.li
                            initial={{color:'#093719'}}
                            animate={activePage===''?{color: '#5B8B27'}:{color:'#093719'}}
                            className={style.headerContainerNavListItem}>
                            <Link href={'/'}>Главная</Link>
                        </motion.li>
                        <motion.li
                            initial={{color:'#093719'}}
                            animate={activePage==='about-us'?{color: '#5B8B27'}:{color:'#093719'}}
                            className={style.headerContainerNavListItem}>
                            <Link href={'/about-us'}>О компании</Link>
                        </motion.li>
                        <motion.li
                            initial={{color:'#093719'}}
                            animate={activePage==='about-expo'?{color: '#5B8B27'}:{color:'#093719'}}
                            className={style.headerContainerNavListItem}>
                            <Link href={'/about-expo'}>Культурная программа</Link>
                        </motion.li>
                        <motion.li
                            initial={{color:'#093719'}}
                            animate={activePage==='visitors'?{color: '#5B8B27'}:{color:'#093719'}}
                            className={style.headerContainerNavListItem}>
                            <Link href={'/visitors'}>Посетителям</Link>
                        </motion.li>
                        <motion.li
                            initial={{color:'#093719'}}
                            animate={activePage==='members'?{color: '#5B8B27'}:{color:'#093719'}}
                            className={style.headerContainerNavListItem}>
                            <Link href={'/members'}>Участникам</Link>
                        </motion.li>
                        <motion.li
                            initial={{color:'#093719'}}
                            animate={activePage==='contacts'?{color: '#5B8B27'}:{color:'#093719'}}
                            className={style.headerContainerNavListItem}>
                            <Link href={'/contacts'}>Контакты</Link>
                        </motion.li>
                        <motion.li
                            initial={{color:'#093719'}}
                            animate={activePage==='partners'?{color: '#5B8B27'}:{color:'#093719'}}
                            className={style.headerContainerNavListItem}>
                            <Link href={'/partners'}>Наши партнеры</Link>
                        </motion.li>
                    </ul>
                </nav>
                <Link href={'/'} className={style.headerContainerBlackLogo}>
                    <Image
                        width={1200}
                        height={1200}
                        src={'/images/logoBlackPro.png'}
                        alt={'logo23'}
                    />
                </Link>
                <div className={style.headerContainerIcons}>
                    <Link
                        className={style.headerContainerIconsItem}
                        href="/contacts">
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.0265 20.9929C20.0723 21.0873 21.0037 20.2223 20.9995 19.1864V16.4767C21.0105 16.0337 20.858 15.6021 20.5709 15.264C19.7615 14.3106 16.9855 13.7008 15.8851 13.935C15.0274 14.1176 14.4272 14.9788 13.8405 15.5644C12.8062 14.9774 11.8531 14.2682 11.0001 13.4556M8.41019 10.1448C8.9969 9.55929 9.85987 8.96036 10.0428 8.10428C10.2771 7.00777 9.66813 4.24949 8.72131 3.43684C8.38828 3.151 7.96247 2.99577 7.52325 3.00009H4.80811C3.77358 3.00106 2.91287 3.92895 3.00706 4.96919C3.00109 12.5476 8.00134 18.7679 15 20.5073" stroke="#5B8B27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                    <a
                        className={style.headerContainerIconsItem}
                        href="mailto:zdorovie-expo@mail.ru">
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.29289 5.29289C3.47386 5.11193 3.72386 5 4 5H20C20.2761 5 20.5261 5.11193 20.7071 5.29289M3.29289 5.29289C3.11193 5.47386 3 5.72386 3 6V18C3 18.5523 3.44772 19 4 19H14M3.29289 5.29289L5 7.00006M20.7071 5.29289C20.8881 5.47386 21 5.72386 21 6V18C21 18.5523 20.5523 19 20 19H18M20.7071 5.29289L13.4142 12.5857C12.6331 13.3668 11.3668 13.3668 10.5857 12.5857L8 10" stroke="#5B8B27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;