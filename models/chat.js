const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            default: null
        },
        messages: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Message',
            }
        ],
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ]
    },
    {timestamps: true}
);

module.exports = mongoose.model('Chat', chatSchema);
