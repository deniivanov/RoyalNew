const mongoose = require('mongoose');

const AreaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    description: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
    borough : {
        type: String,
        required: true,
    }
})

module.exports = mongoose.models.Area || mongoose.model('Area', AreaSchema);