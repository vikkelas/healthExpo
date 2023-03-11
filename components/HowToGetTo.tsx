import React from 'react';
import {Map, Placemark} from '@pbe/react-yandex-maps'
import style from '../styles/HowToGetTo.module.sass';
import Image from "next/image";
const HowToGetTo = () => {
    return (
        <section className={style.address}>
            <div className={style.addressTitle}>
                <h2>Место проведения</h2>
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
                            center: [55.820289, 37.639958],
                            zoom: 15,
                            controls:[]
                        }}>
                        <Placemark
                            geometry={[55.820289, 37.639958]}
                        />
                    </Map>
                </div>
                <div className={style.addressMainInfo}>
                    <h3>10-12 мая, 10.00-19.00</h3>
                    <div className={style.addressMainInfoLinks}>
                        <a
                            className={style.addressMainInfoLinksLink}
                            target={'_blank'}
                            rel="noreferrer"
                            href={'https://yandex.ru/maps/-/CCUOESWpGC'}
                        >
                            <div className={style.addressMainInfoLinksLinkIcon}>
                                <Image
                                    src={'/images/pin-50.png'}
                                    alt={'Выставка на ВДНХ'}
                                    width={35}
                                    height={35}
                                />
                            </div>
                            <span>Адрес: пр-т Мира, 119, Москва, 129223</span>
                        </a>
                        <a
                            className={style.addressMainInfoLinksLink}
                            href={'tel:79299967322'}
                        >
                            <div className={style.addressMainInfoLinksLinkIcon}>
                                <Image
                                    src={'/images/phone-6012.png'}
                                    alt={'Выставка на ВДНХ'}
                                    width={35}
                                    height={35}
                                />
                            </div>
                            <span>+7(929)996-73-22</span>
                        </a>
                        <a
                            className={style.addressMainInfoLinksLink}
                            target={'_blank'}
                            rel="noreferrer"
                            href={'mailto:mail@zdorovie-expo.ru'}
                        >
                            <div className={style.addressMainInfoLinksLinkIcon}>
                                <Image
                                    src={'/images/mail-5712.svg'}
                                    alt={'Выставка на ВДНХ'}
                                    width={35}
                                    height={35}
                                />
                            </div>
                            <span>mail@zdorovie-expo.ru</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToGetTo;