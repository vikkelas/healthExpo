import React, {useState} from 'react';
import style from '../styles/ThematicSection.module.sass'
import data from '../data/data';
import Image from "next/image";
import {v4 as uuidv4} from 'uuid';
import {motion} from "framer-motion";

const ThematicSection = () => {
    const [activeBox, setActiveBox] = useState<number | null>(null);
    const openInfo = (id: number): void => {
        if(id===activeBox){
            setActiveBox(null)
        } else {
            setActiveBox(id)
        }
    }
    const variant = {
        visible: {
            opacity: 1,
            scale: 1.1
        },
        hidden: {
            opacity: 0,
            scale: 1
        }
    }
    const close = (e: { target: any; })=>{
        const {target} = e
        if (target.dataset.name==='close'){
            setActiveBox(null)
        }
    }
    return (
        <section
            onClick={close}
            data-name={'close'}
            className={style.thematics}>
            <h2  data-name={'close'} className={style.thematicsTitle}>Тематические направления выставки</h2>
            <ul  data-name={'close'} className={style.thematicsList}>
                {data.thematicSection.map(item=>{
                    return (
                        <li
                            onClick={()=>openInfo(item.id)}
                            key={uuidv4()}
                            id={item.id.toString()}
                            className={style.thematicsListItem}
                        >
                            <span className={style.thematicsListItemDecor}/>
                            <Image
                                src={`/images/${item.imgUrl}`}
                                placeholder="blur"
                                blurDataURL={`/images/${item.imgUrl}`}
                                alt={'Тема'}
                                width={465}
                                height={465}
                            />
                            <p className={style.thematicsListItemTitle}>{item.title}</p>
                            <motion.div
                                variants={variant}
                                initial={'hidden'}
                                animate={item.id===activeBox?'visible':'hidden'}
                                className={style.thematicsListItemText}>
                                {item.text}
                            </motion.div>
                        </li>
                    )
                })}
            </ul>
            <div className={style.thematicsMed}>
                <Image
                    width={752}
                    height={497}
                    alt={'мёд'}
                    src={'/images/med.png'}
                />
            </div>
        </section>
    );
};

export default ThematicSection;