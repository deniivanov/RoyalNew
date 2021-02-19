import dbConnect from '../../utils/connection';
import Area from '../../models/areas';

dbConnect();

export default async (req, res) => {
    const {
        query: { },
        method
    } = req;
console.log(req);
    switch (method) {
        case 'GET':
            try {
                const area = await Area.findById(id);

                if (!area) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: area });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const area = await Areas.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!area) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: area });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedArea = await Areas.deleteOne({ _id: id });

                if (!deletedArea) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}