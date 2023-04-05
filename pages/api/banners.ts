import type { NextApiRequest, NextApiResponse } from 'next'
const fs  = require('fs');
const path = require('path');

interface ResponseData {
    nameBanners: string [];
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData | {error: string}>
) {
    try {
        const pathGallery = path.resolve(__dirname, '../../../../public/images/pastEvent')
        fs.readdir(pathGallery, (err: any, files: string[])=> {
            res.status(200).json({nameBanners: files})
        })
    } catch (err){
        res.status(500).send({error: 'проблема на стороне сервера'})
    }
}