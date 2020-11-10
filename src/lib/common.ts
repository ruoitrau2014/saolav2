import * as crypto from 'crypto'
import * as dotenv from 'dotenv'
dotenv.config()

export default function aes(string:string):string{
    const algorithm = 'aes-128-cbc';
    const key = process.env.AESKEY || '1234567890123456';
    const iv = process.env.AESIV || '1234567890123456'; 
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(string, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted
}