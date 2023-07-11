import React from 'react';
import styles from '../styles/partners.module.sass';
import Image from "next/image";
const Partners = () => {
    return (
        <section className={styles.partners}>
            <ul className={styles.partnersList}>
                <li className={styles.partnersListItem}>
                    <a
                        className={styles.partnersListItemLink}
                        href="https://expomap.ru/expo/city/moscow/">
                        <div className={styles.partnersListItemLinkContent}>
                            <Image
                                src={'/images/partners/1.png'}
                                alt={'Выставки Москвы'}
                                fill
                            />
                        </div>
                        <p className={styles.partnersListItemLinkText}>Выставки в Москве в 2023 - 2024 году</p>
                    </a>
                </li>
                <li className={styles.partnersListItem}>
                    <a
                        className={styles.partnersListItemLink}
                        href="https://kudamoscow.ru/">
                        <div className={styles.partnersListItemLinkContent}>
                            <Image
                                src={'/images/partners/2.png'}
                                alt={'Выставки Москвы'}
                                fill
                            />
                        </div>
                        <p className={styles.partnersListItemLinkText}>Куда сходить в Москве. Афиша Москвы</p>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Partners;