import React from 'react';
import HowToGetTo from "@/components/HowToGetTo";
import Image from "next/image";
import styles from '@/styles/contacts.module.sass';

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <HowToGetTo title={'Контакты'}/>
            <div className={styles.contactsSchema}>
                <h2>Схема проезда</h2>
                <div className={styles.contactsSchemaItem}>
                    <Image
                        width={1200}
                        height={1200}
                        src={'/images/shema-danil5.png'}
                        alt={'схема'}
                    />
                </div>
                {/*<span>Схема зала</span>*/}
                {/*<div className={styles.contactsSchemaItem}>*/}
                {/*    <Image*/}
                {/*        width={1200}*/}
                {/*        height={1200}*/}
                {/*        src={'/images/schema_danil332.webp'}*/}
                {/*        alt={'схема'}*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default Contacts;