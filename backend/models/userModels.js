import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    userId: String,
    name: String,
});

export default model('User', UserSchema);