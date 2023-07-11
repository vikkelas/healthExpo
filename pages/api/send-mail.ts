import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from "nextjs-cors";
import {ModalType} from "@/store/reducer/modalSlice";
const nodemailer = require('nodemailer');

interface ResponseData {
    message: string
    ok: boolean
}
export default async function handler(
    req:  NextApiRequest,
    res: NextApiResponse<ResponseData | {error: string}>
) {
    const {type} = req.query;
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    const objMessage = JSON.parse(req.body)
    const messagePart = `
        <body>
            <h2>Вам отправелнна заявка с сайта ЗдоровьеEXPO от участника</h2>
            <br>
            <h3>Организация</h3>
            <p>${objMessage.company_name}</p> 
            <h3>Вид деятельности</h3>
            <p>${objMessage.kind_of_activity}</p>        
            <h3>Площадь</h3>
            <p>${objMessage.place}</p>
            <h3>Почта</h3>
            <p>${objMessage.email}</p>
            <h3>Контактное лицо</h3>
            <p>${objMessage.contact_name}</p>
            <h3>Телефон</h3>
            <p>${objMessage.tel}</p>      
            <h3>Социальная сеть или сайт</h3>
            <p>${objMessage.social}</p>    
            <p>статус пользователя - участник</p>
        </body>
    `;
    const messageDef = `
        <body>
            <h2>Вам отправелнна заявка с сайта ЗдоровьеEXPO для получения приглашения</h2>
            <br>
            <h3>Имя</h3>
            <p>${objMessage.name}</p> 
            <h3>Телефон</h3>
            <p>${objMessage.telephone}</p>        
            <h3>Почта</h3>
            <p>${objMessage.email}</p>      
            <p>статус пользователя - посетитель</p>
        </body>`

    const message = {
        from: 'ZdorovieEXPO <mail@zdorovie-expo.ru>',
        to: 'zdorovie-expo@mail.ru',
        subject: 'Заявка с сайта',
        text: "Ваша заявка с сайта",
        html: type===ModalType.DEFAULT?messageDef:messagePart,
    };
    // zdorovie-expo@mail.ru
    const transporter = nodemailer.createTransport({
        host: "smtp.timeweb.ru",
        port: 25,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        },
    });

    if (req.method === 'POST'){
        transporter.sendMail(message,(err: any, info: { accepted: any; })=>{
            if (err) {
                console.log(err)
                res.status(404).json({
                    message: 'ошибка на сервере',
                    ok: false
                });
            } else {
                res.status(250).json({
                    message: `Ваша заявка принята`,
                    ok: true
                });
            }
        })
    }
}