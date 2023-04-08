import React from 'react';
import HowToGetTo from "@/components/HowToGetTo";
import Image from "next/image";
import styles from '@/styles/contacts.module.sass';

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <HowToGetTo title={'Контакты'}/>
            <div className={styles.contactsSchema}>
                <h2>Схема Экспоцентра</h2>
                <div className={styles.contactsSchemaItem}>
                    <Image
                        width={1200}
                        height={1200}
                        src={'/images/schema1.png'}
                        alt={'схема'}
                    />
                </div>
                <div className={styles.contactsSchemaItem}>
                    <Image
                        width={1200}
                        height={1200}
                        src={'/images/schema2.png'}
                        alt={'схема'}
                    />
                </div>
            </div>
        </section>
    );
};

export default Contacts;