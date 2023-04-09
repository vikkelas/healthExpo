 import type { NextApiRequest, NextApiResponse } from 'next'
//
// interface ResponseData {
//
// }
// export default function handler(
//     req:  NextApiRequest,
//     res: NextApiResponse<ResponseData | {error: string}
// ) {
//
//     const message = {
//         from: req.body.email,
//         to: process.env.GMAIL_EMAIL_ADDRESS,
//         subject: req.body.subject,
//         text: req.body.message,
//         html: `<p>${req.body.message}</p>`,
//     };
//
//     let transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: process.env.GMAIL_EMAIL_ADDRESS,
//             pass: process.env.GMAIL_APP_PASSWORD,
//         },
//     });
//
//     if (req.method === 'POST'){
//
//     }
// }