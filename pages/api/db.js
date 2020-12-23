import nextConnect from 'next-connect';
import middleware from '../../utils/connection';
const handler = nextConnect();
handler.use(middleware);
handler.get(async (req, res) => {
    let doc = await req.db.collection('companies').find()
    console.log(doc),
    res.json(doc)
});
export default handler;