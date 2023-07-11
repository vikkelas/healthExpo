import MembersTitle from "@/components/MembersTitle/MembersTitle";
import MembersSpeak from "@/components/MembersSpeak/MembersSpeak";
import MembersServices from "@/components/MembersServices/MembersServices";
import MembersSchema from "@/components/MembersSchema/MembersSchema";
import MembersAdditionalServices from "@/components/MembersAdditionalServices/MembersAdditionalServices";
import data from "@/data/data";
import Head from "next/head";
import React from "react";
const Members = () => {
    return (
        <>
            <Head>
                <title>Партнеры</title>
                <meta name="description" content="Международная специализированная выставка-продажа" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <MembersTitle/>
                <MembersSpeak/>
                <MembersServices/>
                <MembersSchema/>
                <MembersAdditionalServices info={data.membersInfo[1]}/>
            </main>
        </>

    );
};
export default Members;