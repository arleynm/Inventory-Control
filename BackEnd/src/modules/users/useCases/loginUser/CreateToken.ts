import jwt, { JwtPayload } from 'jsonwebtoken';

const secretKey = 'seuSegredoSuperSecreto'; 

export function generateToken(payload: object): string {
    return jwt.sign(payload, secretKey, { expiresIn: '24h' }); 
}

export function verifyToken(token: string): JwtPayload | null {
    try {
        const decoded = jwt.verify(token, secretKey) as JwtPayload;
        return decoded;
    } catch (error) {
        return null;
    }
}