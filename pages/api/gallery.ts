import type { NextApiRequest, NextApiResponse } from 'next'
const fs  = require('fs');
const path = require('path');

interface ResponseData {
    namePhoto: string [];
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData | {error: string}>
    ) {
    try {
        const pathGallery = path.resolve(__dirname, '../../../../public/images/gallery')
        fs.readdir(pathGallery, (err: any, files: string[])=> {
            res.status(200).json({namePhoto: files})
        })
    } catch (err){
        res.status(500).send({error: 'проблема на стороне сервера'})
    }
}