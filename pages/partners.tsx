import React from 'react';
import styles from '../styles/partners.module.sass';
import Image from "next/image";
import Head from "next/head";
const Partners = () => {
    return (
        <>
            <Head>
                <title>Партнеры</title>
                <meta name="description" content="Международная специализированная выставка-продажа" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.partners}>
                <ul className={styles.partnersList}>
                    <li className={styles.partnersListItem}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.partnersListItemLink}
                            href="https://expomap.ru/expo/city/moscow/">
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
                    <li className={styles.partnersListItem}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.partnersListItemLink}
                            href="https://kudamoscow.ru/">
                            <div className={styles.partnersListItemLinkContent}>
                                <Image
                                    src={'/images/partners/1.png'}
                                    alt={'Выставки Москвы'}
                                    fill
                                />
                            </div>
                            <p className={styles.partnersListItemLinkText}>Выставки в Москве</p>
                        </a>
                    </li>
                </ul>
            </main>
        </>

    );
};

export default Partners;