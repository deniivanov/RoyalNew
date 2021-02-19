<<<<<<< HEAD
import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
=======
import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
const client = new MongoClient(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('MCT');
  console.log(`Console log ${res}`)
  return next();
}
const middleware = nextConnect();
middleware.use(database);
export default middleware;
>>>>>>> a7bccc5a0be071fd27bd0595019136bd5aeb7be6
