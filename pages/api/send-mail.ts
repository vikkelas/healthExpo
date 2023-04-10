import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer');

interface ResponseData {
    message: string
    ok: boolean
}
export default function handler(
    req:  NextApiRequest,
    res: NextApiResponse<ResponseData | {error: string}>
) {

    const objMessage = JSON.parse(req.body)
    const message = {
        from: 'ZdorovieEXPO <mail@zdorovie-expo.ru>',
        to: 'mail@zdorovie-expo.ru',
        subject: 'Заявка с сайта',
        html: `
        <body>
            <h2>Вам отправелнна заявка с сайта ЗдоровьеEXPO</h2>
            <br>
            <h3>Имя</h3>
            <p>${objMessage.name}</p> 
            <h3>Телефон</h3>
            <p>${objMessage.telephone}</p>        
            <h3>Почта</h3>
            <p>${objMessage.email}</p>      
            <h3>В роли</h3>
            <p>${objMessage.role==='1'?'Участника':'Посетителя'}</p>  
        </body>`,
    };

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