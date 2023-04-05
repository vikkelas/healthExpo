import React, {useState} from 'react';
import styles from './MembersSchema.module.sass';
import Image from "next/image";
import {v4 as uuidv4} from 'uuid';
import Modal from "@/components/Modal/Modal";
const MembersSchema = () => {
    const [modalStatus, setModalStatus] = useState(false);
    const [activePhoto, setActivePhoto] = useState('');
    const arrayPhoto = ['1d','2d','3d','4d','5d']

    return (
        <section className={styles.schema}>
            <div className={styles.schemaContainer}>
                <h1>Схема выставочных павильонов.</h1>
                <p>
                    Стандартный стенд имеет размеры от 3 кв.м.<br/>
                    Рабочие места - от 1 кв.м.
                </p>
                <div className={styles.schemaContainerList}>
                    {arrayPhoto.map(item=>{
                        return(
                            <div
                                onClick={()=>{
                                    setModalStatus(true)
                                    setActivePhoto(item)
                                }}
                                className={styles.schemaContainerListItem}
                                key={uuidv4()}>
                                <Image
                                    width={260}
                                    height={260}
                                    alt={'схема'}
                                    src={`/images/members/${item}.jpg`}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <Modal modalStatus={modalStatus} setModalStatus={setModalStatus}>
                <div className={styles.bigPhoto}>
                    <div
                        onClick={()=> {
                            setModalStatus(false)
                            setTimeout(()=>setActivePhoto(''),500)
                        }}
                        className={styles.bigPhotoClose}>
                        <Image
                            src={'/images/close.png'}
                            width={40}
                            height={40}
                            alt={'close'}
                        />
                    </div>
                    {activePhoto&&<div className={styles.bigPhotoImg}>
                        <Image
                            alt={'schema'}
                            width={500}
                            height={400}
                            src={`/images/members/${activePhoto}.jpg`}
                        />
                    </div>}
                </div>
            </Modal>
        </section>
    );
};

export default MembersSchema;