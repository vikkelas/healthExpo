import React from 'react';
import style from "./Banner.module.sass";
import Image from "next/image";
import {motion} from "framer-motion";
import {NextPage} from "next";

interface PropsBanner {
    setBanner:  React.Dispatch<React.SetStateAction<boolean>>;
}

const Banner:NextPage<PropsBanner> = ({setBanner}) => {
    return (
        <motion.article
            initial={{backgroundColor: 'rgba(202, 241, 165, 0.49)'}}
            animate={{backgroundColor: 'rgba(143,236,57,0.49)'}}
            transition={{repeatType: 'reverse', repeat: Infinity, duration: 1}}
            className={style.formWindow}>
            <motion.div
                onClick={()=>setBanner(false)}
                initial={{rotateZ: 0}}
                whileHover={{rotateZ: 90}}
                className={style.formWindowClose}>
                <Image
                    alt={'close'}
                    src={'/images/close.png'}
                    width={20}
                    height={20}
                />
            </motion.div>
            <h2>Принять участие</h2>
            <div className={style.formWindowBox}>
                <a
                    href={'https://api.whatsapp.com/'}
                    className={style.formWindowBoxSocial}>
                    <div className={style.formWindowBoxSocialIcon}>
                        <Image
                            alt={'whatsapp'}
                            src={'/images/whatsapp.png'}
                            width={34}
                            height={34}
                        />
                    </div>
                    <span>WhatsApp</span>
                </a>
                <a
                    href={'https://vk.ru/'}
                    className={style.formWindowBoxSocial}>
                    <div className={style.formWindowBoxSocialIcon}>
                        <Image
                            alt={'в контакте'}
                            src={'/images/vk.png'}
                            width={34}
                            height={34}
                        />
                    </div>
                    <span>Вконтакте</span>
                </a>
            </div>
            <button>Регистрация</button>
        </motion.article>
    );
};

export default Banner;