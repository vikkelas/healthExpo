import React from 'react';
import style from "./SaleHealth.module.sass";
import Image from "next/image";

const SaleHealth = () => {
    return (
        <section className={style.sale}>
            <div className={style.saleContainer}>
                <h2>Акция «Уход за здоровьем»</h2>
                <div className={style.saleContainerContent}>
                    <div className={style.saleContainerContentImage}>
                        <Image
                            src={'/images/visitors/6.webp'}
                            alt={'Акция проверь здоровье'}
                            width={600}
                            height={700}
                        />
                    </div>
                    <div className={style.saleContainerContentText}>
                        <p>В рамках выставки состоится акция «Уход за здоровьем», в ходе которой посетители смогут пройти бесплатную диагностику состояния организма, получить консультации по профилактике заболеваний, основам правильного питания, навыкам двигательной активности.
                        </p>
                        <div className={style.saleContainerContentTextIcon}>
                            <Image
                                src={'/images/visitors/listMed.png'}
                                alt={'список'}
                                width={150}
                                height={150}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SaleHealth;