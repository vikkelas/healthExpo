import React from 'react';
import style from "./MembersAdditionalServices.module.sass";
import Image from "next/image";
import {NextPage} from "next";
import {v4 as uuidv4} from 'uuid';
import {MembersInfo} from "@/data/data";

interface ComponentProps {
    info: MembersInfo
}

const MembersAdditionalServices:NextPage<ComponentProps> = ({info}) => {
    return (
        <section className={style.services}>
            <h2>{info.title}</h2>
            <div className={style.servicesContainer}>
                <ul className={style.servicesContainerList}>
                    {info.listItem.map(item=><li key={uuidv4()}>{item}</li>)}
                </ul>
                <div className={style.servicesContainerDecor}>
                    {info.imgUrl.map(item=>{
                        return (
                            <div
                                key={uuidv4()}
                                className={style.servicesContainerDecorImage}>
                                <Image
                                    src={`/images${item}`}
                                    alt={info.alt}
                                    width={400}
                                    height={300}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default MembersAdditionalServices;