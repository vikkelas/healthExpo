import React from 'react';
import HowToGetTo from "@/components/HowToGetTo";
import styles from '@/styles/contacts.module.sass';
import Head from "next/head";

const Contacts = () => {
    return (
        <>
            <Head>
                <title>Контакты</title>
                <meta name="description" content="Международная специализированная выставка-продажа" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.contacts}>
                <HowToGetTo title={'Контакты'}/>
                {/*<div className={styles.contactsSchema}>*/}
                {/*    <h2>Схема проезда</h2>*/}
                {/*    <div className={styles.contactsSchemaItem}>*/}
                {/*        <Image*/}
                {/*            width={1200}*/}
                {/*            height={1200}*/}
                {/*            src={'/images/shema-danil5.png'}*/}
                {/*            alt={'схема'}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <span>Схема зала</span>*/}
                {/*    <div className={styles.contactsSchemaItem}>*/}
                {/*        <Image*/}
                {/*            width={1200}*/}
                {/*            height={1200}*/}
                {/*            src={'/images/schema_danil332.webp'}*/}
                {/*            alt={'схема'}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        </>

    );
};

export default Contacts;