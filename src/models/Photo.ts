import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    prioridad: String,
    imagePath: String
});

export interface IPhoto extends Document {
    prioridad: string;
    imagePath: string;
}

export default model<IPhoto>('Photo', schema);