import { MongoClient } from 'mongodb';
// /api/new-meetup

async function Handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://karmen:amorame987@cluster0.gebck.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db()

        const meetupsCollaction = db.collection('meetups');
        const  result = await meetupsCollaction.insertOne(data)

        client.close()
        res.status(201).json({message: 'meetup inserted!'})
    }
}

export default Handler;