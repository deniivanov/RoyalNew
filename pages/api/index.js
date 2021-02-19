import dbConnect from '../../utils/connection';
import Area from '../../models/areas';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const notes = await Area.findOne({title: 'West Ham'});

                res.status(200).json({ success: true, data: notes })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const note = await Area.create(req.body);

                res.status(201).json({ success: true, data: note })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}