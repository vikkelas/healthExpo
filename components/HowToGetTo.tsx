import React from 'react';
import {Map, Placemark} from '@pbe/react-yandex-maps'
import style from '../styles/HowToGetTo.module.sass';
import Image from "next/image";
const HowToGetTo:React.FC<{title: string}> = ({title}) => {
    return (
        <section className={style.address}>
            <div className={style.addressTitle}>
                <h2>{title}</h2>
                <span/>
            </div>
            <div className={style.addressMain}>
                <div className={style.addressMainMap}>
                    <Map
                        className={style.addressMainMapYmap}
                        instanceRef={ref=>{
                            ref&&ref.behaviors.disable('scrollZoom')
                        }}
                        state={{
                            center: [55.710426, 37.632412],
                            zoom: 17,
                            controls:[]
                        }}>
                        <Placemark
                            geometry={[55.710426, 37.632412]}
                        />
                    </Map>
                </div>
                <div className={style.addressMainInfo}>
                    <h3>28-30 сентября</h3>
                    <div className={style.addressMainInfoLinks}>
                        <a
                            className={style.addressMainInfoLinksLink}
                            target={'_blank'}
                            rel="noreferrer"
                            href={'https://yandex.ru/maps/-/CHa1Mzb'}
                        >
                            <div className={style.addressMainInfoLinksLinkIcon}>
                                <Image
                                    src={'/images/pin-50.png'}
                                    alt={'Выставка на ВДНХ'}
                                    width={35}
                                    height={35}
                                />
                            </div>
                            <span>Адрес: Дубининская ул., 71, Москва</span>
                        </a>
                        <a
                            className={style.addressMainInfoLinksLink}
                            href={'tel:+79263059590'}
                        >
                            <div className={style.addressMainInfoLinksLinkIcon}>
                                <Image
                                    src={'/images/phone-6012.png'}
                                    alt={'Выставка'}
                                    width={35}
                                    height={35}
                                />
                            </div>
                            <span>+7 (926) 305-95-90</span>
                        </a>
                        <a
                            className={style.addressMainInfoLinksLink}
                            href={'tel:+79260501033'}
                        >
                            <div className={style.addressMainInfoLinksLinkIcon}>
                                <Image
                                    src={'/images/phone-6012.png'}
                                    alt={'Выставка'}
                                    width={35}
                                    height={35}
                                />
                            </div>
                            <span>+7 (926) 050-10-33</span>
                        </a>
                        <a
                            className={style.addressMainInfoLinksLink}
                            target={'_blank'}
                            rel="noreferrer"
                            href={'mailto:mzdorovie-expo@mail.ru'}
                        >
                            <div className={style.addressMainInfoLinksLinkIcon}>
                                <Image
                                    src={'/images/mail-5712.svg'}
                                    alt={'Выставка'}
                                    width={35}
                                    height={35}
                                />
                            </div>
                            <span>zdorovie-expo@mail.ru</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToGetTo;