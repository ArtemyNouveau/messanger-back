const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema(
    {
        text: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now()
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model('Message', messageSchema);
