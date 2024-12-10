import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
// import userModels from '../models/userModels.js';


export const authController = async (req, res) => {
    const { token } = req.body;
    const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const client = new OAuth2Client(CLIENT_ID);

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });

        const payload = ticket.getPayload();
        console.log("Google Payload:", payload);

        // Generate a JWT for your app
        const appToken = jwt.sign(
            { userId: payload.sub, email: payload.email },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.status(200).send({ message: 'Authentication successful', token: appToken });
    } catch (error) {
        console.error("Error verifying token:", error);
        res.status(401).send({ message: 'Invalid token' });
    }
};