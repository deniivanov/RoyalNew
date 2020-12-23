import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
const client = new MongoClient('mongodb+srv://passport:ojVfgx7zbVZpa6T5@cluster0-hwpmi.mongodb.net/cleaning', {
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