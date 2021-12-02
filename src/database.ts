import { connect } from 'mongoose'

export async function startConnection() {
    const db = await connect('mongodb://localhost:27017/halcones',{
        useNewUrlParser: true,
        useFindAndModify: false 
    });
    console.log('Database is connected');
}
